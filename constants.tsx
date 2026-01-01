
import { Section, NetworkStrategy } from './types';

// Imagen profesional de alta tecnología usada en todos los módulos por consistencia
const UNIFIED_IMAGE = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200';

export const STRATEGIES: Record<string, NetworkStrategy> = {
  [Section.WHATSAPP]: {
    id: Section.WHATSAPP,
    name: 'WHATSAPP',
    imageUrl: UNIFIED_IMAGE,
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Foco en embudos de alta conversión mediante WACRM y WASender.',
        extendedContent: 'El algoritmo de WhatsApp prioriza la interacción bidireccional inmediata. El uso de WASender permite una prospección masiva ética.'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca inmediatez y confianza personal en el 1 a 1.',
        extendedContent: 'En WhatsApp, el usuario no está en "modo navegación", está en "modo conversación". El vendedor debe actuar como un asesor.'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Diferencia entre ESTADOS (Lifestyle) y MENSAJES DIRECTOS (Solución).',
        extendedContent: 'Estados: Deben proyectar prueba social y estilo de vida (80% valor, 20% oferta). Mensajes Directos: Gancho + Problema + Solución.'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de consultoría o producto premium personalizada.',
        extendedContent: 'Mensaje de Cierre: "¿Prefieres que te envíe el catálogo de beneficios ahora o te gustaría una breve llamada de 2 minutos?"'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'No vendas, asesora. La velocidad de respuesta es dinero.',
      extendedContent: 'La regla inquebrantable: Responde en menos de 5 minutos. El 70% de las ventas se pierden por lentitud.'
    }
  },
  [Section.FACEBOOK]: {
    id: Section.FACEBOOK,
    name: 'FACEBOOK',
    imageUrl: UNIFIED_IMAGE,
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Dominio de grupos orgánicos y Marketplace mediante interacción significativa.',
        extendedContent: 'Facebook premia el engagement en las primeras 2 horas. Publicar en grupos de nicho con "Hilos de Valor" dispara el alcance.'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca pertenencia en grupos y oportunidades en Marketplace.',
        extendedContent: 'En los grupos, el usuario busca solución a problemas comunes. En Marketplace, busca "la oferta de su vida".'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Storytelling en grupos y SEO agresivo en Marketplace.',
        extendedContent: 'Estructura de Post: Historia personal de éxito -> El "cómo" sin revelar todo -> CTA directo.'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de productos electrónicos o servicios locales.',
        extendedContent: 'Título Marketplace: "Audífonos Premium - Cancela el ruido de la calle hoy". Descripción: "Ideal para trabajar sin distracciones."'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'Aporta valor al grupo antes de pedir dinero.',
      extendedContent: 'Nunca seas el spammer del grupo. Comenta en otros posts, ayuda genuinamente y luego publica tu oferta.'
    }
  },
  [Section.INSTAGRAM_TIKTOK]: {
    id: Section.INSTAGRAM_TIKTOK,
    name: 'INSTAGRAM & TIKTOK',
    imageUrl: UNIFIED_IMAGE,
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Foco en la retención visual absoluta y el uso de ganchos de 800ms.',
        extendedContent: 'El tiempo de visualización es la métrica reina. Los primeros 3 segundos deciden si el video es viral o muere.'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca estatus, entretenimiento rápido y validación visual.',
        extendedContent: 'Instagram vende estética y aspiración. TikTok vende autenticidad y "hacks" rápidos.'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Ganchos visuales y descripciones con SEO Semántico.',
        extendedContent: 'Estructura Reel: Gancho auditivo -> Desarrollo rápido (3 pasos) -> CTA al link de la bio.'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de accesorios tecnológicos o moda.',
        extendedContent: 'Video: "3 Razones por las que no te concentras... (Muestra audífonos)". Texto: "La cancelación de ruido cambió mi productividad."'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'Calidad sobre cantidad. El estatus visual es tu cierre de ventas.',
      extendedContent: 'Una mala iluminación mata la venta. Proyecta autoridad con una estética limpia y minimalista.'
    }
  },
  [Section.LINKEDIN]: {
    id: Section.LINKEDIN,
    name: 'LINKEDIN',
    imageUrl: UNIFIED_IMAGE,
    cards: [
      {
        title: 'ESTRATEGIA ALGORÍTMICA',
        content: 'Autoridad B2B mediante el índice SSI y contenido de formato largo.',
        extendedContent: 'LinkedIn premia los artículos y posts que generan debate profesional.'
      },
      {
        title: 'PSICOLOGÍA DEL USUARIO',
        content: 'El usuario busca crecimiento profesional, ROI y soluciones corporativas.',
        extendedContent: 'El tono debe ser sobrio pero directo. No vendas "características", vende "optimización".'
      },
      {
        title: 'COPYWRITING & ESTRUCTURA',
        content: 'Redacción de autoridad con enfoque en resultados técnicos.',
        extendedContent: 'Estructura: Problema del mercado -> Tu visión única -> Resultados -> Invitación a conectar.'
      },
      {
        title: 'EJEMPLO PRÁCTICO (CASO REAL)',
        content: 'Venta de servicios B2B o Software.',
        extendedContent: 'Mensaje: "Hola [Nombre], vi tu reciente post. En Soluciones Digitales hemos optimizado flujos similares."'
      }
    ],
    goldenRule: {
      title: 'CONSEJO DE ORO (BUENAS PRÁCTICAS)',
      content: 'Tu perfil es tu Landing Page. Optimiza tu titular profesional.',
      extendedContent: 'No pongas solo tu cargo. Pon cómo resuelves problemas para tu cliente ideal.'
    }
  },
  [Section.TRIGGERS]: {
    id: Section.TRIGGERS,
    name: '23 DISPARADORES',
    imageUrl: UNIFIED_IMAGE,
    cards: [
      {
        title: 'RECIPROCIDAD',
        content: 'El deseo innato de devolver un favor o valor recibido.',
        extendedContent: 'Si entregas un PDF de alto valor gratis, el prospecto se siente en deuda psicológica.'
      },
      {
        title: 'ESCASEZ',
        content: 'Valoramos más aquello que es difícil de conseguir.',
        extendedContent: 'No es solo decir "quedan pocos". Es justificar por qué: "Solo tengo 5 licencias disponibles".'
      },
      {
        title: 'AUTORIDAD',
        content: 'Seguimos a los expertos que demuestran dominio técnico.',
        extendedContent: 'Muestra resultados o habla con términos técnicos precisos.'
      },
      {
        title: 'PRUEBA SOCIAL',
        content: 'Copiamos el comportamiento de la mayoría exitosa.',
        extendedContent: 'Los testimonios no son para presumir, son para validar el éxito compartido.'
      },
      {
        title: 'URGENCIA',
        content: 'La necesidad de actuar ahora para no perder una ventaja.',
        extendedContent: 'Trata del tiempo limitado: "Esta oferta expira hoy a medianoche".'
      },
      {
        title: 'STORYTELLING',
        content: 'Conectamos con historias que activan nuestra empatía.',
        extendedContent: 'Narra el viaje del héroe de tu cliente para generar una conexión emocional profunda.'
      }
    ],
    goldenRule: {
      title: 'LA REGLA DEL COMPROMISO',
      content: 'Haz que digan "Sí" a pequeñas cosas antes del "Sí" final.',
      extendedContent: 'Logra micro-conversiones: que abran un link, que comenten, que respondan un saludo.'
    }
  },
  [Section.NICHOS_OSCUROS]: {
    id: Section.NICHOS_OSCUROS,
    name: 'NICHOS OSCUROS',
    imageUrl: UNIFIED_IMAGE,
    cards: [
      {
        title: '¿QUÉ SON LOS NICHOS OSCUROS?',
        content: 'Mercados de alta rentabilidad que sufren censura publicitaria.',
        extendedContent: 'Incluye sectores como cripto, suplementos y promesas de ingresos rápidos.'
      },
      {
        title: 'EL VETO DE LAS REDES',
        content: 'Por qué Meta y Google prohíben su publicidad directa.',
        extendedContent: 'Las plataformas protegen su reputación y evitan riesgos legales por promesas no verificables.'
      },
      {
        title: 'LA VENTAJA DEL ORGÁNICO',
        content: 'Donde los anuncios fallan, el contenido de valor domina.',
        extendedContent: 'Sin competencia por Ads, el que domine el tráfico orgánico captura todo el mercado.'
      },
      {
        title: 'ESTRATEGIA DE CAMUFLAJE',
        content: 'Cómo atraer tráfico sin activar las alarmas del algoritmo.',
        extendedContent: 'Se utiliza contenido educativo para atraer al público y el cierre ocurre en canales privados.'
      }
    ],
    goldenRule: {
      title: 'LA REGLA DE LA INVISIBILIDAD',
      content: 'Publica como un asesor, vende como un amigo.',
      extendedContent: 'Evita palabras prohibidas. Usa analogías para que el humano entienda pero el bot no detecte.'
    }
  },
  [Section.IA_DESIGN]: {
    id: Section.IA_DESIGN,
    name: 'IA DESIGN',
    imageUrl: UNIFIED_IMAGE,
    cards: [
      {
        title: 'ESTÉTICA TIPO CANVA AI',
        content: 'Herramientas de arrastrar y soltar con potencia de Inteligencia Artificial.',
        extendedContent: 'Utilizamos motores de diseño que permiten ediciones rápidas, eliminación de fondos y sugerencias inteligentes.'
      },
      {
        title: 'GUÍA DE IMÁGENES ELITE',
        content: 'Cómo estructurar visualmente tus posts para maximizar el CTR.',
        extendedContent: 'La jerarquía visual y el contraste son claves para proyectar autoridad en Soluciones Digitales.'
      },
      {
        title: 'PROMPT ENGINEERING VISUAL',
        content: 'Domina la creación de assets sin ser diseñador profesional.',
        extendedContent: 'Aprende a describir composición e iluminación para generar elementos únicos de marca.'
      },
      {
        title: 'CONSISTENCIA DE MARCA',
        content: 'Mantén un look profesional en todas tus plataformas.',
        extendedContent: 'La IA te ayuda a mantener los mismos tonos y estilos en cada pieza gráfica de tu feed.'
      }
    ],
    goldenRule: {
      title: 'EL PRINCIPIO DE LA CLARIDAD',
      content: 'El buen diseño es invisible; solo ves la solución.',
      extendedContent: 'No satures tus imágenes. Enfócate en un solo mensaje potente por pieza.'
    }
  }
};
