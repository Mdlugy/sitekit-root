export default {
    name: "nav_sticky_logo",
    label: "Sticky Navigation with Logo",
    props: {
        id: { type: "string", required: true },
        content: {
            type: "object",
            required: true,
            properties: {
                Logo: {
                    type: "object",
                    required: true,
                    properties: {
                        url: {
                            type: "string",
                            format: "image-url",
                            label: "Logo Image Path",
                            message: "a link to the logo image file",
                            required: true
                        },
                        alt: {
                            type: "string",
                            label: "Logo Alt Text",
                            message: "describe the image with Alt text for accessibility",
                            required: false
                        }
                    }
                },
                links: {
                    type: "array",
                    required: true,
                    label: "Navigation Links",
                    message: "Autopopulated in the admin portal. Each item must include a label and a target.",
                    items: {
                        type: "object",
                        required: true,
                        properties: {
                            label: {
                                type: "string",
                                label: "Link Label",
                                required: true
                            },
                            target: {
                                type: "string",
                                label: "Target Anchor or Path",
                                required: true
                            }
                        }
                    }
                }
            }
        }
    }
};