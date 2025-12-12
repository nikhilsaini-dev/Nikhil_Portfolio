import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 ">
          Get In
          <span className="text-Turquoise"> Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 ">
          I'm open to internships, freelance projects or any opportunity to grow
          and contribute as a MERN stack developer.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 max-w-5xl mx-auto">
          {/*Contact Form  */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-Turquoise"
                  type="text"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xl text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-Turquoise"
                  type="email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xl text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-Turquoise"
                  type=""
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2  rounded-lg bg-Turquoise/70 text-white font-medium cursor-pointer hover:bg-Turquoise active:translate-x-2 transition duration-300 "
              >
                Send
              </button>
            </form>
          </div>

          {/*Contact Info  */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-Turquoise text-2xl mr-4">
                
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Haryana, Faridabad</p>
              </div>
            </div>

             <div className="flex items-start">
              <div className="text-Turquoise text-2xl mr-4">
                
               <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">nikhilsaini8108@gmail.com</p>
              </div>
            </div>

             <div className="flex items-start">
              <div className="text-Turquoise text-2xl mr-4">
                
               <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 7042091927</p>
              </div>
            </div>

           <div className="pt-4">
            <h1 className="text-lg font-semibold mb-4">Follow Me</h1>
             
             <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-Turquoise hover:bg-Turquoise/60 hover:text-white transition duration-300">
                        <FaGithub />
                    </a>

                     <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-skyblue hover:bg-skyblue/60  hover:text-white transition duration-300">
                        <FaLinkedin />
                    </a>

                     <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink/60 hover:text-white transition duration-300">
                        <FaInstagram />
                    </a>

                   
             </div>

           </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
