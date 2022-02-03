
import Navbar from '../../components/navbar/navbar'
import About from '../about/about'
import Presentation from '../presentation/presentation';
import Service from '../service/service';
import Skills from '../skills/skills'
import './home.css'

const Home = () => {
    return(
        <>
        <Navbar/>
        <section className="main">
            <Presentation />
            <About />
            <Skills />
            <Service />
        </section>
        </>
        
    )
}

export default Home;
