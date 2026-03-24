const footerLinks = ['Inicio', 'Episodios', 'Producción', 'Participa']

const toId = (label) =>
  label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 bg-slate-800"
      style={{ borderTop: '1px solid rgba(42,127,127,0.2)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg text-fog">
            <span className="text-amber-light">London</span> Calling — Podcast
          </p>
          <p className="badge mt-1 text-fog/35">
            © 2024 · CC BY-NC-SA 4.0 · Hecho con ☕ y lluvia londinense
          </p>
        </div>
        <div className="flex gap-6">
          {footerLinks.map((l) => (
            <a
              key={l}
              href={`#${toId(l)}`}
              className="badge footer-link text-fog/40 transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
