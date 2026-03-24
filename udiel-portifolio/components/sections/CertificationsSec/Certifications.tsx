import Styles from "./Certifications.module.css";

export default function Certifications() {  
    return (
        <section id="certifications" className={Styles.section}>
            <h1 className={Styles.title}>Certifications</h1>
            <p className={Styles.description}>
                I have obtained several certifications in the field of software development, including:
            </p>
            <ul className={Styles.list}>
                <li>Certified JavaScript Developer - XYZ Institute</li>
                <li>Full Stack Web Development Certification - ABC Academy</li>
                <li>React.js Certification - DEF Online Course</li>
                <li>Node.js Certification - GHI Training Center</li>
            </ul>
        </section>
    );
}