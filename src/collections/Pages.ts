import { CollectionConfig } from "payload"

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
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        }
    ],
}
