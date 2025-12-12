import React from "react";
import { motion } from "framer-motion";
import { AboutMe } from "../assets/assets";


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200 "
    >
      <div className="container mx-0 px-6 ">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 "> About
           <span className="text-Turquoise"> Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Get to know more about my background and passion</p>

        {/* Image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">

           {/* image */}
           <div className="md:w-1/2 rounded-2xl overflow-hidden" >
              <motion.img
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.9, ease: "easeOut" }}
               viewport={{ once: false, amount:0.2 }}
               className="h-full w-full object-cover "
               src={AboutMe} alt="profile" />
            </div>

            {/* text Content */}
           
           <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9, ease: "easeOut" }}
           viewport={{ once: false, amount:0.2 }}
           className="md:w-1/2">
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8">My Journey</h3>
              <p className="text-gray-300 mb-6">I’m a MERN Stack Developer who enjoys building modern and user-friendly web applications. I work with React, Node.js, Express, and MongoDB to turn ideas into real projects. I focus on writing clean code and learning new technologies every day.</p>

              <p className="text-gray-300 mb-12">As a fresher, I’ve built several personal projects that helped me understand full-stack development better. I enjoy solving problems, trying new approaches, and improving with every challenge. My goal is to join a team where I can grow, contribute, and build meaningful applications.</p>

            {/* cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                aboutInfo.map((data, index)=>{
                 
                  <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                      <div className="text-#34E0A1 text-4xl mb-4">
                        <data.icon />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                      <p className="text-gray-400">{data.description}</p>
                  </div>
                })
              }
            </div> */}
            </div>

           </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
