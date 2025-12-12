import React from "react";
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6"> 
        <h2 className="text-3xl font-bold text-center mb-4">
          {" "}
          My
          <span className="text-Turquoise"> Skills </span>      
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life.
        </p>

        <SkillsCard />
      </div>
    </motion.div>
  );
};

export default Skills;
