import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Header from './Header';
import About from './About';
import Experince from './Experince';
import Social from './Social';
import Footer from './Footer';
function App() {
  return (
    <>
    <Social/>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Experince" element={<Experince />} />
      </Routes>
      <Footer></Footer>


    </>
  );
}

export default App;
