
import { links } from '../../config/constants'
import './footer.css'

const Footer = () =>{
    
    return(
        <>
        <footer className="footer">
            <h1 className="footer-title">Gisela</h1>
            <ul className='footer-list'>
            {
                links.map((f) => (
                    <li>
                        <a href={f.link} className='footer-link'>{f.title}</a>
                    </li>
                ))
            }

            </ul>
            <ul className='footer-social'>
                <li>
                    <a href='https://www.linkedin.com/in/gisela-cristaldo/' className='footer-social-link'>
                    <box-icon type='logo' name='linkedin-square'></box-icon>
                    </a>
                </li>
                <li>
                    <a href='https://gitlab.com/bladupsy' className='footer-social-link'>
                        <box-icon name='gitlab' type='logo' ></box-icon>
                    </a>
                </li>
                <li>
                    <a href="mailto:gisela.cristaldo.work@gmail.com" className='footer-social-link'>
                    <box-icon name='gmail' type='logo' ></box-icon>
                    </a>
                </li>
            </ul>
            <span className='footer-copy'>
                Hecho con 💕 desde interior.
            </span>

        </footer>
        </>
    )
}

export default Footer