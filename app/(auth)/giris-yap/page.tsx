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
import { login } from "@/services/userService";
import { useAuthStore } from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ticket } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi girin"),
  password: z.string().min(4, "Parola en az 4 karakter olmalıdır"),
});

const LoginPage = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    login(values)
      .then((res) => {
        if (res.data.success) {
          toast.success("Giriş başarılı!");
          setUser(res.data.data);
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
    <PageContainer className="container mx-auto flex items-center  bg-gradient-to-br from-primary to-red-900/90 rounded-xl w-full p-2 h-[800px]">
      <div className="w-7/12 bg-white h-full rounded-xl flex items-center justify-center p-24 flex-col">
        <div className="flex flex-col max-w-lg">
          <h1 className="text-3xl font-bold">Giriş Yap!</h1>
          <p className="tracking-tight leading-tight text-muted-foreground">
            Biletinle'ye giriş yapmak için aşağıdaki formu doldurun. Hızlı ve
            güvenli bir şekilde giriş yapabilirsiniz.
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
                      <Input placeholder="***********" {...field} />
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
                <Button type="submit">Giriş Yap</Button>
              </div>
              <Separator />
              <div className="w-full flex items-center justify-start">
                <Link
                  href={"/kayit-ol"}
                  className="text-sm text-primary hover:underline font-semibold"
                >
                  Bir hesaba sahip değil misin?
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-5/12 flex items-center justify-center text-white">
        <Ticket className="rotate-45 drop-shadow-2xl" size={200} />
      </div>
    </PageContainer>
  );
};

export default LoginPage;
