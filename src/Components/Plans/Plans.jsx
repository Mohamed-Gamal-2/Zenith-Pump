import { BadgeCheck } from "lucide-react";
import styles from "./Plans.module.css";

const selectedId = 2;

export default function Plans({ plan: { id, name, price, keyFeatures } }) {
  return (
    <div
      className={`mx-auto text-center py-8 ${
        selectedId === id ? styles.selected : styles.plan
      }`}
    >
      <h3 className={selectedId === id ? styles.selectedHeader : styles.header}>
        {name}
      </h3>
      <div
        className={`${
          selectedId === id
            ? styles.selectedPriceContainer
            : styles.priceContainer
        } my-7`}
      >
        <div className="relative w-fit mx-auto">
          <span className={`absolute top-0 -left-8 ${styles.symbol}`}>E£</span>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
      <h3
        className={`${
          selectedId === id ? styles.selectedKeyFeatures : styles.keyFeatures
        } text-left px-8`}
      >
        Plan Key features:
      </h3>
      {keyFeatures.map((feature, i) => (
        <>
          <div
            key={i}
            className="flex flex-row justify-between items-center w-4/5 gap-5 mt-3 mx-auto"
          >
            <span>
              <BadgeCheck />
            </span>
            <span className="mr-auto">{feature}</span>
          </div>
          <div className={styles.endline}></div>
        </>
      ))}
    </div>
  );
}
