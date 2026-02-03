import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MentorPortalSidebar } from './MentorPortalSidebar';
import { useAuth } from '@/hooks/useAuth';

// Demo mode flag - set to true to bypass authentication
const DEMO_MODE = true;

interface MentorPortalLayoutProps {
  children: ReactNode;
}

export function MentorPortalLayout({ children }: MentorPortalLayoutProps) {
  const { user, isApproved, isLoading, isMentor } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!DEMO_MODE && !isLoading) {
      if (!user) {
        navigate('/portal/auth');
      } else if (!isApproved) {
        navigate('/portal/pending');
      } else if (!isMentor) {
        // If not a mentor, redirect to client portal
        navigate('/portal');
      }
    }
  }, [user, isApproved, isLoading, isMentor, navigate]);

  if (!DEMO_MODE && isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent" />
          <p className="text-muted-foreground">Loading your mentor portal...</p>
        </div>
      </div>
    );
  }

  if (!DEMO_MODE && (!user || !isApproved || !isMentor)) {
    return null;
  }

  return (
    <div className="min-h-screen flex bg-background w-full">
      <MentorPortalSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
