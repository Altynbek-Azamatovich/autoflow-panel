import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Phone, Car } from "lucide-react";

export default function Clients() {
  const mockClients = [
    { id: 1, name: "Иван Петров", phone: "+7 (999) 123-45-67", car: "Toyota Camry", visits: 12 },
    { id: 2, name: "Мария Сидорова", phone: "+7 (999) 234-56-78", car: "Honda CR-V", visits: 8 },
    { id: 3, name: "Алексей Козлов", phone: "+7 (999) 345-67-89", car: "BMW X5", visits: 15 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Клиенты</h1>
            <p className="text-muted-foreground mt-1">База клиентов и история обслуживания</p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-primary to-orange-600 hover:opacity-90">
            <Plus className="h-4 w-4" />
            Добавить клиента
          </Button>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по имени, телефону или автомобилю..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border"
                >
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">{client.name}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {client.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Car className="h-3 w-3" />
                        {client.car}
                      </span>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {client.visits} визитов
                    </p>
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
