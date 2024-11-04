"use client"
import { useState } from "react"; 
import hamburger from "@/public/assets/icon-hamburger.svg";
import Image from "next/image"; 
import styles from "./ModalControl.module.css"
import PlanetList from "./PlanetList";

export default function ModalControl({context}) {
    const [modalIsOpen, setModalIsOpen] = useState(false); 

    const openModal = () => setModalIsOpen(true); 
    const closeModal = () => setModalIsOpen(false); 

    return (
        <div className={styles.box}>
            {context === "navigation" ? <Image className={styles.burger} src={hamburger} width={24} height={17} onClick={openModal}/> : <button className={styles["modal-button"]} onClick={openModal}>Click to Explore</button>}
            <div className={`${styles.modal} ${modalIsOpen ? styles.open : ""}`} onClick={closeModal}><PlanetList modalIsOpen={modalIsOpen}/></div>
        </div>
    )
}