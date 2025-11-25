import {Media} from "@/payload-types";

export default function Hero({ title, subtitle, linkTitle }: Readonly<{ title: string, subtitle: string, linkTitle: string, backgroundImage?: Media | null;
}>) {
    return (
        <>
            {/* Hero Section */}
            <section className="text-center py-20 px-6 bg-[#f5efe6]">
                <h1 className="text-5xl font-serif mb-6 text-[#3d2b1f]">
                    {title}
                </h1>

                {/*<article dangerouslySetInnerHTML={{ __html: page.content }} />*/}

                <p className="text-[#5b4636] text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
                <div className="mt-10">
                    <a
                        href="/blog"
                        className="px-8 py-3 bg-[#3d2b1f] text-[#fdfaf7] rounded-full hover:bg-[#2a1d14] transition"
                    >
                        {linkTitle}
                    </a>
                </div>
            </section>
        </>
    )
}
