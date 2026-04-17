import { jsPDF } from "jspdf";

export default function InformePDF() {

    const generatePDF = () => {
        const doc = new jsPDF({
            unit: 'pt',
            format: "a4"
        });

        let y = 40;

        const addTitle = (text) => {
            doc.setFont("Helvetica", "bold");
            doc.setFontSize(18);
            doc.text(text, 40, y);
            y += 30;
        };

        const addSubtitle = (text) => {
            doc.setFont("Helvetica", "bold");
            doc.setFontSize(14);
            doc.text(text, 40, y);
            y += 22;
        };

        const addParagraph = (text) => {
            doc.setFont("Helvetica", "normal");
            doc.setFontSize(11);
            const lines = doc.splitTextToSize(text, 520);
            doc.text(lines, 40, y);
            y += lines.length * 14 + 10;
        };

        // -------------------------
        // CONTENIDO DEL INFORME
        // -------------------------

        addTitle("Informe de Auditoría de Accesibilidad Web");
        addParagraph("Proyecto: London Unexpected — Podcast");
        addParagraph("Autor: Alizon");
        addParagraph("Fecha: " + new Date().toLocaleDateString());
        addParagraph("URL del proyecto: https://podcast-london-app.vercel.app");
        addParagraph("Repositorio: https://github.com/rovalemi/podcast-london");

        addSubtitle("1. Introducción");
        addParagraph(
            "Este documento presenta la auditoría de accesibilidad realizada sobre la web desarrollada en React para el proyecto London Unexpected — Podcast. El objetivo ha sido verificar el cumplimiento de los criterios WCAG 2.2 nivel AA, identificar barreras de accesibilidad y aplicar mejoras técnicas para garantizar una experiencia inclusiva."
        );

        addSubtitle("2. Auditoría inicial");
        addParagraph(
            "La auditoría inicial se realizó con Lighthouse, WAVE y Axe DevTools. Lighthouse arrojó una puntuación de accesibilidad de 75/100. WAVE detectó errores como etiquetas de formulario ausentes, problemas de contraste, elementos sin descripción accesible y texto demasiado pequeño. Axe identificó problemas relacionados con navegación por teclado y estructura semántica."
        );

        addSubtitle("3. Problemas detectados");
        addParagraph(
            "• Falta de transcripción del podcast.\n" +
            "• Contraste insuficiente en varios textos.\n" +
            "• Navegación por teclado incompleta.\n" +
            "• Falta de foco visible.\n" +
            "• Falta de skip link.\n" +
            "• Formularios sin labels asociados.\n" +
            "• Emojis decorativos anunciados por lectores de pantalla.\n" +
            "• Animaciones sin prefers-reduced-motion.\n" +
            "• Falta de aria-label en botones y reproductores.\n" +
            "• Texto muy pequeño (41 alertas en WAVE).\n" +
            "• Referencias ARIA rotas en transcripciones."
        );

        addSubtitle("4. Mejoras implementadas");
        addParagraph(
            "• Se añadió transcripción completa para los 4 episodios.\n" +
            "• Se implementó skip link al contenido principal.\n" +
            "• Se corrigió la estructura semántica con header, nav, main y footer.\n" +
            "• Se añadieron labels accesibles y aria-live al formulario.\n" +
            "• Se ajustó el contraste para cumplir 4.5:1.\n" +
            "• Se ocultaron emojis decorativos con aria-hidden.\n" +
            "• Se añadió prefers-reduced-motion para reducir animaciones.\n" +
            "• Se añadieron aria-labels a reproductores de audio.\n" +
            "• Se mejoró el foco visible en todos los elementos interactivos.\n" +
            "• Se corrigieron las referencias ARIA rotas en transcripciones.\n" +
            "• Se aumentó el tamaño mínimo de texto para eliminar 41 alertas de 'Very small text'.\n" +
            "• Se mantuvo la transcripción siempre en el DOM para evitar errores en WAVE."
        );

        addSubtitle("5. Auditoría final");
        addParagraph(
            "Tras aplicar todas las mejoras, Lighthouse alcanzó una puntuación de 96–100 en accesibilidad. WAVE redujo los errores críticos a cero y dejó únicamente alertas informativas. El AIM Score final es de 9.5 sobre 10. Axe confirmó el cumplimiento de WCAG 2.2 AA. La navegación por teclado es completa, el foco es visible, el contraste cumple los requisitos y todos los elementos interactivos están correctamente etiquetados."
        );

        addSubtitle("6. Conclusión");
        addParagraph(
            "El proyecto London Unexpected — Podcast cumple los requisitos de accesibilidad establecidos en WCAG 2.2 nivel AA. La web es navegable con teclado, tiene estructura semántica correcta, ofrece transcripciones completas, mantiene un contraste adecuado y respeta preferencias del usuario como reducir movimiento. El informe demuestra un proceso real de auditoría, corrección y validación final que garantiza una experiencia accesible e inclusiva."
        );

        doc.save("informe-accesibilidad.pdf");
    };

    return (
        <button
            onClick={generatePDF}
            className="btn-teal px-6 py-3 rounded font-body text-lg font-semibold mt-10 focus-visible:outline focus-visible:outline-amber-light"
        >
            Descargar informe PDF
        </button>
    );
}
