import { useState } from "react"
import "./home.css"

const SectionTwo = () => {
     const [isHovered, setIsHovered] = useState(false)

     const mouseOver = () => {
          setIsHovered(true)
     }
     const mouseLeave = () => {
          setIsHovered(false)  
     }
     return (
          <section className="button-container">
               <div className="explore" onMouseOver={mouseOver} onMouseLeave={mouseLeave}><p>EXPLORE</p></div>
               <div className="overlay" style ={{display: isHovered ? "block" : "none"}} ></div>
          </section>
     )
}

export default SectionTwo
