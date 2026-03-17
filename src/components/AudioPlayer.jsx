import { useRef } from "react"

export default function AudioPlayer({ audio }) {

    const audioRef = useRef(null)

    return (
        <section id="podcast" aria-labelledby="podcast-title" className="mb-16">
            <h2 id="podcast-title" className="text-3xl font-bold mb-4">Escucha el episodio</h2>

            <audio ref={audioRef} controls className="w-full">
                <source src={audio} type="audio/mpeg"/>
            </audio>

            Tu navegador no soporta audio
        </section>
    )
}
