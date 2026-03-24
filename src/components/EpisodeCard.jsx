export default function EpisodeCard({ ep, index }) {
  const isAmber = ep.color === 'amber'

  return (
    <div
      className="ep-card rounded-xl overflow-hidden bg-slate-800 fade-up"
      style={{ animationDelay: `${index * 0.12}s`, opacity: 0 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={ep.img}
          alt={ep.title}
          className="ep-card-img w-full h-full object-cover"
          style={{ transform: 'scale(1.05)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,17,23,0.1) 0%, rgba(13,17,23,0.75) 100%)',
          }}
        />
        {/* Episode number badge */}
        <div className="absolute top-3 left-3">
          <span
            className="badge px-3 py-1 rounded-full font-bold text-white"
            style={{
              background: isAmber
                ? 'rgba(200,131,42,0.85)'
                : 'rgba(42,127,127,0.85)',
            }}
          >
            {ep.number}
          </span>
        </div>
        <div
          className="absolute bottom-3 right-3 badge px-2 py-1 rounded text-fog/70"
          style={{ background: 'rgba(13,17,23,0.8)' }}
        >
          ⏱ {ep.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p
          className="badge mb-2"
          style={{ color: isAmber ? 'var(--amber-light)' : 'var(--teal-light)' }}
        >
          {ep.date}
        </p>
        <h3 className="font-display font-bold text-xl leading-snug mb-3 text-fog">
          {ep.title}
        </h3>
        <p
          className="font-body leading-relaxed mb-4 text-fog/65"
          style={{ fontSize: '1rem' }}
        >
          {ep.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {ep.tags.map((t) => (
            <span
              key={t}
              className="badge px-2 py-0.5 rounded text-fog/50"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Audio player */}
        <audio controls className="w-full">
          <source src={ep.src} type="audio/mpeg" />
          Tu navegador no soporta el elemento audio.
        </audio>
      </div>
    </div>
  )
}
