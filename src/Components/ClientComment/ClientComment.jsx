import styles from "./ClientComment.module.css";
export default function ClientComment({
  testimonial: { image, name, comment, id },
  current,
}) {
  return (
    <div
      className={`${styles.clientCard} w-1/2 mx-auto absolute top-0 `}
      style={{ transform: `translateX(calc((${current - id}) * 100vw))` }}
    >
      <div className=" mx-auto text-center">{comment}</div>
      <div className="flex flex-col items-center mt-5">
        <img src={image} alt={name} className={styles.image} />
        <div className={`${styles.name} mt-3`}>{name}</div>
      </div>
    </div>
  );
}
