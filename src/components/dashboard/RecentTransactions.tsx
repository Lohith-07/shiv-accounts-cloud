import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const transactions = [
  {
    id: "1",
    type: "Sale",
    customer: "Nimesh Pathak",
    amount: "₹25,000",
    status: "Paid",
    date: "2024-01-15",
  },
  {
    id: "2",
    type: "Purchase",
    vendor: "Azure Furniture",
    amount: "₹15,000",
    status: "Pending",
    date: "2024-01-14",
  },
  {
    id: "3",
    type: "Sale",
    customer: "Rajesh Kumar",
    amount: "₹8,500",
    status: "Paid",
    date: "2024-01-13",
  },
  {
    id: "4",
    type: "Purchase",
    vendor: "Modern Designs Ltd",
    amount: "₹32,000",
    status: "Due",
    date: "2024-01-12",
  },
];

export function RecentTransactions() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center space-x-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {transaction.type === "Sale" 
                      ? transaction.customer?.charAt(0) 
                      : transaction.vendor?.charAt(0)
                    }
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {transaction.type === "Sale" ? transaction.customer : transaction.vendor}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.type} • {transaction.date}
                  </p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm font-semibold text-foreground">{transaction.amount}</p>
                <Badge 
                  variant={
                    transaction.status === "Paid" ? "default" :
                    transaction.status === "Pending" ? "secondary" : "destructive"
                  }
                  className="text-xs"
                >
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}