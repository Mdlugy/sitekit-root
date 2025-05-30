
import styles from "./Skillblock_1_with_svg.module.css";
import IconRenderer from "../../helpers/IconRenderer.jsx";
export default function Skillblock_1_with_svg({
  skill_pic,
  skill_head,
  skill_text,
  theme,
  align = "left",
}) {
  const isRight = align === "right";

  return (
    <div styles={theme}
      className={`${styles.wrapper} ${
        isRight ? styles.alignRight : styles.alignLeft
      }`}
    >
      <IconRenderer name = {skill_pic} color= {theme['--color-secondary']}/>
      <div className={styles.text}>
        <h3 className={styles.headline}>{skill_head}</h3>
        <p className={styles.body}>{skill_text}</p>
      </div>
    </div>
  );
}
