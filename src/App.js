import './App.css';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Mywork from './Component/MyWork/Mywork';  
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact /> /
      <Footer />
    </div>
  );
}

export default App;
