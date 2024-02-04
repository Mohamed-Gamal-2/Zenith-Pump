import CountUp from "react-countup";
import styles from "./GymFacts.module.css";
export default function GymFacts() {
  //       <CountUp end={100} enableScrollSpy />

  return (
    <section className={`${styles.section} `}>
      <div className="md:container mx-auto py-20">
        <h2 className={`${styles.header} text-center`}>Gym Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
          <div className="flex flex-col justify-center items-center">
            <div className="text-6xl">
              <CountUp
                start={2000}
                end={2115}
                duration={5}
                separator=","
                enableScrollSpy
              />
            </div>
            <div>Club Members</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-6xl">
              <CountUp end={56} duration={5} separator="," enableScrollSpy />
            </div>
            <div>Club Trainers</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-6xl">
              <CountUp end={44} duration={5} separator="," enableScrollSpy />
            </div>
            <div>Fitness Classes</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-6xl">
              <CountUp
                start={400}
                end={516}
                duration={5}
                separator=","
                enableScrollSpy
              />
            </div>
            <div>Club Equipments</div>
          </div>
        </div>
      </div>
    </section>
  );
}
