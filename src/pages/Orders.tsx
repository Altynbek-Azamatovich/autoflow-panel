import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Orders() {
  const mockOrders = [
    { id: 1001, client: "Иван Петров", car: "Toyota Camry", service: "Замена масла", status: "В работе", price: 2500 },
    { id: 1002, client: "Мария Сидорова", car: "Honda CR-V", service: "ТО-1", status: "Ожидает", price: 8500 },
    { id: 1003, client: "Алексей Козлов", car: "BMW X5", service: "Диагностика", status: "Завершён", price: 3000 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "В работе": return "bg-warning/20 text-warning border-warning/30";
      case "Ожидает": return "bg-info/20 text-info border-info/30";
      case "Завершён": return "bg-success/20 text-success border-success/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Заказы</h1>
            <p className="text-muted-foreground mt-1">Управление заказами и заказ-нарядами</p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-primary to-orange-600 hover:opacity-90">
            <Plus className="h-4 w-4" />
            Новый заказ
          </Button>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по клиенту, автомобилю или услуге..."
                  className="pl-10 bg-secondary border-border"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <p className="font-semibold text-foreground">Заказ #{order.id}</p>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {order.client} • {order.car}
                    </p>
                    <p className="text-sm text-foreground">{order.service}</p>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-xl font-bold text-primary">₽{order.price.toLocaleString()}</p>
                    <Button variant="outline" size="sm" className="border-border hover:bg-secondary">
                      Открыть
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
