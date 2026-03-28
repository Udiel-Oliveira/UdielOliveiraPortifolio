import CursoSwiper from "@/components/ui/CursoSwiper/CursosSwiper";
import Styles from "./Certifications.module.css";
import Button from "@/components/ui/Button/Button";
import { Trophy } from "akar-icons";

export default function Certifications() {  
    return (
        <section id="certifications" className={Styles.section}>
            <Button icon={<Trophy/>}>Certificações</Button>
            <CursoSwiper/>
        </section>
    );
}