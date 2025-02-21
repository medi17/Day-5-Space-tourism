import { useState } from "react"
import Report from "./report"
import RocketOne from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import RocketTwo from "../../assets/technology/image-spaceport-landscape.jpg"
import SpaceShip from "../../assets/technology/image-space-capsule-landscape.jpg"
import RocketOnee from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import RocketTwoo from "../../assets/technology/image-spaceport-portrait.jpg"
import SpaceShipp from "../../assets/technology/image-space-capsule-portrait.jpg"

const Tech = () => {

     const [toggleState, setToggleState] = useState(1)

     const toggleTab = (index) => {
          setToggleState(index);
     }

     return (
          <>
               <div className="container">
                    <div className="header-container">
                         <h1><span>03</span>SPACE LAUNCH 101</h1>
                    </div>
                    <div className="two-container"> 
                         <div className="tech-sec-one">
                              <div className="main">
                                   <div className="img-container">
                                        <img src={toggleState === 1 ? (window.matchMedia('(max-width: 1024px)').matches ? RocketOne : RocketOnee)
                                             : toggleState === 2 ? (window.matchMedia('(max-width: 1024px)').matches ? RocketTwo : RocketTwoo)
                                             : (window.matchMedia('(max-width: 1024px)').matches ? SpaceShip : SpaceShipp)} className="Rocket-img" />
                                   </div>
                              </div>
                         </div>
                         <div className="spaces-content">
                              <div className="blocker">
                                   <div className={ toggleState === 1 ? "taber act-taber" : "taber"}
                                   onClick={() => toggleTab(1)}>1</div>
                              
                                   <div className={ toggleState === 2 ? "taber act-taber" : "taber"}
                                   onClick={() => toggleTab(2)}>2</div>
                              
                                   <div className={ toggleState === 3 ? "taber act-taber" : "taber"}
                                   onClick={() => toggleTab(3)}>3</div>
                              </div> 
                              <div className="tabs-container">
                                   <Report
                                        className= {toggleState === 1 ? "active-content links" : "links"}
                                        header="LAUNCH VEHICLE"
                                        paragraph="A launch vehicle or carrier rocket is a rocket-
                                        propelled vehicle used to carry a payload from
                                        Earth's surface to space, usually to Earth orbit or
                                        beyond. Our WEB-X carrier rocket is the most
                                        powerful in operation. Standing 150 metres tall, it's
                                        quite an awe-inspiring sight on launch pad!"
                                   />
                                   <Report
                                        className= {toggleState === 2 ? "active-content links" : "links"}
                                        header="SPACEPORT"
                                        paragraph="A spaceport or cosmodrome is a site for launching
                                        (or receiving)spacecraft, by analogy to the
                                        seaport for ships or airport for aircraft. Based in
                                        the famous Cape Canaveral, our spaceport is
                                        ideally situated to take advantage of the Earth's
                                        rotation for launch."
                                   />
                                   <Report
                                        className= {toggleState === 3 ? "active-content links" : "links"}
                                        header="SPACE CAPSULE"
                                        paragraph="A space capsule is an often-crewed spacecraft
                                        that uses a blunt-body reetry capsule to reenter
                                        the Earth's atmosphere without wings. Our
                                        capsule is where you'll spend your time during the
                                        flight. it includes a space gym, cinema, and plenty 
                                        of other activities to keep you entertained."
                                   />               
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Tech
