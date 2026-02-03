import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlertTriangle, Shield, Lock, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const concernCategories = [
  { value: 'ethics', label: 'Ethics or Boundary Violation' },
  { value: 'conflict', label: 'Conflict of Interest' },
  { value: 'behavior', label: 'Inappropriate Behavior' },
  { value: 'safety', label: 'Safety Concern' },
  { value: 'process', label: 'Process or Program Issue' },
  { value: 'other', label: 'Other' },
];

const ventures = [
  { value: 'rockpulse', label: 'RockPulse Analytics' },
  { value: 'minesafe', label: 'MineSafe AI' },
  { value: 'tunneltech', label: 'TunnelTech Solutions' },
  { value: 'general', label: 'Not venture-specific' },
];

export default function MentorEscalation() {
  const [category, setCategory] = useState('');
  const [venture, setVenture] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Concern Submitted',
      description: 'Your concern has been sent to the Program Manager. You will receive a response within 48 hours.',
    });

    // Reset form
    setCategory('');
    setVenture('');
    setUrgency('normal');
    setDescription('');
    setIsSubmitting(false);
  };

  const isFormValid = category && venture && description.length > 20;

  return (
    <MentorPortalLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            Raise a Concern
          </h1>
          <p className="text-muted-foreground mt-1">
            Confidentially report issues, ethics concerns, or escalate matters to the Program Manager.
          </p>
        </div>

        {/* Confidentiality Notice */}
        <Card className="border-accent/50 bg-accent/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Lock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Your Privacy is Protected</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  All submissions are confidential and go directly to the Program Manager. 
                  Your report will be handled with discretion and you will not be identified 
                  to other parties without your consent, except where required by law.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Escalation Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit a Concern</CardTitle>
            <CardDescription>
              Provide details about the issue you want to escalate. Be as specific as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category of Concern *</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {concernCategories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Related Venture */}
              <div className="space-y-2">
                <Label htmlFor="venture">Related Venture *</Label>
                <Select value={venture} onValueChange={setVenture}>
                  <SelectTrigger id="venture">
                    <SelectValue placeholder="Select a venture" />
                  </SelectTrigger>
                  <SelectContent>
                    {ventures.map(v => (
                      <SelectItem key={v.value} value={v.value}>
                        {v.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Urgency */}
              <div className="space-y-3">
                <Label>Urgency Level</Label>
                <RadioGroup value={urgency} onValueChange={setUrgency} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normal" id="normal" />
                    <Label htmlFor="normal" className="font-normal cursor-pointer">
                      Normal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high" className="font-normal cursor-pointer">
                      High Priority
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="urgent" id="urgent" />
                    <Label htmlFor="urgent" className="font-normal cursor-pointer text-destructive">
                      Urgent
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe the concern in detail. Include relevant dates, names (if applicable), and any context that would help the Program Manager understand the situation."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[150px]"
                />
                <p className="text-xs text-muted-foreground">
                  Minimum 20 characters. Be specific but concise.
                </p>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Response time: 24-48 hours for normal, same day for urgent.
                </p>
                <Button type="submit" disabled={!isFormValid || isSubmitting}>
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Submit Concern
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Need Immediate Assistance?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              For urgent safety concerns or matters that cannot wait, please contact:
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="font-medium">Program Manager</p>
                  <p className="text-sm text-muted-foreground">For escalations and program issues</p>
                </div>
                <Button variant="outline" size="sm">Contact</Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="font-medium">Program Director</p>
                  <p className="text-sm text-muted-foreground">For governance and policy matters</p>
                </div>
                <Button variant="outline" size="sm">Contact</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MentorPortalLayout>
  );
}
