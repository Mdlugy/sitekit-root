import styles from "./Cropped_image_shape.module.css";

export default function Cropped_image_shape(personal_image, theme ) {
    // make a shallow copy of the theme object
    personal_image = personal_image.personal_image || personal_image;
   const localTheme = { ...theme };
    personal_image.style?.transform? localTheme['--personal-image-transform'] = "translateX(33%) translateY(10%)" : localTheme['--personal-image-transform'] = 'none';
    

    return (
        <section className={styles.bubble} style={theme}>
            {/* <p>TEST</p>
            <p>{JSON.stringify(personal_image)}</p> */}
            <image
                src={personal_image.url}
                alt={personal_image.alt}>
            </image>
        </section>
    );
}