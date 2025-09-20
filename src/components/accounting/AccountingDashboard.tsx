import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Package,
  ShoppingCart,
  FileText
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AccountingDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your business today.
          </p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
          <Button className="bg-gradient-primary shadow-primary">
            Create Invoice
          </Button>
          <Button variant="outline">Add Transaction</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="₹1,24,500"
          change="+12% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <StatsCard
          title="Total Expenses"
          value="₹48,200"
          change="+8% from last month"
          changeType="negative"
          icon={TrendingUp}
        />
        <StatsCard
          title="Active Customers"
          value="42"
          change="+3 new this month"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Products"
          value="156"
          change="12 out of stock"
          changeType="neutral"
          icon={Package}
        />
      </div>

      {/* Charts and Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FileText className="h-6 w-6" />
                New Invoice
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <ShoppingCart className="h-6 w-6" />
                Purchase Order
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Users className="h-6 w-6" />
                Add Contact
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Package className="h-6 w-6" />
                Add Product
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <RecentTransactions />
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Accounts Receivable</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₹85,200</div>
            <p className="text-sm text-muted-foreground mt-1">
              Outstanding from customers
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current</span>
                <span className="font-medium">₹45,200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">30+ Days</span>
                <span className="font-medium">₹40,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Accounts Payable</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₹32,800</div>
            <p className="text-sm text-muted-foreground mt-1">
              Outstanding to vendors
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current</span>
                <span className="font-medium">₹20,800</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">30+ Days</span>
                <span className="font-medium">₹12,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">₹76,300</div>
            <p className="text-sm text-muted-foreground mt-1">
              Net positive this month
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cash In</span>
                <span className="font-medium text-success">₹1,24,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cash Out</span>
                <span className="font-medium text-destructive">₹48,200</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}