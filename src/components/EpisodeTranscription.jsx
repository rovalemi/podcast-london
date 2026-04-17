import { useState } from "react";

export default function EpisodeTranscription({ episode }) {
  const [open, setOpen] = useState(false);

  if (!episode.transcription) return null;

  return (
    <section
      className="flex justify-center mt-6 p-5 rounded-lg bg-slate-800"
      style={{ border: "1px solid rgba(42,127,127,0.25)" }}
      aria-labelledby={`transcription-title-${episode.id}`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`transcription-content-${episode.id}`}
        className="btn-outline px-4 py-2 rounded font-body text-base focus-visible:outline focus-visible:outline-amber-light"
      >
        {open ? "Ocultar transcripción" : "Leer transcripción"}
      </button>

      <div
        id={`transcription-content-${episode.id}`}
        aria-hidden={!open}
        hidden={!open}
        className="space-y-2 font-body text-fog leading-relaxed mt-2 text-base"
      >
        <h4
          id={`transcription-title-${episode.id}`}
          className="font-display font-bold text-lg mb-3 text-amber-light"
        >
          Transcripción completa — {episode.title}
        </h4>

        {episode.transcription.map((line, i) => (
          <p key={i} className="text-base">{line}</p>
        ))}
      </div>
    </section>
  );
}
