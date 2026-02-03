import { Shield, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5543991216509&text&type=phone_number&app_absent=0";

export const DiferencialSection = () => (
  <section id="diferenciacao" className="py-24 bg-background-deep">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <FadeIn>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-sm transform -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-6" />
          <div className="relative bg-background p-10 border border-primary/20 shadow-2xl">
            <Shield className="w-16 h-16 text-primary mb-6 stroke-[1]" />
            <h3 className="font-serif text-2xl mb-4 text-foreground">Propriedade Exclusiva</h3>
            <p className="font-sans font-light text-foreground/70">
              O registro no INPI (Instituto Nacional da Propriedade Industrial) não é apenas burocracia. É o <strong className="text-foreground">título de propriedade</strong> da sua marca. É o que transforma um "nome fantasia" em um ativo tangível.
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn delay={200}>
          <h2 className="font-serif text-4xl leading-tight text-foreground">
            Segurança Jurídica & <br />
            <span className="italic text-primary">Valorização Patrimonial</span>
          </h2>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="font-sans font-light text-foreground/70 text-lg">
            Nossa consultoria especializada blinda seu negócio contra cópias, garante sua exclusividade e prepara sua marca para modelos de franquia e licenciamento.
          </p>
          <div className="mt-8">
            <Button primary={false} href={WHATSAPP_LINK}>
              Falar com especialista <ArrowRight size={16} />
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>

    {/* Comparison Cards */}
    <div className="max-w-5xl mx-auto px-6 mt-24">
      <div className="text-center mb-12">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground">Onde está o erro comum?</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* CNPJ Card */}
        <FadeIn delay={100}>
          <div className="bg-background-deep p-8 border border-border-subtle opacity-70 hover:opacity-100 transition-all duration-300">
            <div className="flex justify-between items-center mb-6 border-b border-border-subtle pb-4">
              <h4 className="text-lg font-medium text-foreground">CNPJ / Junta Comercial</h4>
              <XCircle className="text-destructive w-6 h-6" />
            </div>
            <ul className="space-y-3 font-light text-sm text-foreground-muted">
              <li className="flex gap-3"><span>❌</span> Proteção apenas estadual</li>
              <li className="flex gap-3"><span>❌</span> Não garante uso da marca</li>
              <li className="flex gap-3"><span>❌</span> Não gera exclusividade</li>
            </ul>
          </div>
        </FadeIn>

        {/* INPI Card */}
        <FadeIn delay={200}>
          <div className="bg-background p-8 border border-primary/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary blur-[50px] opacity-20" />
            <div className="flex justify-between items-center mb-6 border-b border-primary/20 pb-4">
              <h4 className="text-lg font-medium text-primary">Registro no INPI</h4>
              <CheckCircle className="text-primary w-6 h-6" />
            </div>
            <ul className="space-y-3 font-light text-sm text-foreground">
              <li className="flex gap-3"><span className="text-primary">✔</span> Proteção nacional</li>
              <li className="flex gap-3"><span className="text-primary">✔</span> Direito de franquear</li>
              <li className="flex gap-3"><span className="text-primary">✔</span> Propriedade real do nome</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
