import PlanetGrid from "../components/PlanetGrid";
import ModalControl from "../components/Modal/ModalControl";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>The Planets</h1>
      <p className={styles.paragraph}>Explore the Milky Way Galaxy.</p>
      <PlanetGrid/>
      <ModalControl/>
    </main>
  );
}
