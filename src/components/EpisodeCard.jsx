import EpisodeTranscription from "./EpisodeTranscription";

export default function EpisodeCard({ ep, index }) {
  const isAmber = ep.color === "amber";

  return (
    <article
      className="ep-card rounded-xl overflow-hidden bg-slate-800 fade-up"
      style={{ animationDelay: `${index * 0.12}s`, opacity: 0 }}
      aria-labelledby={`ep-title-${ep.id}`}
      aria-describedby={`ep-desc-${ep.id}`}
    >
      {/* Imagen */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={ep.img}
          alt={`Imagen del episodio: ${ep.title}`}
          className="ep-card-img w-full h-full object-cover"
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
            className="px-3 py-1 rounded-full font-bold text-sm text-white"
            style={{
              background: isAmber
                ? "rgba(200,131,42,0.85)"
                : "rgba(42,127,127,0.85)",
            }}
          >
            Episodio {ep.number}
          </span>
        </div>

        <div
          className="absolute bottom-3 right-3 px-2 py-1 rounded text-sm text-fog"
          style={{ background: "rgba(13,17,23,0.8)" }}
        >
          Duración: {ep.duration}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <p
          className="mb-2 text-sm"
          style={{ color: isAmber ? "var(--amber-light)" : "var(--teal-light)" }}
        >
          {ep.date}
        </p>

        <h3
          id={`ep-title-${ep.id}`}
          className="font-display font-bold text-xl leading-snug mb-3 text-fog"
        >
          {ep.title}
        </h3>

        <p
          id={`ep-desc-${ep.id}`}
          className="font-body leading-relaxed mb-4 text-fog"
        >
          {ep.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {ep.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-sm text-fog"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Audio accesible */}
        <audio
          controls
          className="w-full text-sm"
          aria-label={`Reproducir audio del episodio: ${ep.title}`}
          aria-describedby={`transcription-content-${ep.id}`}
        >
          <source src={ep.src} type="audio/mpeg" />
          <span className="text-sm">Tu navegador no soporta el elemento audio.</span>
        </audio>

        {/* Transcripción accesible */}
        <EpisodeTranscription episode={ep} />
      </div>
    </article>
  );
}
