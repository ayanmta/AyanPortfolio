import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { ayanhero } from "../assets";

const Hero = () => {
  const myDescription = [
    "Web Developer",
    "Orchardist",
    "Science Enthusiast",
    "Physics Lover",
    "Painter",
    "Space Enthusiast",
    "Trekking Enthusiast",
    "Traveler",
    "Mountain Lover",
    "Music Enthusiast",
  ];
  let index = 0;
  let charIndex = 0;
  const descriptorElement = document.getElementById("myDescription");
  const typewriter = () => {
    if (index < myDescription.length) {
      const descriptor = myDescription[index];
      if (charIndex < descriptor.length) {
        descriptorElement.replaceWith += descriptor.charAt(charIndex);
        charIndex++;
        setTimeout(typewriter(), 1000); // Adjust the speed as needed
      } else {
        index++;
        charIndex = 0;
        setTimeout(typewriter(), 1000); // Adjust the delay between descriptors
      }
    }
  };
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row  items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-bl from-[#915eff] via-[#2e1464] to-[#0c051d]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hey! &nbsp;
            <span className="text-[#915eff]"> I'm Ayan,</span>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <p id="myDescription">{typewriter()}</p>
            </p>
          </h1>
        </div>
        <img
          src={ayanhero}
          alt="ayan-hero-img"
          height={20}
          width={180}
          style={{
            filter: "blur(0.6px) grayscale(0.8) ",
            fillOpacity: "30%",
            borderRadius: "50%",
          }}
        />
      </div>
      <ComputersCanvas />
      <div className="absolute sm:bottom-10 bottom-20 flex w-full justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 rounded-3xl border-secondary flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
