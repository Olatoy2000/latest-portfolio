import { Tooltip } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  image: string;
  name: string;
  description: string;
  url: string;
};

const Projects = () => {
  const projects: Props[] = [
    {
      image: "./ats-landing.png",
      name: "AFEX ATS WEBSITE",
      description:
        "AFEX ATS website is a dynamic and interactive website that serves as a central platform for afex tech stars, and individuals passionate about how AFEX TECH STARS are being trained and how the program(AFEX TECH STARS) is being operated. The website's purpose is to showcase the talented tech stars , share knowledge, and inspire action towards software engineers for the country at large and more sustainable future for our country.",
      url: "http://afexats.com",
    },
    {
      image: "./fitness-landing.png",
      name: "FITNESS WEBSITE",
      description: "Fitness website is a comprehensive fitness website designed to help individuals achieve their health and wellness goals. It offers a range of resources, tools, and interactive features to support users in their fitness journey. From exercise routines and nutrition guidance to community support and tracking tools, FitLife provides everything needed to lead a fit and active lifestyle.",
      url: "https://fitness-webs.netlify.app",
    },
    {
      image: "./home.png",
      name: "WeatherNow",
      description: "WeatherNow is a specialized weather app website that provides users with accurate and up-to-date weather information for a specific area. With a focus on simplicity and efficiency, the website offers a user-friendly interface and essential features for viewing the weather conditions in a chosen location. In addition to this, WeatherNow provides users with hourly and daily weather forecasts, allowing them to plan their activities accordingly. ",
      url: "",
    },
    {
      image: "./calculator.png",
      name: "ReactCalc",
      description: "ReactCalc is a versatile calculator app built with React, designed to provide users with a user-friendly and feature-rich experience for performing various mathematical calculations. With its intuitive interface, advanced functions, and real-time calculations, ReactCalc offers a powerful tool for everyday calculations and more complex mathematical operations.",
      url: "",
    },
    {
      image: "",
      name: "Project 5",
      description: "",
      url: "",
    },
  ];

  return (
    <motion.div 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly m-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80
      ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Tooltip
              withArrow
              arrowSize={6}
              width={200}
              multiline
              label={"click on the image to see the website in details"}
            >
              <Link href={project.url} className="w-[25%] group ">
                <motion.img
                   initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  src={project.image}
                  alt=""
                  className="group-hover:opacity-30"
                />
              </Link>
            </Tooltip>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h1 className="font-semibold text-center text-4xl">
                <span className="underline decoration-[#F7AB0A]/50 "> Project
                Name </span>: {project.name}
              </h1>
              <p className="text-center md:text-left text-lg ">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] left-0 h-[500px] bg-[#F7AB0A]/10 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
