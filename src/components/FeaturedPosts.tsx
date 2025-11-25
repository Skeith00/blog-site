import Image from "next/image";

export default function FeaturedPosts() {
    return (
        <>
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
        </>
    )
}
