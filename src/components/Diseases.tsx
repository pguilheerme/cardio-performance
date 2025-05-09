import {
  FaHeart,
  FaBrain,
  FaTachometerAlt,
  FaHeartbeat,
  FaProcedures,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";

const Diseases = () => {
  return (
    <section
      id="diseases"
      className="flex flex-col items-center py-44 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-red-100 px-6 py-2 rounded-full mb-4">
            <span className="text-red-600 font-medium">
              Saúde Cardiovascular
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educação e Informação sobre Doenças Cardiovasculares
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              As doenças cardiovasculares são um conjunto de condições que
              afetam o coração e os vasos sanguíneos, representando uma das
              principais causas de morbidade e mortalidade em todo o mundo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              De acordo com a Organização Mundial da Saúde (OMS), as DCVs são
              responsáveis por mais de 17,9 milhões de mortes por ano, o que
              corresponde a 31% do total de óbitos globais.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="border-b-2 border-red-600 pb-1">
              Tipos de Doenças Cardiovasculares
            </span>
          </h3>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            {[
              {
                icon: <FaHeart className="text-red-600" size={20} />,
                title: "Doença Coronária",
                content:
                  "Afeta as artérias coronárias, reduzindo o fluxo sanguíneo para o coração",
              },
              {
                icon: <FaBrain className="text-red-600" size={20} />,
                title: "Acidente Vascular Cerebral (AVC)",
                content:
                  "Ocorre quando o fluxo sanguíneo para o cérebro é interrompido",
              },
              {
                icon: <FaTachometerAlt className="text-red-600" size={20} />,
                title: "Hipertensão",
                content:
                  "Pressão arterial elevada, que pode danificar vasos sanguíneos e órgãos",
              },
              {
                icon: <FaHeartbeat className="text-red-600" size={20} />,
                title: "Insuficiência Cardíaca",
                content:
                  "O coração não consegue bombear sangue suficiente para atender às necessidades do corpo",
              },
              {
                icon: <FaProcedures className="text-red-600" size={20} />,
                title: "Arritmias",
                content: "Anormalidades no ritmo cardíaco",
              },
            ].map((item, index) => (
              <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-red-600 py-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-lg font-medium text-gray-900">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-gray-700">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="border-b-2 border-red-600 pb-1">
              Fatores de Risco
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Idade: Risco aumenta após os 45 anos",
              "Sexo: Homens têm maior risco do que mulheres",
              "História Familiar: Antecedentes familiares de DCVs",
              "Tabagismo: Fumo aumenta risco de DCVs",
              "Obesidade: Sobrepeso e obesidade aumentam risco",
              "Diabetes: Condição metabólica que aumenta risco",
              "Colesterol Elevado: Níveis elevados de colesterol LDL",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-800">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="border-b-2 border-red-600 pb-1">
              Controle de Estresse
            </span>
          </h3>

          <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              O estresse crônico é um fator de risco significativo para doenças
              cardiovasculares, afetando milhões de pessoas mundialmente. O
              estresse afeta o coração, vasos sanguíneos e sistema nervoso,
              aumentando o risco de DCVs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Efeitos do Estresse
              </h4>
              <div className="space-y-4">
                {[
                  "Aumento da Pressão Arterial: O estresse crônico eleva a pressão arterial",
                  "Inflamação: Causa inflamação, danificando vasos sanguíneos",
                  "Alterações no Metabolismo: Aumenta risco de obesidade e diabetes",
                  "Desequilíbrio Hormonal: Altera cortisol e adrenalina",
                ].map((item, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Estratégias de Controle
              </h4>
              <div className="space-y-4">
                {[
                  "Exercícios Físicos: Reduzem o estresse e melhoram a saúde cardiovascular",
                  "Meditação e Relaxamento: Técnicas como yoga e respiração profunda",
                  "Terapia Cognitivo-Comportamental: Ajuda a gerenciar o estresse",
                  "Suporte Social: Amigos e familiares ajudam a reduzir o estresse",
                ].map((item, index) => (
                  <div key={index} className="bg-green-100/90 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Diseases;
