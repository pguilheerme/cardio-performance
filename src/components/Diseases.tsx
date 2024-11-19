import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Diseases = () => {
  return (
    <section
      id="diseases"
      className="flex flex-col md:scroll-m-0 scroll-m-24 px-10 pt-40 w-full min-h-screen items-center justify-between bg-white"
    >
      <h2 className="overflow-hidden text-center scroll-m-20 md:text-5xl text-2xl font-extrabold tracking-tight first:mt-0 items-start justify-center inline-block text-black bg-clip-text">
        Educação e Informação
      </h2>
      <div className="md:w-1/2 w-full z-10 p-4 my-32 mx-10 flex flex-col bg-light shadow-md gap-2 rounded-lg block-zoom text-black">
        <div className="flex flex-col gap-7">
          <p>
            As doenças cardiovasculares são um conjunto de condições que afetam
            o coração e os vasos sanguíneos, representando uma das principais
            causas de morbidade e mortalidade em todo o mundo.
          </p>
          <p>
            De acordo com a Organização Mundial da Saúde (OMS), as DCVs são
            responsáveis por mais de 17,9 milhões de mortes por ano, o que
            corresponde a 31% do total de óbitos globais.
          </p>
        </div>
      </div>
      <div className="sm:flex sm:flex-col flex md:flex-row justify-center items-center mt-5 gap-5">
        <div className="flex flex-col items-center w-full h-96 gap-5">
          <h3 className="text-black text-2xl text-center font-bold">
            Tipos de Doenças Cardiovasculares
          </h3>
          <ol className="text-black h-full w-full flex flex-col justify-between">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-redVine text-lg font-bold">
                  Doença Coronária
                </AccordionTrigger>
                <AccordionContent>
                  Afeta as artérias coronárias, reduzindo o fluxo sanguíneo para
                  o coração
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-redVine text-lg font-bold">
                  Acidente Vascular Cerebral (AVC)
                </AccordionTrigger>
                <AccordionContent>
                  Ocorre quando o fluxo sanguíneo para o cérebro é interrompido
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-redVine text-lg font-bold">
                  Hipertensão
                </AccordionTrigger>
                <AccordionContent>
                  Pressão arterial elevada, que pode danificar vasos sanguíneos
                  e órgãos
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-redVine text-lg font-bold">
                  Insuficiência Cardíaca
                </AccordionTrigger>
                <AccordionContent>
                  O coração não consegue bombear sangue suficiente para atender
                  às necessidades do corpo
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-redVine text-lg font-bold">
                  Arritmias
                </AccordionTrigger>
                <AccordionContent>
                  Anormalidades no ritmo cardíaco
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ol>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col scroll-m-24 w-full min-h-screen items-center justify-center">
        <div className="sm:flex sm:flex-col flex md:flex-row justify-center items-start gap-5">
          <div className="hidden sm:flex sm:flex-col md:flex flex-row justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-redVine" />
            <div className="sm:h-[35rem] lg:w-1 md:w-1 redVine-gradient" />
          </div>
          <div className="flex flex-col items-center w-full h-96 gap-5">
            <h3 className="text-black text-2xl text-center font-bold">
              Fatores de Risco
            </h3>
            <ol className="text-black h-full  flex flex-col justify-between gap-5">
              <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
                <span className="text-redVine text-xl font-bold">1. </span>
                Idade: Risco aumenta após os 45 anos.
              </li>
              <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
                <span className="text-redVine text-xl font-bold">2. </span>
                Sexo: Homens têm maior risco do que mulheres.
              </li>
              <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
                <span className="text-redVine text-xl font-bold">3. </span>
                História Familiar: Antecedentes familiares de DCVs.
              </li>
              <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
                <span className="text-redVine text-xl font-bold">4. </span>
                Tabagismo: Fumo aumenta risco de DCVs.
              </li>
              <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
                <span className="text-redVine text-xl font-bold">5. </span>
                Obesidade: Sobrepeso e obesidade aumentam risco.
              </li>
              <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
                <span className="text-redVine text-xl font-bold">6. </span>
                Diabetes: Condição metabólica que aumenta risco.
              </li>
              <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
                <span className="text-redVine text-xl font-bold">7. </span>
                Colesterol Elevado: Níveis elevados de colesterol LDL.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:py-0 pt-44 gap-5">
        <h2 className="overflow-hidden text-center scroll-m-20 md:text-3xl text-2xl font-extrabold tracking-tight first:mt-0 items-start justify-center inline-block text-black bg-clip-text">
          Controle de estresse
        </h2>
        <div className="md:w-1/2 w-full z-10 p-4 mb-10 mx-10 flex flex-col bg-light shadow-md gap-2 rounded-lg text-black">
          <div className="flex flex-col gap-7">
            <p>
              O estresse crônico é um fator de risco significativo para doenças
              cardiovasculares, afetando milhões de pessoas mundialmente. O
              estresse afeta o coração, vasos sanguíneos e sistema nervoso,
              aumentando o risco de DCVs.
            </p>
          </div>
        </div>
        <h2 className="overflow-hidden text-center scroll-m-20 md:text-2xl text-1xl font-extrabold tracking-tight first:mt-0 items-start justify-center inline-block text-black bg-clip-text">
          Efeitos do Estresse nas Doenças Cardiovasculares
        </h2>
        <ol className="text-black h-full pb-10 flex flex-col justify-between gap-5">
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">
              Aumento da Pressão Arterial:
            </span>{" "}
            O estresse crônico eleva a pressão arterial, aumentando o risco de
            hipertensão
          </li>
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">Inflamação: </span>{" "}
            O estresse crônico causa inflamação, danificando vasos sanguíneos e
            aumentando o risco de aterosclerose
          </li>
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">
              Alterações no Metabolismo:
            </span>{" "}
            O estresse crônico afeta o metabolismo, aumentando o risco de
            obesidade e diabetes
          </li>
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">
              Desequilíbrio Hormonal:
            </span>{" "}
            O estresse crônico altera os níveis de hormônios, como cortisol e
            adrenalina, afetando a saúde cardiovascular
          </li>
        </ol>
        <h2 className="overflow-hidden text-center scroll-m-20 md:text-2xl text-1xl font-extrabold tracking-tight first:mt-0 items-start justify-center inline-block text-black bg-clip-text">
          Estratégias para Controle de Estresse
        </h2>
        <ol className="text-black h-full pb-10 flex flex-col justify-between gap-5">
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">
              Exercícios Físicos:
            </span>{" "}
            Exercícios regulares reduzem o estresse e melhoram a saúde
            cardiovascular
          </li>
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">
              Meditação e Relaxamento:
            </span>{" "}
            Técnicas de meditação e relaxamento, como yoga e respiração
            profunda, reduzem o estresse
          </li>
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">
              Terapia Cognitivo-Comportamental:
            </span>{" "}
            Terapia cognitivocomportamental ajuda a gerenciar o estresse e mudar
            padrões de pensamento negativos
          </li>
          <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
            <span className="text-redVine text-xl font-bold">
              Suporte Social:
            </span>{" "}
            Suporte social de amigos, familiares e grupos de apoio ajuda a
            reduzir o estresse
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Diseases;
