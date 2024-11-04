"use client"

import data from "@/data.json"; 
import Link from "next/link"; 
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";

export default function PlanetLinkContainer({planet}) {
    const path = usePathname(); 
    const capitalizePlanet = `${planet[0].toUpperCase()}${planet.slice(1)}`; 
    const filteredData = data.filter((data) => {return data.name === capitalizePlanet})
    if (filteredData.length === 0) {
        notFound(); 
    }
    return (
        <>
        <ul className={"planet-container"}>
            {data.map(planet => {return <Link key={planet.name}  href={`${planet.name.toLowerCase()}`}><span className={`planet-link ${path === `/${planet.name.toLowerCase()}` ? "active" : ""}`}>{`${planet.name.toUpperCase()}`}</span></Link>})}
        </ul>
        <style jsx>{`
            .planet-container {
                display: none; 
            }
            .planet-container :global(a) {
                text-decoration: none; 
            }
            @media screen and (min-width: 768px) {
                .planet-container {
                    display: flex; 
                    width: 100%; 
                    justify-content: space-between;
                    padding: 0 52px 27px;  
                }
                .planet-link {
                    text-decoration: none;
                    color: #838391; 
                    padding-bottom: 27px; 
                }

                .planet-link:hover, .planet-link.active {
                    color: white; 
                    border-bottom: 4px solid ${filteredData[0].colors.button} 
                }
            }

            @media screen and (min-width: 1110px) {
                .planet-container {
                    gap: 32px; 
                    flex-shrink: 1; 
                    justify-content: space-between;
                    padding-left: 0; 
                    padding-right: 0; 
                    padding-bottom: 0; 
                }
                .planet-link {
                    padding: 0;  
                    display: flex; 
                    align-items: center;
                    display: flex;
                    height: 100%;
                    align-items: center 
                }
                .planet-link:hover, .planet-link.active {
                    color: white; 
                    border-bottom: unset; 
                    border-top: 4px solid ${filteredData[0].colors.button} 
                }
            }
        `}</style>
        </>
    )
}