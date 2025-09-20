import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { AccountingDashboard } from "@/components/accounting/AccountingDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn, UserPlus, Shield } from "lucide-react";
import heroImage from "@/assets/accounting-hero.jpg";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  // Mock authentication - in real app, would connect to Supabase
  const handleAuth = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return (
      <div className="flex h-screen bg-background">
        <Sidebar />
        <main className="flex-1 lg:ml-80 overflow-auto">
          <div className="p-6 lg:p-8">
            <AccountingDashboard />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Shiv Accounts Cloud
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Complete cloud-based accounting solution for modern businesses. 
                Manage contacts, products, transactions, and generate professional reports - all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  onClick={() => setAuthMode("signup")}
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => setAuthMode("login")}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need for accounting
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Powerful features designed for businesses of all sizes
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Card className="card-hover">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Master Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Centralized management of contacts, products, taxes, and chart of accounts. 
                    Keep all your business data organized and accessible.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <LogIn className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Transaction Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete purchase and sales cycles. From orders to invoices to payments - 
                    track every transaction seamlessly.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <UserPlus className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Financial Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Auto-generated Balance Sheet, P&L, Stock Reports, and Partner Ledgers. 
                    Get insights into your business performance instantly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Section */}
      <div className="py-16 bg-muted/30">
        <div className="mx-auto max-w-md px-6">
          <Card className="shadow-professional">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {authMode === "login" ? "Welcome Back" : "Create Account"}
              </CardTitle>
              <p className="text-muted-foreground">
                {authMode === "login" 
                  ? "Sign in to your account to continue" 
                  : "Start your accounting journey today"
                }
              </p>
            </CardHeader>
            <CardContent>
              <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as "login" | "signup")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input id="login-password" type="password" placeholder="Enter your password" />
                  </div>
                  <Button 
                    onClick={handleAuth}
                    className="w-full bg-gradient-primary shadow-primary"
                  >
                    Sign In
                  </Button>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input id="signup-name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" placeholder="Create a password" />
                  </div>
                  <Button 
                    onClick={handleAuth}
                    className="w-full bg-gradient-primary shadow-primary"
                  >
                    Create Account
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> This demo uses mock authentication. 
                  For full functionality including user management and data persistence, 
                  connect this application to Supabase.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;