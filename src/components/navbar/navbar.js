import  "./navbar.css" 


const Navbar = () =>{
    return(
        <header className="header" id="header">
            <navbar className="nav container">
                <a href="#" className="nav-logo">Ansel</a>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                            <box-icon type='solid' name='home'></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                            <box-icon type='solid' name='user'></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                            <box-icon type='solid' name='book-heart'></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#work" className="nav-link">
                            <box-icon type='solid' name='briefcase-alt'></box-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                            <box-icon type='solid' name='briefcase-alt'></box-icon>
                            </a>
                        </li>
                    </ul>
                </div>
               {/* Theme change button balck/white */}
                <box-icon name='moon' className="change-theme" id="theme-change"></box-icon>
            </navbar>
        </header>
    )
}

export default Navbar