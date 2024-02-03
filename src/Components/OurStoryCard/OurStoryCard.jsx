import styles from "./OurStoryCard.module.css";

export default function OurStoryCard({ data: { icon, title, desc } }) {
  return (
    <div className="flex items-center mt-16">
      <div>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className="flex flex-col ms-4">
        <div className={styles.title}>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
}
