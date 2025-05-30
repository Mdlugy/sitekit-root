export default {
    name: "hero_1_image_3_skills",
    label: "Hero section with Image and 3 Skills",
    props: {
        id: { type: "string", required: true },
        content: {
            type: "object",
            required: true,
            properties: {
                Headline: { default: null, type: "string", format: "string", label: "Headline-text", message: "Headline for your Hero section", required: true },
                subHeadline: { default: null, type: "string", format: "string", label: "Subheadline-text", message: "Subheadline for your Hero section ", required: true },
                personalImage: {
                    default: null, type: "object", label: "Personal Image",
                    properties: {
                        url: {
                            default: null, type: "string", format: "image-url",
                            label: "personal-image-url", message: "a link to your personal image, a professional looking picture of yourself (background transparency suggested)", required: true
                        },
                        alt: {
                            default: "my portrait", type: "string", format: "string",
                            label: "personal-image-alt", message: "If you're not using a picture of yourself, change this to a description of your picture.", required: true
                        },
                        style: {
                            default: null, type: "object", label: "personal-image-style",
                            properties: {
                                transform: { default: false, type: "bool", format: "boolean", label: "transform", message: "transform the image to the right side of the screen, use this if you have a background image that is not transparent", required: false },
                            }
                        }
                    }
                }
            },
            background_image: { default: null, type: "string", format: "image-url", label: "background-image", message: "Background image, not required will default to primary color as background if empty", required: false },
            contact_button_link: { default: null, type: "string", format: "url", label: "contact-button-link", message: "where the button sends people, use `#{id of your contact me section}` ", required: true },
            contact_text: { default: null, type: "string", format: "string", label: "contact-text", message: "Text for the button", required: true },
            skill_1_head: { default: null, type: "string", format: "string", label: "skill-1-headLine", message: "What is the name of your 1st skill?", required: true },
            skill_1_text: { default: null, type: "string", format: "string", label: "skill-1-text", message: "description of the skill", required: true },
            skill_1_pic: { default: null, type: "string", label: "skill-1-img", format: "image-url", message: "Lucide SVG that looks like a good stand in for your skill", required: true },
            skill_2_head: { default: null, type: "string", format: "string", label: "skill-2-headLine", message: "What is the name of your 1st skill?", required: true },
            skill_2_text: { default: null, type: "string", format: "string", label: "skill-2-text", message: "description of the skill", required: true },
            skill_2_pic: { default: null, type: "string", label: "skill-2-img", format: "image-url", message: "Lucide SVG that looks like a good stand in for your skill", required: true },
            skill_3_head: { default: null, type: "string", format: "string", label: "skill-3-headLine", message: "What is the name of your 1st skill?", required: true },
            skill_3_text: { default: null, type: "string", format: "string", label: "skill-3-text", message: "description of the skill", required: true },
            skill_3_pic: { default: null, type: "string", label: "skill-3-img", format: "image-url", message: "Lucide SVG that looks like a good stand in for your skill", required: true },
        }
    },

}
