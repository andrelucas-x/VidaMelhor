import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Família Santos",
      relation: "Filha da paciente",
      testimonial: "A cuidadora da Vida Melhor trouxe paz e tranquilidade para nossa família. Minha mãe se sente amada e bem cuidada todos os dias.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Família Lima",
      relation: "Esposo da paciente",
      testimonial: "Profissionais extremamente qualificados e carinhosos. O cuidado com minha esposa diabética é exemplar, sempre com muito amor.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Família Oliveira",
      relation: "Filho do paciente",
      testimonial: "O tratamento humanizado faz toda diferença. Meu pai com Alzheimer sorri todos os dias graças aos cuidados especializados.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559627113-cb1fa8b6ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 serif" data-testid="title-depoimentos">
            Depoimentos de Famílias que Confiam em Nós
          </h3>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto" data-testid="subtitle-depoimentos">
            O cuidado humanizado refletido na satisfação e tranquilidade das famílias que atendemos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-depoimento-${index}`}>
              <div className="relative mb-4">
                <img 
                  src={testimonial.image}
                  alt={`Momento de cuidado humanizado - ${testimonial.name}`}
                  className="w-full h-48 rounded-xl object-cover"
                  data-testid={`img-depoimento-${index}`}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Quote className="text-primary w-5 h-5" />
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-current w-5 h-5" />
                ))}
              </div>
              
              <p className="text-neutral-600 mb-4 italic" data-testid={`text-depoimento-${index}`}>
                "{testimonial.testimonial}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-neutral-900" data-testid={`nome-depoimento-${index}`}>
                  {testimonial.name}
                </p>
                <p className="text-sm text-neutral-500" data-testid={`relacao-depoimento-${index}`}>
                  {testimonial.relation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div data-testid="stat-familias">
                <div className="text-3xl font-bold text-primary mb-2 serif">500+</div>
                <p className="text-neutral-600">Famílias Atendidas</p>
              </div>
              <div data-testid="stat-satisfacao">
                <div className="text-3xl font-bold text-secondary mb-2 serif">98%</div>
                <p className="text-neutral-600">Satisfação das Famílias</p>
              </div>
              <div data-testid="stat-experiencia">
                <div className="text-3xl font-bold text-accent mb-2 serif">15+</div>
                <p className="text-neutral-600">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}