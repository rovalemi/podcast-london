import { episodes } from '../data/podcast'
import EpisodeCard from './EpisodeCard'

export default function EpisodesSection() {
  return (
    <section
      id="episodes"
      className="py-24 bg-slate-900"
      aria-labelledby="episodes-title"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <header className="mb-16">
          <p className="mb-3 text-teal-light">✦ TEMPORADA 1</p>

          <h2
            id="episodes-title"
            className="font-display font-black mb-4 text-fog"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Los episodios
          </h2>

          <div className="w-16 h-px mb-6 bg-amber" />

          <p
            className="font-body max-w-2xl text-fog/65"
            style={{ fontSize: '1.15rem' }}
          >
            Cuatro episodios donde contamos cómo organizamos nuestro viaje a Londres, los imprevistos
            que aparecieron por el camino y lo que aprendimos al adaptarnos sobre la marcha.
          </p>
        </header>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {episodes.map((ep, i) => (
            <li key={ep.id} className="list-none">
              <EpisodeCard ep={ep} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
