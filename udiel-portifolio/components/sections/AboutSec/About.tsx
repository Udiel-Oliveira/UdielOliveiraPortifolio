import Badge from "@/components/ui/Badge";
import Styles from "./About.module.css";
import Description from "@/components/ui/Description";

export default function About() {
  return (
    <section id="about" className={Styles.section}>
      <div className={Styles.aboutContainer}>
        <h1 className={Styles.title}>Resumo Profissional</h1>
        <div className={Styles.skills}>
          <Badge id="javascript" />
          <Badge id="react" />
          <Badge id="nodejs" />
          <Badge id="typescript" />
          <Badge id="html" />
          <Badge id="css" />
          <Badge id="git" />
          <Badge id="intellij" />
          <Badge id="nextjs" />
          <Badge id="postman" />
          <Badge id="vscode" />
        </div>
        <Description/>
        <img src="assets/3d-assets/PC.png" alt="" className={Styles.image} />
      </div>
    </section>
  );
}
