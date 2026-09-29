import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import norcatLogo from '@/assets/logos/norcat-black.png';

export default function ResetPassword() {
  usePageTitle('Reset Password');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRecoveryLink, setIsRecoveryLink] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { updatePassword } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const queryParams = new URLSearchParams(window.location.search);
    setIsRecoveryLink(hashParams.get('type') === 'recovery' || queryParams.get('type') === 'recovery' || Boolean(hashParams.get('access_token')));
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password.length < 8) {
      toast({ title: 'Password is too short', description: 'Use at least 8 characters.', variant: 'destructive' });
      return;
    }
    if (password !== confirmPassword) {
      toast({ title: 'Passwords do not match', description: 'Enter the same password in both fields.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    const { error } = await updatePassword(password);
    setIsSubmitting(false);

    if (error) {
      toast({ title: 'Password could not be updated', description: error.message, variant: 'destructive' });
      return;
    }

    setIsComplete(true);
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--portal-mist))] px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex mb-8" aria-label="Return to NORCAT Innovation">
          <img src={norcatLogo} alt="NORCAT Innovation" className="h-5 w-auto" />
        </Link>

        <section className="bg-card/90 backdrop-blur-xl border border-border rounded-lg shadow-xl p-6 sm:p-8">
          {isComplete ? (
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h1 className="text-2xl font-extrabold text-[hsl(var(--portal-navy))]">Password updated.</h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Your new password is ready. Return to the portal to sign in.</p>
              <Button className="mt-7 w-full rounded-full" onClick={() => navigate('/portal/auth')}>
                Return to sign in <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          ) : !isRecoveryLink ? (
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <KeyRound className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h1 className="text-2xl font-extrabold text-[hsl(var(--portal-navy))]">Reset link required.</h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Request a new password reset email to continue securely.</p>
              <Button asChild variant="outline" className="mt-7 w-full rounded-full">
                <Link to="/portal/auth?forgot=true"><ArrowLeft aria-hidden="true" /> Request a reset link</Link>
              </Button>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold uppercase text-[hsl(var(--portal-grey))]">Secure account recovery</p>
              <h1 className="mt-2 text-3xl font-extrabold text-[hsl(var(--portal-navy))]">Choose a new password.</h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Use at least 8 characters and keep it unique to your NORCAT account.</p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New password</Label>
                  <div className="relative">
                    <Input id="new-password" type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" className="h-12 pr-12" required />
                    <Button type="button" variant="ghost" size="icon" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-1 top-1 h-10 w-10">
                      {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm new password</Label>
                  <Input id="confirm-password" type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} autoComplete="new-password" className="h-12" required />
                </div>
                <Button type="submit" className="w-full h-12 rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Updating password…' : 'Update password'}
                  {!isSubmitting && <ArrowRight aria-hidden="true" />}
                </Button>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}