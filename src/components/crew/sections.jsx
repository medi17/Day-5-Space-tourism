import { useState } from "react"
import CrewContent from "./content"
import Commander from "../../assets/crew/image-douglas-hurley.png"
import Specialist from "../../assets/crew/image-mark-shuttleworth.png"
import Pilot from "../../assets/crew/image-victor-glover.png"
import Engineer from "../../assets/crew/image-anousheh-ansari.png"

const sections = () => {
     const [toggleState, setToggleState] = useState(1)

     const toggleTab = (index) => {
          setToggleState(index);
          console.log(index);
          
     }
     
     return (
          <>
               <div className="master-container">
                    <div className="crew-one">
                         <h1><span>02</span>MEET YOUR CREW</h1>
                         <div className="tabs-container">
                              <CrewContent
                                   className={toggleState === 1 ? "ac-content-tab content-tab" : "content-tab"}
                                   honor="COMMANDER"
                                   name = "DOUGLAS HURLEY"
                                   biography="Douglas Gerald Hurley is an American engineer,
                                   former Marine Corps pilot and former NASA 
                                   astronaut. He launched into space for the third
                                   time as commander of Crew Dragon Demo-2"
                              />
                              <CrewContent
                                   className={toggleState === 2 ? "ac-content-tab content-tab" : "content-tab"} 
                                   honor="MISSION SPECIALIST"
                                   name = "MARK SHUTTLEWORTH"
                                   biography="Mark Richard Shuttleworth is the founder and CEO
                                   of Canonical, the company behind the Linux-based 
                                   Ubuntu operating system. Shuttleworth became 
                                   the first South African to travel to space as a space tourist."
                              />
                              <CrewContent
                                   className={toggleState === 3 ? "ac-content-tab content-tab" : "content-tab"} 
                                   honor="PILOT"
                                   name = "VICTOR GLOVER"
                                   biography="Pilot on the first operational flight of the SpacX
                                   Crew Dragon to the International Space Station.
                                   Glover is a commander in the U.S. Navy where he
                                   pilots an F/A-18. He was a crew member of
                                   Expedition 64, and served as a station systems
                                   flight engineer"
                              />
                              <CrewContent
                                   className={toggleState === 4 ? "ac-content-tab content-tab" : "content-tab"} 
                                   honor="FLIGHT ENGINEER"
                                   name = "ANOUSHEH ANSARI"
                                   biography="Anousheh Ansari ia an Iranian Ameriacan engineer
                                   and co-founder of Prodea Systems. Ansari was the
                                   fourth self-funded space tourist, the first self-
                                   funded women to fly to the ISS, and the first
                                   Iranian in space."
                              />              
                         </div>
                         <div className="bloc">
                              <div className={ toggleState === 1 ? "tab act-tab" : "tab"}
                              onClick={() => toggleTab(1)}></div>
                         
                              <div className={ toggleState === 2 ? "tab act-tab" : "tab"}
                              onClick={() => toggleTab(2)}></div>
                         
                              <div className={ toggleState === 3 ? "tab act-tab" : "tab"}
                              onClick={() => toggleTab(3)}></div>
                         
                              <div className={ toggleState === 4 ? "tab act-tab" : "tab"}
                              onClick={() => toggleTab(4)}></div>
                         </div>                         
                    </div>
                    <div className="space-content">
                         <div className="main">
                              <div className="img-container">
                                   <img src={toggleState === 1 && Commander} className="commander-img" />
                                   <img src={toggleState === 2 && Specialist} className="specialist-img" />
                                   <img src={toggleState === 3 && Pilot} className="pilot-img" />
                                   <img src={toggleState === 4 && Engineer} className="engineer-img" />
                              </div>
                         </div>                         
                    </div>
               </div>               
          </>
     )
}

export default sections
