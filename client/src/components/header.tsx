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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <Heart className="text-primary text-2xl mr-3" />
            <h1 className="text-xl font-bold text-neutral-900">Home Care Vida Melhor</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-neutral-500 hover:text-primary transition-colors"
              data-testid="nav-inicio"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-neutral-500 hover:text-primary transition-colors"
              data-testid="nav-servicos"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-neutral-500 hover:text-primary transition-colors"
              data-testid="nav-diferenciais"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-neutral-500 hover:text-primary transition-colors"
              data-testid="nav-contato"
            >
              Contato
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={scrollToForm}
              className="bg-secondary text-white hover:bg-secondary/90 hidden md:flex"
              data-testid="button-form-header"
            >
              <span className="mr-2">📱</span>Solicitar Orçamento
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-neutral-500 hover:text-primary transition-colors"
                data-testid="nav-mobile-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-neutral-500 hover:text-primary transition-colors"
                data-testid="nav-mobile-servicos"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="text-left text-neutral-500 hover:text-primary transition-colors"
                data-testid="nav-mobile-diferenciais"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-neutral-500 hover:text-primary transition-colors"
                data-testid="nav-mobile-contato"
              >
                Contato
              </button>
              <Button 
                onClick={scrollToForm}
                className="bg-secondary text-white hover:bg-secondary/90 justify-start"
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
