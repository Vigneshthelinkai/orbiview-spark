import { BarChart3, Users, FileText, TrendingUp, Calendar, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Articles",
    value: "1,284",
    change: "+12.5%",
    trend: "up" as const,
    icon: FileText,
  },
  {
    title: "Active Proposals",
    value: "47",
    change: "+8.2%",
    trend: "up" as const,
    icon: BarChart3,
  },
  {
    title: "Team Members",
    value: "156",
    change: "+2.4%",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "23.4%",
    change: "-1.2%",
    trend: "down" as const,
    icon: TrendingUp,
  },
];

const recentActivities = [
  {
    id: 1,
    type: "article",
    title: "New R&D opportunity in AI Healthcare",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    type: "proposal",
    title: "Infrastructure proposal submitted",
    time: "4 hours ago",
    status: "sent",
  },
  {
    id: 3,
    type: "team",
    title: "New team member joined",
    time: "1 day ago",
    status: "active",
  },
  {
    id: 4,
    type: "client",
    title: "Client meeting scheduled",
    time: "2 days ago",
    status: "scheduled",
  },
];

const upcomingTasks = [
  { id: 1, task: "Review Q1 performance metrics", priority: "high", due: "Today" },
  { id: 2, task: "Prepare client presentation", priority: "medium", due: "Tomorrow" },
  { id: 3, task: "Update team member profiles", priority: "low", due: "This week" },
  { id: 4, task: "LinkedIn outreach campaign", priority: "high", due: "Friday" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your HR dashboard today.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            This Week
          </Button>
          <Button variant="glass">
            <Bell className="h-4 w-4 mr-2" />
            View All Notifications
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass-card hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs mt-2">
                <span
                  className={`font-medium ${
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge
                      variant={
                        activity.status === "pending"
                          ? "secondary"
                          : activity.status === "sent"
                          ? "default"
                          : "outline"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Tasks */}
        <div>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm mb-2">{task.task}</p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{task.due}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="glass" size="sm">
                View All Tasks
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions Summary */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col gap-2" variant="glass">
              <FileText className="h-6 w-6" />
              <span className="text-sm">New Proposal</span>
            </Button>
            <Button className="h-20 flex-col gap-2" variant="glass">
              <Users className="h-6 w-6" />
              <span className="text-sm">Add Team Member</span>
            </Button>
            <Button className="h-20 flex-col gap-2" variant="glass">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">View Analytics</span>
            </Button>
            <Button className="h-20 flex-col gap-2" variant="glass">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Performance Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
