import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '@/assets/logo-adhoc-contorno.png';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#problema", label: "O Cenário" },
  { href: "#solucao", label: "A Solução" },
  { href: "#diferenciacao", label: "Comparativo" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md py-4 border-b border-primary/10" 
          : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo with Glow */}
        <a href="#hero" className="relative group block">
          {/* Subtle golden glow behind logo */}
          <div 
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              width: '100px',
              height: '70px',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(ellipse at center, hsl(32 40% 55% / 0.20), transparent 65%)',
              filter: 'blur(18px)',
              zIndex: 0,
            }}
          />
          <img 
            src={logoSrc}
            alt="ADHOC Consultoria" 
            className="w-40 md:w-52 h-auto object-contain transition-transform duration-500 group-hover:scale-105 relative z-10"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-light text-foreground/70">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="link-underline hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary p-2 transition-transform duration-300 hover:scale-110" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-background-deep border-b border-primary/20 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-4 text-center">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-foreground py-3 hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
