
import { About, Skills, Presentation, Service, Work } from '../index'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './home.css'

const Home = () => {
    return(
        <>
        <Navbar/>
        <section className="main">
            <Presentation />
            <About />
            <Skills />
            <Work />
            <Footer />
        </section>
        </>
        
    )
}

export default Home;
