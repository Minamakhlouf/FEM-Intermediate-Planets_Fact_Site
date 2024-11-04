export default function PlanetButton({children, updateState, currentState, stateValue, color, resetAnimation}) {
    const buttonClickHandler = () => {
        updateState(stateValue)
        resetAnimation(); 
    }
    
    return (
        <>
        <button onClick={buttonClickHandler} className={`${currentState === stateValue ? "active" : ""}`}>
            {children}
        </button>
        <style jsx>{`
            button {
                font-size: 9px; 
                text-transform: uppercase; 
                letter-spacing: 1.93px;
                background: transparent;
                color: #838391; 
                font-weight: bold; 
                padding: 17px 0; 
                cursor: pointer; 
                border: none; 
                transition: all 0.2s ease-in-out; 
            }
            button:hover {
                color: white;
                font-weight: bold;  
                border-bottom: 4px solid ${color}; 
            }
            button.active {
                color: white; 
                border-bottom: 4px solid ${color}; 
            }
            @media screen and (min-width: 768px) {
                button {
                    text-align: left; 
                    padding: 8px 20px; 
                    border: 1px solid #838391
                }
                span {
                    display: inline; 
                }
                button:hover {
                    border-bottom: 1px solid #838391; 
                    background-color: ${color}
                }
                button.active {
                    border-bottom: 1px solid #838391; 
                    background-color: ${color}
                }
            }
            @media screen and (min-width: 1110px) {
                button {
                    padding: 12px 28px; 
                    font-size: 12px; 
                }
            }
        `}</style>
        </>
    )
}