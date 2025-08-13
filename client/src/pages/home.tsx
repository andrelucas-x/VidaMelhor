import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PreQualificationForm from "@/components/pre-qualification-form";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";

export default function Home() {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PreQualificationForm />
        <TeamSection />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="title-cta">
              Pronto para Proporcionar o Melhor Cuidado?
            </h3>
            <p className="text-xl mb-8 opacity-90" data-testid="subtitle-cta">
              Entre em contato conosco agora e garante tranquilidade e qualidade de vida para seu ente querido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100 text-lg font-semibold"
                data-testid="button-cta-orcamento"
              >
                <ClipboardList className="mr-2" />
                Solicitar Orçamento
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-semibold"
                data-testid="button-cta-whatsapp"
              >
                <span className="mr-2">📱</span>
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
