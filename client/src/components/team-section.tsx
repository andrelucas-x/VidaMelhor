import { Award, Shield, Clock, Heart, ClipboardList, Phone } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Maria Silva",
      role: "Enfermeira Geriátrica",
      experience: "15 anos de experiência",
      image: "https://images.unsplash.com/photo-1594824388448-cd4b90d4b2e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "João Santos",
      role: "Técnico em Enfermagem",
      experience: "12 anos de experiência",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Ana Costa",
      role: "Fisioterapeuta",
      experience: "10 anos de experiência",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Carlos Lima",
      role: "Geriatra",
      experience: "20 anos de experiência",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    }
  ];

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
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4" data-testid="title-equipe">
            Nossa Equipe Especializada
          </h3>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto" data-testid="subtitle-equipe">
            Profissionais qualificados, experientes e dedicados ao cuidado humanizado de nossos pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center" data-testid={`card-team-${index}`}>
              <img 
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                data-testid={`img-team-${index}`}
              />
              <h4 className="text-lg font-semibold text-neutral-900" data-testid={`name-team-${index}`}>
                {member.name}
              </h4>
              <p className="text-secondary font-medium" data-testid={`role-team-${index}`}>
                {member.role}
              </p>
              <p className="text-sm text-neutral-500 mt-2" data-testid={`experience-team-${index}`}>
                {member.experience}
              </p>
            </div>
          ))}
        </div>

        {/* Differentials */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl" data-testid="section-diferenciais">
          <h4 className="text-2xl font-semibold text-neutral-900 mb-8 text-center" data-testid="title-diferenciais">
            Nossos Diferenciais
          </h4>
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
      </div>
    </section>
  );
}
