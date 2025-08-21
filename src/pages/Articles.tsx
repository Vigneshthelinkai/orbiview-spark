import { useState } from "react";
import { Search, Filter, Mail, Eye, Calendar, MapPin, Building2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for articles
const mockArticles = [
  {
    id: "ART001",
    articleId: "12345",
    link: "https://example.com/article1",
    date: "2024-01-15",
    title: "AI Revolution in Healthcare: New R&D Opportunities",
    keywords: "AI, Healthcare, Research",
    category: "Technology",
    headline: "Healthcare companies investing heavily in AI research",
    location: "San Francisco, CA",
    status: "Active",
    company: "MedTech Corp",
    type: "R/D",
  },
  {
    id: "ART002",
    articleId: "12346",
    link: "https://example.com/article2",
    date: "2024-01-14",
    title: "New Infrastructure Project Announced in Austin",
    keywords: "Infrastructure, Construction, Development",
    category: "Construction",
    headline: "City announces $50M infrastructure development",
    location: "Austin, TX",
    status: "Pending",
    company: "BuildCorp Inc",
    type: "Project Announced",
  },
  {
    id: "ART003",
    articleId: "12347",
    link: "https://example.com/article3",
    date: "2024-01-13",
    title: "Downtown Office Complex Project Completed",
    keywords: "Commercial, Real Estate, Completion",
    category: "Real Estate",
    headline: "Major office complex opens doors to tenants",
    location: "New York, NY",
    status: "Completed",
    company: "RealEstate Pro",
    type: "Completed Project",
  },
];

interface ArticleModalProps {
  article: any;
  isOpen: boolean;
  onClose: () => void;
}

const RDModal = ({ article, isOpen, onClose }: ArticleModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-2xl glass-card">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Tag className="h-5 w-5 text-primary" />
          R&D Article Details
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Relevancy</label>
            <Badge variant="outline" className="bg-success/10 text-success">High Relevance</Badge>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Proceed Status</label>
            <Badge variant="outline" className="bg-primary/10 text-primary">Proceed</Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Insights Summary</label>
          <p className="text-sm bg-muted/50 p-3 rounded-lg">
            This article discusses breakthrough AI technologies in healthcare with significant R&D opportunities for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">R&D Focus Area</label>
            <p className="text-sm">Artificial Intelligence, Machine Learning</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">R&D Type</label>
            <p className="text-sm">Applied Research</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Location</label>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>United States → California → San Francisco</span>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const ProjectModal = ({ article, isOpen, onClose }: ArticleModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-2xl glass-card">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary" />
          Project Announced Details
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Identified Opportunity</label>
          <p className="text-sm bg-muted/50 p-3 rounded-lg">
            New infrastructure development project with potential for construction and engineering services.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Company Name</label>
            <p className="text-sm font-medium">{article.company}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Category</label>
            <Badge variant="outline">{article.category}</Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Project Details Scope</label>
          <p className="text-sm bg-muted/50 p-3 rounded-lg">
            Large-scale infrastructure development including roads, utilities, and commercial facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Lead Source</label>
            <p className="text-sm">Industry Publication</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Published Date</label>
            <p className="text-sm">{article.date}</p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const CompletedModal = ({ article, isOpen, onClose }: ArticleModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-2xl glass-card">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-primary" />
          Completed Project Details
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Relevancy</label>
            <Badge variant="outline" className="bg-success/10 text-success">Relevant</Badge>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Proceed Status</label>
            <Badge variant="outline" className="bg-primary/10 text-primary">Proceed</Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Insights Summary</label>
          <p className="text-sm bg-muted/50 p-3 rounded-lg">
            Successful completion of major office complex project, demonstrating market demand for similar developments.
          </p>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Project Keywords</label>
          <div className="flex flex-wrap gap-2">
            {article.keywords.split(", ").map((keyword: string) => (
              <Badge key={keyword} variant="secondary" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Companies Mentioned</label>
          <p className="text-sm font-medium">{article.company}</p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [modalType, setModalType] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const openModal = (article: any, type: string) => {
    setSelectedArticle(article);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setModalType("");
  };

  const getTypeButton = (type: string, article: any) => {
    const buttonProps = {
      "R/D": { variant: "outline" as const, className: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-300" },
      "Project Announced": { variant: "outline" as const, className: "bg-green-50 hover:bg-green-100 text-green-700 border-green-300" },
      "Completed Project": { variant: "outline" as const, className: "bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-300" },
    };

    return (
      <Button
        {...buttonProps[type as keyof typeof buttonProps]}
        size="sm"
        onClick={() => openModal(article, type)}
      >
        {type}
      </Button>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Articles & Emails</h1>
          <p className="text-muted-foreground mt-1">Manage and track article insights and email drafts</p>
        </div>
        
        <Button variant="glass">
          <Mail className="h-4 w-4 mr-2" />
          Go to Email Drafts
        </Button>
      </div>

      {/* Filters Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Search & Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by title, keyword, company, or link..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Construction">Construction</SelectItem>
                  <SelectItem value="Real Estate">Real Estate</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Articles Table */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Total Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Article ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Keywords</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockArticles.map((article) => (
                  <TableRow key={article.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{article.id}</TableCell>
                    <TableCell>{article.articleId}</TableCell>
                    <TableCell>{article.date}</TableCell>
                    <TableCell className="max-w-xs truncate" title={article.title}>
                      {article.title}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {article.keywords.split(", ").slice(0, 2).map((keyword) => (
                          <Badge key={keyword} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{article.category}</Badge>
                    </TableCell>
                    <TableCell>{article.location}</TableCell>
                    <TableCell>
                      <Badge
                        variant={article.status === "Active" ? "default" : article.status === "Pending" ? "secondary" : "outline"}
                      >
                        {article.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{article.company}</TableCell>
                    <TableCell>
                      {getTypeButton(article.type, article)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Modals */}
      {modalType === "R/D" && (
        <RDModal article={selectedArticle} isOpen={!!selectedArticle} onClose={closeModal} />
      )}
      {modalType === "Project Announced" && (
        <ProjectModal article={selectedArticle} isOpen={!!selectedArticle} onClose={closeModal} />
      )}
      {modalType === "Completed Project" && (
        <CompletedModal article={selectedArticle} isOpen={!!selectedArticle} onClose={closeModal} />
      )}
    </div>
  );
}