import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Users,
  Calendar,
  BarChart3,
  Building2,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Shield,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { name: 'Dashboard', href: '/portal', icon: Home },
  { name: 'Resources', href: '/portal/resources', icon: BookOpen },
  { name: 'Mentors', href: '/portal/mentors', icon: Users },
  { name: 'Events', href: '/portal/events', icon: Calendar },
  { name: 'Reports', href: '/portal/reports', icon: BarChart3 },
  { name: 'My Company', href: '/portal/company', icon: Building2 },
];

const secondaryItems = [
  { name: 'Notifications', href: '/portal/notifications', icon: Bell },
  { name: 'Settings', href: '/portal/settings', icon: Settings },
];

export function PortalSidebar() {
  const location = useLocation();
  const { profile, signOut, isAdmin } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const getInitials = (name: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <aside
      className={cn(
        'h-screen bg-sidebar-background border-r border-sidebar-border flex flex-col transition-all duration-300 sticky top-0',
        collapsed ? 'w-[70px]' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/portal" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <span className="font-bold text-sidebar-foreground block">NORCAT</span>
              <span className="text-xs text-muted-foreground">Client Portal</span>
            </div>
          )}
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map(item => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              )}
            >
              <item.icon
                size={20}
                className={cn(
                  'flex-shrink-0 transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                )}
              />
              {!collapsed && <span className="truncate">{item.name}</span>}
            </Link>
          );
        })}

        {isAdmin && (
          <>
            <div className={cn('py-2', collapsed ? 'px-2' : 'px-3')}>
              <div className="border-t border-sidebar-border" />
            </div>
            <Link
              to="/portal/admin"
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
                location.pathname.startsWith('/portal/admin')
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              )}
            >
              <Shield
                size={20}
                className={cn(
                  'flex-shrink-0 transition-colors',
                  location.pathname.startsWith('/portal/admin')
                    ? 'text-primary'
                    : 'text-muted-foreground group-hover:text-primary'
                )}
              />
              {!collapsed && <span className="truncate">Admin</span>}
            </Link>
          </>
        )}
      </nav>

      {/* Secondary Navigation */}
      <div className="p-3 space-y-1 border-t border-sidebar-border">
        {secondaryItems.map(item => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              )}
            >
              <item.icon
                size={20}
                className={cn(
                  'flex-shrink-0 transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                )}
              />
              {!collapsed && <span className="truncate">{item.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* User Profile & Collapse */}
      <div className="p-3 border-t border-sidebar-border">
        <div
          className={cn(
            'flex items-center gap-3 p-2 rounded-xl bg-sidebar-accent/30',
            collapsed ? 'justify-center' : ''
          )}
        >
          <Avatar className="h-9 w-9 flex-shrink-0">
            <AvatarImage src={profile?.avatar_url || ''} />
            <AvatarFallback className="bg-primary/10 text-primary text-sm">
              {getInitials(profile?.full_name)}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {profile?.full_name || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate">{profile?.email}</p>
            </div>
          )}
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={signOut}
              className="h-8 w-8 flex-shrink-0 text-muted-foreground hover:text-destructive"
            >
              <LogOut size={16} />
            </Button>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full mt-2 text-muted-foreground hover:text-foreground"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span className="ml-2">Collapse</span>}
        </Button>
      </div>
    </aside>
  );
}
