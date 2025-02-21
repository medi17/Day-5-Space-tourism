import { useState } from 'react'
import '../home/home.css'
import Logo from "../../assets/shared/logo.svg"
import Menu from "../../assets/shared/icon-hamburger.svg"
import Close from "../../assets/shared/icon-close.svg"  
import { NavLink } from 'react-router-dom'

const Header = () => {

     const [toggleState, setToggleState] = useState(false)

     const toggleMenu = () => {
          setToggleState(!toggleState);
     }

     return (
          <>
               <header className="header" >
                    <div><img className="star" src={Logo}  /></div>
                    <div className="nav-container">
                         <ul className={ toggleState ? "nav active-nav" : "nav"}>
                              <li> <NavLink to="/" className= "inner-nav"><span className='spann'>00</span><span>HOME</span></NavLink></li>
                              <li><NavLink to="/destination" className= "inner-nav"><span className='spann'>01</span><span >DESTINATION</span></NavLink></li>
                              <li ><NavLink to="/crew" className= "inner-nav"><span className='spann'>02</span><span>CREW</span></NavLink></li>
                              <li><NavLink to="/technology" className= "inner-nav"><span className='spann'>03</span><span>TECHNOLOGY</span></NavLink></li>
                         </ul>
                    </div>
                    <img className="menu" src={toggleState ? Close : Menu} onClick={toggleMenu}/>
               </header>
          </>
     )
}

export default Header
