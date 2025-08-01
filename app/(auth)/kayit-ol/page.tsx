"use client";
import PageContainer from "@/components/Containers/PageContainer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { register } from "@/services/userService";
import { useAuthStore } from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ticket } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi girin"),
  password: z.string().min(4, "Parola en az 4 karakter olmalıdır"),
});

const RegisterPage = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    register(values)
      .then((response) => {
        if (response.data.success) {
          toast.success("Kayıt başarılı! Giriş yapabilirsiniz.");
          setUser(response.data.data);
          form.reset();
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        console.log("finally çalıştı");
      });
  };

  return (
    <PageContainer className="container mx-auto flex items-center justify-center rounded-xl w-full p-2 h-[800px]">
      <div className="flex flex-col max-w-lg">
        <h1 className="text-3xl font-bold">Merhaba!</h1>
        <p className="tracking-tight leading-tight text-muted-foreground">
          Biletinle&apos;ye kaydolmak için aşağıdaki formu doldurun. Hızlı ve
          güvenli bir şekilde kayıt olabilirsiniz. Unutmayın, biletlerinizi
          kolayca satın alabilir ve etkinliklere katılabilirsiniz.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Posta</FormLabel>
                  <FormControl>
                    <Input placeholder="ör: example@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parola</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="***********"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div className="w-full flex items-center mb-4 justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Beni Hatırla</Label>
                </div>
                <Link
                  href={"/parolami-unuttum"}
                  className="text-sm text-primary hover:underline font-semibold"
                >
                  Parolamı Unuttum
                </Link>
              </div> */}
            <div className="w-full">
              <Button type="submit">Kayıt Ol</Button>
            </div>
            <Separator />
            <div className="w-full flex items-center justify-start">
              <div className="text-xs text-muted-foreground font-medium">
                Bir hesaba sahip misin?{" "}
                <Link
                  href={"/giris-yap"}
                  className="text-primary hover:underline"
                >
                  Giriş Yap
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </PageContainer>
  );
};

export default RegisterPage;
