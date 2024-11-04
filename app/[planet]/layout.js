
import ModalControl from "@/components/Modal/ModalControl"
import PlanetLinkContainer from "../../components/PlanetLinkContainer";
import styles from "./layout.module.css"; 
import { Antonio} from "next/font/google"; 

const antonio = Antonio({
    subsets: ["latin"], 
    weight: "700"
  })


export default function PlanetLayout({params, children}) {
    console.log(params.planet)
    return (<>
        <nav className={styles.nav}>
            <h1 className={antonio.className}>THE PLANETS</h1>
            <PlanetLinkContainer className={styles["planet-container"]} planet={params.planet}/>
            <ModalControl context="navigation"/>
        </nav>
        {children}
    </>)
}