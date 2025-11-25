export default function About({ title, subtitle }: Readonly<{ title: string, subtitle: string }>) {
    return (
        <>
            {/* About Section */}
            {/*<section className="bg-[#f5efe6] py-16 text-center px-6">
                <h2 className="text-3xl font-serif text-[#3d2b1f] mb-4">About Us</h2>
                <p className="max-w-2xl mx-auto text-[#5b4636] leading-relaxed">
                    We’re two brunch lovers chasing good coffee and beautiful spaces.
                    Between Melbourne’s laneways and the places we travel,
                    we collect our favorite moments — one sip and bite at a time.
                </p>
            </section>*/}


            <section className="bg-[#f5efe6] py-16 text-center px-6">
                <h2 className="text-3xl font-serif text-[#3d2b1f] mb-4">{title}</h2>
                <p className="max-w-2xl mx-auto text-[#5b4636] leading-relaxed">
                    {subtitle}
                </p>
            </section>
        </>
    )
}
