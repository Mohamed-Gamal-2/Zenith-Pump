import styles from "./ClassesCard.module.css";

export default function ClassesCard({ classData: { title, desc, image, id } }) {
  return (
    <div className={`p-2 relative cursor-pointer ${styles.card}`}>
      <img src={image} alt={`class${id}`} className="z-50 relative" />
      <div
        className={`absolute bottom-2 left-2 right-2 px-3 py-3 ${styles.banner}`}
      >
        <h3>{title}</h3>
        <h4 className="text-xs mt-1">{desc}</h4>
      </div>
    </div>
  );
}
