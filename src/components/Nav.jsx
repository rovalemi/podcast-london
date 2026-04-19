import { useState } from "react";

const links = [
    { id: 'home', label: 'Inicio' },
    { id: 'episodes', label: 'Episodios' },
    { id: 'production', label: 'Producción' },
    { id: 'contact', label: 'Participa' },
];

export default function Nav({ active }) {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="nav-glass fixed top-0 left-0 right-0 z-50 px-6 py-4"
            aria-label="Navegación principal"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="font-display text-xl tracking-tight text-fog focus-visible:outline focus-visible:outline-amber-light"
                >
                    <span className="text-amber-light">London</span> Unexpected
                    <span className="ml-2 px-2 py-0.5 rounded bg-teal/20 text-teal-light">
                        PODCAST
                    </span>
                </a>

                {/* Desktop navigation */}
                <ul className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <li key={l.id}>
                            <a
                                href={`#${l.id}`}
                                className={`nav-link font-body text-base tracking-wide focus-visible:outline focus-visible:outline-amber-light ${active === l.id ? 'text-amber-light' : 'text-fog/70'
                                    }`}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-2xl text-teal-light focus-visible:outline focus-visible:outline-amber-light"
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div
                    id="mobile-menu"
                    className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-6 border-t border-teal/20"
                >
                    <ul>
                        {links.map((l) => (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    className="font-body text-lg text-fog block py-2 focus-visible:outline focus-visible:outline-amber-light"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
