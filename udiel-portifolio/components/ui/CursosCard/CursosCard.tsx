"use client";
import { ArrowUpRight } from "akar-icons";
import Styles from "./CursosCard.module.css";
import React, { useState, useMemo } from "react";
import Button from "../Button/Button";
import coursesData from "@/data/courses.json";

export default function CursosCard() {
  const [selectedInstitution, setSelectedInstitution] = useState("Alura");

  // Obter lista única de instituições
  const institutions = useMemo(() => {
    return Array.from(
      new Set(Object.values(coursesData).map((course: any) => course.instituicao))
    ).sort();
  }, []);

  // Filtrar cursos pela instituição selecionada
  const filteredCourses = useMemo(() => {
    return Object.values(coursesData).filter(
      (course: any) => course.instituicao === selectedInstitution
    );
  }, [selectedInstitution]);

  return (
    <div className={Styles.card}>
      <div className={Styles.header}>
        <h2 className={Styles.title}>Certificados</h2>
      </div>

      {/* Abas de instituições */}
      <div className={Styles.tabs}>
        {institutions.map((institution) => (
          <button
            key={institution}
            className={`${Styles.tabButton} ${
              selectedInstitution === institution ? Styles.tabActive : ""
            }`}
            onClick={() => setSelectedInstitution(institution)}
          >
            {institution}
          </button>
        ))}
      </div>

      <table className={Styles.table}>
        <thead className={Styles.tableHead}>
          <tr className="bg-gray-100">
            <th className={Styles.tableCellNome}>Nome</th>
            <th className={Styles.tableCellStats}>Status</th>
            <th className={Styles.tableCellLinkName}>Link</th>
          </tr>
        </thead>
        <tbody className={Styles.tableBody}>
          {filteredCourses.map((cert: any, index: number) => (
            <React.Fragment key={index}>
              <tr className="cursor-pointer bg-[var(--color-black)] hover:bg-[var(--color-gray-dark)]">
                <td className={Styles.tableCellTitle}>{cert.nome}</td>
                <td className={Styles.tableCellStatus}>
                  <div className={Styles.statusIndicator}>{cert.status}</div>
                </td>
                <td className={Styles.tableCellLink}>
                  <Button
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.linkButton}
                  >
                    <ArrowUpRight />
                  </Button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
