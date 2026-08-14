import Link from "next/link";
import { Bike, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-secondary p-2 rounded-full text-primary">
                <Bike className="h-6 w-6" />
              </div>
              <span className="font-display text-3xl tracking-tighter uppercase">
                Envios <span className="text-secondary">Dosruedas</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Líderes en mensajería express y logística urbana sobre dos ruedas. Innovación, rapidez y seguridad en cada entrega.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-display text-xl uppercase tracking-wider text-secondary">Empresa</h4>
            <ul className="space-y-4 text-sm font-body text-primary-foreground/70">
              <li><Link href="#" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Nuestra Red</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Trabaja con nosotros</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sostenibilidad</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl uppercase tracking-wider text-secondary">Servicios</h4>
            <ul className="space-y-4 text-sm font-body text-primary-foreground/70">
              <li><Link href="#" className="hover:text-white transition-colors">Mensajería Urbana</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">E-commerce Logística</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Envíos Nacionales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Trámites Legales</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl uppercase tracking-wider text-secondary">Contacto</h4>
            <ul className="space-y-4 text-sm font-body text-primary-foreground/70">
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-secondary" /> Av. Siempre Viva 123, Ciudad Central</li>
              <li className="flex gap-3"><Phone className="h-5 w-5 text-secondary" /> +57 (601) 555-0199</li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-secondary" /> hola@enviosdosruedas.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40 font-body">
          <p>© {new Date().getFullYear()} Envios Dosruedas S.A.S. Todos los derechos reservados. Diseñado para la velocidad.</p>
        </div>
      </div>
    </footer>
  );
}