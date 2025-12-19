import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3,
  FileText,
  Clock,
  CheckCircle,
  Plus,
  Save,
  Send,
  ChevronRight,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface Report {
  id: string;
  reporting_period: string;
  status: string;
  revenue: number | null;
  employees_count: number | null;
  capital_raised: number | null;
  patents_filed: number | null;
  patents_granted: number | null;
  customers_count: number | null;
  pilots_count: number | null;
  key_milestones: string | null;
  submitted_at: string | null;
  created_at: string;
}

const statusColors: Record<string, string> = {
  draft: 'bg-amber-100 text-amber-700 border-amber-200',
  submitted: 'bg-blue-100 text-blue-700 border-blue-200',
  reviewed: 'bg-green-100 text-green-700 border-green-200',
};

const getCurrentPeriod = () => {
  const now = new Date();
  const half = now.getMonth() < 6 ? 'H1' : 'H2';
  return `${half} ${now.getFullYear()}`;
};

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('new');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, profile } = useAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    revenue: '',
    employees_count: '',
    capital_raised: '',
    patents_filed: '',
    patents_granted: '',
    customers_count: '',
    pilots_count: '',
    key_milestones: '',
  });

  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null);

  useEffect(() => {
    fetchReports();
  }, [profile]);

  const fetchReports = async () => {
    if (!profile?.company_id) {
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('impact_reports')
        .select('*')
        .eq('company_id', profile.company_id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReports(data || []);

      // Check for existing draft for current period
      const currentPeriod = getCurrentPeriod();
      const existingDraft = data?.find(
        r => r.reporting_period === currentPeriod && r.status === 'draft'
      );

      if (existingDraft) {
        setCurrentDraftId(existingDraft.id);
        setFormData({
          revenue: existingDraft.revenue?.toString() || '',
          employees_count: existingDraft.employees_count?.toString() || '',
          capital_raised: existingDraft.capital_raised?.toString() || '',
          patents_filed: existingDraft.patents_filed?.toString() || '',
          patents_granted: existingDraft.patents_granted?.toString() || '',
          customers_count: existingDraft.customers_count?.toString() || '',
          pilots_count: existingDraft.pilots_count?.toString() || '',
          key_milestones: existingDraft.key_milestones || '',
        });
      }
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveDraft = async () => {
    if (!user || !profile?.company_id) return;
    setIsSubmitting(true);

    try {
      const reportData = {
        company_id: profile.company_id,
        submitted_by: user.id,
        reporting_period: getCurrentPeriod(),
        status: 'draft' as const,
        revenue: formData.revenue ? parseFloat(formData.revenue) : null,
        employees_count: formData.employees_count ? parseInt(formData.employees_count) : null,
        capital_raised: formData.capital_raised ? parseFloat(formData.capital_raised) : null,
        patents_filed: formData.patents_filed ? parseInt(formData.patents_filed) : null,
        patents_granted: formData.patents_granted ? parseInt(formData.patents_granted) : null,
        customers_count: formData.customers_count ? parseInt(formData.customers_count) : null,
        pilots_count: formData.pilots_count ? parseInt(formData.pilots_count) : null,
        key_milestones: formData.key_milestones || null,
      };

      if (currentDraftId) {
        await supabase.from('impact_reports').update(reportData).eq('id', currentDraftId);
      } else {
        const { data } = await supabase.from('impact_reports').insert(reportData).select().single();
        if (data) setCurrentDraftId(data.id);
      }

      toast({
        title: 'Draft saved',
        description: 'Your report has been saved as a draft.',
      });

      fetchReports();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save draft. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    if (!user || !profile?.company_id) return;
    setIsSubmitting(true);

    try {
      const reportData = {
        company_id: profile.company_id,
        submitted_by: user.id,
        reporting_period: getCurrentPeriod(),
        status: 'submitted' as const,
        revenue: formData.revenue ? parseFloat(formData.revenue) : null,
        employees_count: formData.employees_count ? parseInt(formData.employees_count) : null,
        capital_raised: formData.capital_raised ? parseFloat(formData.capital_raised) : null,
        patents_filed: formData.patents_filed ? parseInt(formData.patents_filed) : null,
        patents_granted: formData.patents_granted ? parseInt(formData.patents_granted) : null,
        customers_count: formData.customers_count ? parseInt(formData.customers_count) : null,
        pilots_count: formData.pilots_count ? parseInt(formData.pilots_count) : null,
        key_milestones: formData.key_milestones || null,
        submitted_at: new Date().toISOString(),
      };

      if (currentDraftId) {
        await supabase.from('impact_reports').update(reportData).eq('id', currentDraftId);
      } else {
        await supabase.from('impact_reports').insert(reportData);
      }

      toast({
        title: 'Report submitted!',
        description: 'Thank you for submitting your impact report.',
      });

      // Reset form
      setFormData({
        revenue: '',
        employees_count: '',
        capital_raised: '',
        patents_filed: '',
        patents_granted: '',
        customers_count: '',
        pilots_count: '',
        key_milestones: '',
      });
      setCurrentDraftId(null);
      setActiveTab('history');
      fetchReports();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit report. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const submittedReports = reports.filter(r => r.status !== 'draft');

  if (!profile?.company_id) {
    return (
      <PortalLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Company Profile Required</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              You need to set up your company profile before submitting impact reports. Please complete your company profile first.
            </p>
            <Button className="mt-4" onClick={() => window.location.href = '/portal/company'}>
              Set Up Company
            </Button>
          </div>
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">Impact Reports</h1>
          <p className="text-muted-foreground">
            Submit your semi-annual impact reports to track your startup's progress.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{reports.length}</p>
                  <p className="text-xs text-muted-foreground">Total Reports</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-green-100">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{submittedReports.length}</p>
                  <p className="text-xs text-muted-foreground">Submitted</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-100">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{getCurrentPeriod()}</p>
                  <p className="text-xs text-muted-foreground">Current Period</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="new">
              <Plus size={16} className="mr-2" />
              New Report
            </TabsTrigger>
            <TabsTrigger value="history">
              <FileText size={16} className="mr-2" />
              History ({submittedReports.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="new">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Impact Report - {getCurrentPeriod()}</CardTitle>
                  <CardDescription>
                    Complete the form below to report your startup's metrics for this period. All fields are optional but help us track ecosystem impact.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="revenue">Revenue (CAD)</Label>
                      <Input
                        id="revenue"
                        name="revenue"
                        type="number"
                        placeholder="0.00"
                        value={formData.revenue}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees_count">Number of Employees (FTE)</Label>
                      <Input
                        id="employees_count"
                        name="employees_count"
                        type="number"
                        placeholder="0"
                        value={formData.employees_count}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capital_raised">Capital Raised (CAD)</Label>
                      <Input
                        id="capital_raised"
                        name="capital_raised"
                        type="number"
                        placeholder="0.00"
                        value={formData.capital_raised}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customers_count">Number of Customers</Label>
                      <Input
                        id="customers_count"
                        name="customers_count"
                        type="number"
                        placeholder="0"
                        value={formData.customers_count}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pilots_count">Active Pilots/Trials</Label>
                      <Input
                        id="pilots_count"
                        name="pilots_count"
                        type="number"
                        placeholder="0"
                        value={formData.pilots_count}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patents_filed">Patents Filed</Label>
                      <Input
                        id="patents_filed"
                        name="patents_filed"
                        type="number"
                        placeholder="0"
                        value={formData.patents_filed}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patents_granted">Patents Granted</Label>
                      <Input
                        id="patents_granted"
                        name="patents_granted"
                        type="number"
                        placeholder="0"
                        value={formData.patents_granted}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="key_milestones">Key Milestones & Highlights</Label>
                    <Textarea
                      id="key_milestones"
                      name="key_milestones"
                      placeholder="Share your major achievements, partnerships, product launches, or other significant milestones this period..."
                      value={formData.key_milestones}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" onClick={handleSaveDraft} disabled={isSubmitting}>
                      <Save size={16} className="mr-2" />
                      Save Draft
                    </Button>
                    <Button onClick={handleSubmit} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Submit Report
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="history">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : submittedReports.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">No reports submitted yet</h3>
                <p className="text-muted-foreground text-sm">
                  Complete your first impact report to track your progress.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {submittedReports.map((report, i) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-secondary">
                          <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {report.reporting_period}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Submitted {report.submitted_at ? format(new Date(report.submitted_at), 'MMM d, yyyy') : 'N/A'}
                          </p>
                        </div>
                      </div>
                      <Badge className={statusColors[report.status]}>
                        {report.status === 'submitted' ? 'Submitted' : report.status === 'reviewed' ? 'Reviewed' : 'Draft'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      {report.revenue && (
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <p className="font-semibold">${report.revenue.toLocaleString()}</p>
                        </div>
                      )}
                      {report.employees_count && (
                        <div>
                          <p className="text-muted-foreground">Employees</p>
                          <p className="font-semibold">{report.employees_count}</p>
                        </div>
                      )}
                      {report.capital_raised && (
                        <div>
                          <p className="text-muted-foreground">Capital Raised</p>
                          <p className="font-semibold">${report.capital_raised.toLocaleString()}</p>
                        </div>
                      )}
                      {report.customers_count && (
                        <div>
                          <p className="text-muted-foreground">Customers</p>
                          <p className="font-semibold">{report.customers_count}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
}
