import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Settings() {
  const handleSave = () => {
    toast.success("Настройки сохранены");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Настройки</h1>
          <p className="text-muted-foreground mt-1">Управление параметрами сервиса</p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Информация о сервисе</CardTitle>
              <CardDescription>Основные данные вашего автосервиса</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="serviceName">Название сервиса</Label>
                <Input
                  id="serviceName"
                  placeholder="Название вашего автосервиса"
                  className="bg-secondary border-border"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="service@example.com"
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Адрес</Label>
                <Input
                  id="address"
                  placeholder="Город, улица, дом"
                  className="bg-secondary border-border"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Рабочие параметры</CardTitle>
              <CardDescription>Настройки работы сервиса</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="workplaces">Количество рабочих мест</Label>
                  <Input
                    id="workplaces"
                    type="number"
                    placeholder="4"
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workingHours">Часы работы</Label>
                  <Input
                    id="workingHours"
                    placeholder="09:00 - 18:00"
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Уведомления</CardTitle>
              <CardDescription>Настройка уведомлений о событиях</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Новые заказы</p>
                  <p className="text-sm text-muted-foreground">
                    Получать уведомления о новых заказах
                  </p>
                </div>
                <Button variant="outline" size="sm" className="border-border">
                  Включено
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Закрытие смены</p>
                  <p className="text-sm text-muted-foreground">
                    Уведомление при закрытии смены
                  </p>
                </div>
                <Button variant="outline" size="sm" className="border-border">
                  Включено
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="bg-gradient-to-r from-primary to-orange-600 hover:opacity-90"
            >
              Сохранить изменения
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
