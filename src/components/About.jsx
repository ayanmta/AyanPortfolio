import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
const fadeInVariants = (initialOpacity, opacity, duration, delay) => {
  return {
    initial: {
      opacity: initialOpacity,
    },
    animate: {
      opacity: opacity,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeInVariants(0, 1, 0.5 * index, 0.75)}
        className="bg-gradient-to-tr from-green-800 to-pink-800 w-full p-[2px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 max-w-[200px] min-h-[240px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center text-slate-200 text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <div className="flex flex-col items-center"></div>
      </motion.div>
      <motion.p
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default About;
