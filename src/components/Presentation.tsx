import { styles } from "../styles";
import medicine from "../assets/medicine.svg";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-cream border-4`}>
      <div
        className={`hidden sm:flex flex-row items-center gap-14 ${styles.paddingX} absolute inset-0 max-w-7xl mx-auto`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-redVine`}>
            Cardio <span className="text-black">Performance</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Informando e conscientizando sobre os riscos das doenças
            cardiovasculares, oferecendo orientações práticas para prevenção e
            controle
          </p>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-screen"
        >
          <img
            src={medicine}
            alt="logo"
            className="w-full object-contain bg-transparent"
          />
        </motion.div>
      </div>

      <div className="sm:hidden flex flex-col items-center justify-around mt-28 absolute gap-14 p-5">
        <div>
          <h1
            className={`${styles.heroHeadText} text-red-700 flex flex-col items-start justify-center`}
          >
            Cardio <span className="text-black">Performance</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias
            sit aspernatur ipsum at labore ullam voluptas qui consequatur nulla
            aliquid repudiandae nesciunt cupiditate architecto rerum cum,
            accusantium expedita nam?
          </p>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-1/2"
        >
          <img
            src={medicine}
            alt="logo"
            className="w-full object-contain bg-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
