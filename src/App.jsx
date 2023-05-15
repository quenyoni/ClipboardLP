import Hero from "./Components/Hero";
import FirstSection from './Components/FirstSection'
import SectionFour from "./Components/sectionFour";
import SectionThree from "./Components/SectionThree";
import SectionTwo from './Components/SectionTwo';
import Footer from "./Components/Footer";

import "./App.css";
import SectionFive from "./Components/SectionFive";
import SectionSix from "./Components/SectionSix";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';


function App() {
   useEffect(() => {
      AOS.init();
   }, [])
   
	return (
		<>
      <Hero />
      <FirstSection />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour />
      <SectionSix/>
      <SectionFive />
      <Footer/>
    
  
		</>
	);
}

export default App;
