import data from "../../data.json"; 
import DynamicPlanet from "../../components/DynamicPlanet";
import styles from "./page.module.css";
import { notFound} from "next/navigation"; 
import { Antonio} from "next/font/google"; 

const antonio = Antonio({
    subsets: ["latin"], 
    weight: "500"
  })

export default function Planet({params}) {
    let propertyName = params.planet.charAt(0).toUpperCase() + params.planet.slice(1); 
    let filteredData = data.filter(planet => planet.name === propertyName); 

    if (filteredData.length === 0) {
        notFound(); 
    }
    return (
        <>
            <DynamicPlanet data={filteredData[0]}/>
            <section className={styles["stats-container"]}>
                <div className={styles.stat}>
                    <p className={styles.property}>Rotation Time</p>
                    <p className={`${styles.value} ${antonio.className}`}>{filteredData[0].rotation}</p>
                </div>
                <div className={styles.stat}>
                    <p className={styles.property}>Revolution Time</p>
                    <p className={`${styles.value} ${antonio.className}`}>{filteredData[0].revolution}</p>
                </div>
                <div className={styles.stat}>
                    <p className={styles.property}>Radius</p>
                    <p className={`${styles.value} ${antonio.className}`}>{filteredData[0].radius}</p>
                </div>
                <div className={styles.stat}>
                    <p className={styles.property}>Average Temp</p>
                    <p className={`${styles.value} ${antonio.className}`}>{filteredData[0].temperature}</p>
                </div>
            </section>
        </>
    )
}