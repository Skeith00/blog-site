import type { Block } from "payload";

export const About: Block = {
    slug: "about",
    labels: {
        singular: "About",
        plural: "About",
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "subtitle",
            type: "text",
            required: true,
        },
        {
            name: "linkTitle",
            type: "text",
        },
    ],
};
