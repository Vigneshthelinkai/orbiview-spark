import { useState } from "react";
import { Mail, Plus, Edit, Send, Trash2, Search, Filter, Star, Archive, Clock, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface EmailDraft {
  id: string;
  subject: string;
  recipient: string;
  content: string;
  status: "draft" | "scheduled" | "sent";
  priority: "low" | "medium" | "high";
  createdAt: string;
  scheduledFor?: string;
  tags: string[];
}

const mockEmailDrafts: EmailDraft[] = [
  {
    id: "1",
    subject: "Follow-up on R&D Partnership Proposal",
    recipient: "john.doe@techcorp.com",
    content: "Dear John,\n\nThank you for your interest in our R&D partnership proposal. I wanted to follow up on our previous discussion...",
    status: "draft",
    priority: "high",
    createdAt: "2024-01-15",
    tags: ["follow-up", "partnership", "r&d"]
  },
  {
    id: "2",
    subject: "Infrastructure Project Update",
    recipient: "sarah.johnson@infrastructure.gov",
    content: "Hi Sarah,\n\nI hope this email finds you well. I wanted to provide you with an update on the infrastructure project...",
    status: "scheduled",
    priority: "medium",
    createdAt: "2024-01-14",
    scheduledFor: "2024-01-20",
    tags: ["project-update", "infrastructure"]
  },
  {
    id: "3",
    subject: "Team Meeting Invitation",
    recipient: "team@company.com",
    content: "Hello Team,\n\nI'd like to schedule a team meeting to discuss our upcoming milestones...",
    status: "sent",
    priority: "low",
    createdAt: "2024-01-13",
    tags: ["meeting", "team"]
  },
  {
    id: "4",
    subject: "Quarterly Report Summary",
    recipient: "stakeholders@company.com",
    content: "Dear Stakeholders,\n\nI'm pleased to share our quarterly report summary with key achievements...",
    status: "draft",
    priority: "medium",
    createdAt: "2024-01-12",
    tags: ["report", "quarterly"]
  }
];

export default function EmailDrafts() {
  const [emailDrafts, setEmailDrafts] = useState<EmailDraft[]>(mockEmailDrafts);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [selectedEmail, setSelectedEmail] = useState<EmailDraft | null>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const filteredEmails = emailDrafts.filter(email => {
    const matchesSearch = email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         email.recipient.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || email.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || email.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "draft": return "secondary";
      case "scheduled": return "default";
      case "sent": return "outline";
      default: return "secondary";
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Email Drafts</h1>
          <p className="text-muted-foreground mt-1">Create, manage and schedule your email communications</p>
        </div>
        
        <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
          <DialogTrigger asChild>
            <Button variant="glass">
              <Plus className="h-4 w-4 mr-2" />
              Compose Email
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Compose New Email</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">To</label>
                  <Input placeholder="recipient@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Email subject" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Write your email content here..." 
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsComposeOpen(false)}>
                  Save Draft
                </Button>
                <Button>
                  Send Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Search & Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search emails by subject or recipient..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Drafts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEmails.map((email) => (
          <Card key={email.id} className="glass-card hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base line-clamp-2 mb-2">
                    {email.subject}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    To: {email.recipient}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <Badge variant={getStatusBadgeVariant(email.status)} className="text-xs">
                    {email.status}
                  </Badge>
                  <Badge variant={getPriorityBadgeVariant(email.priority)} className="text-xs">
                    {email.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {email.content}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {email.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {email.createdAt}
                </span>
                {email.scheduledFor && (
                  <span className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    Scheduled: {email.scheduledFor}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                {email.status === "draft" && (
                  <Button size="sm" className="flex-1">
                    <Send className="h-3 w-3 mr-1" />
                    Send
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEmails.length === 0 && (
        <Card className="glass-card">
          <CardContent className="text-center py-12">
            <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No emails found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || statusFilter !== "all" || priorityFilter !== "all"
                ? "No emails match your current filters."
                : "You haven't created any email drafts yet."}
            </p>
            <Button variant="glass" onClick={() => setIsComposeOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create your first email draft
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}