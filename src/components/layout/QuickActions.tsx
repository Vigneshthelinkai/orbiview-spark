import { useState } from "react";
import { Plus, FileText, Users, BarChart3, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const quickActions = [
  { icon: FileText, label: "Add Proposal", action: () => console.log("Add Proposal") },
  { icon: Users, label: "Manage Team", action: () => console.log("Manage Team") },
  { icon: BarChart3, label: "Performance", action: () => console.log("Performance") },
  { icon: Settings, label: "Quick Settings", action: () => console.log("Settings") },
];

export const QuickActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      {/* Expanded Actions */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 mb-4 transition-all duration-300",
          isExpanded
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-8 pointer-events-none"
        )}
      >
        {quickActions.map((action, index) => (
          <div
            key={action.label}
            className="flex items-center gap-3 group"
            style={{
              transitionDelay: isExpanded ? `${index * 50}ms` : "0ms",
            }}
          >
            {/* Label */}
            <div className="glass-card px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium whitespace-nowrap">
                {action.label}
              </span>
            </div>
            
            {/* Action Button */}
            <Button
              onClick={action.action}
              size="sm"
              variant="glass"
              className="w-12 h-12 rounded-full transition-smooth hover:scale-110 shadow-lg"
            >
              <action.icon className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        variant="glass"
        className={cn(
          "w-14 h-14 rounded-full transition-all duration-300 shadow-xl",
          "hover:scale-110 hover:shadow-2xl",
          isExpanded && "rotate-45"
        )}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <Plus className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};