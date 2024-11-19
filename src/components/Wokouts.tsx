import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const Workouts = () => {
  return (
    <section
      id="workouts"
      className="flex flex-col md:scroll-m-0 scroll-m-24 px-10 pt-40 w-full min-h-screen items-center"
    >
      <h2 className="overflow-hidden text-center scroll-m-20 md:text-5xl text-2xl font-extrabold tracking-tight first:mt-0 items-start justify-center inline-block text-black bg-clip-text">
        A inatividade física e exercícios
      </h2>
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="md:w-1/2 w-full p-4 mt-32 mx-10 flex flex-col bg-light shadow-md gap-2 rounded-lg text-black">
          <div className="flex flex-col gap-7">
            <p>
              A inatividade física, aliada ao elevado tempo em comportamento
              sedentário, tem o potencial altíssimo de agravar esses problemas e
              ocasionar novos. Assim como o restante do corpo, o coração também
              é um músculo e, portanto, será beneficiado pela atividade física.
              E as vantagens vão ainda mais além!
            </p>
            <p>
              Isso acontece porque a atividade física melhora a função do
              sistema cardiovascular em geral e ainda ajuda a controlar os
              fatores de risco cardiovasculares que, quando presentes, aumentam
              a chance de o indivíduo desenvolver problemas cardíacos. Hábitos,
              fatores e condições como a obesidade, o tabagismo, o colesterol
              alto, a idade, a alimentação inadequada, o histórico familiar, o
              diabetes, a hipertensão e o comportamento sedentário estão
              significativamente associados ao risco de doenças
              cardiovasculares.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-4 mx-10 flex flex-col bg-light shadow-md gap-2 rounded-lg text-black">
          <div className="flex flex-col gap-7">
            <p>
              No Brasil, as doenças cardiovasculares configuram a principal
              causa de morte. De acordo com o Sistema de Informação sobre
              Mortalidade, no ano de 2020, 109.556 pessoas vieram a óbito por
              IAM. E a prática regular de atividades físicas, associada ao
              controle do colesterol elevado e a uma alimentação adequada e
              saudável, tende a reduzir em 80% esses óbitos.
            </p>
            <p>
              Um dos principais fatores para evitar riscos de qualquer doença,
              principalmente as cardiovasculares, é a prática da atividade
              física regularmente. Os exercícios aeróbios são os mais
              recomendados para prevenir doenças cardiovasculares, pois
              movimentam grandes grupos musculares de forma contínua e
              prolongada. Alguns exemplos de exercícios aeróbios são: Caminhada,
              Corrida, Andar de bicicleta, Natação, Dança.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <h3 className="text-black text-1xl text-center font-bold">
            Além dos exercícios aeróbios, outros exercícios que ajudam a
            melhorar o funcionamento do coração são:
          </h3>
          <ol className="text-black h-full  flex flex-col md:grid grid-cols-2 justify-between gap-5">
            <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
              <span className="text-redVine text-xl font-bold">1. </span>
              Agachamento
            </li>
            <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
              <span className="text-redVine text-xl font-bold">2. </span>
              Agachamento com salto
            </li>
            <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
              <span className="text-redVine text-xl font-bold">3. </span>
              Flexão de braços
            </li>
            <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
              <span className="text-redVine text-xl font-bold">4. </span>
              Afundo
            </li>
            <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
              <span className="text-redVine text-xl font-bold">5. </span>
              Prancha
            </li>
            <li className="bg-light shadow-md rounded-lg sm:py-3 py-2 px-3 text-lg">
              <span className="text-redVine text-xl font-bold">6. </span>
              Pular corda
            </li>
          </ol>
        </div>
        <Alert className="md:w-1/2 w-full bg-light shadow-md">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="text-redVine">Atenção</AlertTitle>
          <AlertDescription>
            A atividade física ajuda a fortalecer o músculo cardíaco, melhorar a
            circulação sanguínea, controlar a pressão arterial e reduzir os
            níveis de colesterol.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default Workouts;
