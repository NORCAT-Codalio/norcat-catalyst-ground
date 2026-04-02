import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight, Sparkles, Shield, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import norcatLogoWhite from '@/assets/logos/norcat-white.png';
import norcatLogoBlack from '@/assets/logos/norcat-black.png';

// Demo mode flag - set to true to bypass authentication
const DEMO_MODE = true;

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = loginSchema.extend({
  fullName: z.string().min(2, 'Please enter your full name'),
  inviteCode: z.string().min(1, 'Invite code is required'),
});

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signIn, signUp, user, isApproved, isLoading, isMentor } = useAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    inviteCode: searchParams.get('code') || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect based on role
  useEffect(() => {
    if (!isLoading && user && isApproved) {
      if (isMentor) {
        navigate('/mentor');
      } else {
        navigate('/portal');
      }
    }
  }, [user, isApproved, isLoading, isMentor, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      if (isLogin) {
        const validation = loginSchema.safeParse(formData);
        if (!validation.success) {
          const fieldErrors: Record<string, string> = {};
          validation.error.errors.forEach(err => {
            fieldErrors[err.path[0]] = err.message;
          });
          setErrors(fieldErrors);
          setIsSubmitting(false);
          return;
        }

        const { error } = await signIn(formData.email, formData.password);
        if (error) {
          toast({
            title: 'Sign in failed',
            description: error.message,
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Welcome back!',
            description: 'You have successfully signed in.',
          });
          // Navigation will happen via useEffect based on role
        }
      } else {
        const validation = signupSchema.safeParse(formData);
        if (!validation.success) {
          const fieldErrors: Record<string, string> = {};
          validation.error.errors.forEach(err => {
            fieldErrors[err.path[0]] = err.message;
          });
          setErrors(fieldErrors);
          setIsSubmitting(false);
          return;
        }

        const { error } = await signUp(
          formData.email,
          formData.password,
          formData.fullName,
          formData.inviteCode
        );

        if (error) {
          toast({
            title: 'Sign up failed',
            description: error.message,
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Account created!',
            description: 'Welcome to the NORCAT Innovation Portal.',
          });
          // Navigation will happen via useEffect based on role
        }
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div>
            <div className="flex items-center gap-3">
              <img src={norcatLogoWhite} alt="NORCAT Innovation" className="h-7 w-auto" />
            </div>
          </div>

          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Your Venture's
              <br />
              <span className="text-gradient">Command Centre</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg max-w-md"
            >
              Access mentors, resources, events, and everything you need to scale your startup—all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Sparkles, label: 'Resources' },
                { icon: Shield, label: 'Mentors' },
                { icon: Zap, label: 'Events' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <item.icon className="h-6 w-6 text-primary mb-2" />
                  <span className="text-white/80 text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <p className="text-white/40 text-sm">
            © 2024 NORCAT Innovation. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <img src={norcatLogoBlack} alt="NORCAT Innovation" className="h-6 w-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {isLogin ? 'Welcome back' : 'Create your account'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isLogin
                  ? 'Sign in to access your client portal'
                  : 'Join the NORCAT Innovation ecosystem'}
              </p>
            </div>

            {DEMO_MODE && (
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={() => navigate('/portal')}
                  className="flex-1 bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Client Portal
                </Button>
                <Button
                  onClick={() => navigate('/mentor')}
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Mentor Portal
                </Button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={errors.fullName ? 'border-destructive' : ''}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inviteCode">Invite Code</Label>
                    <Input
                      id="inviteCode"
                      name="inviteCode"
                      type="text"
                      placeholder="Enter your invite code"
                      value={formData.inviteCode}
                      onChange={handleInputChange}
                      className={errors.inviteCode ? 'border-destructive' : ''}
                    />
                    {errors.inviteCode && (
                      <p className="text-sm text-destructive">{errors.inviteCode}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Don't have an invite code? Contact your administrator.
                    </p>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? 'border-destructive pr-10' : 'pr-10'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    {isLogin ? 'Signing in...' : 'Creating account...'}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight size={18} />
                  </span>
                )}
              </Button>
            </form>

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isLogin ? (
                  <>
                    Have an invite code?{' '}
                    <span className="text-primary font-medium">Create account</span>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <span className="text-primary font-medium">Sign in</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
