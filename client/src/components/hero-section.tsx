import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

export default function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  return (
    <section id="inicio" className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              CUIDADO ESPECIALIZADO NO{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">CONFORTO DO SEU LAR</span>
            </h2>
            <p className="text-xl text-neutral-500 mb-8 leading-relaxed">
              Oferecemos serviços de home care com cuidadores qualificados para idosos e pacientes com comorbidades, 
              garantindo segurança, carinho e qualidade de vida.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold px-8 py-4 tracking-wide"
                data-testid="button-solicitar-orcamento"
              >
                <SiWhatsapp className="mr-3 text-xl" />
                PREENCHER DADOS E FALAR NO WHATSAPP
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Cuidadora sorrindo enquanto ajuda idosa com carinho em ambiente domiciliar aconchegante" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-full">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 tracking-wide" data-testid="text-seguranca-titulo">100% SEGURO</p>
                  <p className="text-sm text-neutral-600 font-medium" data-testid="text-seguranca-descricao">Cuidadores verificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
