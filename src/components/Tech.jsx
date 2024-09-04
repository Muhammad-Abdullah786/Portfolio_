import React from "react";
import { Canvas } from "@react-three/fiber";
import { Container } from "../hoc";
import { technologies } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { BallCanvas } from "./canvas";
const Tech = () => {
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
