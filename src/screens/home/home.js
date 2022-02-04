
import About from '../about/about'
import Navbar from '../../components/navbar/navbar'
import Presentation from '../presentation/presentation';
import Service from '../service/service';
import Skills from '../skills/skills'
import Work from '../work/work';
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
            <Work />
        </section>
        </>
        
    )
}

export default Home;
