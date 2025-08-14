import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from 'react';
import cuidadorIdosoImg from "@assets/saiba-mais-sobre-o-curso-de-cuidador-de-idosos_1755170368390.jpg";
import cuidadorEnfermeiraImg from "@assets/img20200108121426396-768x513_1755170871058.jpg";
import cuidadoresIdososImg from "@assets/cuidadores-de-idosos_1755171125430.png";

export default function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Small delay to ensure proper positioning at the start
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Cuidadora sorrindo enquanto ajuda idosa com carinho em ambiente domiciliar aconchegante"
    },
    {
      src: cuidadoresIdososImg,
      alt: "Cuidadoras profissionais auxiliando paciente idosa com andador em ambiente domiciliar acolhedor"
    },
    {
      src: cuidadorEnfermeiraImg,
      alt: "Enfermeira profissional auxiliando idoso com andador em ambiente domiciliar seguro"
    }
  ];



  return (
    <section id="inicio" className="bg-gradient-to-br from-primary/10 to-secondary/10 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef} data-testid="carousel-hero">
            <div className="flex">
              {carouselImages.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-[250px] lg:h-[320px] object-cover ${index === 1 ? 'object-[50%_40%]' : index === 2 ? 'object-[50%_20%]' : 'object-center'}`}
                    data-testid={`img-hero-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
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

        {/* Content Below */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
            CUIDADO ESPECIALIZADO NO{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">CONFORTO DO SEU LAR</span>
          </h2>
          <p className="text-xl text-neutral-500 mb-8 leading-relaxed max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}
