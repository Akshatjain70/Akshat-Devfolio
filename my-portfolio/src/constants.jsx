// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logos
import glbajajLogo from './assets/education_logo/gl_bajaj.jpeg';
import schoolLogo from './assets/education_logo/school-logo.jpg';

// Project Section Logos (⚠ Folder name fix)
import currencyConverterLogo from "./assets/work-logo/Currency-Converter.jpeg";
import imagelogo from './assets/work-logo/images.png';
import modernoLogo from './assets/work-logo/moderno.webp';
import tikTacToeLogo from './assets/work-logo/tik-tac-toe.png';
import todoAppLogo from './assets/work-logo/todo-app.png';
import verseLogo from './assets/work-logo/verse.jpg';
import wheatherApp from'./assets/work-logo/WheatherApp.jpg';

// 🧩 SKILLS DATA
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

// 🎓 EDUCATION DATA
export const education = [
  {
    id: 0,
    img: glbajajLogo,
    school: 'GL Bajaj Group Of Institution, Mathura',
    date: 'Sept 2022 - Aug 2026',
    desc: "I'm in the final year of my Bachelor's degree in Computer Science at GL Bajaj, Mathura. I studied DSA, Web Development, and Database Systems.",
    degree: 'Bachelor of Technology (CSE)',
  },
  {
    id: 1,
    img: schoolLogo,
    school: 'Blooming Buds Public School, Mainpuri',
    date: 'Apr 2021 - March 2022',
    desc: 'Completed Class 12 (PCM stream) from CBSE Board.',
    degree: 'CBSE (XII) - PCM',
  },
  {
    id: 2,
    img: schoolLogo,
    school: 'Blooming Buds Public School, Mainpuri',
    date: 'Apr 2019 - March 2020',
    desc: 'Completed Class 10 under CBSE Board with a focus on Science.',
    degree: 'CBSE (X)',
  },
];

// 💼 PROJECTS DATA
export const projects = [
  {
    id: 0,
    title: 'Moderno Furniture',
    description:
      'A modern front-end e-commerce web app built with React, showcasing furniture products in a sleek, responsive design.',
    image: modernoLogo,
    tags: ['HTML', 'Tailwind', 'JavaScript', 'React JS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/Akshatjain70/moderno-furniture.git',
    webapp: 'https://moderno-furniture.vercel.app/',
  },
  {
    id: 1,
    title: 'Todo App',
    description:
      'A modern front-end To-Do list app built with React and Vite, styled using Tailwind CSS.',
    image: todoAppLogo,
    tags: ['React JS', 'Redux Toolkit', 'HTML', 'TailwindCSS', 'JavaScript'],
    github: 'https://github.com/Akshatjain70/todo-APP.git',
    webapp: 'https://redux-toolkit-todo-eta.vercel.app/',
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'Provides real-time weather insights using global weather APIs.',
    image: wheatherApp,
    tags: ['API', 'HTML', 'CSS'],
    github: 'https://github.com/Akshatjain70/wheather-App.git',
    webapp: 'https://bejewelled-trifle-08d27b.netlify.app/',
  },
  {
    id: 3,
    title: 'Currency Converter',
    description:
      'A web app to convert global currencies with live rates.',
    image: currencyConverterLogo,
    tags: ['React JS', 'JavaScript', 'TailwindCSS', 'HTML'],
    github: 'https://github.com/Akshatjain70/Currency-Converter.git',
    webapp: 'https://calm-mermaid-9ffaff.netlify.app/',
  },
  {
    id: 4,
    title: 'Tic-Tac-Toe Game',
    description:
      'Classic X and O game implemented using JavaScript.',
    image: tikTacToeLogo,
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Akshatjain70/tik-tac-toe-game.git',
    webapp: 'https://super-biscochitos-1de85a.netlify.app/',
  },
  {
    id: 5,
    title: 'Number Guessing Game',
    description:
      'Fun number guessing game that challenges users to guess a random number.',
    image: imagelogo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Akshatjain70/guess-a-number-game.git',
    webapp: 'https://lucent-brigadeiros-2a441b.netlify.app/',
  },
  {
    id: 6,
    title: 'Self Verse',
    description:
      'A modular web platform showcasing scalable architecture and modern UI/UX.',
    image: verseLogo,
    tags: ['React JS', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/Akshatjain70/Akshatverse.git',
    webapp: 'https://akshatverse.vercel.app/',
  },
];



 