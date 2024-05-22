import { m } from "framer-motion";
import {
  mobile,
  backend,
  web,
  data,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  webmavens,
  threejs,
  bootstrap,
  python,
  django,
  java,
  mysql,
  r,
  linux,
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
  pythoncerti,
  sqlcerti,
  bigdata101certi,
  next
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
 
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: data,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "python",
    icon: python,
  },

  {
    name: "django",
    icon: django,
  },
  
  {
    name: "mysql",
    icon: mysql,
  },

  {
    name: "r",
    icon: r,
  },

  {
    name:"figma",
    icon:figma,
  },
  {
    name: "linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Web Mavens",
    icon: webmavens,
    iconBg: "#383E56",
    date: "April 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using HTML,CSS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];



const projects = [
  {
    name: "Netflix Clone",
    description:
      "ReactJS-based web application. Which includes functionalities like search, adding to a watchlist, movie/series descriptions, trailers, and similar content suggestions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    user:1,
    image: project_1,
    source_code_link: "https://netflix-clone-react-drab.vercel.app/",
  },
  {
    name: "Trading Analysis",
    description:
      "The project is a web application with live search, add to list, and stock description features made with ReactJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

    ],
    image: project_2,
    user:1,
    source_code_link: "https://github.com/Purav2003/StockExchange-React",
  },
  {
    name: "Calendly Clone",
    description:
      "This project is based on PHP. In this project I was responsible for the frontend part. In which I created using HTML, CSS, Tailwind.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: project_3,
    user:2,
    data_user:[
      {
        name:"Purav Shah",
        role:"Frontend Developer"
      },
      {
        name:"Meet Prajapati",
        role:"Backend Developer"
      }
      
    ],
    source_code_link: "https://calendly.webmavens.com/",
  },
  {
    name: "Online Medical Shop",
    description:
      "This website is based on HTML, CSS, Bootstrap and Advanced JAVA (JSP).In this website there are 2 modules. One is Admin module in which admin can Add, Delete, Modify products. In User side user can buy products from different categories.",
    tags: [
      {
        name: "advanced java",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },

    ],
    image: project_4,
    user:2,
    data_user:[
      {
        name:"Purav Shah",
        role:"Fullstack Developer"
      },
      {
        name:"Jinay Shah",
        role:"Backend Developer"
      }
      
    ],
    source_code_link: "https://github.com/Purav2003/Online_Medical_Shop/",
  },
  {
    name: "Complaint Management System",
    description:
      "Complaint management system is a Django based framework which can be used in a society for handling of various society complaints.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: project_5,
    user:2,
    data_user:[
      {
        name:"Purav Shah",
        role:"Fullstack Developer"
      },
      {
        name:"Jinay Shah",
        role:"Backend Developer"
      }
      
    ],
    source_code_link: "https://github.com/jinshah0322/Complaint-Management-System",
  },
  {
    name: "Heart Failure Prediction Model",
    description:
      "Heart Failure Prediction is implemented using IBM SPSS Modeler as well as using python code which predicts whether the patient will have heart failure based on given fields.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "IBM SPSS Modeler",
        color: "green-text-gradient",
      },
    ],
    image: project_6,
    user:2,
    data_user:[
      {
        name:"Purav Shah",
        role:"Python Developer"

      },
      {
        name:"Jinay Shah",
        role:"Python Developer"
      }
      
    ],
    source_code_link: "https://github.com/jinshah0322/Heart-Failure-Prediction",
  },
];

const certificate=[
  {
    name: "Python Essentials",   
    image: pythoncerti,
  },
  {
    name: "Introduction to Relational Databases in SQL",   
    image: sqlcerti,
  },
  {
    name: "Big Data 101",   
    image: bigdata101certi,
  }

]

export { services, technologies, experiences, projects,certificate };