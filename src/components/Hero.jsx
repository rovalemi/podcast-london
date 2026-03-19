export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ paddingTop: "80px" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('/img/london-hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 40%",
                    filter: "brightness(0.25) saturate(0.7)",
                }}
            />

            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(13,17,23,0.4) 0%, rgba(13,17,23,0.7) 50%, rgba(13,17,23,1) 100%)",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <div className="max-w-3xl">
                    <div className="fade-up stagger-1 flex items-center gap-3 mb-6">
                        <span
                            className="badge px-3 py-1 rounded-full"
                            style={{
                                background: "rgba(200,131,42,0.2)",
                                color: "var(--amber-light)",
                                border: "1px solid rgba(200,131,42,0.4)",
                            }}
                        >
                            ✦ TEMPORADA 1 — LONDON UNEXPECTED
                        </span>
                    </div>

                    <h1
                        className="fade-up stagger-2 font-display font-black leading-none mb-4"
                        style={{
                            fontSize: "clamp(3.5rem, 10vw, 7rem)",
                            color: "var(--fog)",
                        }}
                    >
                        London <br />
                        <span className="italic" style={{ color: "var(--amber-light)" }}>
                            Unexpected
                        </span>
                    </h1>

                    <p
                        className="fade-up stagger-3 font-body text-xl leading-relaxed mb-8 max-w-2xl"
                        style={{ color: "rgba(232,228,223,0.75)" }}
                    >
                        Un podcast íntimo donde dos hermanas cuentan cómo un viaje a Londres
                        se convirtió en una historia llena de sorpresas, aprendizajes y
                        momentos que no estaban en el plan.
                    </p>

                    <div className="fade-up stagger-4 flex flex-wrap gap-4 mb-12">
                        <a
                            href="#episodes"
                            className="px-7 py-3 font-body text-lg font-semibold rounded transition-all duration-300"
                            style={{
                                background: "var(--teal)",
                                color: "var(--fog)",
                                boxShadow: "0 4px 20px rgba(42,127,127,0.4)",
                            }}
                        >
                            Escuchar episodios →
                        </a>

                        <a
                            href="#contact"
                            className="px-7 py-3 font-body text-lg font-semibold rounded transition-all duration-300"
                            style={{
                                border: "1px solid rgba(200,131,42,0.5)",
                                color: "var(--amber-light)",
                            }}
                        >
                            Participar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
