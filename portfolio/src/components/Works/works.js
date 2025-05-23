import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/todoist.png';
import Portfolio2 from '../../assets/trafficIssue.png';
import Portfolio3 from '../../assets/Homorax.png';
import Portfolio4 from '../../assets/LinkedinClone.png';
import Portfolio5 from '../../assets/Shopnetic.jpeg';
import Portfolio6 from '../../assets/portfolio-7.png';
import Portfolio7 from '../../assets/StopWatch2.jpg';

const projects = [
    {
        img: Portfolio1,
        title: "Todoist Clone",
        description: "A productivity app to manage your tasks efficiently.",
        github: "https://github.com/Ankit1141192/todoistConstructWeak",
        deploy: "https://bright-cendol-1e0307.netlify.app",
        techStack: ["HTML", "CSS", "JavaScript", "LocalStorage", "github"],
        type: "web"
    },
    {
        img: Portfolio2,
        title: "TraffIssue",
        description: "A platform for citizens to report traffic problems.",
        github: "https://github.com/Sadafff19/Team_4347_hackathon",
        deploy: "https://4347-hackthon.netlify.app",
        techStack: ["HTML", "CSS", "JavaScript", "LocalStorage", "github"],
        type: "web"
    },
    {
        img: Portfolio4,
        title: "LinkedIn Clone",
        description: "A social networking app inspired by LinkedIn.",
        github: "https://github.com/Ankit1141192/cunstructWeakProject",
        techStack: ["HTML", "JavaScript", "CSS", "LocalStorage", "github"],
        type: "web"
    },
    {
        img: Portfolio6,
        title: "Stayver",
        description: "A hotel booking platform with a user-friendly interface.",
        github: "https://github.com/Ankit1141192/QuickStay",
        deploy: "https://stayver.vercel.app/",
        techStack: ["React+Vite", "TailwindCSS", "clerkAuth", "github"],
        type: "web"
    },
    {
        img: Portfolio3,
        title: "Homorax",
        description: "An ecommerce platform for modern shopping experiences.",
        github: "https://github.com/Ankit1141192/The-Coding-Crusaders",
        techStack: ["React", "CSS", "ChakraUI", "Firebase Authentication", "github"],
        type: "web"
    },
    {
        img: Portfolio5,
        title: "Shopnetic",
        description: "A mobile-friendly online store with advanced features.",
        github: "https://github.com/Ankit1141192/ReactNativeProject",
        techStack: ["React Native", "JavaScript", "Expo", "FirebaseAuth", "AsyncStorage", "github"],
        type: "mobile"
    },
    {
        img: Portfolio7,
        title: "StopWatch",
        description: "A simple stopwatch app built with React Native",
        github: "https://github.com/Ankit1141192/StopWatch-Timer-App",
        techStack: ["React Native", "JavaScript", "Expo", "AsyncStorage", "github"],
        type: "mobile"
    }
];

const ProjectCard = ({ project }) => (
    <div className="projectCard">
        <img src={project.img} alt={project.title} className="worksImg" />
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="techStack">
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
        </div>
        <div className="buttonGroup">
            {project.deploy && (
                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="btn">Deploy</a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
        </div>
    </div>
);

const Works = () => {
    const webProjects = projects.filter(p => p.type === "web");
    const mobileProjects = projects.filter(p => p.type === "mobile");

    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">
                Explore a collection of my professional projects demonstrating practical problem-solving and technical expertise.
            </span>

            <h3 className="projectCategory">Web Projects</h3>
            <div className="worksImgs">
                {webProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <h3 className="projectCategory">Mobile Apps</h3>
            <div className="worksImgs">
                {mobileProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Works;
