import Navbar from "../components/Navbar";

export default function MainLayout({children}) {
    return (
        <>
            <Navbar />

            <main className="max-w-5xl mx-auto px-6 py-12">
                {children}
            </main>

            <Footer />
        </>
    )
}
