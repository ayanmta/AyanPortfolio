import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Tilt } from "react-tilt";

const BallCanvas = (props) => {
  const [isHovering, setHovering] = useState(false);
  const handleMouseOver = () => {
    setHovering(true);
  };
  const handleMouseOut = () => {
    setHovering(false);
  };
  return (
    <Tilt className="xs:w-full w-20 xs:h-full h-20 bg-white rounded-full xs:gap-1 gap-1">
      <div
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
      >
        <img src={props.icon} className="p-2" />{" "}
        {isHovering && <p className="p-1 bg-black mt-2">{props.title}</p>}
      </div>
    </Tilt>
  );
};
export default BallCanvas;
