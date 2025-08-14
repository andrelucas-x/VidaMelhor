import { Award, Shield, Clock, Heart, ClipboardList, Phone } from "lucide-react";

export default function DifferentialsSection() {
  const differentials = [
    {
      icon: Award,
      title: "Profissionais Certificados",
      description: "Todos os cuidadores possuem formação técnica e certificações na área da saúde."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Verificação completa de antecedentes e seguro de responsabilidade civil."
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Atendimento e suporte disponível todos os dias da semana, 24 horas por dia."
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Tratamento respeitoso, carinhoso e individualizado para cada paciente."
    },
    {
      icon: ClipboardList,
      title: "Relatórios Detalhados",
      description: "Acompanhamento diário com relatórios sobre o estado e evolução do paciente."
    },
    {
      icon: Phone,
      title: "Comunicação Direta",
      description: "Canal direto com familiares e atualizações constantes sobre o cuidado."
    }
  ];

  return (
    <section id="diferenciais" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="lg:text-4xl font-bold text-neutral-900 tracking-tight text-[30px] mb-4" data-testid="title-diferenciais">
            NOSSO CUIDADO HUMANIZADO
          </h3>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto" data-testid="subtitle-diferenciais">
            O que nos torna únicos no cuidado domiciliar especializado, dedicado e humanizado.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl" data-testid="section-diferenciais">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start space-x-4" data-testid={`diferencial-${index}`}>
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <differential.icon className="text-primary text-xl" />
                </div>
                <div>
                  <h5 className="font-semibold text-neutral-900 mb-2" data-testid={`diferencial-title-${index}`}>
                    {differential.title}
                  </h5>
                  <p className="text-neutral-500 text-sm" data-testid={`diferencial-desc-${index}`}>
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-2xl">
            <h4 className="text-neutral-900 mb-4 text-[30px] font-bold" data-testid="title-compromisso">NOSSO COMPROMISSO</h4>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto" data-testid="text-compromisso">
              Cada paciente é único e merece atenção personalizada. Nossa equipe é treinada não apenas tecnicamente, 
              mas também para oferecer carinho, respeito e dignidade em cada interação, transformando a casa em um 
              ambiente de cura e bem-estar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}