import { useState } from "react"
import Description from "./description"
import PlanetMoon from "../../assets/destination/image-moon.png"
import Mars from "../../assets/destination/image-mars.png"
import Europa from "../../assets/destination/image-europa.png"
import Titan from "../../assets/destination/image-titan.png"

const SectionTwo = () => {

     const [toggleState, setToggleState] = useState(1)

     const toggleTab = (index) => {
          setToggleState(index);
     }

     return (
          <>
               <div className="master-container">
                    <div className="destination-sec-one">
                         <h1><span>01</span>PICK YOUR DESTINATION</h1>
                         <div className="main">
                              <div className="img-container">
                                   <img src={toggleState === 1 && PlanetMoon} className="moon-img" />
                                   <img src={toggleState === 2 && Mars} className="mars-img" />
                                   <img src={toggleState === 3 && Europa} className="Europa-img" />
                                   <img src={toggleState === 4 && Titan} className="Titan-img" />
                              </div>
                         </div>
                    </div>
                    <div className="space-contents">
                         <div className="bloc-tabs">
                              <div className="planets">
                                   <div className={ toggleState === 1 ? "inner-tab active-tabs" : "inner-tab"}
                                   onClick={() => toggleTab(1)}>MOON</div></div>
                              <div className="planets">
                                   <div className={ toggleState === 2 ? "inner-tab active-tabs" : "inner-tab"}
                                   onClick={() => toggleTab(2)}>MARS</div></div>
                              <div className="planets">
                                   <div className={ toggleState === 3 ? "inner-tab active-tabs" : "inner-tab"}
                                   onClick={() => toggleTab(3)}>EUROPA</div></div>
                              <div className="planets">
                                   <div className={ toggleState === 4 ? "inner-tab active-tabs" : "inner-tab"}
                                   onClick={() => toggleTab(4)}>TITAN</div></div>
                         </div>
                         <div className="tabs-container">
                              <Description
                                   className= {toggleState === 1 ? "active-content universe-tabs" : "universe-tabs"}
                                   title="MOON"
                                   paragraph="See our planet as you've never seen it before.A
                                   perfect relaxing trip away to help regain 
                                   perspective and come back refreshed. While
                                   you're there, take in some history by visiting the
                                   Luna 2 and Apollo 11 landing sites."
                                   distance="384,400"
                                   time="3 DAYS"
                              />
                              <Description
                                   className= {toggleState === 2 ? "active-content universe-tabs" : "universe-tabs"}
                                   title="MARS"
                                   paragraph="Don't forget to pack your hiking boots. You'll need
                                   them to tackel Olympus Mons, the tallest planetary
                                   mountain in our solar system. It's two and a half
                                   times the size of Everest!"
                                   distance="225 MIL."
                                   time="9 MONTHS"
                              />
                              <Description
                                   className= {toggleState === 3 ? "active-content universe-tabs" : "universe-tabs"}
                                   title="EUROPA"
                                   paragraph="The smalllest of the four Galilean moons orbiting
                                   Jupiter, Europa is a winter lover's dream. With an 
                                   icy surface, it's perfect for a bit of ice skating,
                                   curling, hockey, or simple relaxation in your snug
                                   wintery cabin."
                                   distance="628 MIL."
                                   time="3 YEARS"
                              /> 
                              <Description
                                   className= {toggleState === 4 ? "active-content universe-tabs" : "universe-tabs"}
                                   title="TITAN"
                                   paragraph="The only moon know to have a dense atmosphere 
                                   other than Earth, Titan is a home away from home
                                   (just a few hundred degrees colder!). As a bonus,
                                   you get striking views of the Rings of Saturn."
                                   distance="1.6 BIL."
                                   time="7 YEARS"
                              />               
                         </div>
                    </div>
               </div>
          </>
     )
}

export default SectionTwo
