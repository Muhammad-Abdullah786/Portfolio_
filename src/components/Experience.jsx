import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { Container } from "../hoc";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const ExperienceCard = ({ experiences }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experiences.date}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experiences.icon}
          alt={experiences.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experiences.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experiences.company_name}
      </p>
    </div>

    <ul className="mt-5 ml-5 space-y-2 list-disc">
      {experiences.points.map((point, index) => (
        <li
          key={`experiece-points-${index}`}
          className="text-white-100 tracking-wider pl-1 text-[14px]"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div textVariant={textVariant()}>
        <p className={styles.sectionSubText}>What I have Done so far!</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="flex mt-20 flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experiences={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Container(Experience, "work");
