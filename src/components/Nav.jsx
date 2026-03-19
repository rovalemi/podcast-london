import { useState } from "react";

export default function Nav({ active, setActive }) {
    const [open, setOpen] = useState(false);

    const links = [
        { id: "home", label: "Inicio" },
        { id: "episodes", label: "Episodios" },
        { id: "production", label: "Producción" },
        { id: "contact", label: "Participa" },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            style={{
                background: "rgba(13,17,23,0.92)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(42,127,127,0.2)",
            }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <a
                    href="#home"
                    onClick={() => setActive("home")}
                    className="font-display text-xl tracking-tight"
                    style={{ color: "var(--fog)" }}
                >
                    <span style={{ color: "var(--amber-light)" }}>London</span> Unexpected
                    <span
                        className="badge ml-2 px-2 py-0.5 rounded"
                        style={{
                            background: "rgba(42,127,127,0.2)",
                            color: "var(--teal-light)",
                        }}
                    >
                        PODCAST
                    </span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            onClick={() => setActive(l.id)}
                            className="nav-link font-body text-base"
                            style={{
                                color:
                                    active === l.id
                                        ? "var(--amber-light)"
                                        : "rgba(232,228,223,0.7)",
                                letterSpacing: "0.03em",
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Mobile */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                    style={{ color: "var(--teal-light)" }}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <div
                    className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-6"
                    style={{ borderTop: "1px solid rgba(42,127,127,0.2)" }}
                >
                    {links.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            onClick={() => {
                                setActive(l.id);
                                setOpen(false);
                            }}
                            className="font-body text-lg"
                            style={{ color: "var(--fog)" }}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
