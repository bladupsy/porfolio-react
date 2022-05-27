import { useState } from "react"
import { links } from "../../config/constants"
import  "./navbar.css" 


const Navbar = () =>{

    const [buttonId, setButtonId] = useState('')
    const handleSection = (id) => { setButtonId(id) }
    return(
        <div className="header" id="header">
            <div className="navbar container">
                <a href="/" className="nav-logo">Gisela Cristaldo</a>
                <div className="navbar-menu">
                <div className="nav-menu">
                    <ul className="nav-list">
                        {
                            links.map((l) => (
                                <li className="nav-item" key={l.key}>
                                    <a  target='_blank' href={l.link} onClick={() => handleSection(l.key) } className={`nav-link ${ buttonId === l.key ? 'active-link' : null } ` }>
                                    <box-icon name={l.icon} color="white" ></box-icon>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
               {/* Theme change button balck/white */}
                <box-icon name='moon'  type="regular" color="white" className="change-theme" id="theme-change"></box-icon>
            </div>
        </div>
    )
}

export default Navbar