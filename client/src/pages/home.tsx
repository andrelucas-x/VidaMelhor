import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PreQualificationForm from "@/components/pre-qualification-form";
import DifferentialsSection from "@/components/differentials-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Home() {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DifferentialsSection />
        <PreQualificationForm />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight" data-testid="title-cta">
              PRONTO PARA PROPORCIONAR O MELHOR CUIDADO?
            </h3>
            <p className="text-xl mb-8 opacity-90" data-testid="subtitle-cta">
              Preencha seus dados e fale conosco via WhatsApp para garantir o melhor cuidado para seu ente querido.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-white text-emerald-600 hover:bg-neutral-50 text-lg font-bold px-8 py-4 tracking-wide"
                data-testid="button-cta-form"
              >
                <SiWhatsapp className="mr-3 text-xl" />
                PREENCHER DADOS E FALAR NO WHATSAPP
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
