import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    <section id="inicio" className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Cuidado especializado no{" "}
              <span className="text-primary">conforto do seu lar</span>
            </h2>
            <p className="text-xl text-neutral-500 mb-8 leading-relaxed">
              Oferecemos serviços de home care com cuidadores qualificados para idosos e pacientes com comorbidades, 
              garantindo segurança, carinho e qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 text-lg font-semibold"
                data-testid="button-solicitar-orcamento"
              >
                <ClipboardList className="mr-2" size={20} />
                Solicitar Orçamento
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline" 
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-lg font-semibold"
                data-testid="button-whatsapp-hero"
              >
                <span className="mr-2">📱</span>
                Falar no WhatsApp
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Cuidadora profissional auxiliando paciente idoso em ambiente domiciliar" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <span className="text-secondary text-xl">🛡️</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900" data-testid="text-seguranca-titulo">100% Seguro</p>
                  <p className="text-sm text-neutral-500" data-testid="text-seguranca-descricao">Cuidadores verificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
