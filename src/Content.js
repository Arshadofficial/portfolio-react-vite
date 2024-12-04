// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import github from "./assets/images/Skills/github.png";
import C from "./assets/images/Skills/C.png";
import expressjs from "./assets/images/Skills/expressjs.png";
import java from "./assets/images/Skills/java.png";
import javaScript from "./assets/images/Skills/javaScript.png";
import sql from "./assets/images/Skills/sql.png";
import mongoDB from "./assets/images/Skills/mongoDB.png";
import php from "./assets/images/Skills/php.png";
import postman from "./assets/images/Skills/postman.png";
import UIUX from "./assets/images/Skills/UIUX.png";
import CP from "./assets/images/Skills/CP.png";
import Kotlin from "./assets/images/Skills/Kotlin.png";
import Firebase from "./assets/images/Skills/Firebase.png";
import Boostrap from "./assets/images/Skills/Boostrap.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";
import services_logo5 from "./assets/images/Services/logo5.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";


import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "FullStack Web Developer",
    firstName: "ARSHATH",
    LastName: "AHAMED",
    
    image: Hero_person,
    hero_content: [
      {
        text: "3rd Year Undegraduate",
      },
      {
       
        text: "I’m Arshath Ahamed, a 3rd-year undergraduate student and a passionate Web Developer. I am actively seeking an internship in software development or related roles where I can leverage my skills in crafting efficient and user-friendly web solutions. With experience contributing to 5+ projects, I am committed to innovation, problem-solving, and continuous learning to grow as a professional in the software industry.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
    
      {
        name: "Node js",
        logo: nodejs,
      },
     
      {
        name: "React js",
        logo: reactjs,
      },
     
      {
        name: "Python",
        logo: python,
      },
      {
        name: "GitHub",
        logo: github,
      },
      {
        name: "MongoDB",
        logo: mongoDB,
      },
      {
        name: "ExpressJS",
        logo: expressjs,
      },
      {
        name: "Postman",
        logo: postman,
      },
      {
        name: "PHP",
        logo: php,
      },
      {
        name: "C",
        logo: C,
      },
      {
        name: "Java",
        logo: java,
      
      },
      {
        name: "Java Script",
        logo: javaScript,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "UI/UX",
        logo: UIUX,
      },
      {
        name: "SQL",
        logo: sql,
      },
      {
        name: "C++",
        logo: CP,
      },
      {
        name: "FireBase",
        logo: Firebase,
      },
      {
        name: "Bootstrap",
        logo: Boostrap,
      },
      {
        name: "Kotlin",
        logo: Kotlin,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I'M LOOKING FOR",
    service_content: [
      {
        title: "Fullstack Web Development",
        para: "As a passionate Full-Stack Web Developer, I create seamless, dynamic, and user-friendly web applications. With expertise in both front-end and back-end technologies, I build scalable solutions that provide exceptional user experiences and meet business goals. Whether you're looking to design modern websites, develop custom APIs, or optimize performance, I deliver high-quality, responsive, and efficient code from start to finish",
        logo: services_logo1,
      },
      {
        title: "UI/UX Designing",
        para: "I design intuitive and engaging user experiences that blend creativity with functionality. From wireframes to fully polished interfaces, I focus on delivering visually appealing, user-centered designs that solve real problems. By combining user research, interaction design, and usability testing, I ensure every product is not only beautiful but also easy to navigate and effective in achieving user goals.",
        logo: services_logo2,
      },
      {
        title: "Mobile Application Development",
        para: "I specialize in creating high-performance, user-friendly mobile applications for Android. By leveraging the latest technologies and frameworks, I design and develop intuitive apps that provide seamless experiences across devices. From concept to deployment, I focus on building scalable, reliable, and engaging mobile solutions that meet both user needs and business goals.",
        logo: services_logo4,
      },
      {
        title: "Quality Assurance",
        para: "I ensure the highest standards of quality for web and mobile applications by meticulously testing functionality, usability, and performance. My approach combines manual and automated testing techniques to identify bugs, enhance user experience, and guarantee product reliability. With a keen eye for detail and a commitment to excellence, I help deliver flawless, user-friendly products that meet both user expectations and business objectives.",
        logo: services_logo5,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Tailoring Website",
        description: "The tailoring website is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It provides an efficient, user-friendly platform for tailoring services, enabling customers to schedule appointments, explore tailoring options, and track order progress. The project incorporates modern web development techniques to deliver a responsive, scalable, and feature-rich application",
        image: project1,
      },
      {
        title: "Hosting Providers Website",
        description: "A responsive and modern website for showcasing hosting plans, built with React.js. It provides a smooth, user-friendly interface, ensuring seamless navigation for potential customers. The site highlights hosting plans, key features, and customer testimonials, making it an ideal platform for hosting service providers.",
        image: project2,
      },
      {
        title: "Travel Agency Webapp",
        description: "TravelBliss is a comprehensive travel booking platform designed to streamline trip planning. Developed using Java and JavaScript, the application leverages Object-Oriented Programming (OOP) principles to deliver a robust and modular architecture. The web app integrates features like destination guides, package deals, and user reviews to enhance the user experience, catering to travel enthusiasts and agencies alike",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Credentials",
    subtitle: "MY CERTIFICATIONS",
    testimonials_content: [
      {
        review:
          "I completed a React.js tutorial on Great Learning.",
        img: avatar1,
        name: "React Js Certified",
      },
      {
        review:
          "I have successfully completed the React Basics course on HackerRank.",
        img: avatar2,
        name: "React Basics Certified",
      },
      {
        review:
          " I have completed the SQL Basics course on HackerRank.",
        img: avatar3,
        name: "SQL Basics Certified",
      },
     
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I specialize in delivering high-quality, results-driven solutions tailored to your needs. Whether you need creative design, web development, or innovative strategies, I bring a unique combination of skills and experience to every project. Let’s collaborate to bring your vision to life and make a lasting impact.",
    btnText: "Download Resume",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "arshathofficial31@gmail.com",
        icon: GrMail,
        link: "mailto:arshathofficial31@gmail.com",
      },
      {
        text: "+94 758229303",
        icon: MdCall,
        link: "https://wa.me/+94758229303",
      },
      {
        text: "Arshad_Nazmy",
        icon: BsInstagram,
        link: "https://www.instagram.com/arshad_nazmy/",
      },
    
      {
          text: "Arshad Ahamed",
          icon: BsLinkedin,
          link: "https://www.linkedin.com/in/arshad-ahamed31/",
        },
        {
          text: "Arshad",
          icon: BsWhatsapp,
          link: "https://wa.me/+94758229303",
        },
    
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};

