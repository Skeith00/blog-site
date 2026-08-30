import {Media} from "@/payload-types";
import '../styles/hero.css'

type HeroProps = {
    title: string
    subtitle: string
    backgroundImage?: Media
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative text-center py-20 px-6"
                //className="text-center py-20 px-6 bg-[#f5efe6]"
                //className="relative min-h-[80vh] flex items-center"
                style={{
                    backgroundImage: backgroundImage?.url
                        ? `url(${backgroundImage.url})`
                        : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 hero-gradient" />

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-serif mb-6 text-white hero-title">
                        {title}
                    </h1>

                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white hero-subtitle">
                        {subtitle}
                    </p>
                </div>
            </section>
        </>
    )
}
