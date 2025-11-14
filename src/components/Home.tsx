import Image from "next/image"

export default function Home({ title }: Readonly<{ title: string }>) {
    return (
        <main className="bg-[#faf8f6] min-h-screen">
            {/* Hero Section */}
            <section className="text-center py-20 px-6 bg-[#f5efe6]">
                <h1 className="text-5xl font-serif mb-6 text-[#3d2b1f]">
                    {title}
                </h1>

                {/*<article dangerouslySetInnerHTML={{ __html: page.content }} />*/}

                <p className="text-[#5b4636] text-lg max-w-2xl mx-auto leading-relaxed">
                    A visual journal of our favorite cafés, brunch spots, and travel stories —
                    from the laneways of Melbourne to wherever our cups take us.
                </p>
                <div className="mt-10">
                    <a
                        href="/blog"
                        className="px-8 py-3 bg-[#3d2b1f] text-[#fdfaf7] rounded-full hover:bg-[#2a1d14] transition"
                    >
                        Explore Our Stories
                    </a>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10">
                {[1, 2, 3].map((n) => (
                    <article
                        key={n}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition border border-[#eee7df]"
                    >
                        <Image
                            src={`/images/posts/example${n}.jpg`}
                            alt={`Post ${n}`}
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="font-serif text-xl text-[#3d2b1f] mb-2">
                                Post Title {n}
                            </h2>
                            <p className="text-[#5b4636] text-sm mb-4">
                                A cozy café hidden in the heart of Melbourne — serving up
                                perfect flat whites and avocado toast worth the trip.
                            </p>
                            <a
                                href={`/posts/example-${n}`}
                                className="text-[#a06f47] text-sm font-medium hover:underline"
                            >
                                Read more →
                            </a>
                        </div>
                    </article>
                ))}
            </section>

            {/* About Section */}
            <section className="bg-[#f5efe6] py-16 text-center px-6">
                <h2 className="text-3xl font-serif text-[#3d2b1f] mb-4">About Us</h2>
                <p className="max-w-2xl mx-auto text-[#5b4636] leading-relaxed">
                    We’re two brunch lovers chasing good coffee and beautiful spaces.
                    Between Melbourne’s laneways and the places we travel,
                    we collect our favorite moments — one sip and bite at a time.
                </p>
            </section>
        </main>
    )
}
