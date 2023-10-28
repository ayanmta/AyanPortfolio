import React, { Suspense } from "react";
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
  return (
    <Tilt className="w-full h-full bg-white rounded-full gap-3,.B/">
      <img src={props.icon} className="p-3" />
      <p className="p-3">{props.title}</p>
    </Tilt>
  );
};
export default BallCanvas;
