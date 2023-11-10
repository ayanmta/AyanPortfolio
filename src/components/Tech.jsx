import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 xs:gap-1 gap-5 " key={technology.name}>
          <BallCanvas icon={technology.icon} title={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
