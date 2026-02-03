import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Shield,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Calendar,
  AlertTriangle,
} from 'lucide-react';
import { useState } from 'react';

const agreements = [
  {
    id: 'nda',
    title: 'Non-Disclosure Agreement',
    description: 'Confidentiality agreement covering all venture information and discussions.',
    status: 'signed',
    signedDate: '2025-08-15',
    expiresDate: null,
  },
  {
    id: 'sop',
    title: 'Statement of Principles',
    description: 'Acknowledgement of mentoring principles, ethics, and boundaries.',
    status: 'signed',
    signedDate: '2025-08-15',
    expiresDate: null,
  },
  {
    id: 'coi-q1',
    title: 'Conflict of Interest Disclosure - Q1 2026',
    description: 'Quarterly disclosure of any conflicts with assigned or potential ventures.',
    status: 'pending',
    signedDate: null,
    dueDate: '2026-02-28',
  },
];

const principles = [
  'I will maintain strict confidentiality regarding all venture information shared during mentoring.',
  'I will not make investments in, provide consulting services to, or accept board positions with any venture I mentor.',
  'I will not establish commercial relationships with ventures during or within 12 months after mentoring.',
  'I will disclose any potential conflicts of interest immediately upon becoming aware of them.',
  'I will respect founder autonomy and refrain from prescribing specific courses of action.',
  'I will refer founders to appropriate resources rather than positioning myself as an expert in all areas.',
  'I will participate actively in team-based mentoring and coordinate with fellow mentors.',
  'I will complete required training and ethics refreshers on schedule.',
];

const ventureConflicts = [
  {
    venture: 'RockPulse Analytics',
    status: 'clear',
    lastReviewed: '2026-01-15',
  },
  {
    venture: 'MineSafe AI',
    status: 'clear',
    lastReviewed: '2026-01-15',
  },
  {
    venture: 'TunnelTech Solutions',
    status: 'clear',
    lastReviewed: '2026-01-15',
  },
];

export default function MentorEthics() {
  const [acknowledgedPrinciples, setAcknowledgedPrinciples] = useState<string[]>([]);

  const allPrinciplesAcknowledged = acknowledgedPrinciples.length === principles.length;

  const togglePrinciple = (principle: string) => {
    setAcknowledgedPrinciples(prev =>
      prev.includes(principle)
        ? prev.filter(p => p !== principle)
        : [...prev, principle]
    );
  };

  return (
    <MentorPortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ethics & Agreements</h1>
          <p className="text-muted-foreground mt-1">
            Manage your compliance requirements, agreements, and conflict disclosures.
          </p>
        </div>

        {/* Alert for Pending Items */}
        {agreements.some(a => a.status === 'pending') && (
          <Card className="border-destructive/50 bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-destructive">Action Required</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    You have pending agreements that require your attention. Please complete them before the due date.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Agreements Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agreements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" /> Agreements & Disclosures
                </CardTitle>
                <CardDescription>
                  Required agreements and quarterly conflict of interest disclosures.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {agreements.map(agreement => (
                  <div key={agreement.id} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                    <div className={`p-2 rounded-lg ${
                      agreement.status === 'signed' 
                        ? 'bg-chart-4/10 text-chart-4' 
                        : 'bg-destructive/10 text-destructive'
                    }`}>
                      {agreement.status === 'signed' ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold">{agreement.title}</h4>
                        <Badge variant={agreement.status === 'signed' ? 'secondary' : 'destructive'}>
                          {agreement.status === 'signed' ? 'Signed' : 'Pending'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {agreement.description}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        {agreement.signedDate && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> Signed: {agreement.signedDate}
                          </span>
                        )}
                        {agreement.dueDate && (
                          <span className="flex items-center gap-1 text-destructive">
                            <Clock className="h-3 w-3" /> Due: {agreement.dueDate}
                          </span>
                        )}
                      </div>
                    </div>
                    {agreement.status === 'pending' && (
                      <Button size="sm">Complete</Button>
                    )}
                    {agreement.status === 'signed' && (
                      <Button variant="outline" size="sm">View</Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Statement of Principles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" /> Statement of Principles
                </CardTitle>
                <CardDescription>
                  Review and acknowledge the core principles of ethical mentoring.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {principles.map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Checkbox
                      id={`principle-${idx}`}
                      checked={acknowledgedPrinciples.includes(principle)}
                      onCheckedChange={() => togglePrinciple(principle)}
                    />
                    <label
                      htmlFor={`principle-${idx}`}
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      {principle}
                    </label>
                  </div>
                ))}

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {acknowledgedPrinciples.length} of {principles.length} principles acknowledged
                  </p>
                  <Button disabled={!allPrinciplesAcknowledged}>
                    Submit Acknowledgement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Conflict Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Venture Conflict Status</CardTitle>
                <CardDescription>
                  Current conflict of interest status for your assigned ventures.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {ventureConflicts.map(venture => (
                  <div key={venture.venture} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div>
                      <p className="font-medium text-sm">{venture.venture}</p>
                      <p className="text-xs text-muted-foreground">
                        Reviewed: {venture.lastReviewed}
                      </p>
                    </div>
                    <Badge className="bg-chart-4/20 text-chart-4">Clear</Badge>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Update Conflict Status
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> View NDA
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" /> Ethics Training
                </Button>
                <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                  <AlertTriangle className="mr-2 h-4 w-4" /> Report a Concern
                </Button>
              </CardContent>
            </Card>

            {/* Boundary Reminders */}
            <Card className="border-accent/50 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-accent" /> Remember
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• No investments in mentored ventures</li>
                  <li>• No consulting or paid work</li>
                  <li>• No board roles during engagement</li>
                  <li>• 12-month cooling off period</li>
                  <li>• Report conflicts immediately</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MentorPortalLayout>
  );
}
