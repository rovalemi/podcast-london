export default function Navbar() {
    return (
        <header className="bg-slate-900 border-b border-slate-800">
            <nav className="max-w-6xl mx-auto p-4 flex justify-between">
                <h1 className="text-lg font-bold text-indigo-400">
                    London Unexpected
                </h1>

                <a href="#podcast" className="text-slate-300 focus:outline focus:outline-indigo-500">Ir al podcast</a>
            </nav>
        </header>
    )
}
