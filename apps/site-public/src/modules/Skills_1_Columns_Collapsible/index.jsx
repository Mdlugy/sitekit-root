import React, { useState } from "react";
import styles from "./Skills_1_Columns_Collapsible.module.css";
import ScrollableColumnGroup from "../../components/ScrollableColumnGroup/index.jsx";
import Skillblock_1_with_svg from "../../components/Skillblock_1_with_svg/index.jsx";

export default function Skills_1_Columns_Collapsible({ id, content, theme }) {


  return (
    <section id={id} className={styles.wrapper} style={theme}>
      <h1 className={styles.headline}>{content.Headline}</h1>
      <p className={styles.subheadline}>{content.subHeadline}</p>

      <button id = "toggleSkills" className={styles.toggleButton}>
      </button>

      <div
        data-collapsible-wrapper

        className={styles.collapsibleWrapper}
      >
        <div className={styles.columns}>
          {content.skillcolumns.map((skill, index) => (
            <ScrollableColumnGroup
              key={index}
              theme={theme}
              title={skill.skillcategory}
              items={skill.skillList}
              renderItem={(item, itemIndex) => (
                <Skillblock_1_with_svg
                  key={itemIndex}

                    skill_pic={item.skill_pic}
                    skill_head={item.skill_head}
                    skill_text={item.skill_text}
                  theme={theme}
                />
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}