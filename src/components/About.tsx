import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex md:flex-row gap-20 max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="./toyyib-profile1.png"
        className="-mb:20 flex-shrink-0 h-56 w-56 rounded-full md:rounded-lg object- contain md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] md:mb-0"
      />

      <div className="space-y-10 px-10 md:px-10 gap-5 justify-center items-center">
        <h4 className="font-semibold text-center text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little</span>{" "}
          Background
        </h4>
        <p className="text-base text-center md:text-justify">
          I am Toyyib. A dedicated and ambitious Frontend Developer with a
          strong passion for crafting exceptional user experiences. With my year
          of professional experience, As a Frontend Developer currently working
          at AFEX, I have gained valuable hands-on experience in developing
          responsive and visually appealing web applications. I do collaborate
          with cross-functional teams, including designers and backend
          developers, to ensure seamless integration of front-end components and
          enhance overall user satisfaction. My ability to understand and
          interpret design concepts enabled them to implement pixel-perfect
          interfaces and maintain consistency across different browsers and
          devices. Prior to my professional experience, I underwent extensive
          training in Software Engineering, where I acquired a solid foundation
          in the principles and practices of modern software development. My
          internship experience further reinforced my understanding of industry
          best practices, agile methodologies, and code versioning systems. I am
          highly skilled in HTML, CSS, and JavaScript, utilizing React as a
          framework to build dynamic and interactive web applications with a
          keen eye for detail, ensuring clean and maintainable code that follows
          industry standards and best practices.My knowledge of responsive
          design principles allows me to create seamless experiences across
          various screen sizes and devices. With my continuous drive for
          learning and growth,I keep up-to-date with the latest trends and
          advancements in frontend development. 
        </p>
      </div>
    </motion.div>
  );
};

export default About;
