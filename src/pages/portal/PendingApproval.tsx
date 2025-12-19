import { motion } from 'framer-motion';
import { Clock, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

export default function PendingApproval() {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <div className="bg-card rounded-3xl border border-border shadow-xl p-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Clock className="h-8 w-8 text-primary" />
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            Account Pending Approval
          </h1>
          <p className="text-muted-foreground mb-6">
            Your account has been created successfully! An administrator will review and approve your access shortly.
          </p>

          <div className="bg-secondary/50 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 text-left">
              <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Registered email</p>
                <p className="font-medium text-foreground">{profile?.email}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            You'll receive an email notification once your account has been approved. In the meantime, feel free to reach out if you have any questions.
          </p>

          <div className="space-y-3">
            <Button asChild variant="outline" className="w-full">
              <Link to="/">
                <ArrowLeft size={18} className="mr-2" />
                Return to Website
              </Link>
            </Button>
            <Button
              variant="ghost"
              onClick={signOut}
              className="w-full text-muted-foreground"
            >
              Sign out
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
