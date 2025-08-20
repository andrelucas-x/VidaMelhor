import { Heart, Award, Users, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Quem Somos?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto da história */}
          <div className="space-y-6">
            <div className="prose prose-lg text-neutral-700 leading-relaxed">
              <p className="text-lg">
                Nossa trajetória começou em <strong className="text-emerald-700">2003</strong>, quando iniciei minha carreira na área da enfermagem, atuando em hospitais, clínicas e comunidades terapêuticas. Desde o início, meu propósito sempre foi oferecer um atendimento humanizado, atento às necessidades e ao bem-estar de cada paciente.
              </p>
              
              <p className="text-lg">
                Em <strong className="text-emerald-700">2005</strong>, motivado por amigos e colegas de profissão — médicos, fisioterapeutas e outros profissionais da saúde — iniciamos os primeiros atendimentos diretamente nas casas dos pacientes, levando cuidado e conforto até onde eles mais precisavam: o lar.
              </p>
              
              <p className="text-lg">
                Com o crescimento da demanda e a certeza de que estávamos no caminho certo, em <strong className="text-emerald-700">2016</strong> nasceu oficialmente o <strong className="text-emerald-700">Home Care Vida Melhor</strong>, dedicando-se 100% ao atendimento domiciliar e hospitalar em Curitiba e região metropolitana.
              </p>
              
              <p className="text-lg">
                Hoje, somos uma equipe consolidada, que já cuidou de <strong className="text-emerald-700">mais de mil pessoas</strong> ao longo dos anos. Combinamos tecnologia, humanização, profissionalismo e investimento constante em educação continuada para garantir sempre o mais alto padrão de cuidado. Nosso compromisso é simples e inegociável: <strong className="text-emerald-700">oferecer o melhor para cada paciente, todos os dias.</strong>
              </p>
            </div>
          </div>

          {/* Cards com marcos da empresa */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl text-center border border-emerald-100" data-testid="card-inicio">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">2003</h3>
              <p className="text-neutral-600 text-sm font-medium">Início na enfermagem</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl text-center border border-emerald-100" data-testid="card-domiciliar">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">2005</h3>
              <p className="text-neutral-600 text-sm font-medium">Primeiros atendimentos domiciliares</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl text-center border border-emerald-100" data-testid="card-empresa">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">2016</h3>
              <p className="text-neutral-600 text-sm font-medium">Fundação oficial da empresa</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl text-center border border-emerald-100" data-testid="card-pacientes">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">+1000</h3>
              <p className="text-neutral-600 text-sm font-medium">Pacientes atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}