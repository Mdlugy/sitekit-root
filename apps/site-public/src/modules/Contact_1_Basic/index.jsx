import styles from "./Contact_1_Basic.module.css";
import IconRenderer from "../../helpers/IconRenderer.jsx";

export default function Contact_1_Basic({ id, content, theme }) {
  return (
    <section id={id} className={styles.wrapper} style={theme}>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.subtitle}>{content.subTitle}</p>
      <div className={styles.socials}>
        <p className={styles.socialLink}>📍 {content.location}</p>

        {content.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <IconRenderer  name= {social.icon } className={styles.icon}  />
            {social.platform}
          </a>
        ))}
      </div>
    </section>
  );
}