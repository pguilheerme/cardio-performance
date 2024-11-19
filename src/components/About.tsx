import { styles } from "@/styles";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:scroll-m-0 scroll-m-20 pt-10 px-10 gap-4 w-full min-h-screen items-center justify-center bg-cream"
    >
      <div className="w-full items-center justify-center py-20">
        <h1 className={`${styles.heroHeadText} text-black text-center`}>
          Sobre <span className="text-redVine">Nós</span>
        </h1>
        <p className="text-black text-2xl text-center">
          Somos estudantes de Fisioterapia comprometidos em promover saúde e
          bem-estar. Criamos este site para informar e conscientizar sobre os
          riscos das doenças cardiovasculares, oferecendo orientações práticas
          para prevenção e controle. Com o objetivo de educar e conscientizar
          sobre os fatores de risco e estilo de vida saudável
        </p>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-4 gap-28 scroll-m-24 w-full min-h-screen items-center justify-center pb-40">
        <div className="flex flex-col items-center w-full h-96 gap-5">
          <h3 className="text-black text-2xl">Explore Nossos Recursos</h3>
          <ol className="text-black h-full  flex flex-col justify-between">
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">1.</span> Dicas
              de prevenção
            </li>
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">2.</span>{" "}
              Exercícios e atividades físicas
            </li>
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">3.</span>{" "}
              Alimentação cardioprotetorao
            </li>
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">4.</span> Fatores
              de risco
            </li>
          </ol>
        </div>
        <div className="sm:flex sm:flex-col flex md: flex-row justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-redVine" />
          <div className="sm:h-96 lg:w-1 sm: md:w-1 w-60 h-1 bg-redVine" />
          <div className="w-5 h-5 rounded-full bg-redVine" />
        </div>
        <div className="flex flex-col items-center w-full h-96 gap-5">
          <h3 className="text-black text-2xl">Nossos Objetivos</h3>
          <ol className="text-black h-full  flex flex-col justify-between">
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">1.</span> Reduzir
              riscos de doenças cardiovasculares
            </li>
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">2.</span>{" "}
              Promover estilo de vida saudável
            </li>
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">3.</span>{" "}
              Fomentar conscientização e educação
            </li>
            <li className="bg-light shadow-md shadow-redVine rounded-lg sm:py-3 py-2 px-1 text-lg">
              <span className="text-redVine text-xl font-bold">4.</span> Apoiar
              saúde cardiovascular
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
