import { useState } from "react";

const links = [
    { id: 'home', label: 'Inicio' },
    { id: 'episodes', label: 'Episodios' },
    { id: 'production', label: 'Producción' },
    { id: 'contact', label: 'Participa' },
]

export default function Nav({ active }) {
    const [open, setOpen] = useState(false)

    return (
        <nav className="nav-glass fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <a href="#home" className="font-display text-xl tracking-tight text-fog">
                    <span className="text-amber-light">London</span> Unexpected
                    <span className="badge ml-2 px-2 py-0.5 rounded bg-teal/20 text-teal-light">
                        PODCAST
                    </span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <a 
                          key={l.id} 
                          href={`#${l.id}`} 
                          className={`nav-link font-body text-base tracking-wide ${active === l.id ? 'text-amber-light' : 'text-fig/70'}`}
                          >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden text-2xl text-teal-light" onClick={() => setOpen(!open)}>
                    {open ? 'x' : '☰'}
                </button>
            </div>

            {open && (
                <div className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-6 border-t border-teal/20">
                    {links.map((l) => (
                        <a 
                          key={l.id}
                          href={`#${l.id}`}
                          className="font-body text-lg text-fog"
                          onClick={() => setOpen(false)}
                          >
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}
