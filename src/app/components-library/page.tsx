import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bike, Send, Package, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LibraryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-12 mx-auto">
        <div className="space-y-4 mb-12 border-l-8 border-brand-yellow pl-6">
          <h1 className="text-7xl font-display text-brand-blue uppercase leading-none">Librería de Componentes</h1>
          <p className="text-muted-foreground font-body text-lg">Sistema de diseño oficial para Envios Dosruedas.</p>
        </div>

        <div className="grid gap-20">
          {/* Typography Section */}
          <section className="space-y-8">
            <h2 className="text-4xl font-display text-brand-blue border-b-2 border-brand-yellow pb-2">Tipografía</h2>
            <div className="space-y-6">
              <div>
                <span className="text-xs font-subheading text-muted-foreground block mb-1">Display (Anton SC)</span>
                <p className="text-6xl font-display text-brand-blue uppercase">Velocidad Extrema</p>
              </div>
              <div>
                <span className="text-xs font-subheading text-muted-foreground block mb-1">Subheading (Bebas Neue)</span>
                <p className="text-4xl font-subheading text-brand-blue">Mensajería Express Urbana</p>
              </div>
              <div>
                <span className="text-xs font-subheading text-muted-foreground block mb-1">Body (Outfit)</span>
                <p className="text-lg font-body max-w-2xl">
                  Nuestra red logística está diseñada para ofrecer la máxima eficiencia en cada entrega, 
                  garantizando que tus paquetes lleguen a su destino de forma segura y en tiempo récord.
                </p>
              </div>
            </div>
          </section>

          {/* Buttons Section */}
          <section className="space-y-8">
            <h2 className="text-4xl font-display text-brand-blue border-b-2 border-brand-yellow pb-2">Botones de Acción</h2>
            <div className="flex flex-wrap gap-6 items-center">
              <Button size="lg" className="h-14 px-10 font-subheading text-xl uppercase tracking-widest shadow-xl">Solicitar Envío</Button>
              <Button variant="secondary" size="lg" className="h-14 px-10 font-subheading text-xl uppercase tracking-widest border-2 border-brand-blue shadow-lg">Ver Tarifas</Button>
              <Button variant="outline" className="font-subheading text-lg">Rastrear Guía</Button>
              <Badge className="font-subheading py-1 px-4 text-sm bg-brand-yellow text-brand-blue border-none">Express 60m</Badge>
            </div>
          </section>

          {/* Cards Section */}
          <section className="space-y-8">
            <h2 className="text-4xl font-display text-brand-blue border-b-2 border-brand-yellow pb-2">Tarjetas de Servicio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-2xl border-none overflow-hidden group">
                <CardHeader className="bg-brand-blue text-white p-8">
                  <div className="bg-brand-yellow p-3 rounded-xl w-fit mb-4">
                    <Bike className="h-8 w-8 text-brand-blue" />
                  </div>
                  <CardTitle className="font-display text-3xl uppercase">Mensajería Urbana</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-muted-foreground font-body text-lg mb-6">Entregas locales en menos de 90 minutos con rastreo en tiempo real.</p>
                  <div className="text-4xl font-display text-brand-blue leading-none">$8.500 <span className="text-sm font-subheading">COP</span></div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-4 border-brand-yellow overflow-hidden relative">
                <div className="bg-brand-yellow text-brand-blue text-xs font-subheading py-1 text-center absolute top-0 w-full uppercase tracking-tighter">Servicio Recomendado</div>
                <CardHeader className="p-8 pt-12">
                  <div className="bg-brand-blue/10 p-3 rounded-xl w-fit mb-4">
                    <Package className="h-8 w-8 text-brand-blue" />
                  </div>
                  <CardTitle className="font-display text-3xl text-brand-blue uppercase">E-commerce Flex</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-muted-foreground font-body text-lg mb-6">Solución integral para tiendas online con recolección programada diaria.</p>
                  <div className="text-4xl font-display text-brand-blue leading-none">$12.500 <span className="text-sm font-subheading">COP</span></div>
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