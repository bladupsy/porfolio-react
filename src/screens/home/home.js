
import Navbar from '../../components/navbar/navbar'
import About from '../about/about'
import Presentation from '../presentation/presentation';
import './home.css'
function Home() {
    return(
        <>
        <Navbar/>
        <section className="main">
            <Presentation />
            <About />
        </section>
        </>
        
    )
}

export default Home;
