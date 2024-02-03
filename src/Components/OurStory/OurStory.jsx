import { DoorOpen, Handshake, ShieldPlus } from "lucide-react";
import styles from "./OurStory.module.css";
import OurStoryCard from "../OurStoryCard/OurStoryCard";

const cardData = [
  {
    id: 1,
    icon: <DoorOpen size={50} />,
    title: "Open Door Policy",
    desc: "We believe in providing unrestricted access to all individuals, regardless of their fitness level, age, or background",
  },
  {
    id: 2,
    icon: <ShieldPlus size={50} />,
    title: "Fully Insured",
    desc: "Your peace of mind is our top priority, and our commitment to your safety extends to every aspect of your fitness journey.",
  },
  {
    id: 3,
    icon: <Handshake size={50} />,
    title: "Personal Trainer",
    desc: "WWith personalized workout plans tailored to your needs, we will ensure that you get the most out of your gym experience",
  },
];

export default function OurStory() {
  return (
    <section className={`${styles.section} relative`}>
      {/*---------------- absoulte Part ----------------- */}
      <div className={`absolute ${styles.topRightCorner}`}></div>

      {/*---------------- ourstory Part ----------------- */}
      <div>
        <div className="container mx-auto py-6 flex justify-between items-center flex-wrap">
          <div className="relative md:w-1/2">
            <img
              src="./assests/dot-bg.png"
              alt="dots"
              className="absolute top-10 right-10 z-0 w-1/3"
            />
            <img
              src="./assests/about.png"
              alt="About us"
              className={`${styles.image} z-10 relative mx-auto`}
            />
          </div>
          <div className="flex flex-col md:w-1/2 items-start justify-between">
            <h2 className={styles.header}>
              <span>Our</span> Story
            </h2>
            <p className="mt-5">
              Led by our team of expert and motivational instructors, "The Class
              You Will Get Here' is a high-energy, results-driven session that
              combines a perfect blend of cardio, strength training, and
              functional exercises.
            </p>
            {cardData.map((data) => (
              <OurStoryCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
