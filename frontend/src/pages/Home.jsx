import HeroCarousel from '../components/HeroCarousel';
import About from './About';
import Contact from './Contact';
import './Home.css'
import Services from './Services';

function Home() {
  return (
    <div className="page home">
      <h1>Welcome to SSSoft Solutions</h1>
      <p>Your partner in innovative IT solutions.</p>
      <HeroCarousel/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default Home;
