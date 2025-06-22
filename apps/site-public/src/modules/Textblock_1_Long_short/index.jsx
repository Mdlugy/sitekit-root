import styles from './TextBlock_1_Long_Short.module.css';
import Sectioned_text_block from '../../components/Sectioned_text_block';
export default function Bio_1_Longform({ id, content, theme }) {
  return (
    <section id={id} className={styles.bioSection} style={theme}>
        <button id= {`${id}data-toggle-button`} className={styles.toggleButton}>test</button>
      <Sectioned_text_block
        id ={`${id}data-ShortText-section`}
        content={content.ShortStory}
        theme={theme}/>
        <Sectioned_text_block
        id ={`${id}data-LongText-section`}
        content={content.LongStory}
        theme={theme}/>
    </section>
  );
}