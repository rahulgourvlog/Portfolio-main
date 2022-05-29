/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Rahul",
  logo_name: "Rahul Gour",
  
  full_name: "Rahul Gour",
  subTitle:
    "Front End Developer An enthusiastic Full Stack Developer with a strong Technical as well as Non-technical skills and a dedication towards Creating useful and Interaction Web Application",
  resumeLink:
   "https://docs.google.com/document/d/1Uc2bQ7w14mToxoSLcvPa445jjgCfQ_eB/edit?usp=sharing&ouid=110766215822270632268&rtpof=true&sd=true",
  mail: "mailto:im.rahulgour9754@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/rahulgourvlog",
  linkedin: "https://www.linkedin.com/in/rahul-gour-4200a91b5",
  gmail: "im.rahulgour9754@gmail.com",
  
  facebook: "",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡Hello! My name is Rahul gour and I enjoy creating things that live on the internet.",
        "⚡I'm a passionate Developer, with strong administrative and communication skills, good attention to detail and the ability to write efficient code using MERN Stack.",
        "⚡ My interest in web development started back last year when I was trying to edit things on the web, that taught me a lot about HTML & CSS.",
        "⚡ As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.",
        "⚡ Fast Forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
       
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
      
        
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
       
       
      ],
    },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "Masai School",
      subtitle: "Learing MERN Stack ",
      logo_path: "logo.jpg",
      alt_name: "SSEC",
      duration: "2021 - 2022",
      descriptions: [
        "⚡  I'm currently pursuing my Mern stack from Masai School",
       
      ],
      website_link: "https://www.masaischool.com/",
    },
    {
      title: "B-tech",
      subtitle: "Mechanical engineering ",
      logo_path: "LNCT_Bhopal_Logo.png",
      alt_name: "SSEC",
     // duration: "2021 - 2022",
      descriptions: [
        "⚡  I'm completed my bachelor from LNCT, bhopal",
       
      ],
      website_link: "https://www.lnctbhopal.com",
    },
    
  ],
};



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. bootstrap ,React, Nodejs,mongoDb",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myphoto.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@rahulgour/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Cricbuzz Clone",
      url: "https://github.com/Navedphysicist/Crickbuzz",
      description:
        "Crickbuzz provide every news related to cricket, the live scores, tournaments, Schedule matches, and many more.",

        Features : "Log-in, Sign-up, and Payment Page. Latest scores, news, articles, etc. Avail Cricbuzz Plan",
        
        Tech_Stack: "HTML | CSS | JavaScript",
        imge:"imagepro.png",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
       
      ],
    },
    {
      id: "1",
      name: "Pharma-Easy Clone",
      url: "https://github.com/adityasekharbej/Pharm-easy-clone",
      description:
        "PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products ",
      languages: [
       
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "styled",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "2",
      name: "Fabbag",
      url: "https://github.com/Sandeep00022/fabbagclone",
      description:
        "FAB BAG (www.fabbag.com) is a beauty/grooming discovery and subscription platform. Every month thousands of members sign up to receive expert-recommended full and travel-sized products from top global brands that they can sample at home. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        { name: "bootstrap",
        iconifyClass: "logos-bootstrap",

        }
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
 
 
  projectsHeader,
  contactPageData,
  projects,
};
