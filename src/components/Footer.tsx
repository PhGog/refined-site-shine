import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import logoSrc from '@/assets/logo-adhoc-contorno.png';

export const Footer = () => (
  <footer id="contato" className="bg-background-deep pt-20 pb-10 border-t border-primary/10 text-foreground">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="max-w-xs">
        <div className="w-40 md:w-48 mb-6">
          <img 
            src={logoSrc}
            alt="ADHOC Consultoria" 
            className="w-full h-auto opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
        <p className="font-sans font-light text-xs text-foreground/50 leading-relaxed">
          Especialistas em registro de marcas e patentes. Protegendo o seu legado no mercado nacional e internacional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="font-serif text-lg mb-4 text-foreground">Contato Direto</h4>
          <ul className="space-y-3 font-sans font-light text-sm text-foreground-muted">
            <li className="flex items-center gap-2 hover:text-primary transition-colors duration-300 cursor-pointer">
              <Mail size={14} className="text-primary" /> contato@adhoc.com
            </li>
            <li className="flex items-center gap-2 hover:text-primary transition-colors duration-300 cursor-pointer">
              <Phone size={14} className="text-primary" /> (11) 99999-9999
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-foreground">Social</h4>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center text-[10px] text-foreground/30 font-sans uppercase tracking-widest">
      <p>&copy; {new Date().getFullYear()} ADHOC Consultoria. Todos os direitos reservados.</p>
    </div>
  </footer>
);
