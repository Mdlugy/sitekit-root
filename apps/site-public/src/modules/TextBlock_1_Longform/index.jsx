import styles from './TextBlock_1_Longform.module.css';
import Sectioned_text_block from '../../components/Sectioned_text_block';
export default function Bio_1_Longform({ id, content, theme }) {
  return (
    <section id={id} className={styles.bioSection} style={theme}>
      <Sectioned_text_block
        id={`${id}TextSectionWrapper`}
        content={content}
        theme={theme}/>
    </section>
  );
}