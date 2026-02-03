import { Scale, TrendingUp, Shield } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5543991216509&text&type=phone_number&app_absent=0";

const benefits = [
  { 
    icon: Scale, 
    title: "Prevenção de Litígios", 
    desc: "Evite processos judiciais custosos por uso indevido de marca." 
  },
  { 
    icon: TrendingUp, 
    title: "Ativo Valorizável", 
    desc: "Marcas registradas aumentam o valuation da sua empresa." 
  },
  { 
    icon: Shield, 
    title: "Blindagem Digital", 
    desc: "Derrube perfis falsos e anúncios indevidos facilmente." 
  }
];

export const CTASection = () => (
  <section id="solucao" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      {/* Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {benefits.map((item, index) => (
          <FadeIn key={index} delay={index * 150}>
            <div className="text-center p-8 group hover:bg-background-deep transition-all duration-300 rounded-sm border border-transparent hover:border-primary/10">
              <div className="w-14 h-14 mx-auto bg-background border border-primary/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(184,151,113,0.1)]">
                <item.icon className="text-primary w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-xl mb-3 text-foreground">{item.title}</h4>
              <p className="font-sans font-light text-sm text-foreground-muted leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* CTA Box */}
      <div className="text-center">
        <FadeIn delay={200}>
          <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-primary to-transparent w-full max-w-3xl">
            <div className="bg-background-deep px-8 md:px-12 py-12 md:py-16 relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
              
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
              
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-foreground relative z-10">
                Sua marca está disponível ou em risco?
              </h3>
              <p className="font-sans font-light text-foreground-muted mb-8 max-w-lg mx-auto relative z-10">
                Não espere receber uma notificação judicial. Descubra hoje mesmo a situação da sua marca.
              </p>
              <Button href={WHATSAPP_LINK}>Iniciar Análise de Viabilidade</Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
