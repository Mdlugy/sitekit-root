import styles from './ScrollableColumnGroup.module.css';

export default function ScrollableColumnGroup({theme, title, items, renderItem }) {
  return (
    <div style={theme} className={styles.column}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.scrollList}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}