import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
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
import { X } from "lucide-react";

type FoodsProps = {
  name: string;
  photo: string;
};

interface GroupsCardProps {
  title: string;
  subDescription: string;
  description: string;
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
        photo: meat,
      },
      {
        name: "Queijos",
        photo: cheese,
      },
      {
        name: "Creme de leite",
        photo: milk_cream,
      },
      {
        name: "Manteiga",
        photo: butter,
      },
      {
        name: "Leite condensado",
        photo: condensed_milk,
      },
      {
        name: "Ovos",
        photo: eggs,
      },
      {
        name: "Doces caseiros",
        photo: homemade_sweets,
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
}: GroupsCardProps) => {
  const colorMap = {
    Verde: "text-green-600",
    Amarelo: "text-amber-500",
    Azul: "text-blue-500",
    Vermelho: "text-rose-500",
  };

  const bgColorMap = {
    Verde: "bg-green-50",
    Amarelo: "bg-amber-50",
    Azul: "bg-blue-50",
    Vermelho: "bg-rose-50",
  };

  return (
    <div className={`flex flex-col justify-center items-center w-full`}>
      <div
        className={`w-full flex flex-col gap-6 p-6 ${
          bgColorMap[title as keyof typeof bgColorMap]
        } rounded-xl shadow-sm border border-gray-100`}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium tracking-tight text-gray-800">
            Grupo{" "}
            <span className={colorMap[title as keyof typeof colorMap]}>
              {title}
            </span>
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed">{subDescription}</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-fit text-gray-700 hover:bg-white"
            >
              Ver descrição completa
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white max-w-2xl rounded-lg ">
            <DialogHeader>
              <DialogTitle
                className={`${colorMap[title as keyof typeof colorMap]}`}
              >
                Grupo {title}
              </DialogTitle>
            </DialogHeader>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4 text-black" />
              <span className="sr-only">Fechar</span>
            </DialogClose>
          </DialogContent>
        </Dialog>

        <div className="mt-4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {foods.map((food, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/3"
                >
                  <div className="border border-gray-200 rounded-lg shadow-sm p-3 flex flex-col items-center bg-white">
                    <img
                      src={food.photo}
                      alt={food.name}
                      width={120}
                      height={120}
                      className="rounded-lg object-cover aspect-square"
                    />
                    <span className="mt-2 text-sm font-medium text-gray-700 text-center">
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
      className=" md:py-28 w-full bg-white flex flex-col justify-center items-center"
    >
      <div className="w-[90%] lg:w-[80%] flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Alimentação
        </h2>

        <div className="p-6 shadow-md md:p-8 rounded-xl border mb-16">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700">
              As doenças cardiovasculares são a principal causa de morte no
              mundo. De acordo com a Organização Mundial da Saúde (OMS), as
              doenças cardiovasculares são responsáveis por cerca de{" "}
              <span className="font-semibold text-rose-600">17,7 milhões</span>{" "}
              de óbitos por ano.
            </p>
            <p className="text-gray-700">
              A prevalência dos fatores de risco também traz estatísticas
              preocupantes: Quase metade dos brasileiros adultos{" "}
              <span className="font-semibold text-rose-600">48%</span> terá
              obesidade e mais{" "}
              <span className="font-semibold text-rose-600">27%</span> terão
              sobrepeso até 2044, conforme alerta um novo estudo apresentado no
              Congresso Internacional sobre Obesidade (ICO) 2024.
            </p>
            <p className="text-gray-700">
              Mudanças nos padrões de consumo alimentar são destacadas como uma
              das principais causas de excesso de peso, considerando que as
              famílias deixaram de consumir pratos típicos tradicionais e
              aumentaram a ingestão de alimentos ultraprocessados.
            </p>
            <p className="text-gray-700">
              O ministério da saúde confeccionou um manual da alimentação
              cardioprotetora, dividindo os alimentos em 4 grupos:{" "}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-green-600 bg-green-50 px-4 py-2 rounded-full text-sm font-medium">
                Grupo Verde
              </span>
              <span className="text-amber-600 bg-amber-50 px-4 py-2 rounded-full text-sm font-medium">
                Grupo Amarelo
              </span>
              <span className="text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium">
                Grupo Azul
              </span>
              <span className="text-rose-600 bg-rose-50 px-4 py-2 rounded-full text-sm font-medium">
                Grupo Vermelho
              </span>
            </div>
          </div>
        </div>

        <div className="w-full  pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 pb-12">
            Conheça os Grupos
          </h2>
          <div className="space-y-16">
            {groups.map((group, index) => (
              <GroupsCard key={index} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
