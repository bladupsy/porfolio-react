
import { footer, links } from '../../config/constants'
import './footer.css'

const Footer = () =>{
    
    return(
        <>
        <footer className="footer">
            <h1 className="footer-title">Gisela</h1>
            <ul className='footer-list'>
            {
                links.map((f) => (
                    <li key={f.key}>
                        <a href={f.link} className='footer-link'>{f.title}</a>
                    </li>
                ))
            }

            </ul>
            <ul className='footer-social'>
                {
                    footer.map((footer)=>(
                <li key={footer.key}>
                    <a href={footer.link} className='footer-social-link'  target='_blank'>
                    <box-icon type='logo' name={footer.icon}></box-icon>
                    </a>
                </li>
                    ))
                }
                
            </ul>
            <span className='footer-copy'>
                Hecho con 💕 desde interior.
            </span>

        </footer>
        </>
    )
}

export default Footer