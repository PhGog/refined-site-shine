import { FadeIn } from './FadeIn';

export const StorytellingSection = () => (
  <section id="problema" className="py-24 relative bg-gradient-to-b from-background to-background-deep">
    <div className="max-w-4xl mx-auto px-6">
      <div className="border-l-2 border-primary/30 pl-8 md:pl-16 py-4">
        <FadeIn>
          <h3 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">
            A trajetória de um <span className="italic text-primary">risco invisível</span>
          </h3>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="space-y-6 font-sans font-light text-lg text-foreground/80 leading-relaxed">
            <p>
              Imagine sua empresa crescendo exponencialmente. Anos de investimento em marketing, fachada, embalagens e fidelização de clientes. O nome da sua marca já é referência no mercado.
            </p>
            <p className="flex items-center gap-4">
              <span className="h-px flex-1 bg-primary/20" />
              <em className="text-foreground font-serif text-xl">Mas de repente...</em>
              <span className="h-px flex-1 bg-primary/20" />
            </p>
            <p>
              Chega uma <strong className="text-foreground font-normal">Notificação Extrajudicial</strong>. Uma empresa desconhecida possui o registro da "sua" marca.
            </p>
            <div className="bg-primary/5 p-6 border-l-2 border-primary">
              <p className="text-primary-glow italic text-base">
                "Pare de usar o nome imediatamente e pague indenização."
              </p>
            </div>
            <p>
              Todo o seu patrimônio imaterial construído pode desaparecer em um instante por falta de um único documento.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
