import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  FileText,
  Mail,
  Users,
  Database,
  RotateCcw,
  Linkedin,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: FileText, label: "Proposal Maker", path: "/proposal-maker" },
  { icon: Mail, label: "Articles & Emails", path: "/articles" },
  { icon: Users, label: "Team Members", path: "/team" },
  { icon: Database, label: "Data Management", path: "/data" },
  { icon: RotateCcw, label: "Past Client Reactivation", path: "/reactivation" },
  { icon: Linkedin, label: "LinkedIn Opportunities", path: "/linkedin" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed left-0 top-16 bottom-0 glass-nav shadow-lg transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <div className="absolute -right-3 top-6 z-50">
        <Button
          onClick={onToggle}
          size="sm"
          variant="outline"
          className="h-6 w-6 rounded-full glass-card border-border/30 p-0"
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-smooth group",
                "hover:bg-primary/10",
                isActive
                  ? "bg-primary/15 text-primary border border-primary/20 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <span className="font-medium truncate">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
