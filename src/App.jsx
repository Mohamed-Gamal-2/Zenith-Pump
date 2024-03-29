import "./App.css";
import Classes from "./Components/Classes/Classes";
import ContactUs from "./Components/ContactUs/ContactUs";
import GymFacts from "./Components/GymFacts/GymFacts";
import LandingPage from "./Components/LandingPage/LandingPage";
import Motivation from "./Components/Motivation/Motivation";
import Navbar from "./Components/Navbar/Navbar";
import OurStory from "./Components/OurStory/OurStory";
import Pricing from "./Components/Pricing/Pricing";
import Testimonials from "./Components/Testimonials/Testimonials";
import Trainers from "./Components/Trainers/Trainers";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <OurStory />
      <Classes />
      <Trainers />
      <Pricing />
      <Testimonials />
      <GymFacts />
      <Motivation />
      <ContactUs />
    </>
  );
}

export default App;
