export const categories = ["Todos", "Láser", "Estética", "Clínica"];

export const allTreatments = [
  {
    slug: "laser-co2-fraccionado",
    title: "Láser CO2 Fraccionado",
    category: "Láser",
    description:
      "El estándar de oro para la renovación total de la piel y eliminación de cicatrices profundas.",
    fullDescription:
      "El láser CO2 fraccionado es la tecnología líder en rejuvenecimiento ablativo. Actúa creando micro-columnas de energía térmica que eliminan las capas dañadas de la piel, forzando una regeneración profunda de colágeno. Es el tratamiento preferido por el Dr. Ballesteros para pacientes con secuelas de acné severo o envejecimiento solar avanzado.",
    benefits: [
      "Elimina cicatrices de acné",
      "Reduce arrugas profundas",
      "Tensa la piel flácida",
      "Unifica el tono cutáneo",
    ],
    process: [
      {
        step: "Anestesia",
        desc: "Aplicación de crema tópica 30 minutos antes para máximo confort.",
      },
      {
        step: "Sesión Láser",
        desc: "Barrido preciso con tecnología de fraccionamiento inteligente.",
      },
      {
        step: "Post-Láser",
        desc: "Aplicación de cremas regeneradoras y protector solar físico.",
      },
    ],
    tags: ["Cicatrices", "Rejuvenecimiento", "Acné"],
    image: "/assets/images/laser-co2.png",
  },
  {
    slug: "mapeo-de-lunares",
    title: "Mapeo de Lunares (Dermatoscopía)",
    category: "Clínica",
    description:
      "Evaluación exhaustiva preventiva para la detección temprana de lesiones sospechosas.",
    fullDescription:
      "La dermatoscopía digital nos permite ver estructuras de la piel no visibles al ojo humano. Es la herramienta principal del Dr. Ballesteros para el seguimiento de pacientes con múltiples lunares o antecedentes de cáncer de piel.",
    benefits: [
      "Detección precoz de cáncer",
      "Registro fotográfico digital",
      "Evita biopsias innecesarias",
      "Control anual preventivo",
    ],
    process: [
      {
        step: "Escaneo",
        desc: "Revisión de cuerpo completo con dermatoscopio.",
      },
      {
        step: "Registro",
        desc: "Fotografía de alta resolución de lesiones atípicas.",
      },
      {
        step: "Informe",
        desc: "Entrega de mapa dermatológico para seguimiento.",
      },
    ],
    tags: ["Prevención", "Cáncer de Piel", "Salud"],
    image: "/assets/images/mapeo.png",
  },
  {
    slug: "acido-hialuronico",
    title: "Rellenos con Ácido Hialurónico",
    category: "Estética",
    description:
      "Recupera volúmenes perdidos, perfilado de labios y armonización facial sin cirugía.",
    fullDescription:
      "El ácido hialurónico es una sustancia biocompatible que hidrata y aporta volumen. Se utiliza para redefinir el contorno facial, proyectar el mentón o hidratar los labios, ofreciendo resultados inmediatos y de aspecto muy natural.",
    benefits: [
      "Perfilado de labios",
      "Eliminación de ojeras profundas",
      "Definición de mandíbula",
      "Hidratación profunda",
    ],
    process: [
      {
        step: "Diseño",
        desc: "Marcación de vectores de tensión y áreas de volumen.",
      },
      {
        step: "Inyección",
        desc: "Uso de cánulas para minimizar hematomas y dolor.",
      },
      {
        step: "Masaje",
        desc: "Moldeado del producto para una integración perfecta.",
      },
    ],
    tags: ["Volumen", "Labios", "Hidratación"],
    image: "/assets/images/hialuronico.png",
  },
  {
    slug: "tratamiento-de-rosacea-laser",
    title: "Láser para Rosácea y Rojeces",
    category: "Láser",
    description:
      "Tecnología vascular avanzada para eliminar arañitas vasculares y reducir el enrojecimiento facial.",
    fullDescription:
      "Mediante láseres vasculares específicos, atacamos la hemoglobina de los vasos dilatados. Esto cierra las pequeñas venitas (telangiectasias) y reduce significativamente la inflamación crónica característica de la rosácea.",
    benefits: [
      "Reduce el eritema (rojez)",
      "Elimina vasos visibles",
      "Mejora la sensibilidad cutánea",
      "Previene brotes inflamatorios",
    ],
    process: [
      { step: "Limpieza", desc: "Remoción de impurezas y maquillaje." },
      {
        step: "Disparo Láser",
        desc: "Tratamiento de las zonas con mayor congestión vascular.",
      },
      { step: "Calma", desc: "Máscara descongestiva fría post-tratamiento." },
    ],
    tags: ["Rosácea", "Vascular", "Calma"],
    image: "/assets/images/rosacea.png",
  },
  {
    slug: "tratamiento-de-rosacea-laser",
    title: "Láser para Rosácea y Rojeces",
    category: "Láser",
    description:
      "Tecnología vascular avanzada para eliminar arañitas vasculares y reducir el enrojecimiento facial.",
    fullDescription:
      "Mediante láseres vasculares específicos, atacamos la hemoglobina de los vasos dilatados. Esto cierra las pequeñas venitas (telangiectasias) y reduce significativamente la inflamación crónica característica de la rosácea.",
    benefits: [
      "Reduce el eritema (rojez)",
      "Elimina vasos visibles",
      "Mejora la sensibilidad cutánea",
      "Previene brotes inflamatorios",
    ],
    process: [
      { step: "Limpieza", desc: "Remoción de impurezas y maquillaje." },
      {
        step: "Disparo Láser",
        desc: "Tratamiento de las zonas con mayor congestión vascular.",
      },
      { step: "Calma", desc: "Máscara descongestiva fría post-tratamiento." },
    ],
    tags: ["Rosácea", "Vascular", "Calma"],
    image: "/assets/images/rosacea.png",
  },
  {
    slug: "peeling-quimico-medico",
    title: "Peeling Químico Médico",
    category: "Clínica",
    description:
      "Renovación celular profunda para tratar manchas, poros abiertos y luminosidad de la piel.",
    fullDescription:
      "A diferencia de los peelings estéticos, el peeling médico utiliza ácidos en concentraciones controladas para exfoliar capas específicas de la epidermis. Ideal para tratar melasma, acné activo y textura irregular.",
    benefits: [
      "Aclara manchas solares",
      "Reduce poros dilatados",
      "Controla la grasa facial",
      "Luminosidad instantánea",
    ],
    process: [
      { step: "Preparación", desc: "Desengrasado profundo de la piel." },
      {
        step: "Aplicación",
        desc: "Capas de ácido según tolerancia y objetivo.",
      },
      {
        step: "Sellado",
        desc: "Uso de retinol o vitamina C para potenciar resultados.",
      },
    ],
    tags: ["Manchas", "Luminosidad", "Poros"],
    image: "/assets/images/peeling.png",
  },
  {
    slug: "depilacion-laser-soprano",
    title: "Depilación Láser Soprano Titanium",
    category: "Láser",
    description:
      "La tecnología más rápida y segura para eliminación de vello en todos los fototipos de piel.",
    fullDescription:
      "El sistema Soprano Titanium combina tres longitudes de onda en un solo cabezal. Es prácticamente indoloro y se puede realizar incluso en pieles bronceadas, garantizando una eliminación permanente del vello de forma segura.",
    benefits: [
      "Prácticamente indoloro",
      "Seguro en piel bronceada",
      "Sesiones ultra rápidas",
      "Eliminación definitiva",
    ],
    process: [
      {
        step: "Rasurado",
        desc: "Se debe asistir con la zona rasurada de 24 horas.",
      },
      {
        step: "Gel Conductor",
        desc: "Aplicación de gel frío para deslizar el cabezal.",
      },
      {
        step: "Barrido",
        desc: "Movimiento constante para calentar el folículo piloso.",
      },
    ],
    tags: ["Depilación", "Cuerpo", "Sin Dolor"],
    image: "/assets/images/depilacion.png",
  },
  {
    slug: "tratamiento-acne-activo",
    title: "Protocolo Acné Activo",
    category: "Clínica",
    description:
      "Combinación de terapia médica y fotodinámica para controlar brotes y prevenir marcas.",
    fullDescription:
      "Tratamos el acné desde la raíz inflamatoria. El Dr. Ballesteros combina medicación personalizada con terapias de luz para eliminar la bacteria P. acnes y regular la glándula sebácea sin necesidad de fármacos agresivos si el caso lo permite.",
    benefits: [
      "Detiene brotes nuevos",
      "Desinflama quistes",
      "Previene cicatrices",
      "Mejora la autoestima",
    ],
    process: [
      { step: "Extracción", desc: "Limpieza médica de comedones (opcional)." },
      { step: "Terapia de Luz", desc: "Luz LED azul para eliminar bacterias." },
      {
        step: "Prescripción",
        desc: "Receta médica personalizada para cuidado en casa.",
      },
    ],
    tags: ["Acné", "Salud", "Limpieza"],
    image: "/assets/images/acne-activo.png",
  },
  {
    slug: "toxina-botulinica",
    title: "Toxina Botulínica",
    category: "Estética",
    description:
      "Suaviza las líneas de expresión y previene arrugas manteniendo la naturalidad de tu rostro.",
    fullDescription:
      "Más conocido como Botox, este tratamiento relaja temporalmente los músculos responsables de las arrugas dinámicas. Nuestra técnica se enfoca en la 'Natural Look', evitando rostros inexpresivos y priorizando una apariencia descansada y juvenil.",
    benefits: [
      "Adiós a las patas de gallo",
      "Suaviza el entrecejo",
      "Levantamiento sutil de cejas",
      "Prevención de arrugas fijas",
    ],
    process: [
      {
        step: "Evaluación",
        desc: "Estudio de la gesticulación facial del paciente.",
      },
      {
        step: "Aplicación",
        desc: "Micro-inyecciones en puntos estratégicos (15 minutos).",
      },
      {
        step: "Control",
        desc: "Revisión a los 10 días para asegurar simetría perfecta.",
      },
    ],
    tags: ["Arrugas", "Frente", "Mirada"],
    image: "/assets/images/botox.png",
  },
];

export const cases = [
  {
    title: "Tratamiento de Acné Activo",
    description:
      "Resultados tras 4 sesiones de Láser combinadas con tratamiento clínico personalizado.",
    before: "/assets/images/antes-acne.png",
    after: "/assets/images/despues-acne.png",
    tag: "Dermatología Clínica",
  },
  {
    title: "Rejuvenecimiento Periocular",
    description:
      "Reducción de líneas de expresión y mejora de la textura de la piel con tecnología láser.",
    before: "/assets/images/antes-laser.png",
    after: "/assets/images/despues-laser.png",
    tag: "Láser Avanzado",
  },
];

export const faqs = [
  {
    question: "¿Es doloroso el tratamiento con láser?",
    answer:
      "La mayoría de nuestros procedimientos láser son mínimamente invasivos. Utilizamos sistemas de enfriamiento avanzado y, cuando es necesario, anestesia tópica para asegurar que tu experiencia sea cómoda y prácticamente indolora.",
  },
  {
    question: "¿Cuántas sesiones necesitaré para ver resultados?",
    answer:
      "Esto depende de cada caso y del tratamiento. Para rejuvenecimiento, se suelen ver cambios desde la primera sesión, aunque se recomiendan de 3 a 5 para resultados óptimos y duraderos. El Dr. Ballesteros te dará un plan exacto en la evaluación.",
  },
  {
    question: "¿Puedo realizarme tratamientos láser en verano?",
    answer:
      "Sí, contamos con tecnología láser avanzada que permite tratamientos seguros durante todo el año en Lima. Sin embargo, es fundamental el uso estricto de fotoprotección y seguir las indicaciones post-tratamiento del especialista.",
  },
  {
    question: "¿Qué incluye la primera consulta dermatológica?",
    answer:
      "Incluye una evaluación clínica exhaustiva, diagnóstico dermatológico con apoyo tecnológico si se requiere, y el diseño de un plan de tratamiento personalizado adaptado a tus necesidades y objetivos.",
  },
];
