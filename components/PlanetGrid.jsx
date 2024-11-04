import Image from "next/image";
import data from "../data.json"
import Link from "next/link"
import styles from "./PlanetGrid.module.css"

export default function PlanetGrid() {
    return (
        <div className={styles["planet-grid"]}>
            {data.map((planet) => (
            <div key={planet.name} className={styles["planet-item"]}>
                <Link href={`/${planet.name.toLowerCase()}`} className={styles["planet-link"]}>
                <div className={styles["image-wrapper"]} style={{width: `${planet.size.mobile}`, height: `${planet.size.mobile}`}}>
                    <Image src={planet.images.planet} fill alt={planet.name} />
                </div>
                <p className={styles["planet-name"]}>{planet.name}</p>
                </Link>
            </div>
            ))}
      </div>
    )
}