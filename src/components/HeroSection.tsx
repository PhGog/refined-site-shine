import { ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=43996629153&text&type=phone_number&app_absent=0";

export const HeroSection = () => (
  <header id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(32 36% 57% / 0.12), transparent 70%)', filter: 'blur(80px)' }} />
    
    {/* Subtle ambient glow at bottom */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <FadeIn>
        <h2 className="text-primary text-xs md:text-sm uppercase tracking-[0.4em] mb-8 font-sans border-b border-primary/30 inline-block pb-2">
          Consultoria de Propriedade Intelectual
        </h2>
      </FadeIn>
      
      <FadeIn delay={200}>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 text-foreground">
          Você realmente sabe o que é <br />
          <span className="italic text-primary-glow relative text-glow">
            proteger a sua marca?
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-glow to-transparent opacity-50" />
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={400}>
        <p className="font-sans font-light text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          O registro no INPI é o único instrumento que garante a exclusividade do seu maior patrimônio. Não deixe o sucesso do seu negócio vulnerável.
        </p>
      </FadeIn>

      <FadeIn delay={600}>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button href={WHATSAPP_LINK}>Proteger minha marca</Button>
          <a 
            href="#diferenciacao" 
            className="text-sm uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
          >
            Entenda a diferença 
            <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </FadeIn>
    </div>
  </header>
);
