import { Bell, Search, Lightbulb, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 glass-nav border-b border-border/20">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left: Logo & App Name */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">HR</span>
          </div>
          <h1 className="text-xl font-semibold text-foreground">HR Dashboard</h1>
        </div>

        {/* Center: Global Search */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles, employees, projects..."
              className="pl-10 glass-card border-input-border bg-input backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <Lightbulb className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <MessageCircle className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/api/placeholder/32/32" alt="Profile" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 glass-card" align="end">
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>Personal Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};