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
      { id: 1, question: "¿Cuál es el objetivo primordial de la bioseguridad en instituciones?", options: ["Maximizar la velocidad de limpieza diaria", "Controlar factores de riesgo procedentes de agentes biológicos, físicos o químicos", "Reducir el gasto en insumos de limpieza", "Cumplir formalmente con la normativa sin aplicarla"], correctAnswerIndex: 1 },
      { id: 2, question: "El principio de 'Universalidad' establece que:", options: ["Solo se deben proteger los alumnos con síntomas", "Toda persona o fluido debe considerarse potencialmente infectante", "La limpieza solo es necesaria en el turno mañana", "Las barreras solo se usan en hospitales"], correctAnswerIndex: 1 },
      { id: 3, question: "¿Cuál de estos es un Elemento de Protección Personal (EPP) de barrera física?", options: ["Detergente neutro y agua caliente", "Guantes de nitrilo, barbijos tricapa y antiparras", "Hipoclorito de sodio al 10%", "Cartel de advertencia de piso mojado"], correctAnswerIndex: 1 },
      { id: 4, question: "Ante un derrame de fluidos biológicos, ¿cuál es la primera acción?", options: ["Pasar el trapo de piso común inmediatamente", "Señalizar y restringir el área para evitar tránsito de alumnos", "Llamar a los bomberos", "Esperar a que el fluido se seque solo"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Qué tipo de riesgo representa un cable en mal estado en una enceradora?", options: ["Riesgo Biológico", "Riesgo Físico (Eléctrico)", "Riesgo Químico", "Riesgo Ergonómico"], correctAnswerIndex: 1 },
      { id: 6, question: "La 'Ventilación Cruzada' se considera efectiva cuando:", options: ["Se abren todas las puertas del pasillo", "Se asegura una renovación constante del aire con aperturas opuestas", "Se usa el aire acondicionado en modo ventilación", "Se limpian las ventanas una vez por mes"], correctAnswerIndex: 1 },
      { id: 7, question: "¿Qué es la 'Contaminación Cruzada'?", options: ["Mezclar dos tipos de detergentes distintos", "Transporte de patógenos de una zona sucia a una zona limpia", "Cruzar el patio durante el recreo", "Usar ropa de calle en el trabajo"], correctAnswerIndex: 1 },
      { id: 8, question: "Un 'Punto Crítico' se define como:", options: ["Cualquier lugar difícil de barrer", "Zonas de contacto frecuente como picaportes, baños y teclados", "El techo del establecimiento", "La zona de carga de bidones"], correctAnswerIndex: 1 },
      { id: 9, question: "El lavado de manos profesional debe durar:", options: ["Menos de 10 segundos", "Entre 40 y 60 segundos con técnica completa", "Solo lo que dure mojar las palmas", "Solo es necesario al entrar a la escuela"], correctAnswerIndex: 1 },
      { id: 10, question: "Las barreras químicas incluyen el uso de:", options: ["Guantes de goma", "Biocidas y desinfectantes autorizados (ANMAT)", "Botas de seguridad", "Mascarillas N95"], correctAnswerIndex: 1 },
      { id: 11, question: "La Ley 24.557 regula:", options: ["El diseño curricular", "Los Riesgos del Trabajo y su prevención", "El horario de los alumnos", "La infraestructura de las escuelas privadas"], correctAnswerIndex: 1 },
      { id: 12, question: "¿Cuál es un riesgo biológico común en las escuelas?", options: ["Caídas por escaleras", "Virus de transmisión respiratoria y bacterias entéricas", "Inhalación de vapores clorados", "Sobreesfuerzo por levantar pupitres"], correctAnswerIndex: 1 },
      { id: 13, question: "El auxiliar interviene en un protocolo de bioseguridad para:", options: ["Solo para que la escuela se vea linda", "Garantizar un entorno seguro para toda la comunidad", "Ahorrar trabajo a los docentes", "Evitar el desgaste de los pisos"], correctAnswerIndex: 1 },
      { id: 14, question: "Al quitarse los guantes contaminados, se debe:", options: ["Lavarlos para reusar", "Retirarlos sin tocar la piel exterior y descartar", "Dejarlos sobre la mesada de la cocina", "Sacudirlos para quitar el polvillo"], correctAnswerIndex: 1 },
      { id: 15, question: "¿Qué significa que un desinfectante tenga 'poder residual'?", options: ["Que tiene olor fuerte", "Que continúa eliminando gérmenes después de su aplicación", "Que deja una mancha blanca", "Que es peligroso para los niños"], correctAnswerIndex: 1 },
      { id: 16, question: "La 'Higiene Respiratoria' en la escuela implica:", options: ["Limpiar los techos", "Fomentar el uso de pañuelos y cubrirse con el codo", "Usar desodorante de ambientes", "Aspirar las alfombras"], correctAnswerIndex: 1 },
      { id: 17, question: "La bioseguridad es una disciplina:", options: ["Solo para médicos", "Técnica y ética que involucra a todo el personal institucional", "Que no aplica en Argentina", "Opcional en el nivel primario"], correctAnswerIndex: 1 },
      { id: 18, question: "¿Qué se debe considerar 'fluido potencialmente infectante'?", options: ["Solo la sangre visible", "Todo fluido corporal independientemente de la persona", "Solo el agua de lluvia contaminada", "Ningún fluido es peligroso después de secarse"], correctAnswerIndex: 1 },
      { id: 19, question: "Un riesgo químico puede ser causado por:", options: ["Pisos mal encerados", "Inhalación de mezclas de lavandina con amoníaco", "Cables pelados", "Uso de trapos de diferentes colores"], correctAnswerIndex: 1 },
      { id: 20, question: "El objetivo del CFP es formar auxiliares que sean:", options: ["Solo limpiadores de superficies", "Agentes profesionales de salud e higiene institucional", "Ayudantes de cocina sin capacitación", "Personal de seguridad de accesos"], correctAnswerIndex: 1 }
    ]
  };

  const getThemeForClass = (cid: number, _idx: number) => {
    // Generate themes for question fallback
    return {
      question: `[Examen Módulo ${cid}] Sobre el procedimiento técnico detallado en el manual:`,
      options: ["Opción de riesgo incorrecta", "Procedimiento correcto según normativa", "Método rápido pero peligroso", "No aplica en el sector público"],
      correctAnswerIndex: 1
    };
  };

  if (allClassQuestions[classId]) return allClassQuestions[classId];

  const questions: Question[] = [];
  for (let i = 0; i < 20; i++) {
    const theme = getThemeForClass(classId, i);
    questions.push({
      id: i + 1,
      question: theme.question,
      options: theme.options,
      correctAnswerIndex: theme.correctAnswerIndex
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
    content: `GESTIÓN INTEGRAL DE LA BIOSEGURIDAD PROFESIONAL

Bajo la supervisión de la Instructora Maricel Gauna, el Módulo I profundiza en la bioseguridad no solo como un conjunto de reglas, sino como una cultura institucional de prevención. 

1. FUNDAMENTOS TÉCNICOS:
La bioseguridad es el sistema que integra normas y protocolos para prevenir la exposición a agentes potencialmente infecciosos o riesgos físicos y químicos. En una escuela, esto es crítico debido a la alta densidad de personas en espacios reducidos.

2. PRINCIPIOS DE UNIVERSALIDAD (PROFUNDIZACIÓN):
Cualquier fluido corporal (sangre, orina, saliva, sudor excesivo por deporte) debe ser tratado bajo el estándar de 'Potencialmente Infectante'. No se puede suponer la salud del individuo; el protocolo es ciego y universal. Esto protege al auxiliar de infecciones como Hepatitis, Gripe, o patógenos entéricos.

3. LAS BARRERAS MECÁNICAS Y QUÍMICAS:
- Barreras Físicas (EPP): El uso de guantes de nitrilo es preferible al látex por su resistencia química. Las antiparras deben tener sello lateral para evitar salpicaduras de líquidos químicos que rebotan. El barbijo debe ser tricapa quirúrgico o N95 si se trabaja en zonas de alta aero-dispersión (ej: aspirado de alfombras).
- Barreras Químicas: Se refiere a la aplicación de desinfectantes aprobados que eliminan la carga microbiana sobre superficies inertes.

4. EL CICLO DE TRANSMISIÓN ESCOLAR:
El auxiliar actúa sobre el 'Mecanismo de Transmisión'. Al limpiar un picaporte, se corta la cadena que va desde el agente causal hasta el huésped susceptible (el niño o docente).

5. PROTOCOLO DE DERRAMES CRÍTICOS:
Si ocurre un derrame (vómito u orina):
- Paso 1: Señalización inmediata con cartel amarillo. Nadie debe transitar la zona.
- Paso 2: Absorción. Se utiliza material inerte (ej. aserrín sanitario) para solidificar el fluido. NUNCA usar la mopa de pasillo directamente.
- Paso 3: Retiro y Descarte. El material se retira con pala y se coloca en bolsa de residuos patogénicos (roja) si existiera, o negra doble bien sellada.
- Paso 4: Desinfección Profunda. Aplicar solución clorada a 1000 ppm sobre el área.` ,
    questions: getQuestionsForClass(1)
  },
  {
    id: 2,
    title: "Sanitización: Teoría y Procesos Avanzados",
    description: "Diferenciación científica entre procesos de higiene y desinfección.",
    keyword: "LIMPIEZA",
    duration: "7.1h",
    icon: "brush",
    content: `METODOLOGÍA CIENTÍFICA DEL SANEAMIENTO

En este módulo, analizamos por qué 'el brillo no es sinónimo de higiene'. 

1. LA LIMPIEZA COMO PROCESO FÍSICO-QUÍMICO:
Limpiar es remover la materia orgánica (grasa, proteínas, restos celulares) e inorgánica (tierra, sales). 
- El Círculo de Sinner: Para limpiar correctamente, debemos equilibrar 4 factores: Acción Mecánica (frotado), Acción Química (detergente), Tiempo (acción del producto) y Temperatura (calor para ablandar grasas). Si reducimos uno, debemos aumentar otro (ej: si usamos agua fría, necesitamos más fricción o más químico).

2. DIFERENCIAS TÉCNICAS:
- Sanitización: Proceso que reduce los microorganismos a un nivel seguro para la salud pública pero no los elimina todos.
- Desinfección: Proceso químico que destruye la mayoría de los patógenos. Se divide en Niveles (Bajo, Intermedio, Alto). En escuelas usamos Nivel Intermedio (Hipoclorito) para superficies y Nivel Bajo para pisos.
- Esterilización: Proceso extremo que elimina toda forma de vida (esporas). No se aplica en limpieza general sino en laboratorios o quirófanos.

3. TÉCNICA DEL DOBLE BALDE Y EL DOBLE TRAPO:
Para evitar la contaminación cruzada, el auxiliar profesional utiliza dos recipientes. 
- Balde 1 (Solución Limpiadora): Agua con detergente.
- Balde 2 (Enjuague): Agua limpia.
Se sumerge el trapo en B1, se limpia, se enjuaga en B2 (quitando la suciedad recogida), y recién ahí se vuelve a meter en B1. Esto mantiene el detergente limpio durante toda la tarea.

4. BARRIDO HÚMEDO VS SECO:
En instituciones está terminantemente prohibido el barrido seco (escoba tradicional que levanta polvo). El polvo escolar es un transporte de alérgenos y ácaros. Se debe usar siempre mopa humedecida que 'atrapa' la suciedad sin dispersarla.` ,
    questions: getQuestionsForClass(2)
  },
  {
    id: 3,
    title: "Toxicología y Seguridad Química Industrial",
    description: "Manejo de reactivos y prevención de intoxicaciones letales.",
    keyword: "QUIMICA",
    duration: "7.1h",
    icon: "flask",
    content: `EL RIESGO QUÍMICO EN EL ÁMBITO AUXILIAR

Los productos de limpieza son químicos industriales. Ignorar su reactividad puede causar daños irreversibles.

1. REACCIONES PELIGROSAS (MEZCLAS PROHIBIDAS):
- Lavandina + Ácidos (Limpia-sarro/Vinagre): Libera GAS CLORO. El cloro es un gas irritante que al contacto con la humedad de los pulmones se convierte en ácido clorhídrico, causando quemaduras internas y edema pulmonar.
- Lavandina + Amoníaco: Libera CLORAMINAS. Muy irritantes para los ojos y la piel, causan asfixia temporal en lugares poco ventilados (como baños pequeños).
- Lavandina + Detergente Común: Muchos detergentes tienen componentes que anulan el cloro, haciendo que limpies pero NO desinfectes.

2. SEGURIDAD EN EL ALMACENAMIENTO:
Los químicos nunca deben estar en el suelo por riesgo de corrosión de los envases y filtraciones. Deben estar en estantes bajos (por debajo de la altura de los hombros) para evitar salpicaduras en la cara ante una caída del envase.

3. ROTULADO Y SISTEMA GLOBALMENTE ARMONIZADO (SGA):
Cada envase debe tener su pictograma:
- La Llama: Inflamable.
- La Mano Corroída: Corrosivo (quema la piel/metal).
- El Signo de Exclamación: Irritante.
NUNCA use envases de gaseosas o alimentos. Un niño puede ingerirlo pensando que es bebida.

4. PRIMEROS AUXILIOS ANTE QUÍMICOS:
- Contacto ocular: Lavar con agua corriente por 20 minutos. NO intentar neutralizar con otros líquidos.
- Inhalación: Retirar a la persona al aire libre. Llamar al centro de toxicología de inmediato.` ,
    questions: getQuestionsForClass(3)
  },
  {
    id: 4,
    title: "Derecho Laboral: Ley 24.557 y ART",
    description: "Análisis integral de la Ley de Riesgos del Trabajo.",
    keyword: "LEY24557",
    duration: "7.1h",
    icon: "scale",
    content: `PROTECCIÓN LEGAL DEL TRABAJADOR AUXILIAR

El sistema de Riesgos del Trabajo (LRT) protege al trabajador ante contingencias del oficio.

1. OBJETIVOS DE LA LEY 24.557:
Reducir la siniestralidad laboral mediante la prevención y reparar los daños derivados de accidentes y enfermedades profesionales.

2. DEFINICIÓN DE ACCIDENTE DE TRABAJO:
Todo evento súbito y violento ocurrido por causa o en ocasión del trabajo. Incluye lesiones por caídas, cortes o esfuerzos agudos.

3. EL ACCIDENTE IN ITINERE:
Es el que ocurre en el trayecto directo entre el domicilio y el lugar de trabajo. Para que la ART lo cubra:
- No debe haber interrupciones por interés personal (ej: ir al supermercado antes de ir a casa invalida el trayecto).
- Se admiten desvíos declarados (estudio, cuidado de familiares directos, otro empleo) siempre que estén avisados fehacientemente al empleador.

4. ENFERMEDADES PROFESIONALES (EP):
No todo dolor es EP. Solo se consideran aquellas incluidas en el listado del Decreto 658/96. Ejemplos en limpieza:
- Várices (por estar parado mucho tiempo).
- Hernias inguinales o de disco (por mala técnica de carga).
- Dermatitis de contacto (por no usar guantes adecuadamente).

5. OBLIGACIONES DEL TRABAJADOR:
- Denunciar el accidente de inmediato.
- Cumplir con los exámenes médicos periódicos.
- Participar en las capacitaciones obligatorias de la ART.
- USAR LOS EPP PROVISTOS. El no uso de los guantes es causa de rechazo de cobertura por parte de la aseguradora en caso de alergias.` ,
    questions: getQuestionsForClass(4)
  },
  {
    id: 5,
    title: "Reglamento General (Res. 299/11)",
    description: "Derechos y obligaciones del auxiliar en el sistema educativo.",
    keyword: "REGLAMENTO",
    duration: "7.1h",
    icon: "book",
    content: `EL ROL DEL AUXILIAR SEGÚN LA RESOLUCIÓN 299/11

Este reglamento es la 'ley orgánica' de la vida escolar en la Provincia de Buenos Aires.

1. EL AUXILIAR COMO AGENTE DEL ESTADO:
Usted no es solo un empleado de limpieza; es personal de la Dirección General de Cultura y Educación (DGCyE). Su cargo conlleva responsabilidades civiles y éticas.

2. ARTÍCULO 95 (FUNCIONES):
- Higiene: Mantener en condiciones de pulcritud el edificio, el mobiliario y las dependencias.
- Seguridad del Edificio: Controlar la apertura y cierre de accesos, luces y servicios de gas/agua.
- Colaboración: Asistir en el orden durante el ingreso y egreso de los alumnos.

3. ÉTICA Y RELACIÓN CON LA COMUNIDAD:
El auxiliar convive con menores de edad. Debe mantener un decoro ético, lenguaje adecuado y reserva profesional sobre los datos sensibles de los alumnos. Está prohibido dar medicación a los alumnos bajo ninguna circunstancia.

4. LICENCIAS Y PERMISOS:
El reglamento establece el régimen de asistencia, puntualidad y causales de justificación. El auxiliar debe conocer sus derechos para gozar de licencias por salud, estudio o causas familiares según el Estatuto del Portero (Ley 10.430).` ,
    questions: getQuestionsForClass(5)
  },
  {
    id: 6,
    title: "Seguridad Alimentaria y Inocuidad",
    description: "Prevención de ETA y gestión de comedores escolares.",
    keyword: "ALIMENTOS",
    duration: "7.1h",
    icon: "utensils",
    content: `GESTIÓN DE LA HIGIENE ALIMENTARIA (MANIPULACIÓN)

En escuelas con comedor o copa de leche, el rol del auxiliar es vital para prevenir brotes de intoxicación masiva.

1. LAS 5 CLAVES DE LA INOCUIDAD (OMS):
- Mantener la limpieza: Lavado de manos, desinfección de superficies y lucha contra plagas (insectos/roedores).
- Separar crudos de cocidos: El pollo crudo nunca debe tocar el queso o el pan. Usar tablas de colores diferenciados.
- Cocinar completamente: El centro del alimento debe alcanzar los 71°C. La carne no debe quedar rosada (riesgo de E. Coli/Síndrome Urémico Hemolítico).
- Mantener temperaturas seguras: No dejar comida a temperatura ambiente más de 2 horas. La zona de peligro es entre 5°C y 60°C.
- Agua y materias primas seguras: Lavar frutas y verduras con agua potable y gotas de lavandina si no se conoce el origen.

2. CONTAMINACIÓN CRUZADA INDIRECTA:
Es la que ocurre a través de utensilios mal lavados, trapos de cocina (fuente principal de bacterias) o las manos del manipulador. Los trapos deben ser descartables o hervirse diariamente.

3. INDUMENTARIA DEL MANIPULADOR:
Uso obligatorio de cofia (para que el pelo no caiga en la leche), delantal blanco limpio y uñas cortas sin esmalte. El esmalte se descascara y puede caer en la comida como residuo químico.` ,
    questions: getQuestionsForClass(6)
  },
  { id: 7, title: "Riesgos Físicos y Prevención de Incendios", description: "Detección de peligros y uso de extintores en escuelas.", keyword: "SEGURIDAD", duration: "7.1h", icon: "alert-triangle", content: `PREVENCIÓN DE RIESGOS EN EL AMBIENTE ESCOLAR

1. CAÍDAS AL MISMO NIVEL:
Es el accidente más frecuente. Causado por pisos mojados no señalizados, cordones de zapatillas desatados o cables sueltos. El auxiliar debe señalizar ANTES de empezar a limpiar.

2. SEÑALÉTICA DE SEGURIDAD:
- Azul: Obligación (ej: uso de guantes).
- Rojo: Prohibición o Fuego (ej: matafuego).
- Amarillo: Advertencia (ej: piso resbaladizo).
- Verde: Información/Emergencia (ej: salida de emergencia).

3. PREVENCIÓN DE INCENDIOS (EL FUEGO):
Para que haya fuego se necesitan: Combustible (papeles/muebles), Comburente (oxígeno) y Calor (fósforos/corto circuito). El matafuego más común en escuelas es el ABC (polvo químico seco). 
Técnica de uso: Quitar el seguro, apuntar a la base del fuego, apretar el gatillo y hacer zigzag.` , questions: getQuestionsForClass(7) },
  { id: 8, title: "Desinfección de Áreas Críticas Especializadas", description: "Baños, laboratorios y oficinas administrativas.", keyword: "TECNICAS", duration: "7.1h", icon: "droplets", content: `PROTOCOLOS POR ÁREAS: MAPA DE HIGIENE

1. ÁREA CRÍTICA (BAÑOS Y COMEDORES):
Requieren desinfección cada 2 horas o después de cada recreo. El inodoro se desinfecta con lavandina a 1000 ppm. Las bachas y picaportes son puntos de alta carga bacteriana.

2. ÁREA NO CRÍTICA (GIMNASIOS Y PASILLOS):
Se prioriza la limpieza mecánica y el barrido húmedo. La desinfección se realiza una vez al día al terminar la jornada.

3. ÁREA TÉCNICA (ADMINISTRACIÓN Y LABORATORIOS):
Se debe tener cuidado con los materiales inflamables y electrónicos. Las PCs no se mojan; se usa alcohol al 70% en paño SECO.

4. FLUJOS DE CIRCULACIÓN:
El auxiliar debe limpiar siempre desde lo más limpio hacia lo más sucio, y de arriba hacia abajo (techos/paredes antes que pisos).` , questions: getQuestionsForClass(8) },
  { id: 9, title: "Planificación Estratégica L+D", description: "Cronogramas de tareas y gestión de recursos.", keyword: "PLANES", duration: "7.1h", icon: "list-checks", content: `ORGANIZACIÓN PROFESIONAL DE LA TAREA

1. EL PLAN ANUAL DE LIMPIEZA:
No se puede limpiar todo todos los días. Se debe priorizar.
- Diarias: Baños, aulas, cocina, patios de recreo.
- Semanales: Vidrios, techos internos, depósitos.
- Mensuales: Limpieza de tanques, desinfección de canaletas, poda baja (si aplica).

2. GESTIÓN DE INSUMOS:
Controlar el gasto. El abuso de detergente no limpia más, solo hace más difícil el enjuague y gasta recursos del Estado.

3. REGISTROS (CHECKLIST):
Cada firma en la planilla de limpieza es una prueba legal de que el auxiliar cumplió su función. Ante un brote de gastroenteritis en la escuela, los registros de desinfección son el resguardo del personal.` , questions: getQuestionsForClass(9) },
  { id: 10, title: "Ergonomía y Cuidado de la Columna", description: "Técnicas de carga y postura para evitar invalidez.", keyword: "POSTURA", duration: "7.1h", icon: "activity", content: `EL CUERPO COMO HERRAMIENTA DE TRABAJO

1. BIOMECÁNICA DE LA COLUMNA:
La zona lumbar soporta todo el peso del tronco. Si nos doblamos sin doblar las rodillas, la presión sobre los discos intervertebrales es desproporcionada.

2. CARGA MANUAL DE PESOS:
Para levantar un bidón de 20 litros:
- Pies separados a lo ancho de hombros.
- Bajar la cadera doblando rodillas.
- Mantener la espalda recta.
- Pegar el objeto al pecho.
- Levantar usando la fuerza de las piernas.

3. ERGONOMÍA DE BARREDO Y TRAPEADO:
El mango debe ser lo suficientemente largo para no encorvarse. Se debe mover el cuerpo de forma lateral en bloque, no rotando solo la cintura. La rotación de cintura con carga es la causa número 1 de hernias de disco.` , questions: getQuestionsForClass(10) },
  { id: 11, title: "Ética, Derechos Humanos y Trabajo Decente", description: "La dimensión humana de la tarea pública.", keyword: "DERECHOS", duration: "7.1h", icon: "users", content: `VALORES EN LA FUNCIÓN PÚBLICA

1. EL TRABAJO DECENTE (OIT):
Es aquel que se realiza en condiciones de libertad, igualdad, seguridad y dignidad humana. Un auxiliar tiene derecho a un ambiente libre de violencia laboral y acoso.

2. EQUIDAD Y GÉNERO:
La limpieza no tiene género. El respeto entre compañeros y la división equitativa de tareas pesadas es fundamental para un buen clima institucional.

3. CONSTRUCCIÓN DE CIUDADANÍA:
El auxiliar educa con el ejemplo. El respeto por el alumno, el trato amable con las familias y la honestidad en el manejo de los bienes públicos (no llevarse implementos de limpieza a casa) son pilares éticos del egresado de Maricel Gauna.` , questions: getQuestionsForClass(11) },
  { id: 12, title: "Gestión Ambiental GIRSU Escolar", description: "Residuos, reciclaje y compromiso verde.", keyword: "RESIDUOS", duration: "7.1h", icon: "recycle", content: `GESTIÓN INTEGRAL DE RESIDUOS (GIRSU)

1. CLASIFICACIÓN EN ORIGEN:
- Bolsa Verde: Reciclables (Plástico seco, Cartón, Papel, Metal). Deben estar limpios y sin restos orgánicos.
- Bolsa Negra: Basura común (Restos de comida, papeles sucios, material de barrido).

2. RESIDUOS DE RIESGO SANITARIO:
Toallitas femeninas, pañales y gasas deben disponerse en bolsas resistentes, bien atadas. Nunca comprimir las bolsas con los pies, ya que puede haber elementos punzantes que atraviesen el calzado.

3. EL COMPOST ESCOLAR:
El auxiliar puede liderar el proyecto de compostaje de restos de la cocina para abonar la huerta escolar, reduciendo hasta un 40% el volumen de residuos que la escuela saca a la calle.` , questions: getQuestionsForClass(12) },
  { id: 13, title: "Laboratorio de Contingencia y Práctica", description: "Acción ante brotes, inundaciones y derrames.", keyword: "PRACTICA", duration: "7.1h", icon: "microscope", content: `ACTUACIÓN ANTE EMERGENCIAS SANITARIAS

1. CONTINGENCIA POR INUNDACIÓN:
Corte inmediato de energía. Una vez retirada el agua, se debe desinfectar con lavandina a 2000 ppm (muy concentrada) para eliminar patógenos del agua de red o cloaca.

2. BROTES INFECTOCONTAGIOSOS:
Si hay un brote de piojos o sarna, se deben limpiar profundamente las superficies textiles y ventilar al máximo. Si es gripe, se intensifica la desinfección de picaportes y teclados cada hora.

3. SIMULACRO DE EVACUACIÓN:
El auxiliar tiene un rol clave como guía de salidas. Debe conocer los puntos de reunión y asegurarse de que los baños y depósitos estén vacíos antes de salir.` , questions: getQuestionsForClass(13) },
  { id: 14, title: "Soberanía Laboral y Perfil del Egresado Final", description: "Cierre, integración de saberes y examen sumativo.", keyword: "EXAMEN", duration: "7.7h", icon: "graduation-cap", content: `SÍNTESIS PROFESIONAL Y FUTURO LABORAL

1. EL AUXILIAR COMO PROFESIONAL DE SALUD:
Al finalizar este curso, usted no solo sabe limpiar; usted sabe cuidar la vida. Su perfil es el de un técnico en higiene institucional que entiende la ley, la química y la biología aplicada.

2. PREPARACIÓN PARA EL ACCESO:
Este curso otorga puntaje para el listado oficial de aspirantes a auxiliares de la Provincia de Buenos Aires. La formación continua es la clave para la estabilidad laboral.

3. DESPEDIDA DE LA INSTRUCTORA:
'Confío en que aplicarán cada gramo de este conocimiento. No se conformen con pasar el trapo; transformen su escuela en un lugar seguro'. Felicitaciones por completar las 100 horas cátedra.` , questions: getQuestionsForClass(14) }
];
