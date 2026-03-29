export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Legislación' | 'Química' | 'Técnica' | 'Salud';
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "ANMAT",
    definition: "Administración Nacional de Medicamentos, Alimentos y Tecnología Médica. Es el organismo encargado de aprobar y regular los productos de limpieza y desinfección en Argentina.",
    category: "Legislación"
  },
  {
    term: "EPP",
    definition: "Elementos de Protección Personal. Equipamiento que debe utilizar el auxiliar (guantes, delantal, antiparras, barbijo) para prevenir accidentes y enfermedades.",
    category: "Salud"
  },
  {
    term: "ART",
    definition: "Aseguradora de Riesgos del Trabajo. Entidad encargada de brindar prestaciones médicas y dinerarias ante accidentes laborales o enfermedades profesionales.",
    category: "Legislación"
  },
  {
    term: "SRT",
    definition: "Superintendencia de Riesgos del Trabajo. Organismo estatal que supervisa el cumplimiento de las normas de salud y seguridad laboral.",
    category: "Legislación"
  },
  {
    term: "In Itinere",
    definition: "Accidente ocurrido en el trayecto directo entre el domicilio del trabajador y el lugar de trabajo, o viceversa.",
    category: "Legislación"
  },
  {
    term: "PPM",
    definition: "Partes Por Millón. Unidad de medida para expresar la concentración de una sustancia (ej. el cloro en el agua de limpieza).",
    category: "Química"
  },
  {
    term: "Bioseguridad",
    definition: "Conjunto de medidas preventivas orientadas a proteger la salud y seguridad del personal auxiliar y la comunidad educativa frente a riesgos biológicos, físicos y químicos.",
    category: "Salud"
  },
  {
    term: "Aero-dispersión",
    definition: "Transporte y dispersión de gérmenes por el aire al realizar tareas como el barrido en seco o al sacudir cortinas y alfombras.",
    category: "Técnica"
  },
  {
    term: "Contaminación Cruzada",
    definition: "Transferencia de microorganismos de una superficie o alimento contaminado a uno limpio a través de manos, trapos o utensilios sucios.",
    category: "Salud"
  },
  {
    term: "Poder Residual",
    definition: "Capacidad de un desinfectante de seguir eliminando microorganismos durante un tiempo prolongado después de su aplicación.",
    category: "Química"
  },
  {
    term: "pH",
    definition: "Medida del grado de acidez o alcalinidad de una solución química. Un pH 7 es neutro; menor es ácido y mayor es alcalino.",
    category: "Química"
  },
  {
    term: "Hoja de Seguridad (MSDS)",
    definition: "Documento técnico que detalla la composición, riesgos, manejo y primeros auxilios de un producto químico.",
    category: "Química"
  },
  {
    term: "SGA",
    definition: "Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos. Estandariza los pictogramas de riesgo a nivel mundial.",
    category: "Química"
  },
  {
    term: "GIRSU",
    definition: "Gestión Integral de Residuos Sólidos Urbanos. Conjunto de etapas para recolectar, transportar y tratar los residuos escolares de forma ambientalmente segura.",
    category: "Legislación"
  },
  {
    term: "ETA",
    definition: "Enfermedades Transmitidas por Alimentos. Infecciones o intoxicaciones causadas por el consumo de agua o comida contaminada.",
    category: "Salud"
  },
  {
    term: "PEPS / FEFO",
    definition: "Sistema de gestión de stocks: Primero en Entrar, Primero en Salir / Primero en Vencer, Primero en Salir. Clave para la seguridad alimentaria en comedores.",
    category: "Técnica"
  },
  {
    term: "Sanitización",
    definition: "Proceso que reduce el número de microorganismos a un nivel seguro para la salud pública pero que no los elimina totalmente.",
    category: "Técnica"
  },
  {
    term: "Desinfección",
    definition: "Uso de agentes químicos para destruir la mayoría de los microorganismos patógenos en superficies inanimadas.",
    category: "Técnica"
  },
  {
    term: "Esterilización",
    definition: "Proceso de destrucción de todas las formas de vida microbiana, incluyendo las esporas bacterianas más resistentes.",
    category: "Técnica"
  },
  {
    term: "Ergonomía",
    definition: "Disciplina que estudia cómo adaptar las condiciones de trabajo a las características físicas del trabajador para prevenir lesiones.",
    category: "Salud"
  },
  {
    term: "Bipedestación",
    definition: "Permanecer de pie de forma prolongada. Es un factor de riesgo para trastornos circulatorios en el personal auxiliar.",
    category: "Salud"
  },
  {
    term: "Círculo de Sinner",
    definition: "Combinación de 4 factores para una limpieza efectiva: Acción Química, Acción Mecánica, Tiempo y Temperatura.",
    category: "Técnica"
  }
];
