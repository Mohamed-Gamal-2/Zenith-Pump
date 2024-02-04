import TrainersCard from "../TrainersCard/TrainersCard";
import styles from "./Trainers.module.css";

const trainersData = [
  {
    id: 1,
    image: "./assests/trainer-1.jpg",
    name: "Mark Harris",
    desc: "HIIT and Functional",
    overView:
      "His energetic and dynamic workouts are designed to push your limits, boost metabolism and torch calories.",
    FBLink: "",
    GoogleLink: "",
    IGLink: "",
    XLink: "",
  },
  {
    id: 2,
    image: "./assests/trainer-2.jpg",
    name: "James Rodrigues",
    desc: "Strength and Conditioning",
    overView:
      "With a background in competitive sports. he's dedicated to helping you reach your peak physical performance.",
    FBLink: "",
    GoogleLink: "",
    IGLink: "",
    XLink: "",
  },
  {
    id: 3,
    image: "./assests/trainer-3.jpg",
    name: "Emily Davis",
    desc: "Yoga and Mindfulness",
    overView:
      "Emily's sessions are about physical postures and also about cultivating inner peace and mindfulness.",
    FBLink: "",
    GoogleLink: "",
    IGLink: "",
    XLink: "",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className={`${styles.section} `}>
      <div className="container mx-auto py-32">
        <h2 className={`${styles.header} text-center`}>
          <span>Our</span> Trainers
        </h2>
        <p className="mt-5 text-center w-full md:w-2/3 mx-auto">
          Our trainers are more than just experts in exercise, they are
          passionate about helping you achieve your heath and fitness goals. Our
          trainers are equipped to tailor workout programs to meet
          your unique needs
        </p>
        <div className="flex justify-center flex-row md:flex-col lg:flex-row flex-wrap shrink-0 sm:gap-5 md:gap-0 mt-10">
          {trainersData.map((trainer) => (
            <TrainersCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
