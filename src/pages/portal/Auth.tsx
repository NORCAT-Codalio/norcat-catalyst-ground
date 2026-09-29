import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { z } from 'zod';
import norcatLogoBlack from '@/assets/logos/norcat-black.png';

type View = 'sign-in' | 'invite' | 'forgot';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = loginSchema.extend({
  fullName: z.string().min(2, 'Please enter your full name'),
  inviteCode: z.string().min(1, 'Invite code is required'),
});

export default function Auth() {
  usePageTitle('Portal Sign In');
  const [searchParams] = useSearchParams();
  const inviteCode = searchParams.get('code') || '';
  const [view, setView] = useState<View>(searchParams.get('forgot') === 'true' ? 'forgot' : inviteCode ? 'invite' : 'sign-in');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', fullName: '', inviteCode });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { signIn, signUp, requestPasswordReset, user, isApproved, isLoading, isMentor } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && user) {
      if (!isApproved) navigate('/portal/pending');
      else navigate(isMentor ? '/mentor' : '/portal');
    }
  }, [user, isApproved, isLoading, isMentor, navigate]);

  const setActiveView = (nextView: View) => {
    setView(nextView);
    setErrors({});
    setResetSent(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const collectErrors = (validation: z.SafeParseReturnType<unknown, unknown>) => {
    if (validation.success) return true;
    const fieldErrors: Record<string, string> = {};
    validation.error.errors.forEach((error) => {
      const field = error.path[0];
      if (typeof field === 'string') fieldErrors[field] = error.message;
    });
    setErrors(fieldErrors);
    return false;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});

    if (view === 'forgot') {
      const emailValidation = z.string().email('Please enter a valid email address').safeParse(formData.email);
      if (!emailValidation.success) {
        setErrors({ email: emailValidation.error.errors[0]?.message || 'Please enter a valid email address' });
        return;
      }
      setIsSubmitting(true);
      const { error } = await requestPasswordReset(formData.email);
      setIsSubmitting(false);
      if (error) {
        toast({ title: 'Reset link could not be sent', description: error.message, variant: 'destructive' });
      } else {
        setResetSent(true);
      }
      return;
    }

    const validation = view === 'invite' ? signupSchema.safeParse(formData) : loginSchema.safeParse(formData);
    if (!collectErrors(validation)) return;

    setIsSubmitting(true);
    try {
      const result = view === 'invite'
        ? await signUp(formData.email, formData.password, formData.fullName, formData.inviteCode)
        : await signIn(formData.email, formData.password);

      if (result.error) {
        toast({ title: view === 'invite' ? 'Account could not be created' : 'Sign in failed', description: result.error.message, variant: 'destructive' });
      } else if (view === 'invite') {
        toast({ title: 'Check your email', description: 'Confirm your email address to finish setting up your account.' });
      } else {
        toast({ title: 'Welcome back', description: 'You are signed in.' });
      }
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[hsl(var(--portal-mist))]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" aria-label="Loading" />
      </main>
    );
  }

  const headingParts: [string, string] =
    view === 'forgot'
      ? ['Reset your', 'password.']
      : view === 'invite'
        ? ['Activate your', 'account.']
        : ['Welcome', 'back.'];
  const description = view === 'forgot'
    ? 'Enter the email connected to your portal account.'
    : view === 'invite'
      ? 'Complete your invite-only NORCAT portal access.'
      : 'Sign in to your NORCAT Innovation portal.';

  return (
    <main className="flex min-h-screen items-center justify-center bg-portal-mist px-4 py-8 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-portal)]">
        <div className="h-1.5 bg-gradient-to-r from-primary to-portal-blue" aria-hidden="true" />
        <header className="flex items-center justify-center border-b border-border bg-card px-8 py-6">
          <Link to="/" aria-label="Return to NORCAT Innovation">
            <img src={norcatLogoBlack} alt="NORCAT Innovation" className="h-7 w-auto" />
          </Link>
        </header>

        <section className="p-6 pt-9 sm:p-9 sm:pt-10">
            {resetSent ? (
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-portal-grey">Email sent</p>
                <h2 className="mt-3 text-3xl font-extrabold text-portal-blue">Check your <span className="text-primary">inbox.</span></h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">If an account exists for {formData.email}, you’ll receive a secure reset link shortly.</p>
                <Button variant="outline" className="mt-7 w-full border-portal-blue text-portal-blue hover:bg-portal-blue hover:text-primary-foreground" onClick={() => setActiveView('sign-in')}>
                  <ArrowLeft aria-hidden="true" /> Back to sign in
                </Button>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-portal-grey">
                    <span className="h-px w-6 bg-border" aria-hidden="true" />
                    {view === 'invite' ? 'Invited access' : 'Client portal'}
                    <span className="h-px w-6 bg-border" aria-hidden="true" />
                  </p>
                  <h1 className="mt-4 text-3xl font-extrabold leading-tight text-portal-blue">
                    {headingParts[0]} <span className="text-primary">{headingParts[1]}</span>
                  </h1>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {view === 'invite' && (
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full name</Label>
                      <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} autoComplete="name" className="h-12" aria-invalid={Boolean(errors.fullName)} required />
                      {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                      <Input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleInputChange} autoComplete="email" className="h-12 pl-10" aria-invalid={Boolean(errors.email)} required />
                    </div>
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  {view !== 'forgot' && (
                    <div className="space-y-2">
                      <div>
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <div className="relative">
                        <LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                        <Input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={formData.password} onChange={handleInputChange} autoComplete={view === 'invite' ? 'new-password' : 'current-password'} className="h-12 pl-10 pr-12" aria-invalid={Boolean(errors.password)} required />
                        <Button type="button" variant="ghost" size="icon" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-1 top-1 h-10 w-10 text-muted-foreground">
                          {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                        </Button>
                      </div>
                      {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                    </div>
                  )}

                  {view === 'invite' && <input type="hidden" name="inviteCode" value={formData.inviteCode} />}

                  <Button type="submit" className="h-12 w-full bg-portal-blue font-bold hover:bg-portal-blue/90" disabled={isSubmitting}>
                    {isSubmitting ? (view === 'forgot' ? 'Sending reset link…' : view === 'invite' ? 'Creating account…' : 'Signing in…') : (view === 'forgot' ? 'Send reset link' : view === 'invite' ? 'Create account' : 'Sign in')}
                    {!isSubmitting && <ArrowRight aria-hidden="true" />}
                  </Button>

                  {view === 'sign-in' && (
                    <button
                      type="button"
                      onClick={() => setActiveView('forgot')}
                      className="mx-auto block text-sm font-semibold text-portal-blue underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      Forgot your password?
                    </button>
                  )}
                </form>

                {view === 'forgot' && (
                  <Button variant="ghost" className="mt-3 w-full text-muted-foreground hover:bg-portal-mist hover:text-portal-blue" onClick={() => setActiveView('sign-in')}>
                    <ArrowLeft aria-hidden="true" /> Back to sign in
                  </Button>
                )}
              </>
            )}
          <div className="mt-8 border-t border-border pt-7 text-center">
            <p className="text-sm font-semibold text-portal-blue">Not a NORCAT client yet?</p>
            <p className="mt-1 text-sm text-muted-foreground">Tell us about your venture and where you want to go next.</p>
            <Button asChild variant="outline" className="mt-4 w-full border-2 border-primary font-bold text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/apply">Become a Client <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>

        <footer className="bg-portal-mist px-8 py-4 text-center text-xs text-portal-grey">
          © 2026 NORCAT Innovation
        </footer>
      </motion.div>
    </main>
  );
}
