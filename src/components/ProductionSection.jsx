import { useState } from "react";
import { tools } from "../data/tools";
import { processSteps } from "../data/processSteps";

export default function ProductionSection() {
    const [activeTab, setActiveTab] = useState("process");

    return (
        <section
            id="production"
            className="py-24"
            style={{ background: "var(--slate-800)" }}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <p className="badge mb-3" style={{ color: "var(--amber-light)" }}>
                        ✦ DETRÁS DEL MICRÓFONO
                    </p>

                    <h2
                        className="font-display font-black mb-4"
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--fog)",
                        }}
                    >
                        Proceso de producción
                    </h2>

                    <div className="w-16 h-px mb-6" style={{ background: "var(--teal)" }} />

                    <p
                        className="font-body text-xl max-w-2xl"
                        style={{
                            color: "rgba(232,228,223,0.65)",
                            fontSize: "1.15rem",
                        }}
                    >
                        Cómo grabamos, editamos y damos forma a cada episodio de{" "}
                        <span className="italic">London Unexpected</span>.
                    </p>
                </div>

                {/* Tabs */}
                <div
                    className="flex gap-2 mb-10"
                    style={{ borderBottom: "1px solid rgba(42,127,127,0.2)" }}
                >
                    {[
                        { id: "process", label: "Flujo de trabajo" },
                        { id: "tools", label: "Herramientas" },
                    ].map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTab(t.id)}
                            className="font-body text-base px-5 py-2.5 transition-all duration-200"
                            style={{
                                color:
                                    activeTab === t.id
                                        ? "var(--amber-light)"
                                        : "rgba(232,228,223,0.5)",
                                borderBottom:
                                    activeTab === t.id
                                        ? "2px solid var(--amber)"
                                        : "2px solid transparent",
                                marginBottom: "-1px",
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Process timeline */}
                {activeTab === "process" && (
                    <div className="relative">
                        <div
                            className="absolute left-5 top-0 bottom-0 w-px"
                            style={{ background: "rgba(42,127,127,0.3)" }}
                        />

                        <div className="space-y-8 pl-14">
                            {processSteps.map((s, i) => (
                                <div
                                    key={s.step}
                                    className="relative fade-up"
                                    style={{ animationDelay: `${i * 0.08}s` }}
                                >
                                    <div className="absolute -left-9 top-1 timeline-dot" />

                                    <div
                                        className="p-5 rounded-lg"
                                        style={{
                                            background: "var(--slate-700)",
                                            border: "1px solid rgba(42,127,127,0.15)",
                                        }}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span
                                                className="badge font-bold"
                                                style={{
                                                    color: "var(--teal-light)",
                                                    fontFamily: "DM Mono",
                                                }}
                                            >
                                                {s.step}
                                            </span>

                                            <h3
                                                className="font-display font-bold text-lg"
                                                style={{ color: "var(--fog)" }}
                                            >
                                                {s.title}
                                            </h3>
                                        </div>

                                        <p
                                            className="font-body"
                                            style={{
                                                color: "rgba(232,228,223,0.65)",
                                                fontSize: "1rem",
                                            }}
                                        >
                                            {s.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tools grid */}
                {activeTab === "tools" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tools.map((tool, i) => (
                            <div
                                key={tool.name}
                                className="p-5 rounded-lg transition-all duration-300"
                                style={{
                                    background: "var(--slate-700)",
                                    border: "1px solid rgba(42,127,127,0.2)",
                                }}
                                onMouseEnter={(e) =>
                                (e.currentTarget.style.borderColor =
                                    "rgba(200,131,42,0.4)")
                                }
                                onMouseLeave={(e) =>
                                (e.currentTarget.style.borderColor =
                                    "rgba(42,127,127,0.2)")
                                }
                            >
                                <div className="text-3xl mb-3">{tool.icon}</div>

                                <h3
                                    className="font-display font-bold text-lg mb-1"
                                    style={{ color: "var(--fog)" }}
                                >
                                    {tool.name}
                                </h3>

                                <p
                                    className="font-body text-sm"
                                    style={{
                                        color: "rgba(232,228,223,0.55)",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    {tool.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pull quote */}
                <div
                    className="mt-16 p-6 rounded-xl"
                    style={{
                        background: "var(--slate-900)",
                        border: "1px solid rgba(200,131,42,0.2)",
                    }}
                >
                    <div className="pull-quote">
                        <p
                            className="font-display italic text-xl leading-relaxed"
                            style={{ color: "var(--fog)", fontSize: "1.3rem" }}
                        >
                            "El sonido de la lluvia de Londres no es un error. Es parte del
                            episodio."
                        </p>

                        <p className="badge mt-3" style={{ color: "var(--amber-light)" }}>
                            — NOTA DE PRODUCCIÓN
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
