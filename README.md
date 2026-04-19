# 🎙️ London Unexpected — Podcast  
Proyecto web desarrollado en React que presenta un podcast original de cuatro episodios, grabado y editado con Audacity, acompañado de un diseño moderno, transcripciones completas y una auditoría de accesibilidad WCAG 2.2 AA.

---

## 📌 Descripción del proyecto

**London Unexpected — Podcast** es un proyecto creado para el módulo de Desarrollo Web.  
Incluye:

- Producción completa de un podcast original  
- Grabación y edición de audio con **Audacity**  
- Diseño e implementación de una web en **React + Vite**  
- Reproductor accesible para cada episodio  
- Transcripciones completas y colapsables  
- Auditoría de accesibilidad con WAVE, Lighthouse y Axe  
- Informe PDF generado automáticamente  

El objetivo es demostrar un flujo real de producción multimedia + desarrollo web + accesibilidad.

---

## 🎧 Producción del podcast

Los cuatro episodios fueron:

- **Guionizados**  
- **Grabados** con micrófono de condensador  
- **Editados** en **Audacity**  
- **Normalizados** a -1 dB  
- **Exportados** en MP3 a 128 kbps  
- **Limpieza de ruido**, **fade in/out**, **cortes**, **compresión ligera**  

Cada episodio incluye:

- Título  
- Imagen representativa  
- Duración  
- Descripción  
- Transcripción completa  

---

## 🧩 Funcionalidades principales

- 🎧 Reproductor de audio accesible  
- 📄 Transcripciones completas y colapsables  
- 🖼️ Diseño responsivo con Tailwind  
- 🧭 Navegación por teclado completa  
- 📝 Generación de informe PDF con jsPDF  
- 🏷️ Tags y metadatos de episodios  
- 🌗 Soporte para `prefers-reduced-motion`  
- 🔍 Auditoría de accesibilidad integrada  

---

## 🛠️ Tecnologías utilizadas

### **Frontend**
- React 18  
- Vite  
- Tailwind CSS  
- jsPDF  

### **Audio**
- Audacity (grabación y edición)  
- MP3 128 kbps  
- Normalización y limpieza de ruido  

### **Accesibilidad**
- WAVE  
- Lighthouse  
- Axe DevTools  
- WCAG 2.2 AA  

---

## ♿ Accesibilidad (WCAG 2.2 AA)

La accesibilidad forma parte del proyecto, pero **no es el objetivo principal**, sino un requisito profesional.

### Mejoras aplicadas
- Transcripciones completas  
- Skip link  
- Estructura semántica  
- Labels accesibles  
- Contraste corregido  
- Emojis decorativos ocultos  
- `prefers-reduced-motion`  
- `aria-label` en reproductores  
- Foco visible  
- Corrección de referencias ARIA  
- Eliminación de 41 alertas de “Very small text”  

### Resultados finales
- **Lighthouse:** 96–100  
- **WAVE:** 0 errores críticos  
- **Axe:** sin violaciones WCAG 2.2 AA  
- **AIM Score:** 9.5 / 10  

---

## 📁 Estructura del proyecto

```
src/
├── components/
│    ├── EpisodeCard.jsx
│    ├── EpisodeTranscription.jsx
│    └── InformePDF.jsx
├── data/
│    └── episodes.js
├── App.jsx
└── index.css
```

---

## 📦 Instalación

```bash
npm install
npm run dev
```

---

## 🌐 Deploy
El proyecto está desplegado en Vercel:

🔗 https://podcast-london-app.vercel.app

## 👤 Autor
Alizon Rosales
Proyecto DAW — Desarrollo Web
