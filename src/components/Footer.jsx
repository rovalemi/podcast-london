export default function Footer() {
    return (
        <footer
            className="py-10 px-6"
            style={{
                background: "var(--slate-800)",
                borderTop: "1px solid rgba(42,127,127,0.2)",
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <p
                        className="font-display text-lg"
                        style={{ color: "var(--fog)" }}
                    >
                        <span style={{ color: "var(--amber-light)" }}>London</span>{" "}
                        Unexpected — Podcast
                    </p>

                    <p
                        className="badge mt-1"
                        style={{ color: "rgba(232,228,223,0.35)" }}
                    >
                        © 2024 · CC BY-NC-SA 4.0 · Hecho con ☕ y lluvia londinense
                    </p>
                </div>

                <div className="flex gap-6">
                    {["Inicio", "Episodios", "Producción", "Participa"].map((l) => (
                        <a
                            key={l}
                            href={`#${l
                                .toLowerCase()
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")}`}
                            className="badge transition-colors duration-200"
                            style={{ color: "rgba(232,228,223,0.4)" }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "var(--teal-light)")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color = "rgba(232,228,223,0.4)")
                            }
                        >
                            {l}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
