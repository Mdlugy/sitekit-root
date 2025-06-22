import styles from './Sectioned_text_block.module.css';

export default function Sectioned_text_block({ id, content, theme }) {
  return (
      <div id={id} className={styles.textSectionWrapper}>
        <h1>{content.title}</h1>
        {content.text.map((storychapter, index) => (
          <div key={index}>
            <h2 className={styles.chapterTitle}>{storychapter.section_title}</h2>
            {storychapter.section_text.split('\n').map((line, i) => (
              <p key={i} className={styles.paragraph}>{line}</p>
            ))}
          </div>
        ))}
      </div>
  );
}