import { Heart } from "lucide-react";

export default function CareGallerySection() {
  const careImages = [
    {
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Companhia Carinhosa",
      description: "Momentos de conversa e carinho que fazem toda diferença"
    },
    {
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Cuidados Especializados",
      description: "Assistência médica profissional no conforto do lar"
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Reabilitação Domiciliar",
      description: "Exercícios básicos auxiliares orientados por fisioterapeuta"
    },
    {
      image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Apoio Familiar",
      description: "Orientação e suporte emocional para toda família"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-secondary mr-3 text-2xl" />
            <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 serif" data-testid="title-galeria">
              Nosso Cuidado em Ação
            </h3>
          </div>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto" data-testid="subtitle-galeria">
            Veja como transformamos vidas através do cuidado humanizado, dedicado e especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careImages.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" data-testid={`card-galeria-${index}`}>
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-galeria-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-semibold mb-1 serif" data-testid={`title-galeria-${index}`}>
                  {item.title}
                </h4>
                <p className="text-sm opacity-90" data-testid={`desc-galeria-${index}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <h4 className="text-2xl font-semibold text-neutral-900 mb-4 serif" data-testid="title-compromisso">
              Nosso Compromisso com o Cuidado Humanizado
            </h4>
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