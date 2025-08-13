import { Heart, Menu, X } from "lucide-react";
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
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-full mr-3 group-hover:shadow-lg transition-all duration-300">
              <Heart className="text-white text-xl" />
            </div>
            <h1 className="text-xl font-bold text-neutral-900 serif">Home Care Vida Melhor</h1>
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
