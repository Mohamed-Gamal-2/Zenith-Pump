import styles from "./Motivation.module.css";
export default function Motivation() {
  return (
    <div className={styles.motivation}>
      <div className={`flex flex-col items-end ${styles.container}`}>
        <h2
          className={`text-2xl md:text-5xl uppercase font-semibold ${styles.moto1}`}
        >
          Get out of your
        </h2>
        <h3
          className={` text-3xl md:text-7xl uppercase font-extrabold ${styles.moto2}`}
        >
          Comfort Zone
        </h3>
      </div>
    </div>
  );
}
