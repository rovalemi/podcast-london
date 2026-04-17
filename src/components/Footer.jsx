const footerLinks = [
  { label: 'Inicio', id: 'home' },
  { label: 'Episodios', id: 'episodes' },
  { label: 'Producción', id: 'production' },
  { label: 'Participa', id: 'contact' },
];

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 bg-slate-800"
      style={{ borderTop: '1px solid rgba(42,127,127,0.2)' }}
      aria-labelledby="footer-title"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Información del proyecto */}
        <div>
          <p id="footer-title" className="font-display text-lg text-fog">
            <span className="text-amber-light">London</span> Unexpected — Podcast
          </p>

          <p className="mt-1 text-fog/35">
            © 2024 · CC BY-NC-SA 4.0 · Hecho con ☕, Audacity y mucha ilusión
          </p>
        </div>

        {/* Navegación del footer */}
        <nav aria-label="Navegación secundaria">
          <ul className="flex gap-6">
            {footerLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="footer-link text-fog/40 transition-colors duration-200 focus-visible:outline focus-visible:outline-amber-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </footer>
  )
}
