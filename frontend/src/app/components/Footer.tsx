import { Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Legal */}
          <div className="space-y-5">
            <a href="/" className="hover:opacity-70 transition-opacity">
              <img
                src="/logo-removebg-preview.png"
                alt="URBAN STREET"
                className="h-35 w-auto"
              />
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed tracking-wide">
              Diseño minimalista de alta calidad.
              <br />
              Prendas esenciales para el estilo contemporáneo.
            </p>
            <p className="text-[10px] text-muted-foreground/60 tracking-widest uppercase">
              © 2026 URBAN STREET. Todos los derechos reservados.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Colecciones</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/polos"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                >
                  Polos
                </a>
              </li>
              <li>
                <a
                  href="/shorts"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                >
                  Shorts
                </a>
              </li>
              <li>
                <a
                  href="/hoodies"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                >
                  hoodies
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-5">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Conecta</h4>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/urbanstreet.27?igsh=YzkydDB4aTdrbW5w&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
