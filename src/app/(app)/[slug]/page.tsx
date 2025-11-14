import Home from "@/components/Home"
import config from '../../../payload.config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'

import type { Page as PageType } from '../../../payload-types'

/*async function getPageData(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}`, {
        cache: "no-store", // or "force-cache" if you want static generation
        next: { revalidate: 60 }, // revalidate every minute
    })
    const data = await res.json()
    return data.docs?.[0] || null
}*/

interface PageParams {
    params: Promise<{
        slug?: string
    }>
}

export default async function Page({ params: paramsPromise }: PageParams) {
    const { slug = 'home' } = await paramsPromise
    const payload = await getPayload({ config })

    const pageRes = await payload.find({
        collection: 'pages',
        draft: false,
        limit: 1,
        overrideAccess: false,
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    const page = pageRes?.docs?.[0] as null | PageType

    if (page === null) {
        return notFound()
    }

    return (
        <React.Fragment>
            <Home title={page.title} />
        </React.Fragment>
    )
}

// Optional: for static generation (if you use `next build`)
/*
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages`)
    const data = await res.json()
    return data.docs.map((p: any) => ({ slug: p.slug }))
}


export async function generateMetadata(params: any) {
    const page = await getPageData(params.slug)
    return { title: page?.title || 'Untitled Page' }
}*/
