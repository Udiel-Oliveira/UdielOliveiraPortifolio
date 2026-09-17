"use client";
import CursoSwiper from "@/components/ui/CursoSwiper/CursosSwiper";
import Styles from "./Certifications.module.css";
import Button from "@/components/ui/Button/Button";
import { Trophy } from "akar-icons";
import { useLanguage } from "@/lib/i18n";

export default function Certifications() {
    const { t } = useLanguage();

    return (
        <section id="certifications" className={Styles.section}>
            <Button icon={<Trophy/>} variant="title">
                {t.certifications.title}
            </Button>
            <CursoSwiper/>
        </section>
    );
}