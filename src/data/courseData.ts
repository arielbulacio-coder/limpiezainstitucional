export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface ClassData {
  id: number;
  title: string;
  description: string;
  keyword: string;
  content: string;
  duration: string;
  questions: Question[];
}

export const COURSE_INFO = {
  title: "Curso de Formación Profesional: Limpieza Institucional",
  instructor: "Maricel Gauna",
  hours: "100 Horas Cátedra",
  institution: "Capacitación Profesional",
  description: "Este curso brinda conocimientos básicos sobre el manejo de sustancias químicas, técnicas de higiene y normas de bioseguridad para optimizar la labor del auxiliar en instituciones educativas."
};

const generateMockQuestions = (classId: number): Question[] => {
  const baseQuestions = [
    {
      question: "¿Cuál es el objetivo principal de la bioseguridad en el ámbito escolar?",
      options: ["Limpiar rápido", "Garantizar un entorno seguro y prevenir enfermedades", "Ahorrar productos químicos", "Decorar el establecimiento"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Qué ley regula los Riesgos del Trabajo en Argentina?",
      options: ["Ley 20.744", "Ley 24.557", "Ley 19.587", "Ley 26.206"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Qué significan las siglas 'ETA'?",
      options: ["Enfermedades Transmitidas por Alimentos", "Enfermedades Telefónicas Agudas", "Elemento de Trabajo Auxiliar", "Escalafón Técnico Administrativo"],
      correctAnswerIndex: 0
    },
    {
      question: "¿Qué componente es fundamental para una desinfección efectiva?",
      options: ["Solo agua fría", "Detergente mezclado con lavandina", "Uso de desinfectantes aprobados siguiendo las dosis indicadas", "Perfumes aromáticos"],
      correctAnswerIndex: 2
    },
    {
      question: "La Resolución 299/11 regula:",
      options: ["El sueldo de los auxiliares", "La infraestructura escolar", "El Reglamento General de Instituciones Educativas", "El menú escolar"],
      correctAnswerIndex: 2
    }
  ];

  const questions: Question[] = [];
  for (let i = 0; i < 20; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    questions.push({
      id: i + 1,
      question: `[Clase ${classId} - Q${i + 1}] ${base.question}`,
      options: base.options,
      correctAnswerIndex: base.correctAnswerIndex
    });
  }
  return questions;
};

export const CLASSES: ClassData[] = [
  {
    id: 1,
    title: "Introducción y Bioseguridad",
    description: "Desafío de Bioseguridad en el Ámbito Escolar y marco introductorio.",
    keyword: "INICIO",
    duration: "7.1h",
    content: `La bioseguridad es un conjunto de medidas preventivas destinadas a proteger la salud y la seguridad del personal y de la comunidad educativa frente a riesgos biológicos, físicos y químicos.

Puntos clave:
- El auxiliar debe intervenir para garantizar un entorno seguro.
- La problemática central es el diseño de protocolos eficientes que cumplan la normativa legal.
- Es vital proteger la salud sin comprometer la seguridad propia.
- Comprender el flujo de circulación y los puntos críticos del establecimiento.`,
    questions: generateMockQuestions(1)
  },
  {
    id: 2,
    title: "Fundamentos de Limpieza",
    description: "Diferencia entre limpieza, desinfección, esterilización y fumigación.",
    keyword: "LIMPIEZA",
    duration: "7.1h",
    content: `- Limpieza: Eliminación de suciedad visible (polvo, manchas, grasa) mediante procedimientos mecánicos o manuales.
- Desinfección: Proceso químico o físico que elimina microorganismos patógenos (virus, bacterias) en superficies inertes.
- Esterilización: Destrucción total de toda forma de vida microbiana (generalmente en ambientes médicos).
- Fumigación: Control de plagas y vectores mediante sustancias gaseosas o aerosoles.`,
    questions: generateMockQuestions(2)
  },
  {
    id: 3,
    title: "Sustancias Químicas",
    description: "Manejo seguro, rótulos de etiquetas y materiales.",
    keyword: "QUIMICA",
    duration: "7.1h",
    content: `El manejo de químicos requiere precaución extrema para evitar intoxicaciones o quemaduras.

Protocolo de gestión:
1. Lectura de etiquetas: Siempre verificar símbolos de toxicidad e inflamabilidad.
2. NUNCA mezclar lavandina con detergente o ácidos (produce gases tóxicos).
3. Dosificación: Usar la cantidad exacta indicada por el fabricante para evitar residuos peligrosos y optimizar recursos.
4. Almacenamiento: Rotular cada envase y guardar fuera del alcance de niños en lugares ventilados.`,
    questions: generateMockQuestions(3)
  },
  {
    id: 4,
    title: "Ley de Riesgos del Trabajo",
    description: "Análisis de la Ley 24.557 y el rol de las ART.",
    keyword: "LEY24557",
    duration: "7.1h",
    content: `La Ley 24.557 tiene como objetivo prevenir los riesgos en el trabajo y reparar los daños derivados de accidentes y enfermedades profesionales.

Conceptos fundamentales:
- Accidente de trabajo: Acontecimiento súbito y violento ocurrido por el hecho o en ocasión del trabajo.
- Accidente in itinere: Ocurrido en el trayecto entre el domicilio y el lugar de trabajo.
- ART: Aseguradoras de Riesgos del Trabajo que brindan prestaciones médicas y dinerarias.
- Obligación del auxiliar: Utilizar los EPP suministrados y cumplir con las normas de seguridad.`,
    questions: generateMockQuestions(4)
  },
  {
    id: 5,
    title: "Reglamento de Instituciones",
    description: "Res. 299/11 y el artículo 95 sobre responsabilidades.",
    keyword: "REGLAMENTO",
    duration: "7.1h",
    content: `La Resolución 299/11 establece el Reglamento General para Instituciones Educativas en Buenos Aires.

Artículo 95 - Deberes del Personal Auxiliar:
- Mantener en perfectas condiciones de higiene y orden el sector asignado.
- Colaborar en la vigilancia y cuidado de los alumnos cuando sea necesario por razones de seguridad.
- Ser responsable de los elementos de limpieza y herramientas bajo su custodia.
- Cumplir con los horarios y normativas de la Dirección.`,
    questions: generateMockQuestions(5)
  },
  {
    id: 6,
    title: "Prevención de ETA",
    description: "Enfermedades Transmitidas por Alimentos y manejo de comedores.",
    keyword: "ALIMENTOS",
    duration: "7.1h",
    content: `Las ETA son enfermedades causadas por la ingestión de alimentos o agua contaminados.

Buenas Prácticas de Manufactura (BPM) para el Auxiliar:
- Lavado de manos exhaustivo antes de manipular alimentos o utensilios.
- Evitar la Contaminación Cruzada: No usar el mismo trapo o tabla para diferentes tipos de alimentos o superficies sin desinfectar.
- Control de temperatura: Asegurar que los alimentos no permanezcan en la 'zona de peligro' (5°C a 60°C) por mucho tiempo.
- Limpieza profunda de heladeras y alacenas.`,
    questions: generateMockQuestions(6)
  },
  {
    id: 7,
    title: "Higiene y Seguridad",
    description: "Identificación y mitigación de riesgos en el entorno laboral.",
    keyword: "SEGURIDAD",
    duration: "7.1h",
    content: `El entorno escolar presenta diversos riesgos que deben ser mitigados de forma proactiva.

Tipos de Riesgos:
- Físicos: Caídas por pisos mojados (uso de cartelería 'Cuidado Piso Mojado'), cortes o golpes.
- Eléctricos: Manejo de enceradoras o aspiradoras con cables dañados.
- Químicos: Inhalación de vapores o contacto con piel/ojos.
- Ergonómicos: Sobreesfuerzo por levantamiento incorrecto de tachos de residuos.`,
    questions: generateMockQuestions(7)
  },
  {
    id: 8,
    title: "Técnicas de Desinfección",
    description: "Protocolos específicos para aulas y áreas comunes.",
    keyword: "TECNICAS",
    duration: "7.1h",
    content: `Metodología de Limpieza Doble Balde (Técnica de los dos baldes):
- Balde con solución detergente y balde con agua de enjuague.
- Limpieza de arriba hacia abajo (techos -> paredes -> superficies -> pisos).
- Limpieza de adentro hacia afuera de cada aula.
- Frecuencia: Diaria en aulas, varias veces al día en baños y comedores.`,
    questions: generateMockQuestions(8)
  },
  {
    id: 9,
    title: "Planes de Limpieza",
    description: "Diseño y ejecución de protocolos estandarizados.",
    keyword: "PLANES",
    duration: "7.1h",
    content: `Un Plan de Limpieza y Desinfección (L+D) debe ser escrito y conocido por todo el personal.

Componentes del Plan:
1. Sector: ¿Qué se limpia?
2. Frecuencia: ¿Cuándo y cada cuánto?
3. Responsable: ¿Quién lo hace?
4. Producto: ¿Qué químicos se utilizan?
5. Procedimiento: ¿Cómo se hace (paso a paso)?
6. Registro: Planilla diaria de control firmada.`,
    questions: generateMockQuestions(9)
  },
  {
    id: 10,
    title: "Ergonomía Laboral",
    description: "Prevención de lesiones musculoesqueléticas.",
    keyword: "POSTURA",
    duration: "7.1h",
    content: `La ergonomía busca adaptar el trabajo al hombre para prevenir lesiones crónicas.

Recomendaciones postureles:
- Al trapear: Mantener la espalda recta y no girar el tronco, usar el movimiento de las piernas.
- Al levantar carga: Doblar las rodillas, mantener la espalda recta y acercar el objeto al cuerpo.
- Pausas activas: Realizar pequeños estiramientos cada 2 horas de labor constante.
- Uso de calzado adecuado: Suela antideslizante y buen soporte plantar.`,
    questions: generateMockQuestions(10)
  },
  {
    id: 11,
    title: "Derechos y Obligaciones",
    description: "Profundización en el concepto de Trabajo Decente.",
    keyword: "DERECHOS",
    duration: "7.1h",
    content: `El Trabajo Decente es esencial para el desarrollo personal y profesional.

Marco Ético y Legal:
- Derechos: Cobro de haberes en término, aportes jubilatorios, cobertura de salud (Obra Social), licencias por enfermedad o descanso.
- Obligaciones: Honestidad, cuidado de los recursos públicos, trato respetuoso a directivos, docentes y alumnos, cumplimiento de órdenes directas vinculadas a la tarea.`,
    questions: generateMockQuestions(11)
  },
  {
    id: 12,
    title: "Manejo de Residuos",
    description: "Clasificación y disposición final de desechos.",
    keyword: "RESIDUOS",
    duration: "7.1h",
    content: `La correcta separación de residuos en origen facilita el reciclado y evita focos infecciosos.

Clasificación en Escuelas:
- Bolsa Verde: Secos y reciclables (cartón, papel, plástico limpio).
- Bolsa Negra: Húmedos y restos no reciclables.
- Residuos Especiales: Pilas o tubos fluorescentes (gestión diferenciada).
- Precaución: Nunca comprimir las bolsas con las manos para evitar pinchazos con agujas o cortes con vidrios.`,
    questions: generateMockQuestions(12)
  },
  {
    id: 13,
    title: "Práctica Profesionalizante",
    description: "Simulacros y ejercicios en condiciones reales.",
    keyword: "PRACTICA",
    duration: "7.1h",
    content: `La formación no solo es teórica, sino procedimental.

Ejercicios de aplicación:
- Simulación de derrame químico: Cómo proceder al cercado y limpieza segura.
- Preparación de disoluciones de lavandina (ppm - partes por millón).
- Auditoría cruzada: Un compañero revisa la limpieza de un área simulada utilizando un check-list de bioseguridad.`,
    questions: generateMockQuestions(13)
  },
  {
    id: 14,
    title: "Evaluación Final",
    description: "Integración de conceptos técnicos y legales.",
    keyword: "EXAMEN",
    duration: "7.7h",
    content: `El examen final integra todos los saberes aprendidos durante las 100 horas cátedra.

Requisitos de aprobación:
- Demostrar precisión en la identificación de símbolos de peligrosidad.
- Capacidad para elaborar un plan de limpieza estandarizado coherente.
- Aplicación de normas de bioseguridad sin errores críticos.
- Conocimiento sólido del marco legal Ley 24557 y Estatuto/Reglamento.`,
    questions: generateMockQuestions(14)
  }
];
