import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "sugerencia",
        message: "",
        file: null,
    });

    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setForm({
            name: "",
            email: "",
            subject: "sugerencia",
            message: "",
            file: null,
        });
    };

    return (
        <section
            id="contact"
            className="py-24"
            style={{ background: "var(--slate-900)" }}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <p className="badge mb-3" style={{ color: "var(--teal-light)" }}>
                        ✦ ÚNETE
                    </p>

                    <h2
                        className="font-display font-black mb-4"
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--fog)",
                        }}
                    >
                        Participa
                    </h2>

                    <div className="w-16 h-px mb-6" style={{ background: "var(--amber)" }} />

                    <p
                        className="font-body text-xl max-w-2xl"
                        style={{
                            color: "rgba(232,228,223,0.65)",
                            fontSize: "1.15rem",
                        }}
                    >
                        ¿Tienes una historia sobre Londres? ¿Una sugerencia? ¿Quieres enviar
                        tu propia grabación? Este podcast también es tuyo.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        {[
                            {
                                icon: "💌",
                                title: "Sugerencias",
                                desc: "Propón un tema, un lugar o una historia. Queremos escucharte.",
                            },
                            {
                                icon: "🎙",
                                title: "Envía tu grabación",
                                desc: "Comparte tu experiencia en Londres. MP3, WAV o nota de voz.",
                            },
                            {
                                icon: "🤝",
                                title: "Colaboración",
                                desc: "¿Fotógrafo, músico, escritor? Siempre buscamos nuevas voces.",
                            },
                        ].map((c) => (
                            <div
                                key={c.title}
                                className="flex gap-4 p-4 rounded-lg"
                                style={{
                                    background: "var(--slate-800)",
                                    border: "1px solid rgba(42,127,127,0.15)",
                                }}
                            >
                                <span className="text-2xl mt-0.5">{c.icon}</span>

                                <div>
                                    <p
                                        className="font-display font-bold mb-1"
                                        style={{ color: "var(--fog)" }}
                                    >
                                        {c.title}
                                    </p>

                                    <p
                                        className="font-body text-sm"
                                        style={{
                                            color: "rgba(232,228,223,0.55)",
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        {c.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Social */}
                        <div
                            className="p-4 rounded-lg"
                            style={{
                                background: "var(--slate-800)",
                                border: "1px solid rgba(200,131,42,0.2)",
                            }}
                        >
                            <p
                                className="badge mb-3"
                                style={{ color: "var(--amber-light)" }}
                            >
                                TAMBIÉN NOS ENCUENTRAS EN
                            </p>

                            {["Spotify", "Apple Podcasts", "iVoox", "RSS"].map((p) => (
                                <div
                                    key={p}
                                    className="flex items-center gap-2 py-1.5"
                                    style={{
                                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                                    }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: "var(--teal-light)" }}
                                    />
                                    <span
                                        className="font-body"
                                        style={{
                                            color: "rgba(232,228,223,0.7)",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {p}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <div
                            className="p-8 rounded-xl"
                            style={{
                                background: "var(--slate-800)",
                                border: "1px solid rgba(42,127,127,0.2)",
                            }}
                        >
                            {sent ? (
                                <div className="text-center py-12">
                                    <div className="text-5xl mb-4">🍂</div>

                                    <h3
                                        className="font-display text-2xl mb-2"
                                        style={{ color: "var(--amber-light)" }}
                                    >
                                        ¡Mensaje recibido!
                                    </h3>

                                    <p
                                        className="font-body"
                                        style={{ color: "rgba(232,228,223,0.65)" }}
                                    >
                                        Gracias por escribir. Te responderemos pronto.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                className="badge block mb-1.5"
                                                style={{ color: "var(--teal-light)" }}
                                            >
                                                NOMBRE
                                            </label>

                                            <input
                                                type="text"
                                                required
                                                placeholder="Tu nombre"
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                }
                                                className="w-full px-4 py-2.5 rounded font-body text-base"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                className="badge block mb-1.5"
                                                style={{ color: "var(--teal-light)" }}
                                            >
                                                EMAIL
                                            </label>

                                            <input
                                                type="email"
                                                required
                                                placeholder="tu@email.com"
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                }
                                                className="w-full px-4 py-2.5 rounded font-body text-base"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className="badge block mb-1.5"
                                            style={{ color: "var(--teal-light)" }}
                                        >
                                            MOTIVO
                                        </label>

                                        <select
                                            value={form.subject}
                                            onChange={(e) =>
                                                setForm({ ...form, subject: e.target.value })
                                            }
                                            className="w-full px-4 py-2.5 rounded font-body text-base"
                                        >
                                            <option value="sugerencia">Sugerencia de tema</option>
                                            <option value="grabacion">Enviar grabación</option>
                                            <option value="colaboracion">Propuesta de colaboración</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            className="badge block mb-1.5"
                                            style={{ color: "var(--teal-light)" }}
                                        >
                                            MENSAJE
                                        </label>

                                        <textarea
                                            rows={5}
                                            required
                                            placeholder="Cuéntanos tu historia de Londres..."
                                            value={form.message}
                                            onChange={(e) =>
                                                setForm({ ...form, message: e.target.value })
                                            }
                                            className="w-full px-4 py-2.5 rounded font-body text-base resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="badge block mb-1.5"
                                            style={{ color: "var(--teal-light)" }}
                                        >
                                            GRABACIÓN (OPCIONAL)
                                        </label>

                                        <div
                                            className="px-4 py-3 rounded text-sm flex items-center gap-3 relative"
                                            style={{
                                                background: "var(--slate-700)",
                                                border: "1px dashed rgba(42,127,127,0.4)",
                                                color: "rgba(232,228,223,0.5)",
                                            }}
                                        >
                                            <span>🎙</span>
                                            <span
                                                className="font-body"
                                                style={{ fontSize: "0.95rem" }}
                                            >
                                                Adjunta tu archivo de audio (MP3, WAV, M4A — máx. 50MB)
                                            </span>

                                            <input
                                                type="file"
                                                accept="audio/*"
                                                onChange={(e) =>
                                                    setForm({ ...form, file: e.target.files[0] })
                                                }
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                            />
                                        </div>

                                        {form.file && (
                                            <p
                                                className="badge mt-1"
                                                style={{ color: "var(--teal-light)" }}
                                            >
                                                ✓ {form.file.name}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3.5 rounded font-body font-semibold text-lg transition-all duration-300"
                                        style={{
                                            background: "var(--teal)",
                                            color: "var(--fog)",
                                            boxShadow: "0 4px 20px rgba(42,127,127,0.3)",
                                        }}
                                    >
                                        Enviar mensaje →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
