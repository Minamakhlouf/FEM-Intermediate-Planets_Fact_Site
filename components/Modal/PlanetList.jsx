"use client"
import data from "@/data.json";
import Link from "next/link";
import styles from "./PlanetList.module.css";

export default function PlanetList({modalIsOpen}) {
    console.log(styles)
    return (
        <ul className={`${styles["modal-list"]} ${modalIsOpen ? "open" : ""}`}>
            {data.map((planet) => { return (<Link href={`/${planet.name.toLowerCase()}`} key={planet.name} className={styles.planet}>
                <div style={{height: "20px", width: "20px", backgroundColor: `${planet.colors.modal}`, borderRadius: "50%"}}></div>
                <div>{planet.name} </div>
            </Link>)})}
        </ul>
    )
}