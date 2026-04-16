export default function EpisodeTranscription({ episode }) {
    if (!episode.transcription) return null
    
    return (
        <section
          aria-labelledby={`transcription-title-${episode.id}`}
          className="mt-6 p-5 rounded-lg bg-slate-800"
          style={{ border: '1px solid rgba(42,127,127,0.25)' }}
        >
            <h4
              id={`transcription-title-${episode.id}`}
              className="font-display font-bold text-lg mb-3 text-amber-light"
            >
                Transcripción completa - {episode.title}
            </h4>

            <article className="space-y-2 font-body text-fog/80 leading-relaxed">
                {episode.transcription.map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </article>
        </section>
    );
}
