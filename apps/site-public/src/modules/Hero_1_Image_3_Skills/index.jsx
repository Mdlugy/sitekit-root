import styles from "./Hero_1_Image_3_Skills.module.css";
import Cropped_image_shape from "../../components/Cropped_image_shape/index.jsx";
import Skillblock_1_with_svg from "../../components/Skillblock_1_with_svg/index.jsx";
export default function Hero_1_Image_3_Skills({id, content, theme }) {
  // if there are any props.themeOverrides, create a new theme object and assign the props.themeOverrides to it

  return (
    <section id = {id} styles= {theme} className={styles.hero_section_wrapper}>
        <div className={styles.imageColumn}>
        <Cropped_image_shape
        personal_image={content.personalImage}
        theme={theme}
      />
    </div>
   
    <div className={styles.textColumn}>
    <div className={styles.textGroup}>
      <h1 className={styles.hero_section_title}>{content.personalName}</h1>

      <h1 className={styles.headline}>{content.Headline}</h1>
      <p className={styles.subheadline}>{content.subHeadline}</p>
      </div>
      <a href={content.contact_button_link} className={styles.contact_button}>
  {content.contact_text}
</a>

    </div>
 <div className={styles.skillsColumn}>
   <Skillblock_1_with_svg 
        skill_pic = {content.skill_1_pic}
        skill_head = {content.skill_1_head}
        skill_text = {content.skill_1_text}
        theme = {theme}
        align = "left"
      />
            <Skillblock_1_with_svg 
        skill_pic = {content.skill_2_pic}
        skill_head = {content.skill_2_head}
        skill_text = {content.skill_2_text}
        theme = {theme}
        align = "right"
      />
            <Skillblock_1_with_svg 
        skill_pic = {content.skill_3_pic}
        skill_head = {content.skill_3_head}
        skill_text = {content.skill_3_text}
        theme = {theme}
        align = "left"
      />
    </div>
    </section>
  );
}