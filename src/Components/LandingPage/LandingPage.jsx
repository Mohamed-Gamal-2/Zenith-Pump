import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import styles from "./LandingPage.module.css";
import { useState } from "react";
import Contact from "../Contact/Contact";
export default function LandingPage() {
  const [isContactOpen, SetIsContctOpen] = useState(false);

  function handleOpenConnectionInfo() {
    SetIsContctOpen(true);
  }
  function handleCloseConnectionInfo() {
    SetIsContctOpen(false);
  }

  function bookFreeClass() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section id="landing-page" className={`relative ${styles.section}`}>
        {/*---------------- absoulte Part ----------------- */}
        <div className={`absolute ${styles.topLeftCorner}`}></div>
        <div className={`absolute ${styles.bottomRightCorner}`}></div>

        <Contact isContactOpen={isContactOpen} />

        <ChevronLeftCircle
          className={`absolute ${
            isContactOpen ? styles.leftArrow : styles.leftArrow0
          }`}
          onClick={handleCloseConnectionInfo}
        />

        <ChevronRightCircle
          className={`absolute ${
            isContactOpen ? styles.rightArrow : styles.rightArrow0
          }`}
          onClick={handleOpenConnectionInfo}
        />

        {/*---------------- landingPage Part ----------------- */}
        <div className={`w-full h-screen ${styles.landing}`}>
          <div className="h-screen sm:w-full  md:w-1/2 flex flex-col mx-auto justify-center items-center">
            <h2 className={`uppercase ${styles.title}`}>
              Athlete fitness club
            </h2>
            <p className={`uppercase ${styles.moto1}`}>train the </p>
            <p className={`capitalize ${styles.moto2}`}>figher in you</p>
            <p className="text-white text-center p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque
              nobis deleniti nulla. Et non vitae possimus nesciunt corporis
              cupiditate impedit cumque nostrum repellat neque architecto eum
              asperiores placeat dicta porro perspiciatis sit suscipit.
            </p>
            <button
              className={`rounded-lg ${styles.btn} px-3 py-1 uppercase`}
              onClick={bookFreeClass}
            >
              Try a free class
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
