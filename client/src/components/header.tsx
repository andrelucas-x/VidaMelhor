import { Heart, Menu, X, Shield, Stethoscope, Plus } from "lucide-react";
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
              {/* Professional Medical Logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary via-blue-600 to-secondary rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                {/* Medical Cross Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 md:w-8 h-1.5 md:h-2 bg-white/20 rounded-full"></div>
                  <div className="w-1.5 md:w-2 h-6 md:h-8 bg-white/20 rounded-full absolute"></div>
                </div>
                {/* Main Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <Heart className="text-white text-base md:text-lg font-bold" fill="currentColor" />
                </div>
                {/* Small accent */}
                <div className="absolute top-1 right-1 w-1.5 md:w-2 h-1.5 md:h-2 bg-white/40 rounded-full"></div>
                {/* Professional border ring */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/30"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-neutral-900 leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Home Care</span>
              </h1>
              <p className="text-xs md:text-sm font-semibold text-neutral-600 -mt-1">Vida Melhor</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-primary transition-all duration-300 font-medium"
              data-testid="nav-inicio"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-primary transition-all duration-300 font-medium"
              data-testid="nav-servicos"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-white hover:bg-primary transition-all duration-300 font-medium"
              data-testid="nav-diferenciais"
            >
              Diferenciais
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex font-medium px-6 py-2 rounded-full"
              data-testid="button-form-header"
            >
              <span className="mr-2">📱</span>Solicitar Orçamento
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
                className="text-left px-4 py-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                data-testid="nav-mobile-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left px-4 py-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                data-testid="nav-mobile-servicos"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="text-left px-4 py-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                data-testid="nav-mobile-diferenciais"
              >
                Diferenciais
              </button>
              <Button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 justify-start font-medium rounded-full mt-2"
                data-testid="button-form-mobile"
              >
                <span className="mr-2">📱</span>Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
