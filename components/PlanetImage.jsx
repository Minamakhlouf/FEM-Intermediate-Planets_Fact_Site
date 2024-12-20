"use client"

import Image from "next/image"; 

export default function PlanetImage(props) {
    const imageChoice = props.selectedInfo === 2 ? "internal" : "planet"; 

    return (
        <>
        <div className="image-container">
            <Image src={props.planet.images[imageChoice]} width="100" height="100" layout="responsive" alt={`Picture of planet ${props.planet.name}`}/>
            <div className={`geology-image ${props.selectedInfo === 3 ? "visible" : ""}`} >
                <Image src={props.planet.images.geology} width="40" height="40" layout="responsive" alt={`Geological picture of planet ${props.planet.name}`}/>
            </div>
        </div>
        <style jsx>{`
            .image-container {
                width: ${props.planet.size.mobile}; 
                z-index: -1; 
                max-width: 270px; 
            } 
            .geology-image {
                position: absolute; 
                bottom: 0; 
                left: 50%; 
                width: 75px; 
                transform: translatex(-50%) translatey(25%); 
                opacity: 0; 
            }
            .visible {
                opacity: 1; 
            }
            @media screen and (min-width: 768px) {
                .image-container {
                    width: ${props.planet.size.tablet}; 
                    max-width: 400px; 
                }
                .geology-image {
                    width: 100px; 
                }
            }
            @media screen and (min-width: 1110px) {
                .image-container {
                    width: ${props.planet.size.desktop}
                }
                .geology-image {
                    width: 163px; 
                }
            }
        `}</style>
        </>
    )
}