import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./components/ui/Button";
import "./App.css";

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="portfolio-container">
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="portfolio-title">Hi, I'm Saira</h1>
        <p className="portfolio-subtitle">
          Web Developer | Designer | Freelancer
        </p>
        
        <Button 
          className="portfolio-button" 
          onClick={() => setShowProjects(!showProjects)}
        >
          {showProjects ? "Hide My Work" : "View My Work"}
        </Button>
      </motion.div>

     {showProjects && (
        <motion.div 
          className="dummy-projects-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="dummy-projects-title">My Projects</h2>
          <div className="project-grid">
            <motion.div
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Portfolio Website</h3>
              <p>A modern, responsive portfolio built with React & Tailwind.</p>
            </motion.div>

            <motion.div
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>E-commerce Store</h3>
              <p>A fully functional online store with payment integration.</p>
            </motion.div>

            <motion.div
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Task Management App</h3>
              <p>A to-do list app with interactive UI & smooth animations.</p>
            </motion.div>

            <motion.div
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Blog Platform</h3>
              <p>A beautiful blog site with a custom CMS for content creators.</p>
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        <motion.div
          className="p-6 bg-white text-black rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2">
          I specialize in web development, design, and content writing. With a keen eye for aesthetics and functionality <br></br>I create visually appealing and user-friendly websites. My expertise extends to crafting <br></br>compelling content that engages audiences and enhances brand presence.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white text-black rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2">sairaabbas6@gmail.com</p>
        </motion.div>
      </div>
    </div>
  );
}
