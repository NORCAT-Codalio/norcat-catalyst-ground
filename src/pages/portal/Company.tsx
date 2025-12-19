import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Calendar, Users, Save, Upload } from 'lucide-react';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const stages = [
  { value: 'idea', label: 'Idea Stage' },
  { value: 'pre_seed', label: 'Pre-Seed' },
  { value: 'seed', label: 'Seed' },
  { value: 'series_a', label: 'Series A' },
  { value: 'scale', label: 'Scale' },
];

export default function Company() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { profile, refreshProfile } = useAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    website: '',
    stage: 'idea',
    founded_year: '',
    industry_tags: '',
  });

  useEffect(() => {
    if (profile?.company_id) {
      fetchCompany();
    } else {
      setIsLoading(false);
    }
  }, [profile]);

  const fetchCompany = async () => {
    try {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .eq('id', profile?.company_id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          name: data.name || '',
          description: data.description || '',
          website: data.website || '',
          stage: data.stage || 'idea',
          founded_year: data.founded_year?.toString() || '',
          industry_tags: data.industry_tags?.join(', ') || '',
        });
      }
    } catch (error) {
      console.error('Error fetching company:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const companyData = {
        name: formData.name,
        description: formData.description,
        website: formData.website,
        stage: formData.stage as any,
        founded_year: formData.founded_year ? parseInt(formData.founded_year) : null,
        industry_tags: formData.industry_tags.split(',').map(t => t.trim()).filter(Boolean),
      };

      if (profile?.company_id) {
        await supabase.from('companies').update(companyData).eq('id', profile.company_id);
      } else {
        const { data: newCompany } = await supabase.from('companies').insert(companyData).select().single();
        if (newCompany) {
          await supabase.from('profiles').update({ company_id: newCompany.id }).eq('id', profile?.id);
          await refreshProfile();
        }
      }

      toast({ title: 'Saved!', description: 'Company profile updated successfully.' });
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save. Please try again.', variant: 'destructive' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <PortalLayout>
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Company Profile</h1>
          <p className="text-muted-foreground">Manage your startup's information visible to the ecosystem.</p>
        </motion.div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Company Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Company Name *</Label>
              <Input id="name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Your Startup Inc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" value={formData.description} onChange={e => setFormData(p => ({ ...p, description: e.target.value }))} placeholder="What does your company do?" rows={4} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" value={formData.website} onChange={e => setFormData(p => ({ ...p, website: e.target.value }))} placeholder="https://yourcompany.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="founded_year">Founded Year</Label>
                <Input id="founded_year" type="number" value={formData.founded_year} onChange={e => setFormData(p => ({ ...p, founded_year: e.target.value }))} placeholder="2024" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Stage</Label>
                <Select value={formData.stage} onValueChange={v => setFormData(p => ({ ...p, stage: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {stages.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry_tags">Industry Tags</Label>
                <Input id="industry_tags" value={formData.industry_tags} onChange={e => setFormData(p => ({ ...p, industry_tags: e.target.value }))} placeholder="Mining, AI, SaaS" />
                <p className="text-xs text-muted-foreground">Separate with commas</p>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t">
              <Button onClick={handleSave} disabled={isSaving || !formData.name}>
                {isSaving ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" /> : <Save size={16} className="mr-2" />}
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
