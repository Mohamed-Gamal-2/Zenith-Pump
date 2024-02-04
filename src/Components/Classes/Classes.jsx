import ClassesCard from "../ClassesCard/ClassesCard";
import styles from "./Classes.module.css";

const ClassesData = [
  {
    id: 1,
    image: "./assests/class-1.jpg",
    title: "Strength Trainig",
    desc: "Resistance Trainig",
  },
  {
    id: 2,
    image: "./assests/class-2.jpg",
    title: "Flexibility & Mobility",
    desc: "Yoga & Pilates",
  },
  {
    id: 3,
    image: "./assests/class-3.jpg",
    title: "HITT",
    desc: "Circuit Trainig",
  },
  {
    id: 4,
    image: "./assests/class-4.jpg",
    title: "Group Fitness",
    desc: "Zumba or Dance",
  },
];

export default function Classes() {
  return (
    <section id="classes" className={`${styles.section}`}>
      <div className={styles.sectionContainer}>
        <div className="container mx-auto py-32">
          <h2 className={styles.header}>
            <span>Our</span> classes
          </h2>
          <p className="mt-5">
            Discover a diverse range of exhilarating classes at our gym designed
            to cater to all fitness levels and interests. Whether you're a
            seasoned athlete or just starting your fitness journey, our classes
            offer something for everyone.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 gap-10  mt-10">
            {ClassesData.map((classData) => (
              <ClassesCard key={classData.id} classData={classData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
