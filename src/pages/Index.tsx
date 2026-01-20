import { GrainTexture } from '@/components/GrainTexture';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SectionDivider } from '@/components/SectionDivider';
import { StorytellingSection } from '@/components/StorytellingSection';
import { DiferencialSection } from '@/components/DiferencialSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      <GrainTexture />
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <StorytellingSection />
        <DiferencialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
