import { GithubIcon, Linkedin } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact({ isContactOpen }) {
  return (
    <div className={`${styles.default} ${isContactOpen ? styles.open : ""}`}>
      <div className={`${styles.contactInfo}`}>
        <a href="https://linkedin.com/in/iti-mohamedgamal" target="_blank">
          <Linkedin />
        </a>
      </div>
      <div className={`${styles.contactInfo}`}>
        <a href="https://github.com/Mohamed-Gamal-2" target="_blank">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}
