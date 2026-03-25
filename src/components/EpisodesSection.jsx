import { episodes } from '../data/podcast'
import EpisodeCard from './EpisodeCard'

export default function EpisodesSection() {
  return (
    <section id="episodes" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="badge mb-3 text-teal-light">✦ TEMPORADA 1</p>
          <h2
            className="font-display font-black mb-4 text-fog"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Los episodios
          </h2>
          <div className="w-16 h-px mb-6 bg-amber" />
          <p className="font-body max-w-2xl text-fog/65" style={{ fontSize: '1.15rem' }}>
            Cuatro episodios donde contamos cómo organizamos nuestro viaje a Londres, los imprevistos
            que aparecieron por el camino y lo que aprendimos al adaptarnos sobre la marcha.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.id} ep={ep} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
