import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-10 bg-background">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-8 container mx-auto py-10">
        {/* Logo & Hakkında */}
        <div className="flex flex-col gap-3">
          <img src="/logo.svg" alt="logo-icon" className="w-24" />
          <p className="text-sm text-muted-foreground font-semibold">
            Uygun fiyatlı etkinlik biletleri için doğru yerdesiniz!
          </p>
        </div>

        {/* Kurumsal */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Biletinle</h2>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="hover:underline cursor-pointer">Hakkımızda</li>
            <li className="hover:underline cursor-pointer">İletişim</li>
            <li className="hover:underline cursor-pointer">
              Sıkça Sorulan Sorular
            </li>
            <li className="hover:underline cursor-pointer">
              Gizlilik Politikası
            </li>
          </ul>
        </div>

        {/* E-Bülten */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">E-Bülten</h2>
          <Label htmlFor="email" className="text-sm">
            E-posta adresiniz
          </Label>
          <div className="flex gap-2">
            <Input
              id="email"
              placeholder="eposta@ornek.com"
              className="w-full"
            />
            <Button>Gönder</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Kampanya ve etkinliklerden ilk siz haberdar olun.
          </p>
        </div>

        {/* Sosyal Medya */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Bizi Takip Edin</h2>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <Separator />
      <div className="text-center text-sm text-muted-foreground py-4">
        © {new Date().getFullYear()} Biletinle. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
