import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { DynamicQuickActions } from "./DynamicQuickActions";
import { Chatbot } from "./Chatbot";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 w-full">
      <Header />
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <DynamicQuickActions />
      <Chatbot />
      
      <main
        className={cn(
          "pt-16 transition-all duration-300",
          sidebarCollapsed ? "ml-16" : "ml-64"
        )}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};