import { Heart, Menu, X, Shield, Stethoscope, Plus, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

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

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Logo Section - Fixed width for symmetry */}
          <div className="flex items-center cursor-pointer group w-64" onClick={() => scrollToSection('inicio')}>
            <div className="relative mr-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center relative">
                <Stethoscope className="text-white text-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-neutral-900 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">VIDA MELHOR</span>
              </h1>
              <p className="text-xs font-semibold text-neutral-600 -mt-0.5 tracking-wide">HOME CARE</p>
            </div>
          </div>
          
          {/* Center Navigation - Flex grow for center positioning */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-1 bg-neutral-50 rounded-full p-1">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="px-6 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 font-semibold tracking-wide text-sm"
                data-testid="nav-inicio"
              >
                INÍCIO
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="px-6 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 font-semibold tracking-wide text-sm"
                data-testid="nav-servicos"
              >
                SERVIÇOS
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="px-6 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 font-semibold tracking-wide text-sm"
                data-testid="nav-diferenciais"
              >
                DIFERENCIAIS
              </button>
            </div>
          </div>
          
          {/* CTA Section - Fixed width for symmetry */}
          <div className="flex items-center justify-end w-64">
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex font-semibold px-6 py-2.5 rounded-full tracking-wide text-sm"
              data-testid="button-form-header"
            >
              <SiWhatsapp className="mr-2 text-lg" />
              SOLICITAR ORÇAMENTO
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full hover:bg-neutral-100 transition-all duration-300"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X size={24} className="text-neutral-700" /> : <Menu size={24} className="text-neutral-700" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left px-4 py-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold tracking-wide"
                data-testid="nav-mobile-inicio"
              >
                INÍCIO
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left px-4 py-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold tracking-wide"
                data-testid="nav-mobile-servicos"
              >
                SERVIÇOS
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="text-left px-4 py-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold tracking-wide"
                data-testid="nav-mobile-diferenciais"
              >
                DIFERENCIAIS
              </button>
              <Button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 justify-start font-semibold rounded-full mt-2 tracking-wide"
                data-testid="button-form-mobile"
              >
                <SiWhatsapp className="mr-2 text-lg" />
                SOLICITAR ORÇAMENTO
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
