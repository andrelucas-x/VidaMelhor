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
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('inicio')}>
            <div className="relative mr-3 md:mr-4">
              {/* Clean Medical Logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center relative">
                {/* Stethoscope and Heart Combination */}
                <div className="relative flex items-center justify-center">
                  {/* Main stethoscope icon */}
                  <Stethoscope className="text-white text-base md:text-lg" />
                  {/* Small heart accent */}
                  <Heart className="text-white text-xs absolute -top-0.5 -right-0.5" fill="currentColor" />
                </div>
                {/* Clean highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-neutral-900 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">HOME CARE</span>
              </h1>
              <p className="text-xs md:text-sm font-bold text-neutral-700 -mt-0.5 tracking-wide">VIDA MELHOR</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-primary transition-all duration-300 font-semibold tracking-wide"
              data-testid="nav-inicio"
            >
              INÍCIO
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-primary transition-all duration-300 font-semibold tracking-wide"
              data-testid="nav-servicos"
            >
              SERVIÇOS
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-primary transition-all duration-300 font-semibold tracking-wide"
              data-testid="nav-diferenciais"
            >
              DIFERENCIAIS
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex font-semibold px-6 py-2 rounded-full tracking-wide"
              data-testid="button-form-header"
            >
              <SiWhatsapp className="mr-2 text-lg" />
              SOLICITAR ORÇAMENTO
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-all duration-300"
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
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 justify-start font-semibold rounded-full mt-2 tracking-wide"
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
