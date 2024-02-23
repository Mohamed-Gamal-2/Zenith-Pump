import React from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <section id="contact-us" className={`${styles.section} relative`}>
      <div className={styles.sectionContainer}>
        <div className="container mx-auto py-32">
          <h2 className={styles.header}>
            <span>Keep</span> In Touch !
          </h2>
          <div className="mt-5">
            <form className={styles.form}>
              <input type="text" placeholder="Name" className={styles.input} />
              <br />
              <input type="text" placeholder="Email" className={styles.input} />
              <br />
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                className={styles.input}
              ></textarea>
              <button
                className={`rounded-lg ${styles.btn} px-3 py-1 mt-5 uppercase`}
                onClick={(e) => e.preventDefault()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
