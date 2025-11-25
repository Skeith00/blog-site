import { CollectionConfig } from "payload"
import { Hero } from "@/blocks/Hero";
import { RichText } from "@/blocks/RichText";
import {FeaturedPosts} from "@/blocks/FeaturedPosts";
import {About} from "@/blocks/About";

export const Pages: CollectionConfig = {
    slug: 'pages', //this defines your collection’s API path (/api/pages)
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
        livePreview: {
            url: ({ data }) => `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/${data.slug}`
        }
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: "layout",
            type: "blocks",
            blocks: [
                Hero,
                RichText,
                FeaturedPosts,
                About
            ],
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        }
    ],
}
