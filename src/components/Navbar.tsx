export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-sm">
            <h1 className="font-semibold text-lg">Blog Name</h1>
            <div className="space-x-4 text-sm">
                <a href="/" className="hover:underline">Home</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/about" className="hover:underline">About</a>
            </div>
        </nav>
    )
}
