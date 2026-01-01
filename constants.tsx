
import { Section, NetworkStrategy } from './types';

export const STRATEGIES: Record<string, NetworkStrategy> = {
  [Section.WHATSAPP]: {
    id: Section.WHATSAPP,
    name: 'WHATSAPP ELITE',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Foco en embudos de alta conversión mediante WACRM y WASender.',
        extendedContent: 'El algoritmo de WhatsApp prioriza la interacción bidireccional inmediata. El uso de WASender permite una prospección masiva ética, mientras que WACRM organiza los leads en etapas (Contacto, Calificación, Cierre). La clave es la rotación de mensajes para evitar el spam detectado por Meta.'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca inmediatez y confianza personal en el 1 a 1.',
        extendedContent: 'En WhatsApp, el usuario no está en "modo navegación", está en "modo conversación". El vendedor debe actuar como un asesor. La confianza se construye mediante la validación profesional rápida y un tono empático que resuelva dudas específicas antes de mencionar el precio.'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Diferencia entre ESTADOS (Lifestyle) y MENSAJES DIRECTOS (Solución).',
        extendedContent: 'Estados: Deben proyectar prueba social y estilo de vida sin vender directamente (80% valor, 20% oferta). Mensajes Directos: Gancho personalizado + Identificación de problema + Solución inmediata. Ejemplo: "Hola [Nombre], vi que consultaste por X, aquí tienes el beneficio principal..."'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de consultoría o producto premium personalizada.',
        extendedContent: 'Mensaje de Cierre: "¿Prefieres que te envíe el catálogo de beneficios ahora o te gustaría una breve llamada de 2 minutos para explicarte cómo esto ahorra tu tiempo?" – Siempre termina con una pregunta abierta para mantener la conversación viva.'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'No vendas, asesora. La velocidad de respuesta es dinero.',
      extendedContent: 'La regla inquebrantable: Responde en menos de 5 minutos. El 70% de las ventas en WhatsApp se pierden por lentitud. Usa respuestas rápidas para las preguntas frecuentes pero personaliza el cierre siempre.'
    }
  },
  [Section.FACEBOOK]: {
    id: Section.FACEBOOK,
    name: 'FACEBOOK MASTER',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200',
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Dominio de grupos orgánicos y Marketplace mediante interacción significativa.',
        extendedContent: 'Facebook premia el engagement en las primeras 2 horas. Publicar en grupos de nicho con "Hilos de Valor" que no contengan links externos obliga al usuario a comentar, lo cual dispara el alcance orgánico. El Marketplace requiere SEO de palabras clave en el título y descripción.'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca pertenencia en grupos y oportunidades en Marketplace.',
        extendedContent: 'En los grupos, el usuario busca solución a problemas comunes o validación. En Marketplace, busca "la oferta de su vida". Alinea tu oferta como una solución comunitaria o un hallazgo exclusivo para conectar con su mentalidad de ahorro o curiosidad.'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Storytelling en grupos y SEO agresivo en Marketplace.',
        extendedContent: 'Estructura de Post en Grupo: Historia personal de éxito -> El "cómo" sin revelar todo -> "Si quieres el método completo, comenta YO". Esto genera un bucle de comentarios que engaña al algoritmo de EdgeRank.'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de productos electrónicos o servicios locales.',
        extendedContent: 'Título Marketplace: "Audífonos Premium - Cancela el ruido de la calle hoy". Descripción: "Ideal para trabajar en casa sin distracciones. Poco uso, excelente estado. Escríbeme ahora."'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'Aporta valor al grupo antes de pedir dinero.',
      extendedContent: 'Nunca seas el spammer del grupo. Comenta en otros posts, ayuda genuinamente y luego publica tu oferta. El algoritmo te castigará si solo entras a vender sin interactuar previamente.'
    }
  },
  [Section.INSTAGRAM_TIKTOK]: {
    id: Section.INSTAGRAM_TIKTOK,
    name: 'INSTAGRAM & TIKTOK',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Foco en la retención visual absoluta y el uso de ganchos (Hooks) de 800ms.',
        extendedContent: 'El tiempo de visualización (Watch Time) es la métrica reina. Los primeros 3 segundos deciden si el video es viral o muere. Usa subtítulos dinámicos, cambios de escena rápidos y audios en tendencia (Trending Audio) pero con volumen bajo para no opacar tu voz.'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca estatus, entretenimiento rápido y validación visual.',
        extendedContent: 'Instagram vende estética y aspiración. TikTok vende autenticidad y "hacks". Tu contenido debe hacer que el usuario sienta que al comprar tu producto, sube de nivel social o resuelve un problema de forma mágica y rápida.'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Ganchos visuales y descripciones con SEO Semántico.',
        extendedContent: 'Estructura Reel: Gancho auditivo/visual -> Desarrollo rápido (3 pasos) -> CTA (Llamado a la acción) al link de la bio. No uses hashtags genéricos; usa palabras clave en la descripción para que el buscador te indexe.'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de accesorios tecnológicos o moda.',
        extendedContent: 'Video: "3 Razones por las que no te concentras... (Muestra audífonos)". Texto: "La cancelación de ruido cambió mi productividad. Disponible en el link de mi perfil."'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'Calidad sobre cantidad. El estatus visual es tu cierre de ventas.',
      extendedContent: 'Una mala iluminación mata la venta. Proyecta autoridad con una estética limpia (Azul Rey, minimalismo tech). Si el video se ve barato, el cliente asumirá que el producto lo es.'
    }
  },
  [Section.LINKEDIN]: {
    id: Section.LINKEDIN,
    name: 'LINKEDIN PRO',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Autoridad B2B mediante el índice SSI y contenido de formato largo.',
        extendedContent: 'LinkedIn premia los artículos y posts que generan debate profesional. El Social Selling Index (SSI) sube cuando interactúas con tomadores de decisiones (C-Level). Evita los posts de "Solo yo" y enfócate en "Nuestra industria".'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca crecimiento profesional, ROI y soluciones corporativas.',
        extendedContent: 'El tono debe ser sobrio pero directo. No vendas "características", vende "optimización de procesos". El cliente de LinkedIn quiere saber cuánto tiempo o dinero le vas a ahorrar a su empresa.'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Redacción de autoridad con enfoque en resultados técnicos.',
        extendedContent: 'Estructura: Problema actual del mercado -> Tu visión única del problema -> Resultados tangibles -> Invitación a conectar para intercambiar ideas. Menos es más en los mensajes de prospección.'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de servicios B2B o Software.',
        extendedContent: 'Mensaje: "Hola [Nombre], vi tu reciente post sobre X. En Soluciones Digitales hemos optimizado flujos similares reduciendo el abandono de leads en un 30%. Me gustaría compartirte cómo lo logramos."'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'Tu perfil es tu Landing Page. Optimiza tu titular para que diga qué solucionas.',
      extendedContent: 'No pongas "Gerente en X". Pon "Ayudo a empresas a escalar sus ventas orgánicas mediante IA y Estrategia". Sé la solución antes de que te pregunten.'
    }
  }
};
