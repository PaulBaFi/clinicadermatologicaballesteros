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

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: "Estética" | "Médica" | "Tecnología";
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Láser CO2 Fraccionado: El estándar de oro para cicatrices",
    slug: "laser-co2-fraccionado-cicatrices",
    category: "Tecnología",
    excerpt:
      "Descubre cómo la tecnología láser logra regenerar la piel profundamente, eliminando marcas de acné y rejuveneciendo la textura facial.",
    content: `
      <p>El <strong>Láser CO2 Fraccionado</strong> se ha consolidado como el tratamiento líder en dermatología para la renovación cutánea total. Pero, ¿cómo funciona exactamente?</p>
      <h3>Beneficios Principales</h3>
      <ul>
        <li><strong>Reducción de Cicatrices:</strong> Ideal para marcas profundas de acné.</li>
        <li><strong>Efecto Lifting:</strong> Estimula la producción de colágeno y elastina.</li>
        <li><strong>Eliminación de Manchas:</strong> Unifica el tono de la piel dañada por el sol.</li>
      </ul>
      <di>
        <p>"La ciencia detrás del láser permite micro-perforaciones que activan la curación natural de la piel sin dañar el tejido circundante."</p>
      </div>
      <h3>¿Qué esperar del post-tratamiento?</h3>
      <p>Es normal presentar un enrojecimiento similar a una quemadura solar leve durante los primeros 3 a 5 días. La hidratación y el uso estricto de bloqueador solar son fundamentales durante este proceso de recuperación.</p>
    `,
    date: "10 Feb, 2026",
    author: "Dra. Lucía Mendoza",
    image: "/assets/images/blog/laser-co2.png",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Acné Activo: ¿Por qué los remedios caseros pueden ser peligrosos?",
    slug: "peligros-remedios-caseros-acne",
    category: "Médica",
    excerpt:
      "El uso de limón, pasta dental o bicarbonato puede empeorar la inflamación y dejar manchas permanentes. Conoce el enfoque clínico correcto.",
    content: `
      <p>Muchos pacientes llegan a consulta con quemaduras químicas causadas por el uso de sustancias no dermatológicas. El acné es una <strong>enfermedad inflamatoria</strong> y debe tratarse como tal.</p>
      <h3>Mitos comunes vs. Realidad Médica</h3>
      <table>
        <thead>
          <tr>
            <th>Mito</th>
            <th>Riesgo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Limón para las manchas</td>
            <td>Quemaduras severas por fotosensibilidad.</td>
          </tr>
          <tr>
            <td>Pasta dental en granos</td>
            <td>Irritación extrema y descamación.</td>
          </tr>
        </tbody>
      </table>
      <h3>Nuestro Tratamiento Personalizado</h3>
      <p>En nuestra clínica de Lima, combinamos la <strong>terapia lumínica</strong> con protocolos tópicos de grado médico para desinflamar la piel en tiempo récord, evitando la formación de futuras cicatrices.</p>
    `,
    date: "05 Feb, 2026",
    author: "Dr. Carlos Rivera",
    image: "/assets/images/blog/acne-tips.png",
    readTime: "4 min",
  },
  {
    id: "3",
    title: "Rutina Anti-age: El orden correcto de los productos",
    slug: "orden-rutina-skincare-antiage",
    category: "Estética",
    excerpt:
      "Aplicar tus serums en el orden equivocado podría estar anulando sus beneficios. Aprende a maximizar tu inversión en skincare.",
    content: `
      <p>No se trata de cuántos productos usas, sino de cómo los capas. La regla de oro es: <strong>de la textura más ligera a la más densa.</strong></p>
      <ol>
        <li><strong>Limpieza:</strong> El paso fundamental para un lienzo limpio.</li>
        <li><strong>Contorno de ojos:</strong> Protege la zona más delicada antes de los activos potentes.</li>
        <li><strong>Serum (Vitamina C o Retinol):</strong> Los activos que transforman la piel.</li>
        <li><strong>Hidratante:</strong> Sella la humedad.</li>
        <li><strong>Fotoprotección:</strong> El mejor producto anti-edad que existe.</li>
      </ol>
      <h3>¿A qué edad empezar?</h3>
      <p>La prevención comienza a los 25 años, cuando la producción natural de colágeno empieza a declinar lentamente.</p>
    `,
    date: "28 Ene, 2026",
    author: "Dra. Lucía Mendoza",
    image: "/assets/images/blog/skincare-rutina.png",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Melasma: Cómo tratar las manchas rebeldes este verano",
    slug: "tratamiento-melasma-verano-lima",
    category: "Médica",
    excerpt:
      "El sol de Lima no perdona. Aprende por qué el melasma requiere un enfoque que va más allá de las cremas aclaradoras convencionales.",
    content: `
      <p>El <strong>melasma</strong> es una de las consultas más frecuentes en nuestra clínica. Se manifiesta como manchas oscuras en mejillas, frente y labio superior, exacerbadas por la radiación UV y cambios hormonales.</p>
      <h3>Tratamientos de Vanguardia</h3>
      <ul>
        <li><strong>Peelings Químicos:</strong> Exfoliación controlada para renovar las capas con pigmento.</li>
        <li><strong>Ácido Tranexámico:</strong> Un potente aliado para frenar la producción de melanina.</li>
        <li><strong>Láser de Picosegundos:</strong> Fragmenta el pigmento sin generar calor excesivo (ideal para pieles sensibles).</li>
      </ul>
      <div class="bg-surface-200 p-6 rounded-2xl my-6 border-l-4 border-primary">
        <p class="font-bold text-ink-base italic text-lg">"El protector solar no es opcional: debe ser de amplio espectro y reaplicado cada 3 horas, incluso en días nublados."</p>
      </div>
      <h3>Consejo del Especialista</h3>
      <p>Evita el uso de hidroquinona sin supervisión médica prolongada, ya que puede causar ocronosis (manchas permanentes azuladas).</p>
    `,
    date: "12 Feb, 2026",
    author: "Dr. Carlos Rivera",
    image: "/assets/images/blog/melasma-care.png",
    readTime: "7 min",
  },
  {
    id: "5",
    title: "Mitos y Verdades de la Toxina Botulínica (Botox)",
    slug: "mitos-verdades-toxina-botulinica",
    category: "Estética",
    excerpt:
      "¿Miedo a quedar sin expresión? Desmitificamos el tratamiento estético más realizado en el mundo para un rejuvenecimiento natural.",
    content: `
      <p>A diferencia de lo que muchos creen, la <strong>toxina botulínica</strong> no rellena; su función es relajar temporalmente los músculos responsables de las arrugas dinámicas.</p>
      <h3>Verdades que debes conocer</h3>
      <ol>
        <li><strong>Resultados Naturales:</strong> Aplicado correctamente, el rostro luce descansado, no "congelado".</li>
        <li><strong>Prevención:</strong> El "Baby Botox" se usa en pacientes jóvenes para evitar que las líneas de expresión se conviertan en surcos permanentes.</li>
        <li><strong>Efecto Temporal:</strong> Su duración oscila entre los 4 y 6 meses, dependiendo del metabolismo de cada paciente.</li>
      </ol>
      <p>Es un procedimiento de apenas 15 minutos que te permite reincorporarte a tus actividades laborales de inmediato.</p>
    `,
    date: "14 Feb, 2026",
    author: "Dra. Lucía Mendoza",
    image: "/assets/images/blog/botox-results.png",
    readTime: "5 min",
  },
  {
    id: "6",
    title: "Rosácea: Guía para calmar la piel roja y sensible",
    slug: "guia-rosacea-piel-sensible",
    category: "Médica",
    excerpt:
      "Si tu piel se pone roja con el picante, el estrés o el sol, podrías tener rosácea. Conoce cómo controlar los brotes efectivamente.",
    content: `
      <p>La rosácea es una condición crónica que afecta los vasos sanguíneos del rostro. No tiene cura, pero con el tratamiento adecuado, se puede lograr una <strong>remisión total de los síntomas</strong>.</p>
      <h3>¿Cuáles son los disparadores?</h3>
      <p>Identificar qué causa tu "flushing" es vital. Los culpables más comunes suelen ser:</p>
      <table>
        <thead>
          <tr>
            <th>Disparador</th>
            <th>Efecto en la Piel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calor/Vapor</td>
            <td>Dilatación inmediata de capilares.</td>
          </tr>
          <tr>
            <td>Alcohol/Ají</td>
            <td>Inflamación sistémica y enrojecimiento.</td>
          </tr>
          <tr>
            <td>Estrés</td>
            <td>Aparición de pápulas y pústulas.</td>
          </tr>
        </tbody>
      </table>
      <h3>Tratamiento Gold Standard</h3>
      <p>En nuestra clínica utilizamos <strong>Luz Pulsada Intensa (IPL)</strong>, que actúa cerrando los vasos sanguíneos dilatados y devolviendo a la piel su tono uniforme.</p>
    `,
    date: "15 Feb, 2026",
    author: "Dr. Carlos Rivera",
    image: "/assets/images/blog/rosacea-tips.png",
    readTime: "6 min",
  },
];
