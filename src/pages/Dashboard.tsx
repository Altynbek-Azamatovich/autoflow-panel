import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, Users, TrendingUp, Clock, Play, Square } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Dashboard() {
  const [shiftActive, setShiftActive] = useState(false);

  const handleShiftToggle = () => {
    setShiftActive(!shiftActive);
    toast.success(shiftActive ? "Смена закрыта" : "Смена открыта");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Рабочая панель</h1>
            <p className="text-muted-foreground mt-1">
              Добро пожаловать в систему управления автосервисом
            </p>
          </div>
          <Button
            onClick={handleShiftToggle}
            className={`gap-2 ${
              shiftActive
                ? "bg-destructive hover:bg-destructive/90"
                : "bg-gradient-to-r from-primary to-orange-600 hover:opacity-90"
            }`}
          >
            {shiftActive ? (
              <>
                <Square className="h-4 w-4" />
                Закрыть смену
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Открыть смену
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Активные заказы</CardTitle>
              <ClipboardList className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 за последний час</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Клиенты</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-muted-foreground">+18 за этот месяц</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Выручка сегодня</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₽45,231</div>
              <p className="text-xs text-muted-foreground">+20.1% от вчера</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Время смены</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {shiftActive ? "3:24" : "--:--"}
              </div>
              <p className="text-xs text-muted-foreground">
                {shiftActive ? "Смена активна" : "Смена не открыта"}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Последние заказы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div
                    key={order}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div>
                      <p className="font-medium">Заказ #{1000 + order}</p>
                      <p className="text-sm text-muted-foreground">
                        Toyota Camry • Замена масла
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-primary">₽2,500</p>
                      <p className="text-xs text-muted-foreground">В работе</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <Button className="w-full justify-start gap-3 bg-gradient-to-r from-primary to-orange-600 hover:opacity-90">
                  <ClipboardList className="h-4 w-4" />
                  Создать новый заказ
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 border-border hover:bg-secondary"
                >
                  <Users className="h-4 w-4" />
                  Добавить клиента
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 border-border hover:bg-secondary"
                >
                  <TrendingUp className="h-4 w-4" />
                  Посмотреть отчёты
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
