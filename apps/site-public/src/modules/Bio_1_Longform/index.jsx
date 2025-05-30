import styles from './Bio_1_Longform.module.css';

export default function Bio_1_Longform({id, content, theme}) {
    console.log("Bio_1_Longform", id, content);
    return (<section id={id} className={styles.bioSection}  style={theme}>
  <h1>{content.title}</h1>
  {content.text.map((storychapter, index) => (<div key={index} className={styles.chapter}>
    <h2 key={index} className={styles.chapterTitle}>
        {storychapter.section_title}</h2>
    {storychapter.section_text.split('\n').map((line, i) => (
  <p key={i} className={styles.paragraph}>{line}</p>
))}<br/></div>

  ))}
</section>)}