import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  }
};

export default SectionWrapper;
