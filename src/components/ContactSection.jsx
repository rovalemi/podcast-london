import { useState } from 'react'

const contactItems = [
  {
    icon: '💌',
    title: 'Sugerencias',
    desc: 'Propón un tema, un barrio, una historia. Puede que el próximo episodio sea tuyo.',
  },
  {
    icon: '🎙',
    title: 'Envía tu grabación',
    desc: 'Cuéntanos tu propia historia de Londres. MP3, WAV, nota de voz — todo vale.',
  },
  {
    icon: '🤝',
    title: 'Colaboración',
    desc: '¿Fotógrafo, músico, escritor? Siempre buscamos voces nuevas para la temporada 2.',
  },
]

const platforms = ['Spotify', 'Apple Podcasts', 'iVoox', 'RSS']

const initialForm = {
  name: '',
  email: '',
  subject: 'sugerencia',
  message: '',
  file: null,
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="badge mb-3 text-teal-light">✦ ÚNETE</p>
          <h2
            className="font-display font-black mb-4 text-fog"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Participa
          </h2>
          <div className="w-16 h-px mb-6 bg-amber" />
          <p className="font-body max-w-2xl text-fog/65" style={{ fontSize: '1.15rem' }}>
            ¿Tienes una historia sobre Londres? ¿Una sugerencia? ¿Quieres enviar tu propia
            grabación? Este podcast es también tuyo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {contactItems.map((c) => (
              <div
                key={c.title}
                className="flex gap-4 p-4 rounded-lg bg-slate-800"
                style={{ border: '1px solid rgba(42,127,127,0.15)' }}
              >
                <span className="text-2xl mt-0.5">{c.icon}</span>
                <div>
                  <p className="font-display font-bold mb-1 text-fog">{c.title}</p>
                  <p className="font-body text-fog/55" style={{ fontSize: '0.95rem' }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              className="p-4 rounded-lg bg-slate-800"
              style={{ border: '1px solid rgba(200,131,42,0.2)' }}
            >
              <p className="badge mb-3 text-amber-light">TAMBIÉN NOS ENCUENTRAS EN</p>
              {platforms.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 py-1.5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-light" />
                  <span className="font-body text-fog/70" style={{ fontSize: '1rem' }}>
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="p-8 rounded-xl bg-slate-800"
              style={{ border: '1px solid rgba(42,127,127,0.2)' }}
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🍂</div>
                  <h3 className="font-display text-2xl mb-2 text-amber-light">
                    ¡Mensaje recibido!
                  </h3>
                  <p className="font-body text-fog/65">
                    Gracias por escribir. Nos pondremos en contacto pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="badge block mb-1.5 text-teal-light">NOMBRE</label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input w-full px-4 py-2.5 rounded font-body text-base"
                      />
                    </div>
                    <div>
                      <label className="badge block mb-1.5 text-teal-light">EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input w-full px-4 py-2.5 rounded font-body text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="badge block mb-1.5 text-teal-light">MOTIVO</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="form-input w-full px-4 py-2.5 rounded font-body text-base"
                    >
                      <option value="sugerencia">Sugerencia de tema</option>
                      <option value="grabacion">Enviar grabación</option>
                      <option value="colaboracion">Propuesta de colaboración</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="badge block mb-1.5 text-teal-light">MENSAJE</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Cuéntanos tu historia de Londres..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="form-input w-full px-4 py-2.5 rounded font-body text-base resize-none"
                    />
                  </div>

                  <div>
                    <label className="badge block mb-1.5 text-teal-light">
                      GRABACIÓN (OPCIONAL)
                    </label>
                    <div
                      className="px-4 py-3 rounded text-sm flex items-center gap-3 relative"
                      style={{
                        background: 'var(--slate-700)',
                        border: '1px dashed rgba(42,127,127,0.4)',
                        color: 'rgba(232,228,223,0.5)',
                      }}
                    >
                      <span>🎙</span>
                      <span className="font-body" style={{ fontSize: '0.95rem' }}>
                        Adjunta tu archivo de audio (MP3, WAV, M4A — máx. 50MB)
                      </span>
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                    </div>
                    {form.file && (
                      <p className="badge mt-1 text-teal-light">✓ {form.file.name}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-teal w-full py-3.5 rounded font-body font-semibold text-lg"
                  >
                    Enviar mensaje →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
