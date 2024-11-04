import PlanetGrid from "../components/PlanetGrid";
import ModalControl from "../components/Modal/ModalControl";
import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <>
            <main className={styles.container}>
                <h1 className={styles.heading}>Not Found</h1>
                <p className={styles.paragraph}>No planet exists with those specifications in the Milky Way Galaxy. Please pick one of the valid planets below</p>
                <PlanetGrid/>
                <ModalControl/>
            </main>
        </>
    )
}