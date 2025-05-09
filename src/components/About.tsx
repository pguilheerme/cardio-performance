import { styles } from "@/styles";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-44 bg-cream"
    >
      <div className="w-[90%] lg:w-[80%] max-w-4xl">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className={`${styles.heroHeadText} text-black mb-6`}>
            Conheça <span className="text-red1">Nosso Projeto</span>
          </h1>
          <p className="text-black text-xl md:text-2xl leading-relaxed">
            Somos estudantes de Fisioterapia apaixonados por promover saúde e
            bem-estar. Criamos este espaço para compartilhar conhecimento sobre
            prevenção de doenças cardiovasculares com informações acessíveis e
            práticas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md w-full lg:h-[300px] h-[350px]">
            <h3 className="text-2xl font-semibold text-black mb-6 text-center">
              O Que Oferecemos
            </h3>
            <ul className="space-y-4">
              {[
                "Dicas práticas de prevenção",
                "Orientações sobre exercícios físicos",
                "Informações sobre alimentação saudável",
                "Detalhes sobre fatores de risco",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-redVine text-xl font-bold mr-3">
                    {index + 1}.
                  </span>
                  <span className="text-lg text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <div className="w-1 h-40 bg-redVine rounded-full" />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md w-full lg:h-[300px] h-[350px]">
            <h3 className="text-2xl font-semibold text-black mb-6 text-center">
              Nossa Missão
            </h3>
            <ul className="space-y-4">
              {[
                "Reduzir riscos cardiovasculares",
                "Promover hábitos saudáveis",
                "Educar e conscientizar",
                "Apoiar sua saúde integral",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-redVine text-xl font-bold mr-3">
                    {index + 1}.
                  </span>
                  <span className="text-lg text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-black text-xl italic">
            Estamos aqui para caminhar junto com você rumo a uma vida mais
            saudável!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
