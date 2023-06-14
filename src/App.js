import "./styles.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter> 
  
        <Navbar/><Intro/><Services/><Projects/><Portfolio/><Testimonial/><Contact/>
      
          {/* <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/services/" element={ <Services />}></Route>
            <Route path="/experience/" element={<Experience />}></Route>
            <Route path="/projects/" element={<Projects />}></Route>
            <Route path="/portfolio/" element={<Portfolio />}></Route>
            <Route path="/testimonial/" element={<Testimonial />}></Route>
            <Route path="/contact/" element={<Contact />}></Route>
          </Routes> */}
      </BrowserRouter>      
    </div>
  );
}
