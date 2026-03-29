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
    ],
    3: [
      { id: 1, question: "Al mezclar lavandina y detergente, ¿cuál es el resultado técnico?", options: ["Aumento del brillo en cerámicas", "Inactivación del poder desinfectante y liberación de gas tóxico", "Ahorro del 50% de insumos", "Limpieza de sarro inmediata"], correctAnswerIndex: 1 },
      { id: 2, question: "El Gas Cloro es el resultado de la mezcla de:", options: ["Detergente y agua caliente", "Lavandina con ácidos (como limpia-sarros o vinagre)", "Jabón blanco y alcohol", "Amoníaco y agua destilada"], correctAnswerIndex: 1 },
      { id: 3, question: "Un envase de lavandina amarilla sin tapa durante 3 horas causa:", options: ["Mejora la concentración por evaporación", "De-gradación del hipoclorito por contacto con aire y luz", "Aumento del pH del agua", "Nada, el cloro es estable siempre"], correctAnswerIndex: 1 },
      { id: 4, question: "El rotulado de un envase trasvasado DEBE contener:", options: ["Solo el nombre del auxiliar", "Nombre del producto, fecha, concentración y advertencias", "El precio por litro", "La marca comercial original solamente"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Qué indica un pictograma de un pez y un árbol?", options: ["Producto orgánico", "Peligro para el medio ambiente acuático", "Apto para limpieza de parques", "Producto biodegradable de marca"], correctAnswerIndex: 1 },
      { id: 6, question: "Ante una ingestión accidental de un desinfectante concentrado, NUNCA se debe:", options: ["Llamar a toxicología", "Provocar el vómito sin indicación médica", "Ventilar el ambiente", "Afluir aire fresco"], correctAnswerIndex: 1 },
      { id: 7, question: "Un producto 'Biodegradable' en instituciones significa:", options: ["Que se puede tirar en cualquier lado", "Que se descompone en elementos naturales mediante microorganismos", "Que está hecho de plantas comestibles", "Que no limpia superficies inorgánicas"], correctAnswerIndex: 1 },
      { id: 8, question: "La concentración de 1000 ppm de cloro se logra mezclando:", options: ["1 parte de lavandina comercial en 50 de agua", "Media botella en un balde de 10 litros", "Detergente y lavandina por igual", "Solo con agua hirviendo"], correctAnswerIndex: 0 },
      { id: 9, question: "Los Amonios Cuaternarios son preferibles en cocinas porque:", options: ["Son más aromáticos", "Son de baja toxicidad, alta estabilidad y no corroen el inox", "Son de color azul", "Son más espesos para pegar la grasa"], correctAnswerIndex: 1 },
      { id: 10, question: "¿Cuál es el riesgo de inhalar vapores clorados en espacios cerrados?", options: ["Mareos leves", "Edema agudo de pulmón por quemadura química", "Mejora de la sinusitis", "Aumento de la energía"], correctAnswerIndex: 1 },
      { id: 11, question: "El uso de guantes es obligatorio porque:", options: ["Mantiene las manos calientes", "Previene la dermatitis de contacto y absorción dérmica de químicos", "Es una norma estética de la escuela", "Evita que las manos huelan mal"], correctAnswerIndex: 1 },
      { id: 12, question: "El almacenamiento de bidones pesados debe realizarse en:", options: ["Estanterías altas para ahorrar espacio", "Estantes bajos de fácil acceso para evitar caídas y esfuerzos lumbares", "Debajo de la bacha de la cocina", "En el pasillo cerca del aula"], correctAnswerIndex: 1 },
      { id: 13, question: "¿Qué es el pH en un producto de limpieza?", options: ["El grado de limpieza manual", "La medida de acidez o alcalinidad del producto", "El peso por litro", "La marca del fabricante"], correctAnswerIndex: 1 },
      { id: 14, question: "Un desinfectante neutro sirve para:", options: ["Solo para vidrios", "Superficies delicadas que no soportan acidez ni alcalinidad extrema", "Remover sarro pesado", "Desinfectar baños públicos"], correctAnswerIndex: 1 },
      { id: 15, question: "La manipulación de polvos desinfectantes requiere:", options: ["Solo guantes", "Protección ocular y respiratoria para evitar irritación de mucosas", "Nada especial si no hay viento", "Uso de delantal de tela"], correctAnswerIndex: 1 },
      { id: 16, question: "¿Cuál es el tiempo de validez de la lavandina una vez diluida en agua?", options: ["1 mes", "Máximo 24 horas (se degrada rápidamente)", "1 semana si se tapa bien", "Indefinidamente"], correctAnswerIndex: 1 },
      { id: 17, question: "Un antiséptico es un químico que se usa en:", options: ["Pisos y paredes", "Tejidos vivos (piel, heridas)", "Tanques de agua", "Ropa de cama"], correctAnswerIndex: 1 },
      { id: 18, question: "En la jerarquía de riesgos químicos, 'Sustitución' significa:", options: ["Usar menos cantidad", "Cambiar un producto peligroso por uno de menor riesgo", "Uso de guantes", "Limpiar con agua solamente"], correctAnswerIndex: 1 },
      { id: 19, question: "¿Qué pictograma indica 'Grave peligro para la salud'?", options: ["Signo de exclamación", "Silueta humana con una estrella en el pecho", "Un pez", "Una llama"], correctAnswerIndex: 1 },
      { id: 20, question: "El uso de calzado cerrado en el depósito de químicos es:", options: ["Opcional", "Obligatorio para prevenir lesiones por contacto con derrames", "Solo para invierno", "Prohibido"], correctAnswerIndex: 1 }
    ],
    // Applying even more complexity to high-level modules
    4: [
      { id: 1, question: "¿Sobre qué base legal opera el sistema de Riesgos del Trabajo en Argentina?", options: ["Estatuto del Docente", "Ley 24.557 y sus modificatorias", "Ley de Contrato de Trabajo únicamente", "Resoluciones de la Municipalidad"], correctAnswerIndex: 1 },
      { id: 2, question: "¿Qué se considera 'Enfermedad Profesional'?", options: ["Cualquier resfriado", "Afecciones causadas por agentes del listado oficial en el trabajo", "Cansancio al final del día", "Dolor de cabeza por el sol del patio"], correctAnswerIndex: 1 },
      { id: 3, question: "El trayecto remunerado 'In Itinere' se invalida si:", options: ["El auxiliar camina despacio", "Existe un desvío por interés personal documentado", "Usa transporte público en vez de bicicleta", "Se cambia la ropa en la escuela"], correctAnswerIndex: 1 },
      { id: 4, question: "Ante un accidente laboral, la denuncia al ART debe ser realizada por:", options: ["Solo el auxiliar", "El empleador de forma inmediata", "Los alumnos testigos", "La familia del damnificado días después"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Cuál es el rol de la SRT (Superintendencia)?", options: ["Pagar los sueldos", "Controlar y supervisar a las ART y empleadores", "Gestionar el comedor escolar", "Vender seguros de vida"], correctAnswerIndex: 1 },
      { id: 6, question: "Las prestaciones dinerarias durante la baja por accidente:", options: ["No existen", "Cubren el salario del trabajador mientras dure su incapacidad temporaria", "Solo cubren los remedios", "Son menores al sueldo habitual"], correctAnswerIndex: 1 },
      { id: 7, question: "La capacitación en seguridad laboral es una obligación de:", options: ["Solo el trabajador", "El empleador, asistido por la ART", "Nadie, es opcional", "El Ministerio de Salud"], correctAnswerIndex: 1 },
      { id: 8, question: "Un riesgo 'Oculto' en el trabajo es:", options: ["Un cable pelado a la vista", "Exposición a ruidos o químicos sin EPP durante años", "Un piso mojado señalizado", "Una puerta cerrada"], correctAnswerIndex: 1 },
      { id: 9, question: "¿Qué es la Incapacidad Laboral Permanente?", options: ["Un descanso largo", "Daño que disminuye la capacidad de trabajo de por vida", "Cuando el auxiliar se jubila", "Nadie lo sabe"], correctAnswerIndex: 1 },
      { id: 10, question: "El examen médico de ingreso sirve para:", options: ["Saber si el trabajador sabe limpiar", "Detectar patologías previas del trabajador", "Controlar la asistencia", "Evaluar la puntualidad"], correctAnswerIndex: 1 },
      { id: 11, question: "¿Qué tipo de prestaciones brinda el sistema de ART?", options: ["Préstamos de dinero", "Especie (medicinas/kine) y Dinerarias (sueldos/indemnizaciones)", "Vacaciones pagas extras", "Regalos de fin de año"], correctAnswerIndex: 1 },
      { id: 12, question: "En un accidente In Itinere, ¿cuándo se admite el desvío?", options: ["Para ir de compras", "Por razones de estudio, salud o cuidado de familiares (declarado)", "Si el auxiliar se encuentra a un amigo", "Nunca bajo ninguna razón"], correctAnswerIndex: 1 },
      { id: 13, question: "La higiene laboral busca prevenir:", options: ["Conflictos entre compañeros", "La aparición de enfermedades profesionales", "El ausentismo injustificado", "El gasto excesivo de papel"], correctAnswerIndex: 1 },
      { id: 14, question: "¿Cuál es la obligación del trabajador ante los EPP?", options: ["Llevarlos a casa", "Usarlos, cuidarlos y informar sus roturas de forma obligatoria", "Guardarlos con llave y no usarlos", "Solo usarlos cuando viene el inspector"], correctAnswerIndex: 1 },
      { id: 15, question: "El Comité de Seguridad e Higiene sirve para:", options: ["Tomar café", "Fomentar la participación trabajadores-empleador en prevención", "Castigar a los que no limpian", "Firmar las asistencias"], correctAnswerIndex: 1 },
      { id: 16, question: "Un riesgo de 'Seguridad' se diferencia de uno de 'Higiene' en:", options: ["Nada", "Seguridad causa accidentes agudos; Higiene causa enfermedades crónicas", "Uno es gratis y el otro pago", "Uno es para hombres y otro para mujeres"], correctAnswerIndex: 1 },
      { id: 17, question: "¿Qué define el Decreto 658/96?", options: ["Las escalas salariales", "El Listado de Enfermedades Profesionales", "Los cargos de los directivos", "Las horas cátedra"], correctAnswerIndex: 1 },
      { id: 18, question: "En caso de fallecimiento por accidente laboral, el sistema:", options: ["No hace nada", "Otorga una indemnización y pensión a los derechohabientes", "Paga solo el sepelio", "Solo avisa a la familia"], correctAnswerIndex: 1 },
      { id: 19, question: "La higiene institucional es parte de la:", options: ["Limpieza doméstica", "Salud Pública Ocupacional", "Economía Escolar", "Política Local"], correctAnswerIndex: 1 },
      { id: 20, question: "Prevención significa:", options: ["Limpiar después del problema", "Actuar antes de que ocurra el daño eliminando peligros", "Pagar el seguro", "Comprar más escobillones"], correctAnswerIndex: 1 }
    ],
    10: [
      { id: 1, question: "La ergonomía en la limpieza institucional busca:", options: ["Más velocidad", "Adaptar la tarea, herramientas y equipos al cuerpo del trabajador", "Usar robots", "Llevar ropa de marca"], correctAnswerIndex: 1 },
      { id: 2, question: "Al levantar un balde pesado desde el suelo, la posición de la espalda debe ser:", options: ["En forma de C (curvada)", "Mantener las curvaturas naturales (columna recta)", "Inclinándose totalmente hacia adelante", "Girando el tronco al mismo tiempo"], correctAnswerIndex: 1 },
      { id: 3, question: "El esfuerzo físico para desplazar un mueble debe realizarse:", options: ["Con los brazos estirados", "Ubicando el cuerpo cerca del objeto y empujando con las piernas", "Solo con la fuerza de la cintura", "Tirando de forma brusca"], correctAnswerIndex: 1 },
      { id: 4, question: "¿A qué altura debe estar el mango de la mopa con respecto al auxiliar?", options: ["A la cintura", "Entre el mentón y los hombros", "Por debajo de las rodillas", "A la altura de los ojos"], correctAnswerIndex: 1 },
      { id: 5, question: "La bipedestación prolongada (estar parado) puede causar técnicamente:", options: ["Mejora de la circulación", "Insuficiencia venosa (várices) y fatiga muscular", "Dolor de muelas", "Más energía"], correctAnswerIndex: 1 },
      { id: 6, question: "Un movimiento repetitivo de muñeca al escurrir trapos sin prensa causa:", options: ["Aumento de la fuerza", "Síndrome del Túnel Carpiano o Tendinitis", "Mano de seda", "Nada, es parte del oficio"], correctAnswerIndex: 1 },
      { id: 7, question: "Al barrer, el auxiliar NO debe:", options: ["Usar mopa húmeda", "Girar el tronco sin mover los pies (torsión de columna)", "Elegir un buen escobillón", "Usar guantes"], correctAnswerIndex: 1 },
      { id: 8, question: "El peso máximo recomendado de levantamiento manual para un hombre entrenado es:", options: ["100 kg", "25 kg (según guías de ergonomía)", "50 kg", "Lo que el trabajador aguante"], correctAnswerIndex: 1 },
      { id: 9, question: "En ergonomía, la 'Pausa Activa' consiste en:", options: ["Dormir la siesta", "Realizar ejercicios de estiramiento y cambio de postura periódicos", "Fumar un cigarrillo", "Limpiar más rápido"], correctAnswerIndex: 1 },
      { id: 10, question: "Un tacho de residuos escolar debe tener preferentemente:", options: ["Tapa a rosca", "Ruedas para evitar el acarreo manual pesado", "Bordes cortantes", "Ser de madera"], correctAnswerIndex: 1 },
      { id: 11, question: "¿Qué zona de la columna es la más afectada por malas técnicas de carga?", options: ["Cervical", "Lumbar (L4-L5 / L5-S1)", "Dorsal", "Coccígea"], correctAnswerIndex: 1 },
      { id: 12, question: "La carga dinámica es preferible a la carga estática porque:", options: ["Es más lenta", "Ayuda a la irrigación sanguínea al alternar contracción y relax", "Canse menos", "Es obligatoria por ley"], correctAnswerIndex: 1 },
      { id: 13, question: "Los calzados con suela rígida y mala amortiguación causan:", options: ["Fascitis plantar y dolor de talón crónico", "Rapidez de paso", "Mejor postura", "Suavidad"], correctAnswerIndex: 0 },
      { id: 14, question: "Al mover pupitres, ¿cuál es la mejor técnica?", options: ["Alzar uno en cada mano", "Empujar con el peso del cuerpo (no tirar hacia atrás)", "Tirar de espaldas", "Pedirle a los alumnos que los lleven"], correctAnswerIndex: 1 },
      { id: 15, question: "Un 'Factor de Riesgo Ergonómico' es:", options: ["El sueldo bajo", "La postura forzada sostenida en el tiempo", "El clima frío", "La luz blanca"], correctAnswerIndex: 1 },
      { id: 16, question: "Las herramientas de limpieza (mopas/baldes) deben ser:", options: ["Pesadas", "Livianas, durables y de diseño ergonómico", "Baratas y desechables", "Importadas"], correctAnswerIndex: 1 },
      { id: 17, question: "¿Qué síntoma es alerta de lesión musculoesquelética?", options: ["Hambre", "Adormecimiento, hormigueo o dolor punsante localizado", "Sueño", "Risotada"], correctAnswerIndex: 1 },
      { id: 18, question: "La visión del auxiliar al cargar debe ser:", options: ["Hacia el suelo", "Frente al camino, asegurando visibilidad libre de obstáculos", "Con ojos cerrados", "Mirando hacia atrás"], correctAnswerIndex: 1 },
      { id: 19, question: "Usar un carrito de limpieza evita:", options: ["Que el auxiliar se pierda", "El transporte manual de baldes y previene riesgos lumbares", "La limpieza profunda", "El uso de guantes"], correctAnswerIndex: 1 },
      { id: 20, question: "La ergonomía cognitiva en limpieza estudia:", options: ["La fuerza", "La carga mental, estrés y comprensión de manuales químicos", "La velocidad de los brazos", "El color de las paredes"], correctAnswerIndex: 1 }
    ]
  };

  const getThemeForClass = (cid: number, idx: number) => {
    const data: Record<number, any> = {
      2: [
        { q: "¿Por qué se prohíbe el barrido en seco?", a: "Para evitar la aero-dispersión de partículas contaminadas", d: ["Porque hace ruido", "Porque demora más tiempo", "Porque el polvo molesta al auxiliar"] },
        { q: "La desinfección en zonas de alta fricción (picaportes) debe:", a: "Realizarse con paños impregnados en alcohol al 70%", d: ["Hacerse solo con agua", "Ser opcional si el colegio está vacío", "Solo con detergente neutro"] }
      ],
      5: [
        { q: "El Reglamento General de Instituciones Educativas organiza:", a: "La vida escolar y el rol jerárquico del auxiliar", d: ["Solo la cocina", "El plan de estudios", "La salud de los padres"] },
        { q: "¿Qué responsabilidad tiene el auxiliar sobre el edificio?", a: "Garantizar la apertura, cierre y orden permanente del inmueble", d: ["Comprar mobiliario nuevo", "Atender el teléfono", "Enseñar a los porteros"] }
      ],
      6: [
        { q: "La 'Marcha de la Contaminación' en cocina significa:", a: "Pasar de zonas sucias a limpias sin desinfectar", d: ["Caminar rápido en la cocina", "El vencimiento de los alimentos", "No usar delantal"] },
        { q: "El enfriamiento rápido de alimentos cocidos busca:", a: "Cruzar la zona de peligro térmica lo antes posible", d: ["Que se puedan comer rápido", "Ahorrar gas", "Que el plato no queme"] }
      ],
      12: [
        { q: "¿Qué color de bolsa se usa para residuos reciclables?", a: "Bolsa Verde", d: ["Bolsa Roja", "Bolsa Negra", "Bolsa Blanca"] },
        { q: "Un residuo patogénico se caracteriza por:", a: "Ser capaz de transmitir enfermedades infecciosas", d: ["Tener feo olor", "Ser muy pesado", "Ser de color rojo"] }
      ]
    };

    const currentData = data[cid] || data[2]; 
    const theme = currentData[idx % currentData.length];
    return {
      question: `[Módulo ${cid}] ${theme.q}`,
      options: [theme.d[0], theme.a, theme.d[1], theme.d[2]],
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
  { id: 7, title: "Riesgos Físicos y Señaléctica", description: "Prevención de caídas, incendios y señalización de seguridad.", keyword: "SEGURIDAD", duration: "7.1h", icon: "alert-triangle", content: `MAPA DE RIESGOS Y SEÑALIZACIÓN

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
- Apretar el gatillo con movimientos de abanico.`, questions: getQuestionsForClass(7) },
  { id: 8, title: "Desinfección de Áreas Críticas", description: "Protocolos para Sanitarios, Cocinas y Laboratorios.", keyword: "TECNICAS", duration: "7.1h", icon: "droplets", content: `DESINFECCIÓN DE ALTO IMPACTO

Cada área de la escuela tiene una técnica y un tiempo de desinfección diferente.

1. SANITARIOS (ZONA ROJA):
Es el área de mayor riesgo infeccioso. 
- Técnica: Limpiar de lo más limpio (espejos/bachas) a lo más sucio (inodoros/pisos).
- Lavandina: Se usa una concentración mayor (1 parte en 49 de agua para desinfección profunda diaria).
- Ventilación: Imprescindible para evitar la acumulación de vapores de orina y amoníaco.

2. AULAS (ZONA VERDE):
Superficies de alta fricción: Picaportes, bordes de bancos, teclados. Deben desinfectarse después de cada recreo con Alcohol al 70%.

3. LABORES DE BARREDO:
PROHIBIDO el barrido en seco en escuelas. Levanta polvo que transporta virus y bacterias. Se debe usar barrido húmedo (con mopa humedecida en solución desinfectante).`, questions: getQuestionsForClass(8) },
  { id: 9, title: "Diseño de Planes de Limpieza (L+D)", description: "Metodología para estandarizar la higiene de toda la institución.", keyword: "PLANES", duration: "7.1h", icon: "list-checks", content: `ELABORACIÓN DE UN PLAN L+D (LIMPIEZA Y DESINFECCIÓN)

La limpieza profesional no se improvisa, se planifica. Maricel Gauna propone el uso de planillas de control.

1. CRONOGRAMA DE TAREAS:
- Diarias: Vaciado de cestos, limpieza de baños, barrido húmedo de pasillos.
- Semanales: Limpieza de vidrios interiores, techos (telarañas), remoción de sarro en grifería.
- Mensuales: Limpieza de tanques de agua, desinfección profunda de depósitos.

2. LOGÍSTICA DE INSUMOS:
Calcular cuántos litros de desinfectante se necesitan por mes para evitar compras de emergencia que suelen ser más caras o de menor calidad.

3. AUDITORÍA Y REGISTRO:
Si no está anotado, no se hizo. Cada aula debe tener una planilla de control detrás de la puerta donde el auxiliar firme después de limpiar. Esto protege al trabajador ante reclamos de falta de higiene.`, questions: getQuestionsForClass(9) },
  { id: 10, title: "Anatomía del Movimiento (Ergonomía)", description: "Cómo proteger la espalda y articulaciones durante la jornada.", keyword: "POSTURA", duration: "7.1h", icon: "activity", content: `ERGONOMÍA APLICADA AL TRABAJO AUXILIAR

El cuerpo humano no está diseñado para el esfuerzo repetitivo sin técnica. Aprender biomecánica previene el retiro temprano por invalidez.

1. LA COLUMNA VERTEBRAL:
Al curvar la espalda para levantar un tacho, la presión sobre los discos intervertebrales se triplica. 
- Técnica Correcta: Espalda recta, piernas dobladas. El esfuerzo lo hacen los músculos de los muslos (cuádriceps), no la cintura.

2. EL MANGO DE LA MOPA/ESCOBILLÓN:
Debe llegar a la altura del hombro del auxiliar. Si es muy corto, obliga a encorvarse. Si es muy largo, causa tensión en las cervicales.

3. MOVIMIENTOS REPETITIVOS:
Al trapear, realizar movimientos en 'S' o en '8', moviendo las piernas de lado a lado. Evitar girar el tronco superior dejando las piernas fijas, ya que esto 'atornilla' las vértebras lumbares.`, questions: getQuestionsForClass(10) },
  { id: 11, title: "Trabajo Decente y Ética Civil", description: "Humanización de la tarea y derechos constitucionales.", keyword: "DERECHOS", duration: "7.1h", icon: "users", content: `TRABAJO DECENTE Y ÉTICA PROFESIONAL

El auxiliar institucional es un pilar de la democracia y la educación pública.

1. EL CONCEPTO DE TRABAJO DECENTE (OIT):
No se trata solo de cobrar un sueldo, sino de trabajar en un ambiente donde se respete la integridad física, mental y moral. Incluye la equidad de género y la no discriminación por ninguna causa.

2. DERECHOS CONSTITUCIONALES:
- Art. 14 bis de la Constitución Nacional: 'El trabajo en sus diversas formas gozará de la protección de las leyes, las que asegurarán al trabajador: condiciones dignas y equitativas de labor...'.

3. EL AUXILIAR EN LA COMUNIDAD:
Su conducta dentro y fuera de la escuela afecta la imagen de la institución. La confidencialidad sobre lo que sucede en la escuela (problemas de alumnos o docentes) es una obligación ética ineludible.`, questions: getQuestionsForClass(11) },
  { id: 12, title: "Gestión GIRSU Escolar", description: "Tratamiento de residuos desde una perspectiva ambiental.", keyword: "RESIDUOS", duration: "7.1h", icon: "recycle", content: `GESTIÓN INTEGRAL DE RESIDUOS SÓLIDOS URBANOS (GIRSU)

La escuela debe ser el primer ejemplo de cuidado ambiental para los niños.

1. LA REGLA DE LAS 3R:
- Reducir: Evitar el uso excesivo de papel o plástico.
- Reutilizar: Darle nuevos usos a envases de limpieza (siempre con nuevo rotulado).
- Reciclar: Clasificar en origen para que los materiales vuelvan a la industria.

2. RESIDUOS PATOGÉNICOS EN LA ESCUELA:
Si bien la escuela no es un hospital, genera residuos de riesgo (ej: gasas con sangre, toallas femeninas). 
- Manipulación: Usar siempre guantes. Colocar en bolsas rojas si el reglamento local lo exige, o en bolsas negras bien selladas y retiradas diariamente. Nunca comprimir las bolsas con los pies o manos.

3. EL AUXILIAR COMO GESTOR AMBIENTAL:
Fomentar que los alumnos dejen el aula limpia de papeles ayuda a que la tarea del auxiliar sea más eficiente y la escuela más saludable.`, questions: getQuestionsForClass(12) },
  { id: 13, title: "Laboratorio de Práctica Real", description: "Análisis de casos críticos y simulacros de contingencia.", keyword: "PRACTICA", duration: "7.1h", icon: "microscope", content: `SIMULACROS Y TALLER DE PRÁCTICA PROFESIONAL

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
- NO intentar neutralizar con otros químicos (puede empeorado la reacción).
- Llamar a bomberos o toxicología si el olor es persistente.

3. PRÁCTICA DE CARGA:
Simular el movimiento de 10 bancos de un aula a otra aplicando las leyes de ergonomía aprendidas.`, questions: getQuestionsForClass(13) },
  { id: 14, title: "Soberanía Laboral y Perfil del Egresado", description: "Cierre, integración de saberes y ética de la profesión.", keyword: "EXAMEN", duration: "7.7h", icon: "graduation-cap", content: `CIERRE Y EVALUACIÓN FINAL SUMATIVA

Usted ha completado el ciclo de 100 horas de formación. Este cierre es un nuevo comienzo como profesional de la higiene.

1. INTEGRACIÓN DE SABERES:
Un auxiliar profesional sabe que la bioseguridad (Clase 1), la química (Clase 3) y la ergonomía (Clase 10) no son temas aislados, sino que ocurren al mismo tiempo en cada minuto de su jornada laboral.

2. EL PERFIL DEL EGRESADO:
- Capacidad crítica para identificar peligros.
- Compromiso con la salud de la comunidad.
- Manejo solvente de la normativa legal bonaerense.
- Respeto por los derechos propios y ajenos.

3. PALABRAS FINALES DE MARICEL GAUNA:
'Su trabajo es la base invisible sobre la que se apoya todo el sistema educativo. Una escuela limpia es una escuela que cuida, y usted es el guardián de ese cuidado'.`, questions: getQuestionsForClass(14) }
];
