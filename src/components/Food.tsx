import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import greens from "../assets/verduras.jpg";
import fruits from "../assets/frutas.jpeg";
import vegetables from "../assets/legumes.jpeg";
import leguminous from "../assets/leguminosas.jpeg";
import skimmed_milk from "../assets/leite_desnatado.jpeg";
import natural_skimmed_milk from "../assets/leite_nat_desnatado.jpeg";
import cereals from "../assets/cereais.jpg";
import potato from "../assets/batata.jpg";
import nuts from "../assets/castanhas.jpeg";
import sweets from "../assets/doces-de-fruta.jpg";
import flour from "../assets/farinha.jpg";
import pasta from "../assets/macarrao.jpg";
import oils from "../assets/oleos.jpg";
import honey from "../assets/mel.jpg";
import meat from "../assets/carnes.jpeg";
import cheese from "../assets/queijos.jpeg";
import eggs from "../assets/ovos.jpeg";
import butter from "../assets/manteiga.jpeg";
import milk_cream from "../assets/creme_de_leite.jpeg";
import condensed_milk from "../assets/leite_condensado.jpeg";
import homemade_sweets from "../assets/doces_caseiros.jpeg";

type FoodsProps = {
  name: string;
  photo: string;
};

interface GroupsCardProps {
  title: string;
  subDescription: string;
  description: string;
  alt: boolean;
  foods: FoodsProps[];
}

const groups = [
  {
    title: "Verde",
    subDescription:
      "Alimentos cardioprotetores, ou seja, alimentos que contêm substâncias que protegem nosso coração.  Alimentos desse grupo devem ser a base da alimentação diária, estando presentes em maior proporção em comparação com os demais grupos",
    description:
      "Muitos alimentos do grupo verde são consumidos crus, e se não forem higienizados corretamente, podem transmitir doenças, provocando diarreia, desidratação, entre outros sintomas. Para higienizar os alimentos, lavar em água corrente, deixar de molho por 15 minutos em solução de água e hipoclorito de sódio, encontrado em supermercados e unidades de saúde, com diluição de acordo com o fabricante, e depois lavar novamente em água corrente.",
    foods: [
      {
        name: "Verduras",
        photo: greens,
      },
      {
        name: "Frutas",
        photo: fruits,
      },
      {
        name: "Legumes",
        photo: vegetables,
      },
      {
        name: "Legumenosas",
        photo: leguminous,
      },
      {
        name: "Leite desnatado",
        photo: skimmed_milk,
      },
      {
        name: "Iorgute natural desnatado",
        photo: natural_skimmed_milk,
      },
    ],
  },
  {
    title: "Amarelo",
    subDescription:
      "Os alimentos do grupo amarelo devem ser consumidos com moderação",
    description:
      "Esse grupo é composto por alimentos in natura, minimamente processados e ingredientes culinários, mas foram classificados no amarelo por conterem mais energia, gordura ou sal, e seu controle se mostrar importante no manejo de DCV e seus fatores de risco. Comê-los em excesso pode resultar em ganho de peso e agravo de doenças crônicas",
    foods: [
      {
        name: "Pães",
        photo:
          "https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Cereais",
        photo: cereals,
      },
      {
        name: "Macarrão",
        photo: pasta,
      },
      {
        name: "Farinha",
        photo: flour,
      },
      {
        name: "Tubérculos cozidos",
        photo: potato,
      },
      {
        name: "Castanhas",
        photo: nuts,
      },
      {
        name: "Doces de frutas simples caseiro",
        photo: sweets,
      },
      {
        name: "Óleos vegetais",
        photo: oils,
      },
      {
        name: "Mel de abelha",
        photo: honey,
      },
    ],
  },
  {
    title: "Azul",
    subDescription:
      "Os alimentos do grupo azul devem ser consumidos em pequenas quantidades e em menor proporção em relação aos grupos anteriores",
    description:
      "Apesar de o grupo azul ser composto por alimentos in natura, minimamente processados e processados, o controle do consumo é importante no manejo de cardiopatas e indivíduos com fatores de risco cardiovascular, por serem alimentos que contêm maior quantidade de gordura saturada, sal e colesterol, que podem fazer mal para o coração",
    foods: [
      {
        name: "Carnes",
        photo:
          meat,
      },
      {
        name: "Queijos",
        photo:
          cheese,
      },
      {
        name: "Creme de leite",
        photo:
          milk_cream,
      },
      {
        name: "Manteiga",
        photo:
          butter,
      },
      {
        name: "Leite condensado",
        photo:
          condensed_milk,
      },
      {
        name: "Ovos",
        photo:
          eggs,
      },
      {
        name: "Doces caseiros",
        photo:
          homemade_sweets,
      },
    ],
  },
  {
    title: "Vermelho",
    subDescription:
      "Uma boa forma de identificar um alimento ultraprocessado é observar a lista de ingredientes na embalagem do produto. Em geral, se são descritos CINCO ingredientes ou mais, o alimento é classificado como ultraprocessado, especialmente quando os ingredientes são basicamente formulações industriais ou com nomes desconhecidos",
    description:
      "O grupo vermelho não é recomendado por trazer malefícios e consequências negativas para a saúde, não contando para a orientação alimentar. Esses alimentos têm aditivos químicos com efeitos desconhecidos na nossa saúde, como conservantes, estabilizantes, corantes, edulcorantes e aromatizantes, além do excesso de alguns ingredientes, como gordura vegetal hidrogenada, açúcar e sódio",
    foods: [
      {
        name: "Alimentos prontos congelados",
        photo:
          "https://www.zamora24horas.com/uploads/s1/72/77/55/9/3733647.jpeg",
      },
      {
        name: "Alimentos prontos desidratados",
        photo:
          "https://www.unileverfoodsolutions.com.br/dicas-e-servicos/seu-negocio/alimentos-desidratados/jcr:content/parsys/content/textimage_copy_705642064/image.transform/jpeg-optimized/image.1671001206907.jpg",
      },
      {
        name: "Alimentos em pó",
        photo:
          "https://frootiva.com.br/wp-content/uploads/2024/03/morango-em-po.jpg",
      },
      {
        name: "Embutidos",
        photo:
          "https://wx.mlcdn.com.br/ponzi/production/portaldalu/86401_00.jpg",
      },
      {
        name: "Doces industrializados",
        photo:
          "https://img.portaldobrigadeiro.com.br/images/d-vender-doces-industrializados-na-rua.jpg",
      },
      {
        name: "Biscoitos e salgadinhos de pote",
        photo:
          "https://cdn.awsli.com.br/2500x2500/1400/1400360/produto/55471414/bb1bcc16a7.jpg",
      },
      {
        name: "Refrigerantes",
        photo:
          "https://preview.redd.it/todos-os-refrigerantes-est%C3%A3o-horr%C3%ADveis-v0-2a79uzexe09d1.jpg?width=600&format=pjpg&auto=webp&s=3a621c79bb00a80f4319ee439a4feb5cf2688fad",
      },
    ],
  },
];

const GroupsCard = ({
  title,
  subDescription,
  description,
  foods,
  alt = false,
}: GroupsCardProps) => {
  return (
    <div
      className={`flex ${
        alt ? "flex-row-reverse" : "flex-row"
      } flex-wrap justify-center items-center w-full snap-center snap-always`}
    >
      <div
        className={`sm: w-5/12 md:w-1/2 lg:w-1/2 flex flex-col gap-4 p-4 ${
          !alt
            ? "left-fade items-start text-left"
            : "right-fade items-end text-right"
        } z-10 shadow-lg rounded-lg bg-light`}
      >
        <div
          className={`flex flex-col gap-2 ${alt ? "items-end" : "items-start"}`}
        >
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-black">
            Grupo{" "}
            {title === "Verde" ? (
              <span className="text-green-600">Verde</span>
            ) : title === "Amarelo" ? (
              <span className="text-yellow-600">Amarelo</span>
            ) : title === "Azul" ? (
              <span className="text-blue-600">Azul</span>
            ) : title === "Vermelho" ? (
              <span className="text-red-600">Vermelho</span>
            ) : (
              ""
            )}
          </h3>
        </div>
        <div>
          <div>
            <p className="leading-7 py-5 text-lg [&:not(:first-child)]:mt-1 text-black">
              {subDescription}
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-black shadow-md bg-light">
                Ver descrição
              </Button>
            </DialogTrigger>
            <DialogContent className="md: w-2/3 rounded-md">
              <DialogHeader>
                <DialogTitle>Descrição</DialogTitle>
              </DialogHeader>
              <div>
                <p
                  className={`leading-5 [&:not(:first-child)]:mt-1 ${
                    title === "Verde"
                      ? "text-green-300/80"
                      : title === "Amarelo"
                      ? "text-yellow-300/80"
                      : title === "Azul"
                      ? "text-blue-300/80"
                      : title === "Vermelho"
                      ? "text-red-300/80"
                      : ""
                  }`}
                >
                  {description}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-row w-full">
          <Carousel className="w-full">
            <CarouselContent className="flex flex-row p-5 ">
              {foods.map((food, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="border-3 rounded-lg shadow-lg flex items-center justify-center flex-col">
                    <img
                      src={food.photo}
                      alt={food.name}
                      width={130}
                      height={150}
                      className="rounded-lg p-2"
                    />
                    <div className="w-full h-1" />
                    <span className="text-lg md:text-sm sm:text:sm text-center text-black">
                      {food.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const Food = () => {
  return (
    <section
      id="food"
      className="flex flex-col md:scroll-m-0 scroll-m-24 px-10 pt-40 gap-4 w-full min-h-screen items-center justify-center bg-white"
    >
      <h2 className="overflow-hidden text-center scroll-m-20 md:text-6xl text-3xl font-extrabold tracking-tight first:mt-0 items-start justify-center inline-block text-black bg-clip-text">
        Alimentação
      </h2>
      <div className="w-full z-10 bg-lightBrown p-4 py-20 mx-10 flex flex-col gap-2 rounded-lg block-zoom">
        <div className="flex flex-col gap-7">
          <p>
            As doenças cardiovasculares são a principal causa de morte no mundo
            De acordo com a Organização Mundial da Saúde (OMS), as doenças
            cardiovasculares são responsáveis por cerca de{" "}
            <span className="font-bold text-red-700 text-xl">17,7 milhões</span>{" "}
            de óbitos por ano.
          </p>
          <p>
            A prevalência dos fatores de risco também traz estatísticas
            preocupantes: Quase metade dos brasileiros adultos{" "}
            <span className="font-bold text-red-700 text-xl">48%</span> terá
            obesidade e mais{" "}
            <span className="font-bold text-red-700 text-xl">27%</span>  terão
            sobrepeso até 2044, conforme alerta um novo estudo apresentado no
            Congresso Internacional sobre Obesidade (ICO) 2024.
          </p>
          <p>
            Mudanças nos padrões de consumo alimentar são destacadas como uma
            das principais causas de excesso de peso e ganho de peso
            exponencial, considerando que as famílias deixaram de consumir
            pratos típicos tradicionais e aumentaram a ingestão de alimentos
            ultraprocessados e de baixa qualidade nutricional.
          </p>
          <p>
            Com isso o ministério da saúde confeccionou um manual da alimentação
            cardioprotetora, dividindo os alimentos em 4 grupos:{" "}
          </p>
          <div className="flex lg:flex-row md: w-1/2 flex-col gap-2 ">
            <span className="text-green-700 bg-light shadow-md rounded-full p-2 mt-4">
              Grupo Verde
            </span>{" "}
            <span className="text-yellow-600 bg-light shadow-md rounded-full p-2 mt-4">
              Grupo Amarelo
            </span>{" "}
            <span className="text-blue-700 bg-light shadow-md rounded-full p-2 mt-4">
              {" "}
              Grupo Azul
            </span>{" "}
            <span className="text-red-700 bg-light shadow-md rounded-full p-2 mt-4">
              Grupo Vermelho
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 scroll-m-24 w-full min-h-screen items-center justify-center pb-40">
        <div>
          <h2 className="overflow-hidden text-center scroll-m-20 md:text-5xl text-4xl font-extrabold tracking-tight first:mt-0 bg-gray-500 items-start justify-start text-black bg-clip-text">
            Grupos
          </h2>
        </div>
        <div className="flex flex-col justify-center snap-y snap-mandatory items-center gap-4">
          {groups.map((group, index) => (
            <GroupsCard key={index} alt={index % 2 == 0} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;
