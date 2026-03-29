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
  image?: string;
  icon: string;
}

export const COURSE_INFO = {
  title: "Curso de Formación Profesional: Limpieza Institucional",
  instructor: "Maricel Gauna",
  hours: "100 Horas Cátedra",
  institution: "Capacitación Profesional",
  description: "Este curso brinda conocimientos profundos sobre bioseguridad, legislación laboral y técnicas avanzadas de desinfección en el ámbito escolar y público."
};

const getQuestionsForClass = (classId: number): Question[] => {
  const allClassQuestions: Record<number, Question[]> = {
    1: [
      { id: 1, question: "¿Cuál es la definición técnica de bioseguridad?", options: ["Un método de barrido rápido", "Medidas preventivas para controlar riesgos de agentes biológicos, físicos o químicos", "Uso solo de guantes", "Limpiar cuando hay inspección"], correctAnswerIndex: 1 },
      { id: 2, question: "¿Qué implica el principio de 'Universalidad'?", options: ["Limpiar todo el universo", "Considerar a toda persona como potencial portador de infección", "Usar el mismo trapo para todo", "No usar protección"], correctAnswerIndex: 1 },
      { id: 3, question: "¿Cuál es una barrera física de protección?", options: ["Jabón neutro", "Guantes, barbijos y antiparras", "Detergente enzimático", "Lavandina"], correctAnswerIndex: 1 },
      { id: 4, question: "¿Qué busca mitigar el auxiliar ante un riesgo?", options: ["El cansancio", "Prevenir enfermedades en la comunidad educativa", "El costo de insumos", "La cantidad de alumnos"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Qué es un riesgo biológico?", options: ["Un piso encerado", "Virus, bacterias y hongos", "Un cable con corriente", "Un mueble pesado"], correctAnswerIndex: 1 },
      { id: 6, question: "¿Cuándo se deben usar los EPP?", options: ["Solo ante el directivo", "Siempre, según la tarea y el riesgo evaluado", "Nunca", "Solo los días lunes"], correctAnswerIndex: 1 },
      { id: 7, question: "¿Cuál es la norma regulatoria de Riesgos del Trabajo?", options: ["Ley de Tránsito", "Ley 24.557", "Ley de Contrato de Trabajo", "Estatuto del Docente"], correctAnswerIndex: 1 },
      { id: 8, question: "¿Qué es un punto crítico de higiene?", options: ["El techo del gimnasio", "Baños, picaportes y superficies de contacto frecuente", "El patio de juegos", "La vereda"], correctAnswerIndex: 1 },
      { id: 9, question: "¿Por qué NO se deben mezclar productos químicos?", options: ["Porque salen caros", "Porque pueden liberar gases tóxicos letales", "Porque limpian menos", "Porque ensucian el balde"], correctAnswerIndex: 1 },
      { id: 10, question: "¿Qué protocolo se sigue ante un derrame biológico?", options: ["Pasar el trapo de piso común", "Señalizar, usar EPP y desinfectar con técnica específica", "Ignorarlo", "Pedirle a un alumno que limpie"], correctAnswerIndex: 1 },
      { id: 11, question: "¿Cuál es el tiempo mínimo recomendado para el lavado de manos?", options: ["5 segundos", "40 a 60 segundos", "10 minutos", "No es necesario"], correctAnswerIndex: 1 },
      { id: 12, question: "¿Qué es un riesgo físico?", options: ["Un virus", "Caídas, golpes o cortes", "Inhalación de vapores", "Agitación"], correctAnswerIndex: 1 },
      { id: 13, question: "¿Qué significa 'flujo de circulación'?", options: ["Girar en el lugar", "Movimiento de personas que debe evitar cruces entre zonas limpias y sucias", "Correr por los pasillos", "Hacer fila"], correctAnswerIndex: 1 },
      { id: 14, question: "¿Qué es una barrera química?", options: ["Un delantal", "Alcohol al 70%, lavandina y otros desinfectantes", "Un barbijo N95", "Un casco"], correctAnswerIndex: 1 },
      { id: 15, question: "¿Quién supervisa la bioseguridad en el CFP?", options: ["Solo el portero", "La instructora y el personal capacitado", "Los inspectores de tránsito", "Nadie"], correctAnswerIndex: 1 },
      { id: 16, question: "¿Cuál es el objetivo final de esta formación?", options: ["Pintar la escuela", "Capacitar al auxiliar como profesional de la higiene institucional", "Vender productos de limpieza", "Aprender a cocinar"], correctAnswerIndex: 1 },
      { id: 17, question: "¿Qué es la contaminación cruzada?", options: ["Mezclar agua fría con caliente", "Llevar gérmenes de un lugar contaminado a uno limpio", "Limpiar un aula de punta a punta", "Usar ropa de marca"], correctAnswerIndex: 1 },
      { id: 18, question: "¿El auxiliar debe intervenir ante fallas de bioseguridad?", options: ["No, no es su área", "Sí, para garantizar un entorno seguro", "Solo si le pagan extra", "Si tiene tiempo"], correctAnswerIndex: 1 },
      { id: 19, question: "¿Qué es la 'zona de peligro' en alimentos?", options: ["El patio", "Temperaturas entre 5°C y 60°C", "La calle", "El sótano"], correctAnswerIndex: 1 },
      { id: 20, question: "¿Cuál es el rol del personal auxiliar según Res. 299/11?", options: ["Solo abrir la puerta", "Garantizar la higiene y el orden del establecimiento", "Enseñar matemáticas", "Ninguna"], correctAnswerIndex: 1 }
    ]
  };

  const questions: Question[] = [];
  const baseQuestions = allClassQuestions[1] || [];
  
  for (let i = 0; i < 20; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    questions.push({
      id: i + 1,
      question: `[Clase ${classId}] ${base.question}`,
      options: base.options,
      correctAnswerIndex: base.correctAnswerIndex
    });
  }
  return questions;
};

export const CLASSES: ClassData[] = [
  {
    id: 1,
    title: "Sistemas de Bioseguridad Institucional",
    description: "Manual completo de prevención y control de infecciones en ámbitos públicos.",
    keyword: "INICIO",
    duration: "7.1h",
    icon: "shield",
    content: `BIENVENIDA AL MÓDULO I: BIOSEGURIDAD PROFESIONAL

La bioseguridad es una disciplina técnica y ética. Su objetivo es la prevención de accidentes y la protección de la salud de quienes habitamos la escuela.

1. LOS TRES PILARES DE LA BIOSEGURIDAD:
- Universalidad: Se asume que toda persona o fluido es potencialmente infectante. No se discrimina por sector o síntoma aparente.
- Barreras de Protección: Elementos que impiden el contacto físico o químico directo. Incluye EPP (guantes de nitrilo, barbijos tricapa o N95, antiparras con ventilación lateral) y barreras químicas (biocidas autorizados por ANMAT).
- Eliminación de Desechos: Clasificación y disposición final segura de materiales utilizados.

2. CADENA EPIDEMIOLÓGICA EN LA ESCUELA:
Para que ocurra una infección deben existir:
- Agente causal: El virus o bacteria.
- Puerta de entrada: Boca, nariz, ojos o piel lesionada.
- Mecanismo de transmisión: Contacto directo o indirecto (picaportes, teclados).

3. PROTOCOLOS DE INTERVENCIÓN DEL AUXILIAR:
- Delimitación del área: Ante un derrame, lo primero es aislar el espacio para que los niños no transiten.
- Higiene Respiratoria: Promover el uso de pañuelos descartables y el pliegue del codo.
- Ventilación Cruzada: Mantener ventanas abiertas 5cm de cada lado para asegurar la renovación constante del aire, incluso en invierno.`,
    questions: getQuestionsForClass(1)
  },
  {
    id: 2,
    title: "Sanitización: Teoría y Práctica",
    description: "Diferenciación científica entre procesos de higiene y desinfección.",
    keyword: "LIMPIEZA",
    duration: "7.1h",
    icon: "brush",
    content: `EL ARTE DE LA SANITIZACIÓN PROFESIONAL

Un ambiente 'limpio' no es necesariamente un ambiente 'seguro'. Debemos manejar los términos con precisión quirúrgica.

1. EL PROCESO DE LIMPIEZA (THE CLEANING PROCESS):
Es la remoción física de la suciedad mediante el uso de:
- Energía Química: El detergente (rompe la tensión superficial de la grasa).
- Energía Térmica: Agua caliente (facilita la disolución de materia orgánica).
- Energía Mecánica: Fricción con trapo, cepillo o mopa.
- Tiempo: Dejar actuar el producto.

2. DESINFECCIÓN DE SUPERFICIES:
Es el proceso de eliminación de microorganismos.
- Desinfectantes de nivel intermedio: Solución de lavandina (500 ppm para superficies comunes, 1000 ppm para baños).
- Alcohol al 70%: Ideal para dispositivos electrónicos (teclados, mouses) y superficies pequeñas de metal.
- Amonios Cuaternarios: Última generación de desinfectantes, de baja toxicidad y alto poder residual.

3. DIFERENCIAS CRÍTICAS:
- Limpieza: Saca la mugre.
- Desinfección: Mata los bichos.
- Sanitización: Baja la carga microbiana a niveles seguros (proceso intermedio).
- Esterilización: Elimina TODO (incluyendo esporas).`,
    questions: getQuestionsForClass(2)
  },
  {
    id: 3,
    title: "Química Aplicada y Toxicología",
    description: "Manejo de reactivos y prevención de intoxicaciones letales.",
    keyword: "QUIMICA",
    duration: "7.1h",
    icon: "flask",
    content: `QUÍMICA SEGURA PARA EL AUXILIAR

La manipulación de químicos de limpieza es una de las tareas de mayor riesgo para el auxiliar. La Instructora Maricel Gauna enfatiza la prevención de riesgos invisibles.

1. RIESGOS ESPECÍFICOS DE LA LAVANDINA (HIPOCLORITO DE SODIO):
- Es corrosiva para metales y piel.
- Se inactiva con la luz solar y el calor (debe guardarse a la sombra).
- Se degrada en 24hs (la solución debe prepararse cada mañana).

2. EL PELIGRO DE LOS VAPORES:
Las mezclas indebidas generan gases que pueden causar incapacidad pulmonar permanente o muerte. 
- Mecla con Ácidos: Produce Gas Cloro (utilizado como arma química).
- Mezcla con Amoníaco: Produce Tricloramina (irritante extremo de mucosas).

3. SEGURIDAD EN EL TRASVASE:
- Nunca utilizar envases de alimentos.
- Rotular con nombre, fecha y concentración.
- Usar siempre embudos de material resistente.
- Almacenar a baja altura para evitar caídas de bidones sobre la cabeza.`,
    questions: getQuestionsForClass(3)
  },
  {
    id: 4,
    title: "Derechos y Seguridad Social",
    description: "Análisis integral de la Ley 24.557 y el sistema de ART.",
    keyword: "LEY24557",
    duration: "7.1h",
    icon: "scale",
    content: `SISTEMA DE RIESGOS DEL TRABAJO (ART)

El auxiliar debe conocer sus derechos para poder exigirlos y sus obligaciones para estar protegido legalmente.

1. ACCIDENTE IN ITINERE (PROFUNDIZACIÓN):
Cubre el trayecto directo entre casa-trabajo y trabajo-casa. 
- No se admite desvío para compras personales o trámites.
- Se debe declarar el domicilio real y cualquier cambio de ruta habitual (ej: por obras viales).

2. ENFERMEDADES PROFESIONALES (LISTADO):
Solo se consideran aquellas incluidas en el listado del Decreto 658/96. Las más comunes en limpieza son:
- Hipoacusia: Pérdida auditiva por ruidos de máquinas.
- Dermatitis: Alergias por contacto con químicos sin guantes.
- Várices y lumbago: Por bipedestación o carga excesiva.

3. PRESTACIONES OBLIGATORIAS:
La ART debe pagar: Médico, farmacia, prótesis, kinesiología, sueldo íntegro durante la licencia, y transporte al centro médico.`,
    questions: getQuestionsForClass(4)
  },
  {
    id: 5,
    title: "Reglamento General (Res. 299/11)",
    description: "Derechos y obligaciones del auxiliar en el sistema educativo.",
    keyword: "REGLAMENTO",
    duration: "7.1h",
    icon: "book",
    content: `REGLAMENTO GENERAL DE INSTITUCIONES EDUCATIVAS

Como trabajador de la educación, el auxiliar debe comprender la jerarquía y el marco de acción.

1. ARTÍCULO 95 (DEBERES):
- Apertura y cierre del edificio: Responsabilidad civil sobre la seguridad física del inmueble.
- Higiene Permanente: No es solo al llegar o irse, es mantener el orden durante toda la jornada.
- Control de Stock: Llevar inventario de baldes, mopas y químicos para evitar faltantes.

2. CUIDADO DE LOS ALUMNOS:
El auxiliar es un adulto referente. Ante un niño herido, no debe aplicar medicación (prohibido por ley), solo avisar al docente y directivo para llamar al servicio de emergencias.

3. RELACIÓN LABORAL Y ÉTICA:
El auxiliar pertenece a la Dirección General de Cultura y Educación (DGCE). Su trato con padres y alumnos debe ser siempre formal, respetuoso y facilitador de la tarea pedagógica.`,
    questions: getQuestionsForClass(5)
  },
  {
    id: 6,
    title: "Seguridad Alimentaria y Nutrición",
    description: "Prevención de ETA y gestión de comedores escolares.",
    keyword: "ALIMENTOS",
    duration: "7.1h",
    icon: "utensils",
    content: `MANIPULACIÓN SEGURA DE ALIMENTOS EN LA ESCUELA

La salud de los niños depende directamente de la calidad de la higiene en la cocina y el comedor.

1. CONTAMINACIÓN CRUZADA (DEFINICIÓN PROFUNDA):
Es el transporte de bacterias de una zona contaminada (ej. pollo crudo o trapo de piso) a una zona limpia o alimento listo para consumir (ej. ensalada).
- Cruzada Directa: Alimento toca alimento.
- Cruzada Indirecta: Usar la misma tabla de picar o el mismo cuchillo sin lavar entre tareas.

2. ALMACENAMIENTO DE ALIMENTOS (PEPS):
Sistema FEFO/PEPS: 'Lo Primero que Vence, es lo Primero que Sale'.
- Nunca apoyar cajones de verduras en el piso (atrae roedores y cucarachas).
- Guardar químicos en una habitación SEPARADA de la comida.

3. EL LAVADO DE MANOS (TÉCNICA DE MARICEL GAUNA):
- Mojar, enjabonar hasta el codo, frotar palmas, dorsos e interdigitales por 40 segundos.
- Enjuagar, secar con papel descartable y USAR EL PAPEL para cerrar la canilla para no re-contaminarse.`,
    questions: getQuestionsForClass(6)
  },
  {
    id: 7,
    title: "Riesgos Físicos y Señaléctica",
    description: "Prevención de caídas, incendios y señalización de seguridad.",
    keyword: "SEGURIDAD",
    duration: "7.1h",
    icon: "alert-triangle",
    content: `MAPA DE RIESGOS Y SEÑALIZACIÓN

Identificar el peligro antes de que se convierta en accidente es la base de la Higiene y Seguridad Laboral.

1. RIESGOS ELÉCTRICOS:
- Nunca usar máquinas de limpieza (enceradoras/aspiradoras) descalzo o sobre piso mojado.
- Verificar que los cables no tengan cortes ni enchufes quemados.
- Si una máquina 'patea', informar de inmediato y dejar de usarla (posible fuga a tierra).

2. SEÑALÉTICA OBLIGATORIA:
- Cartelería Amarilla (Advertencia): 'Cuidado Piso Mojado', 'Riesgo de Caída'.
- Cartelería Roja (Prohibición/Fuego): Ubicación de matafuegos, salida de emergencia.
- Cartelería Azul (Obligación): 'Uso obligatorio de Guantes'.

3. RIESGO DE INCENDIO:
El auxiliar debe saber usar un extintor:
- Retirar el precinto.
- Apuntar a la BASE de la llama.
- Apretar el gatillo con movimientos de abanico.`,
    questions: getQuestionsForClass(7)
  },
  {
    id: 8,
    title: "Desinfección de Áreas Críticas",
    description: "Protocolos para Sanitarios, Cocinas y Laboratorios.",
    keyword: "TECNICAS",
    duration: "7.1h",
    icon: "droplets",
    content: `DESINFECCIÓN DE ALTO IMPACTO

Cada área de la escuela tiene una técnica y un tiempo de desinfección diferente.

1. SANITARIOS (ZONA ROJA):
Es el área de mayor riesgo infeccioso. 
- Técnica: Limpiar de lo más limpio (espejos/bachas) a lo más sucio (inodoros/pisos).
- Lavandina: Se usa una concentración mayor (1 parte en 49 de agua para desinfección profunda diaria).
- Ventilación: Imprescindible para evitar la acumulación de vapores de orina y amoníaco.

2. AULAS (ZONA VERDE):
Superficies de alta fricción: Picaportes, bordes de bancos, teclados. Deben desinfectarse después de cada recreo con Alcohol al 70%.

3. LABORES DE BARREDO:
PROHIBIDO el barrido en seco en escuelas. Levanta polvo que transporta virus y bacterias. Se debe usar barrido húmedo (con mopa humedecida en solución desinfectante).`,
    questions: getQuestionsForClass(8)
  },
  {
    id: 9,
    title: "Diseño de Planes de Limpieza (L+D)",
    description: "Metodología para estandarizar la higiene de toda la institución.",
    keyword: "PLANES",
    duration: "7.1h",
    icon: "list-checks",
    content: `ELABORACIÓN DE UN PLAN L+D (LIMPIEZA Y DESINFECCIÓN)

La limpieza profesional no se improvisa, se planifica. Maricel Gauna propone el uso de planillas de control.

1. CRONOGRAMA DE TAREAS:
- Diarias: Vaciado de cestos, limpieza de baños, barrido húmedo de pasillos.
- Semanales: Limpieza de vidrios interiores, techos (telarañas), remoción de sarro en grifería.
- Mensuales: Limpieza de tanques de agua, desinfección profunda de depósitos.

2. LOGÍSTICA DE INSUMOS:
Calcular cuántos litros de desinfectante se necesitan por mes para evitar compras de emergencia que suelen ser más caras o de menor calidad.

3. AUDITORÍA Y REGISTRO:
Si no está anotado, no se hizo. Cada aula debe tener una planilla de control detrás de la puerta donde el auxiliar firme después de limpiar. Esto protege al trabajador ante reclamos de falta de higiene.`,
    questions: getQuestionsForClass(9)
  },
  {
    id: 10,
    title: "Anatomía del Movimiento (Ergonomía)",
    description: "Cómo proteger la espalda y articulaciones durante la jornada.",
    keyword: "POSTURA",
    duration: "7.1h",
    icon: "activity",
    content: `ERGONOMÍA APLICADA AL TRABAJO AUXILIAR

El cuerpo humano no está diseñado para el esfuerzo repetitivo sin técnica. Aprender biomecánica previene el retiro temprano por invalidez.

1. LA COLUMNA VERTEBRAL:
Al curvar la espalda para levantar un tacho, la presión sobre los discos intervertebrales se triplica. 
- Técnica Correcta: Espalda recta, piernas dobladas. El esfuerzo lo hacen los músculos de los muslos (cuádriceps), no la cintura.

2. EL MANGO DE LA MOPA/ESCOBILLÓN:
Debe llegar a la altura del hombro del auxiliar. Si es muy corto, obliga a encorvarse. Si es muy largo, causa tensión en las cervicales.

3. MOVIMIENTOS REPETITIVOS:
Al trapear, realizar movimientos en 'S' o en '8', moviendo las piernas de lado a lado. Evitar girar el tronco superior dejando las piernas fijas, ya que esto 'atornilla' las vértebras lumbares.`,
    questions: getQuestionsForClass(10)
  },
  {
    id: 11,
    title: "Trabajo Decente y Ética Civil",
    description: "Humanización de la tarea y derechos constitucionales.",
    keyword: "DERECHOS",
    duration: "7.1h",
    icon: "users",
    content: `TRABAJO DECENTE Y ÉTICA PROFESIONAL

El auxiliar institucional es un pilar de la democracia y la educación pública.

1. EL CONCEPTO DE TRABAJO DECENTE (OIT):
No se trata solo de cobrar un sueldo, sino de trabajar en un ambiente donde se respete la integridad física, mental y moral. Incluye la equidad de género y la no discriminación por ninguna causa.

2. DERECHOS CONSTITUCIONALES:
- Art. 14 bis de la Constitución Nacional: 'El trabajo en sus diversas formas gozará de la protección de las leyes, las que asegurarán al trabajador: condiciones dignas y equitativas de labor...'.

3. EL AUXILIAR EN LA COMUNIDAD:
Su conducta dentro y fuera de la escuela afecta la imagen de la institución. La confidencialidad sobre lo que sucede en la escuela (problemas de alumnos o docentes) es una obligación ética ineludible.`,
    questions: getQuestionsForClass(11)
  },
  {
    id: 12,
    title: "Gestión GIRSU Escolar",
    description: "Tratamiento de residuos desde una perspectiva ambiental.",
    keyword: "RESIDUOS",
    duration: "7.1h",
    icon: "recycle",
    content: `GESTIÓN INTEGRAL DE RESIDUOS SÓLIDOS URBANOS (GIRSU)

La escuela debe ser el primer ejemplo de cuidado ambiental para los niños.

1. LA REGLA DE LAS 3R:
- Reducir: Evitar el uso excesivo de papel o plástico.
- Reutilizar: Darle nuevos usos a envases de limpieza (siempre con nuevo rotulado).
- Reciclar: Clasificar en origen para que los materiales vuelvan a la industria.

2. RESIDUOS PATOGÉNICOS EN LA ESCUELA:
Si bien la escuela no es un hospital, genera residuos de riesgo (ej: gasas con sangre, toallas femeninas). 
- Manipulación: Usar siempre guantes. Colocar en bolsas rojas si el reglamento local lo exige, o en bolsas negras bien selladas y retiradas diariamente. Nunca comprimir las bolsas con los pies o manos.

3. EL AUXILIAR COMO GESTOR AMBIENTAL:
Fomentar que los alumnos dejen el aula limpia de papeles ayuda a que la tarea del auxiliar sea más eficiente y la escuela más saludable.`,
    questions: getQuestionsForClass(12)
  },
  {
    id: 13,
    title: "Laboratorio de Práctica Real",
    description: "Análisis de casos críticos y simulacros de contingencia.",
    keyword: "PRACTICA",
    duration: "7.1h",
    icon: "microscope",
    content: `SIMULACROS Y TALLER DE PRÁCTICA PROFESIONAL

Este módulo integra los conocimientos teóricos en situaciones de alta presión.

1. SIMULACRO DE VÓMITO/FLUIDOS:
Procedimiento Paso a Paso:
- Colocar cartel de 'Área Restringida'.
- Colocarse EPP (Guantes, barbijo, protección ocular).
- Cubrir el fluido con material absorbente (ej. aserrín o arena) por 5 minutos.
- Recoger con pala y colocar en bolsa de residuos.
- Limpiar con detergente y desinfectar con lavandina al 10%.

2. SIMULACRO DE MEZCLA QUÍMICA ACCIDENTAL:
- Inmediata evacuación y apertura de todas las ventanas.
- NO intentar neutralizar con otros químicos (puede empeorar la reacción).
- Llamar a bomberos o toxicología si el olor es persistente.

3. PRÁCTICA DE CARGA:
Simular el movimiento de 10 bancos de un aula a otra aplicando las leyes de ergonomía aprendidas.`,
    questions: getQuestionsForClass(13)
  },
  {
    id: 14,
    title: "Soberanía Laboral y Perfil del Egresado",
    description: "Cierre, integración de saberes y ética de la profesión.",
    keyword: "EXAMEN",
    duration: "7.7h",
    icon: "graduation-cap",
    content: `CIERRE Y EVALUACIÓN FINAL SUMATIVA

Usted ha completado el ciclo de 100 horas de formación. Este cierre es un nuevo comienzo como profesional de la higiene.

1. INTEGRACIÓN DE SABERES:
Un auxiliar profesional sabe que la bioseguridad (Clase 1), la química (Clase 3) y la ergonomía (Clase 10) no son temas aislados, sino que ocurren al mismo tiempo en cada minuto de su jornada laboral.

2. EL PERFIL DEL EGRESADO:
- Capacidad crítica para identificar peligros.
- Compromiso con la salud de la comunidad.
- Manejo solvente de la normativa legal bonaerense.
- Respeto por los derechos propios y ajenos.

3. PALABRAS FINALES DE MARICEL GAUNA:
'Su trabajo es la base invisible sobre la que se apoya todo el sistema educativo. Una escuela limpia es una escuela que cuida, y usted es el guardián de ese cuidado'.`,
    questions: getQuestionsForClass(14)
  }
];
