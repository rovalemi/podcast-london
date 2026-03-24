export const episodes = [
  {
    id: 1,
    number: 'E01',
    title: 'Llegada: El olor a lluvia y tubería',
    date: 'Septiembre 2024',
    duration: '28 min',
    description:
      'El avión aterriza en Heathrow y la ciudad ya huele diferente. En este primer episodio hablo de la llegada, el metro, el choque cultural y esa sensación inexplicable de sentirte en casa en un lugar que no conocías.',
    tags: ['Llegada', 'Heathrow', 'Primeras impresiones'],
    img: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&q=80',
    color: 'teal',
    src: 'mi_podcast_e01.mp3',
  },
  {
    id: 2,
    number: 'E02',
    title: 'Barrios: De Notting Hill a Shoreditch',
    date: 'Septiembre 2024',
    duration: '34 min',
    description:
      'Londres no es una ciudad, es una colección de pueblos. Recorro Notting Hill con sus fachadas de colores pastel, la energía raw de Shoreditch, y me pierdo por Borough Market con un flat white en la mano.',
    tags: ['Notting Hill', 'Shoreditch', 'Borough Market'],
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    color: 'amber',
    src: 'mi_podcast_e02.mp3',
  },
  {
    id: 3,
    number: 'E03',
    title: 'Otoño empieza: hojas doradas en Hyde Park',
    date: 'Septiembre 2024',
    duration: '31 min',
    description:
      'A finales de septiembre el verano cede. Los árboles de Hyde Park empiezan a encenderse en naranjas y ocres. Hablo de parques, de leer en un banco con frío, y de por qué Londres en otoño es la versión definitiva de la ciudad.',
    tags: ['Hyde Park', 'Otoño', 'Naturaleza'],
    img: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800&q=80',
    color: 'teal',
    src: 'mi_podcast_e03.mp3',
  },
  {
    id: 4,
    number: 'E04',
    title: 'Pubs, gente y despedida',
    date: 'Septiembre 2024',
    duration: '38 min',
    description:
      'El pub inglés es una institución. En el último episodio hablo de las conversaciones con desconocidos, el arte de quedarse hasta closing time, y lo que sientes cuando el Eurostar sale de St. Pancras y te llevas un trozo de Londres contigo.',
    tags: ['Pubs', 'Cultura', 'Despedida', 'St. Pancras'],
    img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80',
    color: 'amber',
    src: 'mi_podcast_e04.mp3',
  },
]

export const tools = [
  { name: 'Audacity', desc: 'Grabación y edición de voz principal', icon: '🎙' },
  { name: 'Auto Duck', desc: 'Sidechain de música bajo la voz', icon: '🦆' },
  { name: 'FFmpeg', desc: 'Compresión y exportación a MP3', icon: '⚡' },
  { name: 'Rode NT-USB', desc: 'Micrófono condensador de estudio', icon: '🎤' },
  { name: 'GarageBand', desc: 'Mezcla final y mastering ligero', icon: '🎛' },
  { name: 'Freesound.org', desc: 'Efectos de sonido CC0 — lluvia, metro', icon: '🎧' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Guión y estructura',
    desc: 'Cada episodio parte de un guión ligero: puntos clave, anécdotas y cierres. No libreto completo — conversación fluida con dirección.',
  },
  {
    step: '02',
    title: 'Grabación en Audacity',
    desc: 'Micrófono externo, habitación alfombrada para reducir reverb. 44.1kHz, 16-bit WAV como formato fuente.',
  },
  {
    step: '03',
    title: 'Reducción de ruido',
    desc: 'Audacity Noise Reduction: perfil de 2 segundos de silencio ambiental, aplicado al 70%. Se eliminan clicks y breathing excesivo.',
  },
  {
    step: '04',
    title: 'Música de fondo',
    desc: 'Tracks CC de Bensound y Free Music Archive importados en segunda pista. Auto Duck baja la música 12dB cuando hay voz.',
  },
  {
    step: '05',
    title: 'Intro y cierre',
    desc: 'Intro: 8 segundos de ambiente de metro de Londres + tema musical fade in. Cierre: melodía completa con call-to-action.',
  },
  {
    step: '06',
    title: 'Exportación MP3',
    desc: 'FFmpeg: -b:a 160k -ar 44100. Metadatos ID3 completos con portada embebida. Peso final: ~35MB por episodio.',
  },
]
