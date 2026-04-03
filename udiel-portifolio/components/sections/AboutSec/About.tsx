import Badge from "@/components/ui/Badge";
import Styles from "./About.module.css";
import Description from "@/components/ui/Description";
import Button from "@/components/ui/Button/Button";
import { File } from "akar-icons";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={Styles.section}>
      <div className={Styles.aboutContainer}>
        <Button icon={<File />} variant="title">
          Sobre
        </Button>
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
        <Image width={100} height={100} src="/assets/3d-assets/PC.png" alt="" className={Styles.image} />
      </div>
    </section>
  );
}
