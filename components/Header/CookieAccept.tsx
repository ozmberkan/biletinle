import { Button } from "@/components/ui/button";

export default function CookieAccept() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 inset-x-4` to the container element.
    <div className="bg-background z-50 border px-4 py-3 ">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <p className="text-sm font-medium   text-muted-foreground">
          Bizler, web sitemizdeki deneyiminizi geliştirmek için çerezler
          kullanıyoruz. Çerezleri kabul ederek, bu uygulamayı kullanmaya devam
          edersiniz.
        </p>
        <div className="flex gap-2 max-md:flex-wrap">
          <Button size="sm">Kabul Et</Button>
          <Button variant="outline" size="sm">
            Reddet
          </Button>
        </div>
      </div>
    </div>
  );
}
