import Styles from "./About.module.css";

export default function About(){
    return (
        <section id="about" className={Styles.section}>
            <h1 className={Styles.title}>About Me</h1>
            <p className={Styles.description}>
                I'm a passionate software developer with experience in building web applications using modern technologies. I enjoy learning new programming languages and frameworks, and I'm always looking for opportunities to grow my skills and contribute to exciting projects.
            </p>
        </section>
    );
}