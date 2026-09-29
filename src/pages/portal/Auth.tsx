import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { z } from 'zod';
import norcatLogoWhite from '@/assets/logos/norcat-white.png';
import norcatLogoBlack from '@/assets/logos/norcat-black.png';
import norcatMark from '@/assets/norcat-half-logo-square-v2.png.asset.json';

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

  const heading = view === 'forgot' ? 'Reset your password.' : view === 'invite' ? 'Activate your account.' : 'Welcome back.';
  const description = view === 'forgot'
    ? 'Enter the email connected to your portal account.'
    : view === 'invite'
      ? 'Complete your invite-only NORCAT portal access.'
      : 'Sign in to your NORCAT Innovation portal.';

  return (
    <main className="min-h-screen lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(480px,0.95fr)] bg-[hsl(var(--portal-mist))]">
      <section className="relative hidden lg:flex min-h-screen overflow-hidden bg-[hsl(var(--portal-navy))] p-12 xl:p-16 text-primary-foreground">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.18) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.18) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary via-[hsl(var(--portal-blue))] to-primary" />
        <img src={norcatMark.url} alt="" aria-hidden="true" className="absolute -right-24 bottom-8 w-[520px] max-w-[55vw] opacity-[0.08]" />

        <div className="relative z-10 flex w-full flex-col justify-between">
          <Link to="/" className="inline-flex w-fit" aria-label="Return to NORCAT Innovation">
            <img src={norcatLogoWhite} alt="NORCAT Innovation" className="h-6 w-auto" />
          </Link>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <p className="mb-5 text-xs font-bold uppercase text-primary">NORCAT Client Portal</p>
            <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.03]">
              BUILT FOR WHAT<br />COMES NEXT.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-primary-foreground/75">
              Your private workspace for mentorship, resources, events and venture support.
            </p>
            <div className="mt-10 flex items-center gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/65">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              Secure, invite-only access for NORCAT clients and mentors.
            </div>
          </motion.div>

          <p className="text-xs text-primary-foreground/45">© 2026 NORCAT Innovation</p>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-8 lg:p-12">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[hsl(var(--portal-blue))] to-primary lg:hidden" />
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Link to="/" className="mb-10 inline-flex lg:hidden" aria-label="Return to NORCAT Innovation">
            <img src={norcatLogoBlack} alt="NORCAT Innovation" className="h-5 w-auto" />
          </Link>

          <div className="rounded-lg border border-border bg-card/85 p-6 shadow-xl backdrop-blur-xl sm:p-8">
            {resetSent ? (
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-xs font-bold uppercase text-[hsl(var(--portal-grey))]">Email sent</p>
                <h2 className="mt-2 text-3xl font-extrabold text-[hsl(var(--portal-navy))]">Check your inbox.</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">If an account exists for {formData.email}, you’ll receive a secure reset link shortly.</p>
                <Button variant="outline" className="mt-7 w-full rounded-full" onClick={() => setActiveView('sign-in')}>
                  <ArrowLeft aria-hidden="true" /> Back to sign in
                </Button>
              </div>
            ) : (
              <>
                <p className="text-xs font-bold uppercase text-[hsl(var(--portal-grey))]">{view === 'invite' ? 'Invited access' : 'Secure portal access'}</p>
                <h2 className="mt-2 text-3xl font-extrabold text-[hsl(var(--portal-navy))]">{heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
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
                      <div className="flex items-center justify-between gap-4">
                        <Label htmlFor="password">Password</Label>
                        {view === 'sign-in' && (
                          <button type="button" onClick={() => setActiveView('forgot')} className="text-sm font-semibold text-[hsl(var(--portal-blue))] hover:text-primary transition-colors">
                            Forgot password?
                          </button>
                        )}
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

                  <Button type="submit" className="h-12 w-full rounded-full font-bold" disabled={isSubmitting}>
                    {isSubmitting ? (view === 'forgot' ? 'Sending reset link…' : view === 'invite' ? 'Creating account…' : 'Signing in…') : (view === 'forgot' ? 'Send reset link' : view === 'invite' ? 'Create account' : 'Sign in')}
                    {!isSubmitting && <ArrowRight aria-hidden="true" />}
                  </Button>
                </form>

                {view === 'forgot' && (
                  <Button variant="ghost" className="mt-3 w-full rounded-full text-muted-foreground" onClick={() => setActiveView('sign-in')}>
                    <ArrowLeft aria-hidden="true" /> Back to sign in
                  </Button>
                )}
              </>
            )}
          </div>

          <div className="mt-6 rounded-lg border border-border bg-card/60 p-5 text-center backdrop-blur-md">
            <p className="text-sm font-semibold text-[hsl(var(--portal-navy))]">Not a NORCAT client yet?</p>
            <p className="mt-1 text-sm text-muted-foreground">Tell us about your venture and where you want to go next.</p>
            <Button asChild variant="outline" className="mt-4 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/apply">Become a Client <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
