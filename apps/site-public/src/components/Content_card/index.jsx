
import styles from "./Content_card.module.css";

export default function Content_card({key, content, theme }) {
    const { title, summary, image, link } = content;
  return (

    <a href={link} className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{summary}</p>
      </div>
    </a>
  );
}
