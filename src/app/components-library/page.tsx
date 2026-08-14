
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bike, Send, Package, MapPin, Phone } from "lucide-react";

export default function LibraryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-12 mx-auto">
        <div className="space-y-4 mb-12">
          <h1 className="text-6xl font-headline text-primary uppercase tracking-tighter">Librería de Componentes</h1>
          <p className="text-muted-foreground font-body">Componentes base estilizados para Envios Dosruedas.</p>
        </div>

        <div className="grid gap-16">
          {/* Buttons Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-headline uppercase border-b pb-2">Botones</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button size="lg" className="h-14 px-8 font-bold uppercase tracking-widest">Large Action</Button>
            </div>
          </section>

          {/* Inputs Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-headline uppercase border-b pb-2">Entradas de Texto</h2>
            <div className="grid gap-6 max-w-2xl">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Dirección de Recogida</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-primary" />
                  <Input placeholder="Ej: Calle 10 # 5-20" className="pl-10 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Teléfono</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-primary" />
                  <Input placeholder="+57 300 000 0000" className="pl-10 h-12" />
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-headline uppercase border-b pb-2">Tarjetas Informativas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg border-none">
                <CardHeader className="bg-primary text-primary-foreground p-6">
                  <div className="bg-secondary/20 p-2 rounded-lg w-fit mb-4">
                    <Package className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-headline uppercase text-2xl">Básico</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">Ideal para documentos y paquetes pequeños de hasta 1kg.</p>
                  <div className="text-3xl font-bold text-primary">$8.500 COP</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl border-2 border-secondary overflow-hidden relative">
                <div className="bg-secondary text-primary text-[10px] font-bold uppercase tracking-widest py-1 text-center absolute top-0 w-full">Más Popular</div>
                <CardHeader className="p-6 pt-10">
                  <div className="bg-primary/10 p-2 rounded-lg w-fit mb-4">
                    <Bike className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline uppercase text-2xl text-primary">Estándar</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">Entrega en menos de 90 minutos para paquetes hasta 5kg.</p>
                  <div className="text-3xl font-bold text-primary">$12.500 COP</div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
