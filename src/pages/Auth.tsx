import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Wrench } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Auth() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.startsWith('7') ? cleaned : '7' + cleaned;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formattedPhone = formatPhone(phone);
      const email = `${formattedPhone}@myauto.kz`;

      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        toast.success(t("auth.welcome"));
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              phone: formattedPhone,
            },
          },
        });

        if (signUpError) throw signUpError;

        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const { error: profileError } = await supabase
            .from("profiles")
            .insert({
              user_id: session.user.id,
              phone: formattedPhone,
            });

          if (profileError) console.error("Profile creation error:", profileError);

          const { error: roleError } = await supabase
            .from("user_roles")
            .insert({
              user_id: session.user.id,
              role: "partner",
            });

          if (roleError) console.error("Role assignment error:", roleError);
        }

        toast.success(t("auth.signupSuccess"));
      }
    } catch (error: any) {
      toast.error(error.message || t("common.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
              <Wrench className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t("app.name")}
          </h1>
          <p className="text-muted-foreground">
            {t("app.subtitle")}
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>{isLogin ? t("auth.loginTitle") : t("auth.signupTitle")}</CardTitle>
            <CardDescription>
              {isLogin ? t("auth.loginDescription") : t("auth.signupDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">{t("auth.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("auth.phonePlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t("auth.password")}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t("auth.passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="bg-secondary border-border"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90"
                disabled={loading}
              >
                {loading ? t("auth.loading") : isLogin ? t("auth.loginButton") : t("auth.signupButton")}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isLogin ? t("auth.noAccount") : t("auth.hasAccount")}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
