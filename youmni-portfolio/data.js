import tutorspaceAdminCourses from "./src/assets/tutorspace/tutorspace-admin-courses.png";
import tutorspaceAdminHome from "./src/assets/tutorspace/tutorspace-admin-home.png";
import tutorspaceAdminUsers from "./src/assets/tutorspace/tutorspace-admin-users.png";
import tutorspaceChat from "./src/assets/tutorspace/tutorspace-chat.png";
import tutorspaceCourses from "./src/assets/tutorspace/tutorspace-courses.png";
import tutorspaceHome from "./src/assets/tutorspace/tutorspace-home.png";
import tutorspaceReservations from "./src/assets/tutorspace/tutorspace-reservations.png";
import tutorspaceTutor from "./src/assets/tutorspace/tutorspace-tutor.png";
import tutorspaceDesign from "./src/assets/tutorspace/tutorspace.png";

import flipflowDesign from "./src/assets/flipflow/flipflow.png";
import flipflowCardsetAdd from "./src/assets/flipflow/flipflow-cardset-add.png";
import flipflowCardsetPlay1 from "./src/assets/flipflow/flipflow-cardset-play-1.png";
import flipflowCardsetPlay2 from "./src/assets/flipflow/flipflow-cardset-play-2.png";
import flipflowCardset from "./src/assets/flipflow/flipflow-cardset.png";
import flipflowHomeSmall from "./src/assets/flipflow/flipflow-home-small.png";
import flipflowHome from "./src/assets/flipflow/flipflow-home.png";
import flipflowPersonal from "./src/assets/flipflow/flipflow-personal.png";

import medialabDesign from "./src/assets/medialab/medialab.png";

import quizleyDesign from "./src/assets/quizley/quizley.png";

import taskflowDesign from "./src/assets/taskflow/taskflow.png";
import portfolio from "./src/assets/portfolio.png";

import {
  SiJavascript,
  SiReact,
  SiLaravel,
  SiSpringboot,
  SiNodedotjs,
  SiPhp,
  SiDotnet,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiExpress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaBullhorn, FaBrain, FaHandshake, FaLightbulb } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Tutorspace",
    description:
      "TutorSpace is a community-driven learning platform that connects students and tutors to enhance the learning experience. The platform offers various features for both administrators and users. Administrators can add new institutions and courses, update or delete existing information, and manage users. They can also create announcements and update FAQs to share important information. Users can browse available courses, apply to become a tutor, and consult important announcements and frequently asked questions. They can also contact administrators via email for support and feedback. In addition, users and tutors can chat with each other in real-time via Pusher.js, enabling direct communication. Tutors can also create reservations for their sessions, allowing students to easily book sessions. TutorSpace thus provides a user-friendly environment for both learning and teaching.",
    images: [
      tutorspaceDesign,
      tutorspaceReservations,
      tutorspaceHome,
      tutorspaceAdminCourses,
      tutorspaceAdminHome,
      tutorspaceAdminUsers,
      tutorspaceChat,
      tutorspaceCourses,
      tutorspaceTutor,
    ],
    technologies: ["Laravel", "Tailwind css", "MySQL"],
    authors: [
      {
        name: "Youmni Malha",
        linkedin: "https://www.linkedin.com/in/youmni-malha-0a54972a3/",
      },
    ],
    repoUrl: "https://github.com/Youmni/tutorspace",
  },
  {
    id: 2,
    title: "FlipFlow",
    description:
      "FlipFlow is a community-driven learning platform where users can create study cards for various purposes, such as studying or learning new languages. It enables users to organize their learning process by creating card sets, adding cards, and sharing these sets with other users. Users can create new card sets, add individual cards, explore and learn from public sets, and manage their sets by editing or deleting cards and sets, making it a flexible and interactive way to enhance learning.",
    images: [
      flipflowDesign,
      flipflowCardsetPlay2,
      flipflowHome,
      flipflowCardsetAdd,
      flipflowCardsetPlay1,
      flipflowCardset,
      flipflowHomeSmall,
      flipflowPersonal,
    ],
    technologies: ["React JS", "Express.js", "Tailwind css", "MySQL"],
    authors: [
      {
        name: "Youmni Malha",
        linkedin: "https://www.linkedin.com/in/youmni-malha-0a54972a3/",
      },
    ],
    repoUrl: "https://github.com/Youmni/flipflow",
  },
  {
    id: 3,
    title: "EhB medialab",
    description:
      "A platform for easy product reservations and efficient administration for EhB. This was a first-year project where I primarily focused on backend development but also worked on frontend towards the end. The platform provides a smooth, simple, and clear way for users to reserve products, while offering the administrator an efficient management interface.",    images: [medialabDesign],
    technologies: ["React JS", "Spring Boot", "Tailwind css", "Oracle DB"],
    authors: [
      {
        name: "Youmni Malha",
        linkedin: "https://www.linkedin.com/in/youmni-malha-0a54972a3/",
      },
      {
        name: "Senne Clauwaert",
        linkedin: "https://www.linkedin.com/in/senne-clauwaert-161330267/",
      },
      {
        name: "Thomas Lenssens",
        linkedin: "https://www.linkedin.com/in/thomas-lenssens-7778b6292/",
      },
    ],
    repoUrl: "https://github.com/Youmni/Programming-Project-groep3",
  },
  {
    id: 4,
    title: "Quizley",
    description:
      "A retro quiz website offering a variety of quizzes, ranging from easy to hard. The platform allows users to participate in quizzes of various difficulty levels, providing an engaging experience with a retro aesthetic. It features a simple, user-friendly interface, enabling players to test their knowledge across different topics.",
    images: [quizleyDesign],
    technologies: ["HTML", "CSS", "Javascript"],
    authors: [
      {
        name: "Youmni Malha",
        linkedin: "https://www.linkedin.com/in/youmni-malha-0a54972a3/",
      },
    ],    repoUrl: "https://github.com/Youmni/quizley",
  },
  {
    id: 5,
    title: "Taskflow",
    description:
      "Taskflow is a CLI tool for creating and managing tasks (Frontend coming soon!). When a user creates a task and assigns it to a group, they can define the actions that group can perform on that task. Group members are notified whenever they are added to a task. Permissions can also be set for each group to control whether they can edit or delete the task. Additionally, every change made to a task is recorded in the task history. This project was part of our Java Advanced course, where we were given about a week to develop.",
    images: [taskflowDesign],
    technologies: ["Picocli", "Spring Boot", "MySQL", "React JS (added soon)"],
    authors: [
      {
        name: "Youmni Malha",
        linkedin: "https://www.linkedin.com/in/youmni-malha-0a54972a3/",
      },
    ],    repoUrl: "https://github.com/Youmni/taskflow",
  },
  {
    id: 6,
    title: "My portfolio",
    description:"This portfolio website is also one of my projects, created with React JS to showcase my skills and experience in web development.", 
    images: [portfolio],
    technologies: ["React JS", ["Tailwind css"]],
    authors: [
      {
        name: "Youmni Malha",
        linkedin: "https://www.linkedin.com/in/youmni-malha-0a54972a3/",
      },
    ],    repoUrl: "https://github.com/Youmni/portfolio",
  },
];

export const skills = {
  hardskills: [
    { name: "Java", icon: FaJava, color: "rgb(37, 99, 235)" },
    { name: "Javascript", icon: SiJavascript, color: "rgb(37, 99, 235)" },
    { name: "Spring Boot", icon: SiSpringboot, color: "rgb(37, 99, 235)" },
    { name: "ReactJS", icon: SiReact, color: "rgb(37, 99, 235)" },
    { name: "Node.js", icon: SiNodedotjs, color: "rgb(37, 99, 235)" },
    { name: "Express.js", icon: SiExpress, color: "rgb(37, 99, 235)" },
    { name: "Laravel", icon: SiLaravel, color: "rgb(37, 99, 235)" },
    { name: "PHP", icon: SiPhp, color: "rgb(37, 99, 235)" },
    { name: ".NET", icon: SiDotnet, color: "rgb(37, 99, 235)" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "rgb(37, 99, 235)" },
    { name: "HTML", icon: SiHtml5, color: "rgb(37, 99, 235)" },
    { name: "CSS", icon: SiCss3, color: "rgb(37, 99, 235)" },
    { name: "MySQL", icon: SiMysql, color: "rgb(37, 99, 235)" },
    { name: "Git", icon: SiGit, color: "rgb(37, 99, 235)" },
  ],
  softskills: [
    { name: "Communication", icon: FaBullhorn, color: "rgb(37, 99, 235)" },
    { name: "Problem Solving", icon: FaBrain, color: "rgb(37, 99, 235)" },
    { name: "Teamwork", icon: FaHandshake, color: "rgb(37, 99, 235)" },
    { name: "Creative Thinking", icon: FaLightbulb, color: "rgb(37, 99, 235)" },
  ],
};

export const studies = [
  {
    name: "Koninklijk Atheneum Halle",
    description: "Economics and Modern Languages (ASO)",
    year: "2021-2023",
    education: "Secondary education degree",
    url: "https://www.go-atheneumhalle.be/",
  },
  {
    name: "Erasmushogeschool Brussel",
    description: "Applied Computer Science",
    year: "2023-2026",
    education: "bachelor's degree",
    url: "https://www.erasmushogeschool.be/nl/opleidingen/toegepaste-informatica",
  },
  {
    name: "Tomas Bata University",
    description: "cybernetics & informatics - key 21st century sciences",
    year: "August 2024",
    education: "Summer Program",
    url: "https://www.utb.cz/en/",
  },
  {
    name: "Colruyt Group",
    description: "Student employee",
    year: "July 2022 - Present",
    education: "Student",
    url: "https://www.colruytgroup.com/en",
  },
  {
    name: "CoderDojo Belgium",
    description: "Coach (Volunteer)",
    year: "February 2025 - Present",
    education: "Volunteering",
    url: "https://coderdojobelgium.be/",
  },
];
