import  "./navbar.css" 


const Navbar = () =>{
    return(
        <header className="header" id="header">
            <navbar className="navbar container">
                <a href="#" className="nav-logo">Bladupsy</a>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link">
                            <box-icon name='home' color="white" ></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                            <box-icon name='user' color="white" type='regular' ></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                            <box-icon name='book-heart' color="white" type="regular"></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#work" className="nav-link">
                            <box-icon name='briefcase-alt' type="regular" color="white"></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                            {/* <box-icon type='solid' name='briefcase-alt'></box-icon> */}
                            <box-icon name='message-square-dots' type="regular" color="white" ></box-icon>
                            </a>
                        </li>
                    </ul>
                </div>
               {/* Theme change button balck/white */}
                <box-icon name='moon'  type="regular" color="white" className="change-theme" id="theme-change"></box-icon>
            </navbar>
        </header>
    )
}

export default Navbar