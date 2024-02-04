import "./App.css";
import Classes from "./Components/Classes/Classes";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import OurStory from "./Components/OurStory/OurStory";
import Pricing from "./Components/Pricing/Pricing";
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
    </>
  );
}

export default App;
