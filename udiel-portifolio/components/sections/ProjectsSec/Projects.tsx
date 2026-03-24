import Styles from "./Projects.module.css";

export default function Projects() {
    return (
        <section id="projects" className={Styles.section}>
            <h1 className={Styles.title}>Projects</h1>
            <p className={Styles.description}>
                Here are some of the projects I've worked on recently:
            </p>    
            <ul className={Styles.list}>
                <li><strong>Project A:</strong> A web application that allows users to track their fitness goals and progress. Built with React, Node.js, and MongoDB.</li>
                <li><strong>Project B:</strong> An e-commerce platform that provides a seamless shopping experience. Developed using Next.js, Express, and PostgreSQL.</li>
                <li><strong>Project C:</strong> A mobile app for managing personal finances, created with React Native and Firebase.</li>
            </ul>
        </section>
    );
}