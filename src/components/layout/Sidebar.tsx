import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  FileText, 
  ShoppingCart, 
  TrendingUp,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Dashboard', href: '#', icon: LayoutDashboard, current: true },
  { name: 'Master Data', href: '#', icon: Users, current: false, 
    children: [
      { name: 'Contacts', href: '#contacts' },
      { name: 'Products', href: '#products' },
      { name: 'Tax Master', href: '#tax' },
      { name: 'Chart of Accounts', href: '#accounts' },
    ]
  },
  { name: 'Transactions', href: '#', icon: FileText, current: false,
    children: [
      { name: 'Sales Orders', href: '#sales-orders' },
      { name: 'Purchase Orders', href: '#purchase-orders' },
      { name: 'Invoices', href: '#invoices' },
      { name: 'Bills', href: '#bills' },
    ]
  },
  { name: 'Payments', href: '#', icon: ShoppingCart, current: false },
  { name: 'Reports', href: '#', icon: TrendingUp, current: false,
    children: [
      { name: 'Balance Sheet', href: '#balance-sheet' },
      { name: 'Profit & Loss', href: '#profit-loss' },
      { name: 'Stock Report', href: '#stock-report' },
      { name: 'Partner Ledger', href: '#partner-ledger' },
    ]
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['Master Data']);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="px-6 py-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Package className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Shiv Accounts</h1>
            <p className="text-sm text-muted-foreground">Cloud</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <div key={item.name}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start h-12 px-4",
                item.current 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
              onClick={() => item.children && toggleExpanded(item.name)}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
              {item.children && (
                <Menu className={cn(
                  "ml-auto h-4 w-4 transition-transform",
                  expandedItems.includes(item.name) && "rotate-90"
                )} />
              )}
            </Button>
            
            {/* Sub-navigation */}
            {item.children && expandedItems.includes(item.name) && (
              <div className="ml-8 mt-2 space-y-1">
                {item.children.map((child) => (
                  <Button
                    key={child.name}
                    variant="ghost"
                    className="w-full justify-start h-10 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-accent"
                  >
                    {child.name}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-4 py-4 border-t border-border">
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/20" onClick={() => setIsOpen(false)} />
          <div className="relative flex flex-col w-80 bg-card border-r border-border shadow-lg">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className={cn("hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 bg-card border-r border-border", className)}>
        {sidebarContent}
      </div>
    </>
  );
}