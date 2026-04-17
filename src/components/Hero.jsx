export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Imagen de fondo decorativa */}
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600&q=80')",
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.25) saturate(0.7)',
        }}
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(13,17,23,0.4) 0%, rgba(13,17,23,0.7) 50%, rgba(13,17,23,1) 100%)',
        }}
      />

      {/* Hojas decorativas */}
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute top-24 right-12 opacity-40 text-6xl leaf-float"
        style={{ animationDelay: '0s' }}
      >
        🍂
      </div>
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute top-40 right-40 opacity-45 text-4xl leaf-float"
        style={{ animationDelay: '1.5s' }}
      >
        🍁
      </div>
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute top-60 left-16 opacity-40 text-5xl leaf-float"
        style={{ animationDelay: '3s' }}
      >
        🍂
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">

          {/* Badges */}
          <div className="fade-up stagger-1 flex items-center gap-3 mb-6">
            <span className=" px-3 py-1 rounded-full bg-amber/20 text-amber-light border border-amber/40">
              ✦ TEMPORADA 1 — OTOÑO 2025
            </span>
            <span className="px-3 py-1 rounded-full bg-teal/20 text-teal-light border border-teal/40">
              4 EPISODIOS
            </span>
          </div>

          {/* Título principal */}
          <h1
            id="hero-title"
            className="fade-up stagger-2 font-display font-black leading-none mb-4 text-fog"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
          >
            London<br />
            <span className="italic text-amber-light">Unexpected</span>
          </h1>

          {/* Subtítulo */}
          <p
            className="fade-up stagger-3 font-body leading-relaxed mb-8 max-w-2xl text-fog/75"
            style={{ fontSize: '1.25rem' }}
          >
            Un pequeño podcast donde contamos cómo organizamos nuestro viaje a Londres: qué funcionó,
            qué no salió como esperábamos y cómo aprendimos a adaptarnos cuando todo cambió. Cuatro días,
            cuatro episodios y una ciudad llena de sorpresas.
          </p>

          {/* Botones CTA */}
          <div className="fade-up stagger-4 flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#episodes"
              className="btn-teal px-7 py-3 font-body text-lg font-semibold rounded focus-visible:outline focus-visible:outline-amber-light"
            >
              Escuchar episodios →
            </a>
            <a
              href="#contact"
              className="btn-outline px-7 py-3 font-body text-lg font-semibold rounded focus-visible:outline focus-visible:outline-amber-light"
            >
              Participar
            </a>
          </div>

          {/* Video promocional */}
          <div
            className="fade-up stagger-5 p-6 rounded-lg w-full max-w-3xl mx-auto"
            style={{
              background: 'rgba(22,27,34,0.9)',
              border: '1px solid rgba(42,127,127,0.3)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <p className="mb-2 text-teal-light">🎥 VIDEO PROMOCIONAL</p>
            <p className="font-display text-lg mb-3 text-fog">
              London Unexpected — Trailer oficial
            </p>

            <video
              controls
              aria-label="Vídeo promocional del podcast London Unexpected"
              className="w-full rounded-lg shadow-lg"
              style={{ maxHeight: '420px', objectFit: 'cover' }}
            >
              <source src="/videos/podcast-intro.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
