'use client';

import {
  ArrowRight,
  Bike,
  ChevronDown,
  Clock,
  HelpCircle,
  Home,
  Info,
  LucideIcon,
  Mail,
  Menu,
  Phone,
  Share2,
  ShoppingBag,
  TrendingDown,
  X,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href?: string;
  icon: LucideIcon;
  dropdownItems?: DropdownItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/', icon: Home },
  {
    label: 'Servicios',
    icon: Bike,
    dropdownItems: [
      {
        label: 'Envíos Express',
        href: '/servicios/envios-express',
        description: 'Rápido, en 2 horas',
        icon: Zap,
      },
      {
        label: 'Envíos LowCost',
        href: '/servicios/envios-lowcost',
        description: 'Económico e inteligente',
        icon: TrendingDown,
      },
      {
        label: 'Envíos Flex (MeLi)',
        href: '/servicios/enviosflex',
        description: 'Socio MercadoLibre Flex',
        icon: Clock,
      },
      {
        label: 'E-Commerce & 3PL',
        href: '/servicios/plan-emprendedores',
        description: 'Logística para PyMEs',
        icon: ShoppingBag,
      },
    ],
  },
  {
    label: 'Nosotros',
    icon: Info,
    dropdownItems: [
      {
        label: 'Sobre Nosotros',
        href: '/nosotros/sobre-nosotros',
        description: 'Quiénes somos',
        icon: Info,
      },
      {
        label: 'Preguntas Frecuentes',
        href: '/nosotros/preguntas-frecuentes',
        description: 'Todas tus dudas resueltas',
        icon: HelpCircle,
      },
      {
        label: 'Nuestras Redes',
        href: '/nosotros/nuestras-redes',
        description: 'Comunidad en movimiento',
        icon: Share2,
      },
    ],
  },
  { label: 'Contacto', href: '/contacto', icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3 px-6 sm:px-12'
          : 'bg-primary/70 backdrop-blur-sm border-b border-white/10 py-5 px-6 sm:px-12'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          {!logoError && (
            <Image
              src="/logo_envios.webp"
              alt="Logo Envios Dosruedas"
              width={48}
              height={48}
              className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-display text-2xl sm:text-3xl tracking-tighter uppercase text-white leading-none">
            Envios <span className="text-secondary">Dosruedas</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav id="site-nav" className="hidden lg:flex border-l border-white/10">
          {NAV_ITEMS.map((item, idx) => {
            const ItemIcon = item.icon;
            const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;

            if (!hasDropdown && item.href) {
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="font-display text-base uppercase tracking-widest text-white/80 px-7 py-5 border-r border-white/10 relative hover:text-white hover:bg-white/5 transition-all group flex items-center gap-2"
                >
                  <ItemIcon className="w-4 h-4 text-secondary" />
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              );
            }

            return (
              <div key={idx} className="relative group/nav">
                <button
                  type="button"
                  className="font-display text-base uppercase tracking-widest text-white/80 px-7 py-5 border-r border-white/10 relative hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer w-full"
                >
                  <ItemIcon className="w-4 h-4 text-secondary" />
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 text-white/60 group-hover/nav:rotate-180 group-hover/nav:text-secondary transition-transform duration-200" />
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-1 w-80 opacity-0 -translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 ease-out z-50">
                  <div className="bg-primary/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-2 grid gap-1.5">
                    {item.dropdownItems?.map((dd, ddIdx) => {
                      const DdIcon = dd.icon;
                      return (
                        <Link
                          key={ddIdx}
                          href={dd.href}
                          className="flex items-center gap-4.5 p-3 rounded-lg hover:bg-white/5 transition-all group/item"
                        >
                          <span className="p-2.5 rounded-lg bg-white/5 text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-all shrink-0">
                            <DdIcon className="w-5 h-5" />
                          </span>
                          <div className="flex-1">
                            <span className="font-display text-sm uppercase tracking-wider text-white group-hover/item:text-secondary block font-bold leading-none">
                              {dd.label}
                            </span>
                            {dd.description && (
                              <span className="text-xs text-white/60 block mt-1 font-body">
                                {dd.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center gap-4 pl-4">
          <a
            href="tel:+542236602699"
            className="flex items-center gap-2 text-sm font-mono text-white/80 hover:text-secondary transition-colors"
          >
            <Phone className="w-4 h-4 text-secondary" />
            <span>223 660-2699</span>
          </a>

          <Link
            href="/contacto"
            className="relative inline-flex items-center gap-2 bg-secondary text-primary font-bold text-sm uppercase tracking-wider px-6 py-3 border-none cursor-pointer overflow-hidden group z-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Cotizar Ya <ArrowRight className="w-4 h-4" />
            </span>
            <span className="absolute top-0 -left-full w-full h-full bg-white z-0 group-hover:translate-x-full transition-transform duration-500 ease-out" />
          </Link>
        </div>

        {/* Mobile Actions & Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:+542236602699"
            className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:text-secondary transition-all"
            title="Llamar"
          >
            <Phone className="w-4 h-4 text-secondary" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-secondary transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-primary border-b border-white/10 py-6 px-8 flex flex-col gap-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          {NAV_ITEMS.map((item, idx) => {
            const ItemIcon = item.icon;
            const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;

            if (!hasDropdown && item.href) {
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-lg uppercase tracking-wider text-white hover:text-secondary flex items-center gap-2 py-1"
                >
                  <ItemIcon className="w-4 h-4 text-secondary" />
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <div key={idx} className="border-t border-white/10 pt-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu(item.label)}
                  className="w-full flex items-center justify-between text-left font-display text-lg uppercase tracking-wider text-white hover:text-secondary py-1"
                >
                  <span className="flex items-center gap-2">
                    <ItemIcon className="w-4 h-4 text-secondary" />
                    <span>{item.label}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform ${
                      activeMobileSubmenu === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeMobileSubmenu === item.label && (
                  <div className="pl-6 pt-2 space-y-2.5">
                    {item.dropdownItems?.map((dd, ddIdx) => {
                      const DdIcon = dd.icon;
                      return (
                        <Link
                          key={ddIdx}
                          href={dd.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 text-xs text-blue-200 hover:text-white py-1"
                        >
                          <DdIcon className="w-4 h-4 text-secondary" />
                          <div>
                            <span className="font-bold block uppercase">{dd.label}</span>
                            {dd.description && (
                              <span className="text-[10px] text-blue-200/60 block font-sans">
                                {dd.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 border-t border-white/10">
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-secondary text-primary font-bold text-center py-3.5 uppercase tracking-wider block font-display text-base"
            >
              Cotizar Ya
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
