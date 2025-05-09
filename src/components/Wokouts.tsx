import { HeartPulse, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const Workouts = () => {
  const exercises = [
    {
      id: 1,
      name: "Agachamento",
      description: "Fortalece pernas e glúteos, melhorando a circulação",
      gif: "https://i.pinimg.com/originals/74/5c/46/745c4608a36a15415a0d77646109e205.gif",
      tips: "Mantenha as costas retas e desça como se fosse sentar",
    },
    {
      id: 2,
      name: "Agachamento com salto",
      description:
        "Exercício pliométrico que fortalece pernas, glúteos e aumenta o condicionamento cardiovascular",
      gif: "https://i.pinimg.com/originals/71/26/96/712696e622c5eab4b2e8556cec0e1d72.gif",
      tips: "Aterre suavemente com os joelhos flexionados para reduzir impacto",
    },
    {
      id: 2,
      name: "Flexão de Braços",
      description: "Fortalece peito, ombros e braços",
      gif: "https://i.pinimg.com/originals/89/32/94/8932943eff332c047ce8e900bc05843e.gif",
      tips: "Mantenha o corpo alinhado e desça até o peito quase tocar o chão",
    },
    {
      id: 3,
      name: "Prancha",
      description: "Trabalha o core inteiro, melhorando a postura",
      gif: "https://i.pinimg.com/736x/a7/3b/78/a73b78a4f5122b23064779b656c4d21f.jpg",
      tips: "Mantenha o corpo reto e contraia o abdômen",
    },
    {
      id: 4,
      name: "Afundo",
      description: "Excelente para pernas e equilíbrio",
      gif: "https://i.pinimg.com/originals/e8/63/dc/e863dc1ddc8b1f606d591749fcb22001.gif",
      tips: "Mantenha o joelho dianteiro alinhado com o tornozelo",
    },
    {
      id: 5,
      name: "Pular Corda",
      description: "Exercício cardiovascular completo",
      gif: "https://i.pinimg.com/originals/6b/ed/1f/6bed1f00504a633e8d2ba1e7c748cef5.gif",
      tips: "Mantenha os pulsos soltos e pule baixo",
    },
  ];

  return (
    <section
      id="workouts"
      className="py-44 px-4 sm:px-6 bg-gradient-to-b from-cream to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-red1/10 px-6 py-2 rounded-full mb-4">
            <HeartPulse className="h-5 w-5 text-red1 mr-2" />
            <span className="text-red1 font-medium">Saúde Cardiovascular</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exercícios para um <span className="text-red1">Coração Forte</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os melhores exercícios para prevenir doenças
            cardiovasculares e melhorar sua saúde
          </p>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="space-y-12">
          {/* Benefícios */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-4 h-4 bg-red1 rounded-full mr-3"></div>
              Por que se exercitar?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A inatividade física é um dos principais fatores de risco para
                  doenças cardiovasculares. O exercício regular fortalece o
                  coração, melhora a circulação e ajuda a controlar:
                </p>
                <ul className="space-y-3">
                  {[
                    "Pressão arterial",
                    "Colesterol",
                    "Açúcar no sangue",
                    "Peso corporal",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-red1 rounded-full mr-3"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red1/5 p-6 rounded-xl border border-red1/10">
                <h4 className="font-semibold text-red1 mb-3">
                  Dados Importantes
                </h4>
                <p className="text-gray-700">
                  No Brasil, as doenças cardiovasculares configuram a principal
                  causa de morte. De acordo com o Sistema de Informação sobre
                  Mortalidade, no ano de 2020, 109.556 pessoas vieram a óbito
                  por IAM. E a prática regular de atividades físicas, associada
                  ao controle do colesterol elevado e a uma alimentação adequada
                  e saudável, tende a reduzir em 80% esses óbitos.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              <span className="border-b-2 border-red1 pb-1">
                Exercícios Recomendados
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.map((exercise) => (
                <motion.div
                  key={exercise.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="relative h-[294px] overflow-hidden">
                    <img
                      src={exercise.gif}
                      alt={exercise.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h4 className="text-xl font-bold text-white">
                        {exercise.name}
                      </h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-3">{exercise.description}</p>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-red1 rounded-full mr-3"></div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {exercise.tips}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-red1/5 p-8 rounded-2xl border border-red1/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red1 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Recomendações Importantes
                </h3>
                <p className="text-gray-700">
                  Comece devagar e aumente a intensidade gradualmente. Para
                  melhores resultados, combine exercícios aeróbicos (30 min/dia)
                  com fortalecimento muscular (2-3x/semana). Consulte um médico
                  antes de iniciar qualquer programa de exercícios,
                  especialmente se tiver condições cardíacas pré-existentes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Workouts;
