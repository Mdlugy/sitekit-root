import styles from "./Content_1_CardScroller.module.css";
import Content_card from "../../components/Content_card/index.jsx";

export default function Content_1_CardScroller({ id, content = {}, theme }) {
  const items = content.posts || [];

  return (
<section id={id} className={styles.wrapper} style={theme}>
  <h1 className={styles.headline}>{content.Headline || "Featured Content"}</h1>
  <p className={styles.subheadline}>{content.subHeadline || ""}</p>

  {items.length === 0 ? (
    <div className={styles.fallback}>Content coming soon.</div>
  ) : (
    <div data-scroll-carousel className={styles.scroller}>
      {items.map((card, idx) => (
        <div key={idx} className={styles.card}>
          <Content_card content={card} theme={theme} />
        </div>
      ))}
    </div>
  )}
</section>
  );
}
