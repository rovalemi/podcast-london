import { episodes } from "../data/episodes";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesSection() {
    return (
        <section id="episodes" className="py-24" style={{ background: "var(--slate-900)" }}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16">
                    <p className="badge mb-3" style={{ color: "var(--teal-light)" }}>
                        ✦ TEMPORADA 1
                    </p>

                    <h2
                        className="font-display font-black mb-4"
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--fog)",
                        }}
                    >
                        Los episodios
                    </h2>

                    <div className="w-16 h-px mb-6" style={{ background: "var(--amber)" }} />

                    <p
                        className="font-body text-xl max-w-2xl"
                        style={{
                            color: "rgba(232,228,223,0.65)",
                            fontSize: "1.15rem",
                        }}
                    >
                        Cuatro historias reales sobre un viaje que empezó como un sueño y
                        terminó siendo una aventura inesperada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {episodes.map((ep, i) => (
                        <EpisodeCard key={ep.id} ep={ep} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
