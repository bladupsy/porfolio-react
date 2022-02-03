
import Navbar from '../../components/navbar/navbar'
import About from '../about/about'
import Presentation from '../presentation/presentation';
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
        </section>
        </>
        
    )
}

export default Home;
