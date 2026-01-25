This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, create a `.env` file in the root of the project. Example:

```bash
PAYLOAD_SECRET=f76f28481b3050eb194c81a1
DATABASE_URI=mongodb://127.0.0.1/blog-site
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
```

Run the following command to start MongoDB:
```bash
docker-compose up
````

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Payload will be available at:
* Admin UI: http://localhost:3000/admin
* API: http://localhost:3000/api


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Future plans

Extend this project with:

- `next-mdx-remote` or `gray-matter` to load Markdown blog posts.
- `next-seo` for meta tags & structured data.
- `contentlayer` for powerful Markdown + CMS-like features.
- Integrate `Sanity`, `Strapi`, `DatoCMS` or other headless CMS to manage posts via UI.