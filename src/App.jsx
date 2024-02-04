import "./App.css";
import Classes from "./Components/Classes/Classes";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import OurStory from "./Components/OurStory/OurStory";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <OurStory />
      <Classes />
    </>
  );
}

export default App;
