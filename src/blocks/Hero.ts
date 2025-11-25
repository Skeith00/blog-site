import type { Block } from "payload";

export const Hero: Block = {
    slug: "hero",
    labels: {
        singular: "Hero",
        plural: "Heroes",
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
            required: true,
        },
        {
            name: "backgroundImage",
            type: "upload",
            relationTo: "media",
        },
    ],
};
