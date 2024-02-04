import { FacebookIcon, Instagram, TwitterIcon } from "lucide-react";
import styles from "./TrainersCard.module.css";

export default function TrainersCard({
  trainer: { image, id, name, desc, overView },
}) {
  return (
    <>
      <div
        className={`mx-auto flex  ${styles.card} ${
          id % 2 === 0
            ? "flex-col md:flex-row-reverse lg:flex-col-reverse"
            : "flex-col md:flex-row lg:flex-col"
        }`}
      >
        <img src={image} alt={`${id}-trainer`} className={styles.image} />
        <div className={`py-5 px-2 lg:h-72 h:36 md:w-72`}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.title}>{desc}</div>
          <div className={styles.overView}>{overView}</div>
          <div className="flex justify-start items-center mt-5">
            <Instagram className={styles.icon} />
            <FacebookIcon className={`ms-4 ${styles.icon}`} />
            <TwitterIcon className={`ms-4 ${styles.icon}`} />
          </div>
        </div>
      </div>
    </>
  );
}
