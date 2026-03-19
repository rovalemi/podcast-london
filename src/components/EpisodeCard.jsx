export default function EpisodeCard({ ep, index }) {
    const isAmber = ep.color === "amber";

    return (
        <div
            className="ep-card rounded-xl overflow-hidden fade-up"
            style={{
                background: "var(--slate-800)",
                animationDelay: `${index * 0.12}s`,
            }}
        >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                    src={ep.img}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: "scale(1.05)" }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.12)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1.05)")}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(13,17,23,0.1) 0%, rgba(13,17,23,0.75) 100%)",
                    }}
                />

                <div className="absolute top-3 left-3">
                    <span
                        className="badge px-3 py-1 rounded-full font-bold"
                        style={{
                            background: isAmber
                                ? "rgba(200,131,42,0.85)"
                                : "rgba(42,127,127,0.85)",
                            color: "#fff",
                        }}
                    >
                        {ep.number}
                    </span>
                </div>

                <div
                    className="absolute bottom-3 right-3 badge px-2 py-1 rounded"
                    style={{
                        background: "rgba(13,17,23,0.8)",
                        color: "rgba(232,228,223,0.7)",
                    }}
                >
                    ⏱ {ep.duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <p
                    className="badge mb-2"
                    style={{
                        color: isAmber ? "var(--amber-light)" : "var(--teal-light)",
                    }}
                >
                    {ep.date}
                </p>

                <h3
                    className="font-display font-bold text-xl leading-snug mb-3"
                    style={{ color: "var(--fog)" }}
                >
                    {ep.title}
                </h3>

                <p
                    className="font-body text-base leading-relaxed mb-4"
                    style={{
                        color: "rgba(232,228,223,0.65)",
                        fontSize: "1rem",
                    }}
                >
                    {ep.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {ep.tags.map((t) => (
                        <span
                            key={t}
                            className="badge px-2 py-0.5 rounded"
                            style={{
                                background: "rgba(255,255,255,0.06)",
                                color: "rgba(232,228,223,0.5)",
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <audio controls className="w-full">
                    <source src={ep.src} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );
}
