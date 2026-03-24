import { useState } from 'react'
import { tools, processSteps } from '../data/podcast'

const tabs = [
  { id: 'process', label: 'Flujo de trabajo' },
  { id: 'tools', label: 'Herramientas' },
]

export default function ProductionSection() {
  const [activeTab, setActiveTab] = useState('process')

  return (
    <section id="production" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="badge mb-3 text-amber-light">✦ DETRÁS DEL MICRÓFONO</p>
          <h2
            className="font-display font-black mb-4 text-fog"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Proceso de producción
          </h2>
          <div className="w-16 h-px mb-6 bg-teal" />
          <p className="font-body max-w-2xl text-fog/65" style={{ fontSize: '1.15rem' }}>
            Desde la grabación cruda hasta el MP3 final: cómo se hace este podcast.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-2 mb-10"
          style={{ borderBottom: '1px solid rgba(42,127,127,0.2)' }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="font-body text-base px-5 py-2.5 transition-all duration-200"
              style={{
                color:
                  activeTab === t.id ? 'var(--amber-light)' : 'rgba(232,228,223,0.5)',
                borderBottom:
                  activeTab === t.id
                    ? '2px solid var(--amber)'
                    : '2px solid transparent',
                marginBottom: '-1px',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Process timeline */}
        {activeTab === 'process' && (
          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: 'rgba(42,127,127,0.3)' }}
            />
            <div className="space-y-8 pl-14">
              {processSteps.map((s, i) => (
                <div
                  key={s.step}
                  className="relative fade-up"
                  style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
                >
                  <div className="absolute -left-9 top-1 timeline-dot" />
                  <div
                    className="p-5 rounded-lg bg-slate-700"
                    style={{ border: '1px solid rgba(42,127,127,0.15)' }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="badge font-bold font-mono text-teal-light">
                        {s.step}
                      </span>
                      <h3 className="font-display font-bold text-lg text-fog">
                        {s.title}
                      </h3>
                    </div>
                    <p className="font-body text-fog/65" style={{ fontSize: '1rem' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools grid */}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="tool-card p-5 rounded-lg transition-all duration-300 bg-slate-700"
                style={{ border: '1px solid rgba(42,127,127,0.2)' }}
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-display font-bold text-lg mb-1 text-fog">
                  {tool.name}
                </h3>
                <p className="font-body text-fog/55" style={{ fontSize: '0.95rem' }}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Pull quote */}
        <div
          className="mt-16 p-6 rounded-xl bg-slate-900"
          style={{ border: '1px solid rgba(200,131,42,0.2)' }}
        >
          <div className="pull-quote">
            <p
              className="font-display italic leading-relaxed text-fog"
              style={{ fontSize: '1.3rem' }}
            >
              "El sonido de la lluvia de Londres en el micrófono no es un error. Es el episodio."
            </p>
            <p className="badge mt-3 text-amber-light">— NOTA DE PRODUCCIÓN, E03</p>
          </div>
        </div>

        {/* License */}
        <div
          className="mt-10 p-5 rounded-lg flex flex-wrap items-start gap-4"
          style={{
            background: 'rgba(42,127,127,0.08)',
            border: '1px solid rgba(42,127,127,0.25)',
          }}
        >
          <div className="text-3xl">©</div>
          <div>
            <p className="font-display font-bold mb-1 text-teal-light">
              Licencia Creative Commons
            </p>
            <p className="font-body text-fog/65" style={{ fontSize: '1rem' }}>
              Este podcast se publica bajo licencia{' '}
              <strong className="text-fog">CC BY-NC-SA 4.0</strong> — Reconocimiento, No
              Comercial, Compartir Igual. Los audio de fondo provienen de Freesound.org (CC0) y
              Free Music Archive (CC BY). Las imágenes son de Unsplash (licencia libre).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
