import { Users, HeartPulse, Clock, Utensils, Pill, PersonStanding, Phone, Check } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 tracking-tight" data-testid="title-servicos">
            NOSSOS SERVIÇOS ESPECIALIZADOS
          </h3>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto" data-testid="subtitle-servicos">
            Oferecemos cuidados personalizados para diferentes necessidades, sempre com profissionais qualificados e experientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service Card 1 */}
          <div className="bg-neutral-50 p-8 rounded-2xl hover:shadow-lg transition-shadow" data-testid="card-cuidado-idosos">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-primary text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-neutral-900 mb-4" data-testid="title-cuidado-idosos">Cuidado de Idosos</h4>
            <p className="text-neutral-500 mb-4" data-testid="desc-cuidado-idosos">
              Assistência completa para pessoas da terceira idade, incluindo higiene pessoal, medicação, companhia e atividades.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Higiene e cuidados pessoais
              </li>
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Administração de medicamentos
              </li>
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Companhia e estímulo social
              </li>
            </ul>
          </div>

          {/* Service Card 2 */}
          <div className="bg-neutral-50 p-8 rounded-2xl hover:shadow-lg transition-shadow" data-testid="card-comorbidades">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <HeartPulse className="text-secondary text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-neutral-900 mb-4" data-testid="title-comorbidades">Pacientes com Comorbidades</h4>
            <p className="text-neutral-500 mb-4" data-testid="desc-comorbidades">
              Cuidados especializados para pacientes com diabetes, hipertensão, Alzheimer e outras condições crônicas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Monitoramento de sinais vitais
              </li>
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Controle glicêmico
              </li>
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Cuidados especializados
              </li>
            </ul>
          </div>

          {/* Service Card 3 */}
          <div className="bg-neutral-50 p-8 rounded-2xl hover:shadow-lg transition-shadow" data-testid="card-24horas">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-accent text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-neutral-900 mb-4" data-testid="title-24horas">Cuidado 24 Horas</h4>
            <p className="text-neutral-500 mb-4" data-testid="desc-24horas">
              Assistência contínua com plantões de 12 ou 24 horas, garantindo segurança e tranquilidade total.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Plantões de 12h ou 24h
              </li>
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Revezamento de profissionais
              </li>
              <li className="flex items-center text-sm text-neutral-500">
                <Check className="text-secondary mr-2" size={16} />
                Supervisão contínua
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl" data-testid="section-servicos-inclusos">
          <h4 className="text-2xl font-semibold text-neutral-900 mb-6 text-center" data-testid="title-servicos-inclusos">Serviços Inclusos</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3" data-testid="servico-refeicoes">
              <Utensils className="text-primary" />
              <span className="text-neutral-700">Preparo de refeições</span>
            </div>
            <div className="flex items-center space-x-3" data-testid="servico-medicacao">
              <Pill className="text-primary" />
              <span className="text-neutral-700">Controle medicação</span>
            </div>
            <div className="flex items-center space-x-3" data-testid="servico-fisioterapia">
              <PersonStanding className="text-primary" />
              <span className="text-neutral-700">Exercícios básicos auxiliares</span>
            </div>
            <div className="flex items-center space-x-3" data-testid="servico-comunicacao">
              <Phone className="text-primary" />
              <span className="text-neutral-700">Comunicação família</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
