"use client"
import {useState, useEffect} from "react"; 
import PlanetImage from "./PlanetImage";
import styles from "./DynamicPlanet.module.css"; 
import PlanetButton from "./PlanetButton"; 
import Image from "next/image"; 
import { Antonio} from "next/font/google"; 

const antonio = Antonio({
    subsets: ["latin"], 
    weight: "700"
  })

export default function DynamicPlanet(props) {
    const [selectedInfo, setSelectedInfo] = useState(1); 
    const [animationClass, setAnimationClass] = useState(styles.animate); 

    useEffect(() => {
        setAnimationClass(""); 
    }, [animationClass])
    
    let presentedInfo; 

    if (selectedInfo === 1) {
        presentedInfo = props.data.overview; 
    } else if(selectedInfo === 2) {
        presentedInfo = props.data.structure; 
    } else if(selectedInfo === 3) {
        presentedInfo = props.data.geology; 
    }

    const resetAnimationHandler = () => {
        setAnimationClass(styles.animate)
    }

    return (
        <main className={styles["planet-grid"]}>
            <div className={`${styles["planet-image"]} ${animationClass}`}>
                <PlanetImage selectedInfo={selectedInfo} planet={props.data}/>
            </div>
            <div className={`${styles["planet-info"]} ${animationClass}`}>
                <h1 className={`${antonio.className}`}>{props.data.name.toUpperCase()}</h1>
                <div>
                    <p className={styles.content}>{presentedInfo.content}</p>
                    <p className={styles.source}>Source: <a href={presentedInfo.source}>Wikipedia <Image src="/assets/icon-source.svg" width={12} height={12}/></a></p>
                </div>
            </div>
            <div className={styles["planet-topic"]}>
                <PlanetButton resetAnimation={resetAnimationHandler} updateState={setSelectedInfo} currentState={selectedInfo} stateValue={1} color={props.data.colors.button} ><span>01</span> OVERVIEW</PlanetButton>
                <PlanetButton resetAnimation={resetAnimationHandler} updateState={setSelectedInfo} currentState={selectedInfo} stateValue={2} color={props.data.colors.button}><span>02</span>  <span>INTERNAL</span> STRUCTURE</PlanetButton>
                <PlanetButton resetAnimation={resetAnimationHandler} updateState={setSelectedInfo} currentState={selectedInfo} stateValue={3} color={props.data.colors.button}><span>03</span>  SURFACE <span>GEOLOGY</span></PlanetButton>
            </div>
        </main>
    )
}