import { useState } from "react";
import ClientComment from "../ClientComment/ClientComment";
import styles from "./Testimonials.module.css";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "./assests/client-1.jpg",
    name: "Mohamed Gamal",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima aspernatur, neque repudiandae et id nemo aliquid exercitationem? Eaque autem dolor ea, vitae magni quaerat mollitia? Perspiciatis aliquid ut officiis?",
  },
  {
    id: 2,
    image: "./assests/client-2.jpg",
    name: "Alaa Mamdouh",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima aspernatur, neque repudiandae et id nemo aliquid exercitationem? Eaque autem dolor ea, vitae magni quaerat mollitia? Perspiciatis aliquid ut officiis?",
  },
  {
    id: 3,
    image: "./assests/client-3.jpg",
    name: "Ashraf Esam",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima aspernatur, neque repudiandae et id nemo aliquid exercitationem? Eaque autem dolor ea, vitae magni quaerat mollitia? Perspiciatis aliquid ut officiis?",
  },
  {
    id: 4,
    image: "./assests/client-4.jpg",
    name: "Moataz Mohamed",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima aspernatur, neque repudiandae et id nemo aliquid exercitationem? Eaque autem dolor ea, vitae magni quaerat mollitia? Perspiciatis aliquid ut officiis?",
  },
];

const max = testimonials.length;

export default function Testimonials() {
  const [current, setCurrent] = useState(1);

  function handlePrevoius() {
    setCurrent(current - 1);
  }
  function handleNext() {
    setCurrent(current + 1);
  }

  return (
    <section className={`w-full ${styles.section} overflow-hidden`}>
      <div className={`${styles.testimonials}`}>
        <h2 className="text-center pt-32 text-5xl uppercase">Testimonials</h2>
        <div className="relative mt-16 flex items">
          <div
            className="relative left-10 top-36 z-50"
            onClick={handlePrevoius}
          >
            {current === 1 ? null : <ArrowLeftCircle className={styles.icon} />}
          </div>
          <div>
            {testimonials.map((testimonial) => (
              <ClientComment
                key={testimonial.id}
                testimonial={testimonial}
                current={current}
              />
            ))}
          </div>
          <div className="absolute right-10 top-36 z-50" onClick={handleNext}>
            {current === max ? null : (
              <ArrowRightCircle className={styles.icon} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
