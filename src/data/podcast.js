export const episodes = [
  {
    id: 1,
    number: 'E01',
    title: 'Por qué decidimos viajar a Londres',
    date: 'Julio 2025',
    duration: '2 min',
    description:
      'En este primer episodio contamos cómo nació la idea del viaje: desde los videos del instituto británico hasta la curiosidad por Cambridge. También hablamos del momento en que nuestro padre decidió regalarnos el viaje y cómo eso lo cambió todo.',
    tags: ['Motivación', 'Cambridge', 'Primeras ideas'],
    img: '/images/candem-bus.jpeg',
    color: 'teal',
    src: '/audios/Podcast - Ep 01.mp3',
  },
  {
    id: 2,
    number: 'E02',
    title: 'Cómo planificamos el viaje',
    date: 'Agosto 2025',
    duration: '2 min',
    description:
      'Hablamos de cómo organizamos un viaje de cuatro días: búsqueda de vuelos, tarjetas contactless, transporte, alojamiento y pequeños trucos para ahorrar tiempo y dinero. Todo parecía perfectamente planeado… hasta que algo inesperado apareció.',
    tags: ['Planificación', 'Transporte', 'Alojamiento'],
    img: '/images/oxford-stores.jpeg',
    color: 'amber',
    src: '/audios/Podcast - Ep 01.mp3',
  },
  {
    id: 3,
    number: 'E03',
    title: 'Cuando todo el plan cambia',
    date: 'Setiembre 2025',
    duration: '2 min',
    description:
      'Cinco días antes del viaje descubrimos que habría una huelga del metro. Contamos cómo afectó a nuestro itinerario, cómo nos movimos por la ciudad solo con buses y cómo reorganizamos todo para visitar Oxford y Cambridge.',
    tags: ['Huelga', 'Oxford', 'Cambridge'],
    img: '/images/natural-history-museum.jpeg',
    color: 'teal',
    src: '/audios/Podcast - Ep 01.mp3',
  },
  {
    id: 4,
    number: 'E04',
    title: 'Lo que aprendimos del viaje',
    date: 'Setiembre 2025',
    duration: '2 min',
    description:
      'En el último episodio hablamos de lo más difícil, lo más divertido y lo más inesperado del viaje. Desde caminar más de lo previsto hasta entrar a universidades en jornadas abiertas. Un cierre lleno de aprendizajes y ganas de volver.',
    tags: ['Aprendizajes', 'Universidades', 'Cierre'],
    img: '/images/oxford-university.jpeg',
    color: 'amber',
    src: '/audios/Podcast - Ep 01.mp3',
  },
]

export const tools = [
  { name: 'Audacity', desc: 'Edición principal de voz: reducción de ruido, compresión y normalización.', icon: '🎙' },
  { name: 'Auto Duck', desc: 'Ajuste automático del volumen de la música bajo la voz.', icon: '🦆' },
  { name: 'CapCut', desc: 'Edición del video promocional y montaje visual.', icon: '🎬' },
  { name: 'FFmpeg', desc: 'Exportación final a MP3 con metadatos limpios.', icon: '⚡' },
  { name: 'Micrófono del MacBook', desc: 'Grabación de voz directa usando el micrófono integrado.', icon: '💻' },
  { name: 'YouTube Audio Library', desc: 'Música libre para fondos suaves y transiciones.', icon: '🎵' },
  { name: 'Pixabay Music', desc: 'Pistas adicionales libres de derechos para ambiente.', icon: '🎧' },
  { name: 'Unsplash', desc: 'Imágenes libres usadas en el video promocional.', icon: '📸' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Guion y estructura',
    desc: 'Cada episodio parte de un guion ligero: ideas clave, anécdotas y un cierre claro. Conversación natural con una dirección definida.',
  },
  {
    step: '02',
    title: 'Grabación de voz',
    desc: 'Grabación directa con el micrófono integrado del MacBook. Formato fuente: WAV 44.1 kHz, 16‑bit para mantener la mayor calidad posible.',
  },
  {
    step: '03',
    title: 'Edición en Audacity',
    desc: 'Reducción de ruido (6–12 dB), compresor suave (threshold –18 dB, ratio 3, attack 5 ms, release 200 ms) y normalización a –1 dB para una voz clara y uniforme.',
  },
  {
    step: '04',
    title: 'Música y ambiente',
    desc: 'Música libre de YouTube Audio Library y Pixabay Music. Auto Duck reduce la música 12 dB cuando hay voz. Ajustes manuales para equilibrio final.',
  },
  {
    step: '05',
    title: 'Intro, cierre y mezcla final',
    desc: 'Integración de la pista de música de fondo con fades suaves y volumen controlado. Ajustes finales para que la voz y la música convivan sin competir.',
  },
  {
    step: '06',
    title: 'Exportación final',
    desc: 'Exportación a MP3 desde Audacity usando FFmpeg (160 kbps, 44.1 kHz). Metadatos ID3 y portada. Archivos listos para web.',
  },
  {
    step: '07',
    title: 'Video promocional',
    desc: 'Edición del teaser en CapCut usando imágenes propias y fotografías de Unsplash. Música libre y montaje final optimizado para redes.',
  },
]
