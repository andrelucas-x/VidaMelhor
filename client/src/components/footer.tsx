import { Heart, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center mb-4">
              <Heart className="text-primary text-2xl mr-3" />
              <h4 className="text-xl font-bold">Home Care Vida Melhor</h4>
            </div>
            <p className="text-neutral-400 mb-4" data-testid="footer-description">
              Cuidado especializado e humanizado no conforto do seu lar.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-xl text-neutral-400 hover:text-primary cursor-pointer transition-colors" data-testid="icon-facebook" />
              <Instagram className="text-xl text-neutral-400 hover:text-primary cursor-pointer transition-colors" data-testid="icon-instagram" />
              <button onClick={scrollToForm}>
                <span className="text-xl text-neutral-400 hover:text-secondary cursor-pointer transition-colors" data-testid="icon-form-footer">📱</span>
              </button>
            </div>
          </div>

          <div data-testid="footer-services">
            <h5 className="font-semibold mb-4">Serviços</h5>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#servicos" className="hover:text-white transition-colors" data-testid="link-cuidado-idosos">Cuidado de Idosos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors" data-testid="link-comorbidades">Pacientes com Comorbidades</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors" data-testid="link-24horas">Cuidado 24 Horas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors" data-testid="link-fisioterapia">Fisioterapia Domiciliar</a></li>
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h5 className="font-semibold mb-4">Contato</h5>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <span data-testid="text-telefone">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                <span data-testid="text-email">contato@vidamelhor.com.br</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span data-testid="text-endereco">São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div data-testid="footer-schedule">
            <h5 className="font-semibold mb-4">Horário de Atendimento</h5>
            <ul className="space-y-2 text-neutral-400">
              <li data-testid="text-horario-semana">Segunda a Sexta: 24h</li>
              <li data-testid="text-horario-fds">Fins de Semana: 24h</li>
              <li data-testid="text-horario-feriado">Feriados: 24h</li>
              <li className="text-secondary font-medium" data-testid="text-atendimento-continuo">Atendimento Contínuo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-8 text-center text-neutral-400" data-testid="footer-copyright">
          <p>&copy; 2024 Home Care Vida Melhor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
