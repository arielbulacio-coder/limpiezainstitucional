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
    2: [
      { id: 1, question: "El 'Círculo de Sinner' establece que para limpiar se deben equilibrar:", options: ["Agua, jabón, trapo y balde", "Acción Mecánica, Acción Química, Tiempo y Temperatura", "Precio, marca, cantidad y aroma", "Escoba, mopa, rejilla y esponja"], correctAnswerIndex: 1 },
      { id: 2, question: "¿Cuál es la principal diferencia entre sanitización y desinfección?", options: ["No hay diferencia, son sinónimos", "La sanitización reduce gérmenes a nivel seguro, la desinfección destruye la mayoría de los patógenos", "La desinfección solo se hace con agua caliente", "La sanitización es solo para los baños"], correctAnswerIndex: 1 },
      { id: 3, question: "La técnica del 'Doble Balde' se utiliza primordialmente para:", options: ["Cargar más agua en menos tiempo", "Evitar la contaminación cruzada manteniendo el detergente limpio", "Mezclar lavandina con detergente", "Limpiar techos y paredes"], correctAnswerIndex: 1 },
      { id: 4, question: "En instituciones educativas, el barrido seco (escoba tradicional):", options: ["Es el más recomendado por su rapidez", "Está prohibido porque levanta polvo y alérgenos", "Solo se debe usar en los patios", "Es obligatorio para el aula de computación"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Qué factor del Círculo de Sinner compensamos si usamos agua fría (baja temperatura)?", options: ["Reducimos el tiempo de fregado", "Aumentamos la acción mecánica o química", "No se puede compensar", "Usamos menos detergente"], correctAnswerIndex: 1 },
      { id: 6, question: "La 'Acción Mecánica' en el Círculo de Sinner se refiere a:", options: ["El uso de motores", "El frotado, cepillado o presión de agua", "El tiempo que dejamos el producto", "La marca de la enceradora"], correctAnswerIndex: 1 },
      { id: 7, question: "Un detergente 'Neutro' (pH 7) se utiliza principalmente para:", options: ["Desinfectar quirófanos", "Limpieza general de pisos y superficies sin dañarlas", "Quitar sarro profundo", "Limpiar metales oxidados"], correctAnswerIndex: 1 },
      { id: 8, question: "¿Cuál es el orden correcto del proceso de saneamiento?", options: ["Desinfectar y luego limpiar", "Limpiar (remover suciedad) y luego desinfectar", "Solo desinfectar es suficiente", "Limpiar solo con agua"], correctAnswerIndex: 1 },
      { id: 9, question: "La 'Materia Orgánica' (sangre, grasa) en una superficie:", options: ["Ayuda a que el desinfectante pegue mejor", "Inactiva muchos desinfectantes como la lavandina", "No influye en la limpieza", "Se elimina solo con aire a presión"], correctAnswerIndex: 1 },
      { id: 10, question: "La técnica de 'Limpieza en Zig-Zag' o 'S' sirve para:", options: ["Ir más despacio", "No dejar zonas sin cubrir y evitar redeposición de suciedad", "Gastar menos agua", "Que el piso brille más"], correctAnswerIndex: 1 },
      { id: 11, question: "El enjuague es un paso crítico porque:", options: ["Elimina restos de suciedad y detergente que pueden causar caídas o irritación", "Es solo para que el piso no quede pegajoso", "Gasta el exceso de agua del balde", "No es un paso necesario"], correctAnswerIndex: 0 },
      { id: 12, question: "La 'Acción Química' depende principalmente de:", options: ["El color del líquido", "La concentración y calidad del producto utilizado", "El tamaño del bidón", "El precio del mercado"], correctAnswerIndex: 1 },
      { id: 13, question: "Si aumentamos el 'Tiempo' de contacto del producto, podemos:", options: ["Dañar siempre la superficie", "Reducir un poco la necesidad de acción mecánica pesada", "Eliminar el 100% de los virus de inmediato", "No usar guantes"], correctAnswerIndex: 1 },
      { id: 14, question: "La mopa de microfibra es superior porque:", options: ["Es más cara", "Atrapa el polvo por carga electrostática y retiene más bacterias", "Dura para siempre", "Es más pesada de usar"], correctAnswerIndex: 1 },
      { id: 15, question: "En un baño, ¿por dónde se debe comenzar la limpieza?", options: ["Por el inodoro", "Por las zonas menos sucias (espejos, paredes altas) hacia las más sucias", "Por el piso", "Por la rejilla de desagüe"], correctAnswerIndex: 1 },
      { id: 16, question: "¿Qué sucede si no se respeta el tiempo de exposición del desinfectante?", options: ["Se gasta menos dinero", "La desinfección es incompleta y los gérmenes sobreviven", "El producto funciona igual", "El olor es más suave"], correctAnswerIndex: 1 },
      { id: 17, question: "Los paños de diferentes colores se usan para:", options: ["Que la escuela se vea colorida", "Evitar la contaminación cruzada entre distintas áreas (ej: baño vs cocina)", "Identificar al dueño del paño", "Diferenciar telas suaves de ásperas"], correctAnswerIndex: 1 },
      { id: 18, question: "La limpieza 'de arriba hacia abajo' evita:", options: ["El cansancio del operario", "Que el polvo de las zonas altas ensucie lo ya limpiado abajo", "Usar escaleras", "Que se moje el techo"], correctAnswerIndex: 1 },
      { id: 19, question: "Un bio-film es:", options: ["Una película educativa", "Una capa protectora que crean las bacterias en superficies húmedas", "Un tipo de detergente biodegradable", "La marca de un desinfectante"], correctAnswerIndex: 1 },
      { id: 20, question: "La desinfección 'Terminal' se realiza:", options: ["Al empezar el turno", "Cuando se retira un paciente o hay un brote, de forma exhaustiva", "Solo en las terminales de ómnibus", "Una vez al año"], correctAnswerIndex: 1 }
    ],
    3: [
      { id: 1, question: "Mezclar lavandina con ácidos (como vinagre o limpia-sarro) libera:", options: ["Un aroma agradable a flores", "Gas Cloro, altamente irritante y tóxico", "Dióxido de carbono inofensivo", "Agua pura"], correctAnswerIndex: 1 },
      { id: 2, question: "La mezcla de lavandina con amoníaco produce:", options: ["Cloraminas que causan asfixia e irritación", "Una solución desinfectante super potente", "Un pegamento industrial", "Explosión inmediata"], correctAnswerIndex: 1 },
      { id: 3, question: "¿Cuál es el riesgo de mezclar lavandina con detergente común?", options: ["Se mancha el piso irrevocablemente", "Muchos detergentes anulan el poder desinfectante del cloro", "Se dobla la capacidad de limpieza", "No hay ningún riesgo"], correctAnswerIndex: 1 },
      { id: 4, question: "Los productos químicos deben almacenarse:", options: ["Directamente en el suelo para mayor estabilidad", "En estantes por debajo de la altura de los hombros", "Cerca de la comida de los niños", "En envases de gaseosas reutilizados"], correctAnswerIndex: 1 },
      { id: 5, question: "Ante una salpicadura de químico en los ojos, la primera acción es:", options: ["Ponerse gotas de colirio común", "Lavar con agua corriente por 20 minutos", "Cerrar los ojos fuerte y esperar", "Neutralizar con un trapo seco"], correctAnswerIndex: 1 },
      { id: 6, question: "El pictograma de una 'Llama' en un producto indica que es:", options: ["Ideal para estufas", "Altamente inflamable", "Muy caliente al tacto", "Procedente de restos volcánicos"], correctAnswerIndex: 1 },
      { id: 7, question: "El pictograma de una 'Calavera' advierte sobre:", options: ["Producto para cementerios", "Toxicidad aguda (veneno)", "Producto que no vence nunca", "Sabor amargo"], correctAnswerIndex: 1 },
      { id: 8, question: "La 'Ficha de Datos de Seguridad' (HDS/MSDS) sirve para:", options: ["Saber el precio del producto", "Conocer riesgos, componentes y primeros auxilios del químico", "Anotar cuántos bidones quedan", "Envolver el envase"], correctAnswerIndex: 1 },
      { id: 9, question: "NUNCA se deben trasvasar químicos a envases de alimentos porque:", options: ["El producto pierde fuerza", "Puede causar ingestión accidental por confusión", "Es un desperdicio de envases", "La etiqueta se despega"], correctAnswerIndex: 1 },
      { id: 10, question: "El orden de mezcla correcto para diluir ácidos o lavandina es:", options: ["Echar el agua sobre el químico", "Echar el químico sobre el agua (para evitar salpicaduras reactivas)", "Mezclar los dos al mismo tiempo", "No importa el orden"], correctAnswerIndex: 1 },
      { id: 11, question: "La lavandina (hipoclorito) se descompone y pierde efecto con:", options: ["La oscuridad", "La luz solar y el calor excesivo", "El envase de plástico", "El agua destilada"], correctAnswerIndex: 1 },
      { id: 12, question: "Los vapores de lavandina con detergente pueden causar:", options: ["Aumento de la capacidad pulmonar", "Mareos, náuseas e irritación de vías respiratorias", "Sueño profundo", "Hambre"], correctAnswerIndex: 1 },
      { id: 13, question: "Un producto 'Corrosivo' puede dañar:", options: ["Solo plásticos", "Tejidos vivos, metales y superficies", "Solo el vidrio", "Solo si se mezcla con agua"], correctAnswerIndex: 1 },
      { id: 14, question: "¿Qué significa el término 'Concentración' en un producto químico?", options: ["Cuánto tiempo hay que mirar el envase", "La cantidad de principio activo puro en la solución", "El peso total del bidón", "La marca del fabricante"], correctAnswerIndex: 1 },
      { id: 15, question: "El equipo de protección mínimo para manipular químicos concentrados es:", options: ["Guantes de nitrilo/goma y protección ocular", "Delantal de tela y barbijo común", "Solo zapatos de seguridad", "Ropa de calle cómoda"], correctAnswerIndex: 0 },
      { id: 16, question: "¿Qué es el 'Límite de Exposición'?", options: ["El tiempo máximo que un trabajador puede estar en contacto con el químico sin riesgo", "La cantidad de sol que aguanta el envase", "La distancia a la que se huele el producto", "El precio máximo fijado por el gobierno"], correctAnswerIndex: 0 },
      { id: 17, question: "Los productos inflamables deben alejarse de:", options: ["Las ventanas", "Fuentes de calor, chispas o llamas", "La luz azul", "Los estantes de madera"], correctAnswerIndex: 1 },
      { id: 18, question: "La técnica de 'Olfateo' para identificar un químico:", options: ["Es la más rápida y segura", "Está terminantemente prohibida (riesgo de quemadura nasal/intoxicación)", "Solo la deben hacer profesionales", "Se hace soplando hacia el envase"], correctAnswerIndex: 1 },
      { id: 19, question: "Si un envase no tiene etiqueta, el auxiliar debe:", options: ["Olerlo para adivinar", "No usarlo y reportarlo al supervisor para su identificación o descarte seguro", "Mezclarlo con agua a ver qué pasa", "Tirarlo al desagüe común"], correctAnswerIndex: 1 },
      { id: 20, question: "El principio de 'Sustitución' en seguridad química propone:", options: ["Cambiar de proveedor cada mes", "Reemplazar productos peligrosos por otros de menor riesgo si es posible", "Sustituir el agua por alcohol", "Cambiar el operario si se enferma"], correctAnswerIndex: 1 }
    ],
    4: [
      { id: 1, question: "La Ley 24.557 de Riesgos del Trabajo tiene como objetivo:", options: ["Establecer los sueldos", "Prevenir accidentes y reparar daños por enfermedades profesionales", "Regular el horario de clases", "Diseñar los uniformes"], correctAnswerIndex: 1 },
      { id: 2, question: "El 'Accidente In Itinere' es aquel que ocurre:", options: ["En el patio de la escuela", "En el trayecto directo entre el domicilio y el trabajo", "Durante el fin de semana", "En el comedor escolar"], correctAnswerIndex: 1 },
      { id: 3, question: "Una interrupción del trayecto por interés personal en el 'in itinere':", options: ["No afecta la cobertura", "Invalida la cobertura de la ART", "Es permitida si es corta", "Solo se permite en transporte público"], correctAnswerIndex: 1 },
      { id: 4, question: "Las várices y hernias de disco pueden considerarse:", options: ["Accidentes de trabajo súbitos", "Enfermedades Profesionales si están en el listado oficial", "Lesiones deportivas", "Culpa exclusiva del trabajador"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Cuál es una obligación del trabajador según la LRT?", options: ["Pagar su propio seguro", "Usar los Elementos de Protección Personal (EPP) provistos", "Elegir su propia clínica de atención", "No realizar denuncias de accidentes"], correctAnswerIndex: 1 },
      { id: 6, question: "La sigla ART significa:", options: ["Asociación de Riesgos Temporales", "Aseguradora de Riesgos del Trabajo", "Asistencia de Reclamos Técnicos", "Academia de Recursos Tecnológicos"], correctAnswerIndex: 1 },
      { id: 7, question: "¿Quién paga la cuota mensual de la ART?", options: ["El trabajador de su bolsillo", "El empleador", "El Estado siempre, en todos los casos", "El sindicato"], correctAnswerIndex: 1 },
      { id: 8, question: "Si sufrís un accidente de trabajo, ¿en qué plazo debés avisar al empleador?", options: ["A los 30 días", "De forma inmediata o lo antes posible", "Solo si la herida es grave", "No es obligatorio avisar"], correctAnswerIndex: 1 },
      { id: 9, question: "Las prestaciones de la ART incluyen:", options: ["Solo el sueldo", "Asistencia médica, farmacéutica, prótesis y rehabilitación", "Un bono vacacional", "Seguro de vida para familiares"], correctAnswerIndex: 1 },
      { id: 10, question: "Para que un accidente 'In Itinere' sea válido, el trabajador debe declarar:", options: ["Su color favorito", "Su domicilio ante el empleador", "Su sueldo anterior", "El nombre de sus compañeros"], correctAnswerIndex: 1 },
      { id: 11, question: "La 'Incapacidad Laboral Temporaria' (ILT) termina cuando:", options: ["El trabajador decide volver", "Se le otorga el alta médica o pasan 2 años", "Se acaba el mes", "El jefe lo llama"], correctAnswerIndex: 1 },
      { id: 12, question: "Una 'Enfermedad Profesional' se diferencia de un accidente porque:", options: ["Es más dolorosa", "Se desarrolla paulatinamente por la exposición al factor de riesgo", "Ocurre en un segundo", "Solo pasa en la oficina"], correctAnswerIndex: 1 },
      { id: 13, question: "El examen médico 'Periódico' sirve para:", options: ["Controlar si el trabajador miente", "Detectar precozmente enfermedades causadas por el ambiente laboral", "Saber si el trabajador está en forma física", "Descontar días de sueldo"], correctAnswerIndex: 1 },
      { id: 14, question: "Si la ART rechaza el accidente, el trabajador puede recurrir a:", options: ["La comisaría", "Las Comisiones Médicas Jurisdiccionales", "El Ministerio de Educación solamente", "La escuela donde trabaja"], correctAnswerIndex: 1 },
      { id: 15, question: "El 'Recalificación Profesional' es un proceso para:", options: ["Echar al trabajador", "Capacitar al trabajador en otra tarea si no puede volver a la anterior", "Aumentar el rango del puesto", "Cambiar de ART"], correctAnswerIndex: 1 },
      { id: 16, question: "Un accidente 'Por causa' del trabajo significa que:", options: ["El trabajo fue la razón directa del evento", "Fue un accidente doméstico", "Ocurrió por culpa del clima", "Pasó durante las vacaciones"], correctAnswerIndex: 0 },
      { id: 17, question: "¿Qué debe hacer un auxiliar si observa una condición insegura (ej: baldosas flojas)?", options: ["Ignorarlo", "Informar al empleador/superior para prevenir un accidente", "Esperar a que alguien se caiga para denunciar", "Arreglarlo él mismo sin avisar"], correctAnswerIndex: 1 },
      { id: 18, question: "La SRT (Superintendencia de Riesgos del Trabajo) es:", options: ["El gremio de las ART", "El organismo estatal que controla a las ART y empleadores", "Una clínica privada", "Un tipo de seguro de vida"], correctAnswerIndex: 1 },
      { id: 19, question: "El traslado en ambulancia tras un accidente laboral lo costea:", options: ["El trabajador", "La ART", "La obra social común", "Nadie, es gratuito por ley municipal"], correctAnswerIndex: 1 },
      { id: 20, question: "El derecho a la ILT (Incapacidad Laboral Temporaria) comienza:", options: ["Al mes del accidente", "Al día siguiente del evento", "A la semana", "Cuando lo diga un juez"], correctAnswerIndex: 1 }
    ],
    5: [
      { id: 1, question: "Bajo la Res. 299/11, el auxiliar es un agente de:", options: ["Una empresa de limpieza privada", "La Dirección General de Cultura y Educación (DGCyE)", "El sindicato únicamente", "La municipalidad local"], correctAnswerIndex: 1 },
      { id: 2, question: "El Art. 95 define que el auxiliar debe:", options: ["Cocinar para los docentes", "Mantener la pulcritud del edificio y mobiliario", "Sustituir a los maestros ausentes", "Cobrar las cuotas de la cooperadora"], correctAnswerIndex: 1 },
      { id: 3, question: "Respecto a la medicación de alumnos, el auxiliar:", options: ["Puede dar aspirinas con permiso del padre", "Tiene prohibido suministrar cualquier fármaco", "Solo puede dar remedios caseros", "Debe administrar la insulina si es necesario"], correctAnswerIndex: 1 },
      { id: 4, question: "Es responsabilidad del auxiliar controlar:", options: ["El boletín de calificaciones", "La apertura y cierre de accesos y servicios (gas/agua)", "El stock de la biblioteca", "La asistencia de los profesores"], correctAnswerIndex: 1 },
      { id: 5, question: "El trato del auxiliar con la comunidad educativa debe ser de:", options: ["Informalidad absoluta", "Reserva profesional, decoro ético y respeto", "Distancia y frialdad", "Compañerismo para compartir chismes"], correctAnswerIndex: 1 },
      { id: 6, question: "El auxiliar de cocina depende jerárquicamente de:", options: ["El cocinero y el equipo directivo", "El auxiliar de limpieza", "Los alumnos de último año", "Solo de él mismo"], correctAnswerIndex: 0 },
      { id: 7, question: "¿Puede un auxiliar dejar su puesto antes del horario sin autorización?", options: ["Sí, si terminó de limpiar", "No, debe cumplir su carga horaria y solicitar permiso para retirarse", "Solo si es viernes", "Sí, siempre"], correctAnswerIndex: 1 },
      { id: 8, question: "La higiene de los tanques de agua en la escuela es una tarea:", options: ["Que el auxiliar hace todos los lunes", "Que generalmente se terceriza, pero el auxiliar controla el estado", "Que no le importa a nadie", "Eclusiva de los porteros de edificios privados"], correctAnswerIndex: 1 },
      { id: 9, question: "El auxiliar debe conocer el Plan de Continuidad Pedagógica para:", options: ["Dar clase de matemática", "Colaborar en que el entorno esté listo para las actividades", "Saber cuándo hay examen", "No necesita conocerlo"], correctAnswerIndex: 1 },
      { id: 10, question: "En un acto escolar, el rol del auxiliar es:", options: ["Actuar en el escenario", "Garantizar la habitabilidad y seguridad del espacio", "Vender comida", "No asistir"], correctAnswerIndex: 1 },
      { id: 11, question: "El 'Decoro Ético' significa:", options: ["Usar ropa elegante", "Mantener una conducta ejemplar acorde al ámbito educativo", "Adornar la oficina", "Ser muy callado"], correctAnswerIndex: 1 },
      { id: 12, question: "Ante una situación de conflicto entre alumnos, el auxiliar debe:", options: ["No meterse nunca", "Intervenir preventivamente y dar aviso inmediato a los docentes/directivos", "Filmar con el celular", "Gritar más fuerte"], correctAnswerIndex: 1 },
      { id: 13, question: "El uso del teléfono celular durante el trabajo:", options: ["Es libre y constante", "Debe restringirse a lo estrictamente necesario o urgencias", "Está prohibido incluso en el descanso", "Solo para jugar"], correctAnswerIndex: 1 },
      { id: 14, question: "La 'Reserva Profesional' implica:", options: ["Guardar secretos de estado", "No divulgar información sensible de alumnos o la institución", "Tener un consultorio propio", "No hablar con los compañeros"], correctAnswerIndex: 1 },
      { id: 15, question: "¿Qué debe hacer el auxiliar si encuentra una falla eléctrica?", options: ["Intentar arreglarla con cinta aisladora", "Cortar la llave térmica si es peligroso y avisar a la dirección", "No decir nada para no molestar", "Tocar los cables con cuidado"], correctAnswerIndex: 1 },
      { id: 16, question: "El aseo de la 'Copa de Leche' debe realizarse:", options: ["Una vez por semana", "Antes y después de cada servicio", "Solo si se ve sucio", "Cuando lo pida el cocinero"], correctAnswerIndex: 1 },
      { id: 17, question: "El auxiliar debe concurrir a su trabajo con:", options: ["El uniforme reglamentario y en condiciones de higiene", "Ropa de gimnasia", "Pijamas", "Vestimenta de noche"], correctAnswerIndex: 0 },
      { id: 18, question: "Se considera una falta grave según el reglamento:", options: ["Llegar 5 minutos tarde una vez", "El maltrato físico o verbal a cualquier miembro de la comunidad", "Peinarse en el baño", "Preguntar el sueldo"], correctAnswerIndex: 1 },
      { id: 19, question: "La capacitación continua del auxiliar es:", options: ["Pérdida de tiempo", "Un derecho y un deber para mejorar la calidad del servicio", "Opcional y sin importancia", "Solo para los que recién empiezan"], correctAnswerIndex: 1 },
      { id: 20, question: "El mantenimiento del mobiliario escolar incluye:", options: ["Reparar electrónicamente las laptops", "Controlar que no tengan clavos salientes o roturas peligrosas", "Pintarlos de colores artísticos", "Cambiar los pupitres de lugar todos los días"], correctAnswerIndex: 1 }
    ],
    6: [
      { id: 1, question: "La Clave 1 de Inocuidad de la OMS es 'Mantener la limpieza'. Esto incluye:", options: ["Lavar solo si el niño lo pide", "Higiene de manos y desinfección de superficies que tocan alimentos", "Limpiar el comedor una vez por semana", "Usar desinfectantes fuertes cerca de la comida"], correctAnswerIndex: 1 },
      { id: 2, question: "Para evitar la contaminación cruzada en la cocina escolar, se debe:", options: ["Usar el mismo cuchillo para carne y verduras", "Separar alimentos crudos de cocidos", "Guardar todo en la heladera sin tapar", "Cocinar solo una vez al mes"], correctAnswerIndex: 1 },
      { id: 3, question: "En la gestión de la copa de leche, el uso de cofia es obligatorio para:", options: ["Verse más profesional", "Evitar que el cabello caiga en los alimentos", "Cumplir con el uniforme", "Protegerse del frío"], correctAnswerIndex: 1 },
      { id: 4, question: "La 'Zona de Peligro' para la reproducción bacteriana en alimentos está entre:", options: ["-10°C y 0°C", "5°C y 60°C", "70°C y 100°C", "Solo en temperaturas bajo cero"], correctAnswerIndex: 1 },
      { id: 5, question: "¿A qué temperatura interna debe llegar el centro del alimento (ej: carne) para ser seguro?", options: ["40°C", "71°C o más", "Solo debe estar tibia", "No importa la temperatura"], correctAnswerIndex: 1 },
      { id: 6, question: "La sigla ETA en seguridad alimentaria significa:", options: ["Enfermedades Transmitidas por Alimentos", "Estándar de Técnicas Alimenticias", "Evaluación de Tiempos de Agua", "Estado de Temperatura Ambiental"], correctAnswerIndex: 0 },
      { id: 7, question: "¿Cuál es un síntoma común de una ETA como la Salmonella?", options: ["Dolor de muelas", "Fiebre, diarrea y vómitos", "Caída del cabello", "Visión borrosa"], correctAnswerIndex: 1 },
      { id: 8, question: "El lavado de verduras con hojas (lechuga, acelga) debe ser:", options: ["Rápido bajo el chorro", "Hoja por hoja bajo agua potable", "No es necesario si se ve limpia", "Solo con agua caliente"], correctAnswerIndex: 1 },
      { id: 9, question: "Los alimentos cocidos deben refrigerarse:", options: ["Cuando estén totalmente fríos", "Dentro de las 2 horas posteriores a la cocción", "Al día siguiente", "Nunca, pierden el gusto"], correctAnswerIndex: 1 },
      { id: 10, question: "¿Qué es la 'Contaminación Cruzada Indirecta'?", options: ["Mezclar químicos con comida", "Paso de gérmenes a través de manos o utensilios mal lavados", "Toser sobre el plato", "Usar agua sin hervir"], correctAnswerIndex: 1 },
      { id: 11, question: "Las tablas de picar de madera en comedores escolares:", options: ["Son las mejores por ser naturales", "Están prohibidas por ser porosas y acumular bacterias", "Solo para pan", "Deben ser de colores oscuros"], correctAnswerIndex: 1 },
      { id: 12, question: "Para descongelar un alimento de forma segura se debe:", options: ["Dejarlo sobre la mesada toda la noche", "Pasarlo del freezer a la heladera con tiempo", "Ponerlo bajo el chorro de agua caliente", "Dejarlo al sol"], correctAnswerIndex: 1 },
      { id: 13, question: "Un manipulador de alimentos no debe trabajar si:", options: ["Tiene una herida infectada o síntomas gastrointestinales", "Está un poco cansado", "No tiene el uniforme nuevo", "Tiene el pelo corto"], correctAnswerIndex: 0 },
      { id: 14, question: "¿Por qué NO se debe usar el trapo de rejilla para secar vajilla?", options: ["Porque raya los platos", "Porque es una fuente masiva de bacterias y humedad", "Gasta mucho el trapo", "Es una tradición"], correctAnswerIndex: 1 },
      { id: 15, question: "La 'Cuerda de la Inocuidad' se rompe cuando:", options: ["Se usa mucho detergente", "Se rompe la cadena de frío de los lácteos", "Se cocina mucha cantidad", "Se usa agua de red"], correctAnswerIndex: 1 },
      { id: 16, question: "Los productos de limpieza en la cocina deben estar:", options: ["Debajo de la bacha de lavado", "Separados de los alimentos en un armario o sector exclusivo", "En la heladera para que no se evaporen", "Cerca de las ollas"], correctAnswerIndex: 1 },
      { id: 17, question: "El agua segura es aquella que:", options: ["Se ve transparente", "Es apta para consumo humano y libre de patógenos", "Viene de un pozo abierto", "Tiene mucho olor a cloro"], correctAnswerIndex: 1 },
      { id: 18, question: "La rotación de stock PEPS significa:", options: ["Primero en Entrar, Primero en Salir", "Poner el Estante Para Secar", "Pedir En Pocas Semanas", "Producto Especial Para Salsas"], correctAnswerIndex: 0 },
      { id: 19, question: "Las latas de conserva abolladas o hinchadas deben:", options: ["Usarse rápido", "Descartarse inmediatamente (riesgo de botulismo)", "Lavarse bien y usar", "Abrirse para ver si tiene olor"], correctAnswerIndex: 1 },
      { id: 20, question: "El auxiliar de cocina debe lavarse las manos:", options: ["Solo al llegar", "Frecuentemente, especialmente después de tocar basura o ir al baño", "Solo si se ven sucias", "Cada 4 horas"], correctAnswerIndex: 1 }
    ],
    7: [
      { id: 1, question: "¿Cuál es el accidente más frecuente en las escuelas según el manual?", options: ["Explosiones de gas", "Caídas al mismo nivel por pisos mojados", "Incendios forestales", "Inundaciones catastróficas"], correctAnswerIndex: 1 },
      { id: 2, question: "La señalética de seguridad de color AMARILLO indica:", options: ["Prohibición", "Advertencia (ej: piso resbaladizo)", "Obligación", "Información de Salida"], correctAnswerIndex: 1 },
      { id: 3, question: "Para que haya fuego se necesitan estos tres elementos (Triángulo del Fuego):", options: ["Agua, jabón y trapo", "Combustible, Comburente (Oxígeno) y Calor", "Electricidad, Gas y Madera", "Fósforos, Aire y Miedo"], correctAnswerIndex: 1 },
      { id: 4, question: "El extintor más común en escuelas es el ABC (polvo químico). Esto significa que apaga:", options: ["Solo líquidos inflamables", "Sólidos, líquidos y fuego eléctrico", "Solo papeles y maderas", "Fuegos químicos peligrosos"], correctAnswerIndex: 1 },
      { id: 5, question: "La técnica correcta para usar un matafuego es apuntar a:", options: ["Las llamas más altas", "La base del fuego haciendo zigzag", "El aire para sofocar el humo", "La cara de los presentes"], correctAnswerIndex: 1 },
      { id: 6, question: "La señalética de color ROJO indica:", options: ["Salida de emergencia", "Prohibición o elementos de lucha contra incendio", "Obligación", "Cuidado, piso mojado"], correctAnswerIndex: 1 },
      { id: 7, question: "La señalética de color VERDE se utiliza para:", options: ["Información de emergencia, rutas de evacuación y salidas", "Advertir peligro eléctrico", "Indicar prohibición de fumar", "Marcar zonas de limpieza"], correctAnswerIndex: 0 },
      { id: 8, question: "La señalética de color AZUL indica:", options: ["Paso permitido", "Obligación (ej: uso de guantes o casco)", "Peligro de muerte", "Agua potable"], correctAnswerIndex: 1 },
      { id: 9, question: "Un 'Combustible' es:", options: ["Cualquier material que pueda arder (papel, madera, nafta)", "El gas que rodea al fuego", "La chispa inicial", "El agua que apaga"], correctAnswerIndex: 0 },
      { id: 10, question: "El 'Comburente' necesario para el fuego es:", options: ["El calor", "El Oxígeno del aire", "La nafta", "El humo"], correctAnswerIndex: 1 },
      { id: 11, question: "¿Qué debe hacerse primero ante un principio de incendio si es seguro?", options: ["Gritar y correr", "Dar la alarma y evaluar el uso del extintor adecuado", "Abrir todas las ventanas", "Llamar a los padres"], correctAnswerIndex: 1 },
      { id: 12, question: "Para apagar un fuego eléctrico NUNCA se debe usar:", options: ["Polvo químico seco", "Agua (riesgo de electrocución)", "Dióxido de carbono (CO2)", "Mantas ignífugas"], correctAnswerIndex: 1 },
      { id: 13, question: "Al subir una escalera, la regla de los 'Tres Puntos de Apoyo' significa:", options: ["Subir de a tres personas", "Mantener siempre tres extremidades (dos manos/un pie o dos pies/una mano) apoyadas", "Apoyar la cabeza", "Tener tres escalones de distancia"], correctAnswerIndex: 1 },
      { id: 14, question: "Un riesgo físico es:", options: ["Inhalar cloro", "Ruidos excesivos, iluminación deficiente o vibraciones", "Bacterias en el baño", "Mezclar detergentes"], correctAnswerIndex: 1 },
      { id: 15, question: "En un simulacro de evacuación, el 'Punto de Encuentro' es:", options: ["La oficina de dirección", "Un lugar seguro y abierto previamente designado fuera del edificio", "La esquina de la escuela", "El aula de cada uno"], correctAnswerIndex: 1 },
      { id: 16, question: "¿Por qué NO se debe correr durante una evacuación?", options: ["Porque es de mala educación", "Para evitar tropiezos, caídas y pánico masivo", "Porque se cansan los alumnos", "No hay razón, se debe correr"], correctAnswerIndex: 1 },
      { id: 17, question: "Una puerta de emergencia debe abrirse siempre:", options: ["Hacia adentro", "Hacia afuera (en el sentido de la evacuación)", "Hacia arriba", "Debe estar cerrada con llave"], correctAnswerIndex: 1 },
      { id: 18, question: "El mantenimiento preventivo de los extintores debe ser:", options: ["Cada 10 años", "Anual (carga) con controles trimestrales de presión", "Solo cuando se usan", "Cuando lo diga el portero"], correctAnswerIndex: 1 },
      { id: 19, question: "Si hay humo en un pasillo durante la salida, se recomienda:", options: ["Caminar derecho", "Desplazarse agachado o gateando (el aire limpio está cerca del suelo)", "Tapar el humo con un trapo", "Correr saltando"], correctAnswerIndex: 1 },
      { id: 20, question: "Un auxiliar debe revisar periódicamente que los pasillos de salida estén:", options: ["Llenos de muebles viejos", "Libres de obstáculos y bien iluminados", "Cerrados con candado por seguridad", "Mojados para que no haya polvo"], correctAnswerIndex: 1 }
    ],
    8: [
      { id: 1, question: "Un 'Área Crítica' en la escuela, que requiere desinfección frecuente, es:", options: ["El patio de juegos", "Baños y comedores", "La sala de profesores", "El estacionamiento"], correctAnswerIndex: 1 },
      { id: 2, question: "Para desinfectar un inodoro se recomienda usar:", options: ["Solo detergente neutro", "Solución de hipoclorito (lavandina) a 1000 ppm", "Alcohol puro al 96%", "Aromatizante de ambientes"], correctAnswerIndex: 1 },
      { id: 3, question: "El flujo correcto de limpieza es siempre:", options: ["De abajo hacia arriba", "Desde lo más limpio hacia lo más sucio", "Desde el pasillo hacia el aula", "Al azar según el tiempo disponible"], correctAnswerIndex: 1 },
      { id: 4, question: "En un laboratorio escolar, las computadoras y equipos electrónicos se limpian con:", options: ["Agua y jabón", "Alcohol al 70% aplicado en un paño seco", "Lavandina diluida", "No se deben limpiar nunca"], correctAnswerIndex: 1 },
      { id: 5, question: "Un 'Punto de Alta Carga' bacteriana en un baño es:", options: ["El espejo", "La grifería y el picaporte", "La rejilla de ventilación", "El techo"], correctAnswerIndex: 1 },
      { id: 6, question: "La limpieza de la cocina escolar debe realizarse:", options: ["Una vez al día al terminar", "Constantemente, antes, durante y después del servicio", "Solo cuando hay inspección", "Los fines de semana"], correctAnswerIndex: 1 },
      { id: 7, question: "Las 'Aulas' son consideradas áreas:", options: ["Críticas", "Semicríticas", "No críticas", "De total libertad"], correctAnswerIndex: 1 },
      { id: 8, question: "El barrido de un aula debe hacerse:", options: ["Con escoba de paja", "Con mopa humedecida para no suspender polvo", "Con aire comprimido", "Solo una vez por mes"], correctAnswerIndex: 1 },
      { id: 9, question: "La desinfección de picaportes, interruptores y teclados debe ser:", options: ["Diaria en épocas de brotes", "Semanal", "Mensual", "Opcional"], correctAnswerIndex: 0 },
      { id: 10, question: "En un gimnasio escolar colchonetas y materiales se limpian con:", options: ["Agua pura", "Solución desinfectante suave y secado", "Lavandina pura", "No se limpian por el sudor"], correctAnswerIndex: 1 },
      { id: 11, question: "El orden de limpieza de una habitación es:", options: ["Techo, paredes, superficies, piso", "Piso, superficies, paredes", "Superficies, techo, piso", "Solo el piso"], correctAnswerIndex: 0 },
      { id: 12, question: "La ventilación forzada o natural de las áreas críticas sirve para:", options: ["Ahorrar luz", "Reducir la carga de patógenos en el aire y eliminar olores", "Que el auxiliar no tenga calor", "Que entren pájaros"], correctAnswerIndex: 1 },
      { id: 13, question: "Los tachos de basura en los baños deben:", options: ["Estar abiertos", "Tener tapa y bolsa, y vaciarse diariamente o más", "Ser de cartón", "Vaciarse solo cuando se llenan"], correctAnswerIndex: 1 },
      { id: 14, question: "La limpieza de vidrios internos se considera una tarea:", options: ["Diaria", "Semanal o quincenal", "De fin de año", "No es tarea del auxiliar"], correctAnswerIndex: 1 },
      { id: 15, question: "¿Qué es un 'Aromatizante'?", options: ["Un desinfectante potente", "Un producto que solo enmascara olores pero no limpia ni desinfecta", "Una mezcla de amoníaco con limón", "Un tipo de jabón"], correctAnswerIndex: 1 },
      { id: 16, question: "En oficinas administrativas, los papeles deben:", options: ["Tirarse todos", "No tocarse salvo que sea para limpiar el mueble con permiso", "Ordenarse por color", "Mojarse con detergente"], correctAnswerIndex: 1 },
      { id: 17, question: "Los filtros de aire acondicionado deben:", options: ["Limpiarse periódicamente para evitar bacterias y hongos", "Cambiarse cada 10 años", "Pintarse", "No tienen importancia"], correctAnswerIndex: 0 },
      { id: 18, question: "Un 'Protocolo de Limpieza' es:", options: ["Un saludo formal", "Un documento escrito con pasos e instrucciones obligatorias", "Una sugerencia", "Un tipo de detergente"], correctAnswerIndex: 1 },
      { id: 19, question: "La limpieza de la 'Secretaría' requiere:", options: ["Hacer mucho ruido", "Discreción, cuidado de equipos y orden", "Usar manguera", "No limpiar nunca"], correctAnswerIndex: 1 },
      { id: 20, question: "Al finalizar la jornada en un área crítica, el auxiliar debe:", options: ["Irse rápido", "Reponer insumos (jabón, papel) y dejar todo desinfectado para el turno siguiente", "Apagar el agua solamente", "Dejar los baldes con agua sucia"], correctAnswerIndex: 1 }
    ],
    9: [
      { id: 1, question: "El Plan Diario de Limpieza del auxiliar debe priorizar:", options: ["Los vidrios de las ventanas", "Baños, aulas y cocina", "La poda del jardín", "El orden de la biblioteca"], correctAnswerIndex: 1 },
      { id: 2, question: "¿Por qué el abuso de detergente es una mala práctica?", options: ["Porque deja olor a rico", "Dificulta el enjuague y desperdicia recursos del Estado", "Porque el piso queda demasiado brillante", "Para que los alumnos no resbalen"], correctAnswerIndex: 1 },
      { id: 3, question: "La firma en una planilla de registros (Checklist) sirve como:", options: ["Un adorno administrativo", "Prueba legal del cumplimiento de la función", "Un saludo a la dirección", "Parte del boletín escolar"], correctAnswerIndex: 1 },
      { id: 4, question: "Una tarea de limpieza SEMANAL podría ser:", options: ["Higiene del baño", "Limpieza de vidrios y techos internos", "Barrido del aula", "Vaciado de tachos de residuos"], correctAnswerIndex: 1 },
      { id: 5, question: "Ante un brote de gastroenteritis, el auxiliar debe:", options: ["Pedir licencia inmediata", "Intensificar los registros y frecuencia de desinfección", "No hacer nada distinto", "Cerrar la cocina sin avisar"], correctAnswerIndex: 1 },
      { id: 6, question: "La 'Gestión de Stock' implica:", options: ["Tener muchísima cantidad de todo", "Tener lo justo y necesario pidiendo con tiempo antes de que se agote", "Esconder los productos", "Regalar insumos"], correctAnswerIndex: 1 },
      { id: 7, question: "Un auxiliar profesional debe organizar su carro de limpieza:", options: ["Poniendo todo mezclado", "Con productos rotulados y agrupados por tipo (limpieza/desinfección)", "Solo con agua", "En una bolsa de plástico"], correctAnswerIndex: 1 },
      { id: 8, question: "¿Qué se debe registrar en una planilla de limpieza?", options: ["El clima", "Hora, área, tarea realizada y firma del responsable", "Cuántos alumnos asistieron", "Qué comió el cocinero"], correctAnswerIndex: 1 },
      { id: 9, question: "La economía de movimientos en la limpieza ayuda a:", options: ["Trabajar menos", "Reducir el cansancio y mejorar la eficiencia del tiempo", "Hacer más ruido", "Gastar más agua"], correctAnswerIndex: 1 },
      { id: 10, question: "Ante la falta de un insumo crítico (ej: lavandina), el auxiliar debe:", options: ["No limpiar", "Informar inmediatamente a la dirección para su reposición inmediata", "Usar perfume", "Traer de su casa"], correctAnswerIndex: 1 },
      { id: 11, question: "Una tarea MENSUAL típica es:", options: ["Limpieza de rejillas de desagüe y profundidad", "Barrido del patio", "Lavado de manos", "Cierre de llaves de gas"], correctAnswerIndex: 0 },
      { id: 12, question: "¿Por qué es importante seguir un cronograma?", options: ["Para no aburrirse", "Para garantizar que todas las áreas reciban la higiene necesaria en el tiempo correcto", "Para que los jefes no se enojen", "No es importante"], correctAnswerIndex: 1 },
      { id: 13, question: "El 'Check-list' de entrada sirve para:", options: ["Saber la hora", "Verificar que el edificio esté en condiciones seguras de apertura", "Anotar chismes", "Pedir permiso"], correctAnswerIndex: 1 },
      { id: 14, question: "La coordinación con el personal de cocina sirve para:", options: ["Comer antes", "Limpiar el comedor cuando no entorpezca el servicio de comida", "Hablar de los docentes", "No saludarse"], correctAnswerIndex: 1 },
      { id: 15, question: "Un 'Parte de Novedades' es un documento donde se anota:", options: ["Noticias del diario", "Cualquier rotura, desperfecto o eventualidad observada", "La lista del supermercado", "Nombres de alumnos"], correctAnswerIndex: 1 },
      { id: 16, question: "La limpieza después de un evento (ej: fiesta patronal) se planifica como:", options: ["Una tarea diaria normal", "Una jornada extraordinaria de limpieza profunda", "No se limpia", "Se le pide a los alumnos"], correctAnswerIndex: 1 },
      { id: 17, question: "¿Qué significa 'Estandarizar' una tarea?", options: ["Hacerla siempre de la misma forma eficiente y segura", "Cambiar de técnica cada día", "Hacerla rápido", "Usar máquinas caras"], correctAnswerIndex: 0 },
      { id: 18, question: "La supervisión de la limpieza tiene como fin:", options: ["Castigar", "Asegurar que se cumplan los estándares de salud y seguridad", "Saber quién trabaja más", "No tiene fin"], correctAnswerIndex: 1 },
      { id: 19, question: "Un auxiliar debe asignar prioridades basándose en:", options: ["Su humor", "El riesgo sanitario (más riesgo = más prioridad)", "Lo más fácil primero", "Lo que diga el portero"], correctAnswerIndex: 1 },
      { id: 20, question: "El orden del depósito de limpieza favorece:", options: ["La rapidez para encontrar herramientas y evita accidentes", "Que el inspector no vea nada", "Que haya más lugar para dormir", "El crecimiento de hongos"], correctAnswerIndex: 0 }
    ],
    10: [
      { id: 1, question: "¿Por qué es importante doblar las rodillas al levantar un peso del suelo?", options: ["Para no ensuciarse la ropa", "Para que la fuerza la hagan las piernas y no la zona lumbar", "Para ir más rápido", "No es importante doblar las rodillas"], correctAnswerIndex: 1 },
      { id: 2, question: "La postura correcta para barrer o trapear implica:", options: ["Encorvar la espalda lo más posible", "Mantener la espalda recta y usar un mango de longitud adecuada", "Girar solo la cintura bruscamente", "Hacerlo sentado"], correctAnswerIndex: 1 },
      { id: 3, question: "Al cargar un bidón pesado, este debe mantenerse:", options: ["Lejos del cuerpo, con los brazos estirados", "Pegado al pecho (centro de gravedad)", "Sobre la cabeza", "Arrastrándolo con un pie"], correctAnswerIndex: 1 },
      { id: 4, question: "Un riesgo ergonómico no atendido puede derivar en:", options: ["Mejor rendimiento físico", "Hernias de disco y lesiones lumbares crónicas", "Aumento de sueldo", "Cambio de turno"], correctAnswerIndex: 1 },
      { id: 5, question: "La biomecánica de la columna enseña que el mayor esfuerzo debe recaer en:", options: ["Los brazos", "Las articulaciones de las piernas (grandes grupos musculares)", "Los discos intervertebrales", "El cuello"], correctAnswerIndex: 1 },
      { id: 6, question: "La 'Cuna Lumbar' se protege mejor cuando:", options: ["Dormimos boca abajo", "Mantenemos las curvaturas naturales de la espalda durante el esfuerzo", "Usamos faja y levantamos 100kg", "No hacemos ejercicio"], correctAnswerIndex: 1 },
      { id: 7, question: "El calzado ideal para el auxiliar es:", options: ["Zapatos con taco", "Zapatillas de lona", "Calzado de seguridad, antideslizante y con soporte en el arco", "Sandalias"], correctAnswerIndex: 2 },
      { id: 8, question: "¿Qué es el 'Gesto Profesional' en ergonomía?", options: ["Un saludo a los compañeros", "El movimiento técnico optimizado para realizar la tarea con el menor daño físico", "Hacer poses para las fotos", "Limpiar con una sola mano"], correctAnswerIndex: 1 },
      { id: 9, question: "Al trasvasar líquidos de un bidón grande, se recomienda:", options: ["Hacerlo a pulso directamente", "Usar un embudo o bomba manual para evitar posturas forzadas y derrames", "Tirar el líquido desde arriba", "Pedirle a un alumno que sostenga el envase"], correctAnswerIndex: 1 },
      { id: 10, question: "Las pausas activas o de descanso sirven para:", options: ["Perder el tiempo", "Relajar la musculatura tensionada y prevenir lesiones por esfuerzo repetitivo", "Comer dulces", "Hablar por teléfono"], correctAnswerIndex: 1 },
      { id: 11, question: "El mango de la mopa debe llegar idealmente a la altura de:", options: ["La cintura", "El mentón o la nariz del operario", "El pecho solamente", "Por encima de la cabeza"], correctAnswerIndex: 1 },
      { id: 12, question: "Para limpiar vidrios en altura, lo más ergonómico es:", options: ["Subirse a una silla", "Usar extensores telescópicos para evitar hiperextensión de hombros", "Estirarse al máximo", "Saltar"], correctAnswerIndex: 1 },
      { id: 13, question: "El 'Síndrome del Túnel Carpiano' es una lesión común en la mano por:", options: ["Falta de higiene", "Movimientos repetitivos de muñeca y agarre forzado", "Usar guantes muy grandes", "Golpearse con el balde"], correctAnswerIndex: 1 },
      { id: 14, question: "Un factor de riesgo ergonómico ambiental es:", options: ["La música fuerte", "La iluminación deficiente que obliga a posturas raras para ver", "El color de las paredes", "La falta de jabón"], correctAnswerIndex: 1 },
      { id: 15, question: "Al empujar un carro de limpieza, se debe:", options: ["Tirar de él hacia atrás", "Empujar con el peso del cuerpo y los brazos cerca del tronco", "Correr con el carro", "Llevarlo con una mano libre"], correctAnswerIndex: 1 },
      { id: 16, question: "La fatiga muscular acumulada aumenta el riesgo de:", options: ["Dormir mejor", "Accidentes por falta de coordinación o reflejos", "Ganar más fuerza", "No influye en nada"], correctAnswerIndex: 1 },
      { id: 17, question: "Si un objeto pesa más de 25 kg (hombres) o 15 kg (mujeres), se debe:", options: ["Levantarlo igual", "Pedir ayuda a otro compañero o usar medios mecánicos (carro)", "Arrastrarlo con los dientes", "Dejarlo donde está"], correctAnswerIndex: 1 },
      { id: 18, question: "El estiramiento al final de la jornada ayuda a:", options: ["Crecer más", "Eliminar tensiones musculares y mejorar la recuperación", "No transpirar", "Llegar antes a casa"], correctAnswerIndex: 1 },
      { id: 19, question: "Un diseño ergonómico de la cocina busca:", options: ["Que sea más linda", "Que los utensilios estén a mano evitando agacharse o estirarse de más", "Que sea más grande", "Que tenga mucha luz"], correctAnswerIndex: 1 },
      { id: 20, question: "La salud del auxiliar depende en un 50% del equipo y el otro 50% de:", options: ["Su suerte", "Su compromiso con las técnicas de autocuidado y ergonomía", "Su sueldo", "Lo que digan los manuales"], correctAnswerIndex: 1 }
    ],
    11: [
      { id: 1, question: "El concepto de 'Trabajo Decente' de la OIT implica:", options: ["Trabajar gratis para aprender", "Condiciones de libertad, igualdad, seguridad y dignidad humana", "Trabajar 15 horas por día", "No tener vacaciones"], correctAnswerIndex: 1 },
      { id: 2, question: "La ética profesional del auxiliar exige:", options: ["Comentar los problemas de los alumnos con los vecinos", "Reserva profesional sobre datos sensibles y trato respetuoso", "Cobrar por favores especiales", "Llevarse insumos para uso personal"], correctAnswerIndex: 1 },
      { id: 3, question: "En un entorno escolar, el auxiliar debe:", options: ["Ignorar a los alumnos", "Ser un ejemplo de ciudadanía y honestidad", "Poner apodos a los compañeros", "Intervenir en peleas físicamente"], correctAnswerIndex: 1 },
      { id: 4, question: "La equidad de género en la limpieza institucional significa:", options: ["Que solo las mujeres limpian", "Que la tarea no tiene género y se reparte equitativamente", "Que los hombres solo hacen mantenimiento eléctrico", "Que el sueldo depende del género"], correctAnswerIndex: 1 },
      { id: 5, question: "Un pilar ético del egresado es:", options: ["Cumplir con el menor esfuerzo posible", "Cuidar los bienes públicos como propios", "Llegar siempre tarde", "Criticar a la instructora"], correctAnswerIndex: 1 },
      { id: 6, question: "La 'Discriminación' en el ámbito laboral es:", options: ["Elegir a los amigos", "Cualquier distinción que excluya a alguien por su origen, religión, género o físico", "Tener diferentes sueldos por diferentes tareas", "No saludar"], correctAnswerIndex: 1 },
      { id: 7, question: "El auxiliar educa a los alumnos a través de:", options: ["Su ejemplo de conducta, orden y respeto por el espacio común", "Darles sermones", "Ponerles notas", "Llamar a los padres"], correctAnswerIndex: 0 },
      { id: 8, question: "La 'Soberanía Laboral' se refiere a:", options: ["Tener el control total de la escuela", "El derecho del trabajador a ser respetado en su pericia técnica y profesional", "No tener jefes", "Cobrar en dólares"], correctAnswerIndex: 1 },
      { id: 9, question: "¿Qué debe hacer un auxiliar si observa una situación de acoso (Bullying)?", options: ["No intervenir", "Dar aviso inmediato al docente o autoridad directiva a cargo", "Reírse para quedar bien con los alumnos", "Ponerse del lado del que agrede"], correctAnswerIndex: 1 },
      { id: 10, question: "El 'Patrimonio Público' de la escuela (edificio, muebles) le pertenece a:", options: ["Al director", "A toda la sociedad/comunidad, y el auxiliar es su guardián", "Al intendente", "A nadie"], correctAnswerIndex: 1 },
      { id: 11, question: "La 'Puntualidad' es un valor ético porque:", options: ["Evita que te descuenten dinero", "Muestra respeto por el tiempo de los compañeros y la organización", "Es una obligación militar", "Sirve para tomar café antes de empezar"], correctAnswerIndex: 1 },
      { id: 12, question: "Un egresado del CFP debe ser:", options: ["Un autodidacta sin reglas", "Un profesional consciente de su rol social en la salud institucional", "Alguien que sabe pasar el trapo solamente", "Un empleado de paso"], correctAnswerIndex: 1 },
      { id: 13, question: "La honestidad en el manejo de insumos significa:", options: ["No robar bidones", "Usar la cantidad justa para el bien común evitando el desperdicio", "Usar lo más caro siempre", "No usar nada para que dure más"], correctAnswerIndex: 1 },
      { id: 14, question: "El trato hacia las personas con discapacidad en la escuela debe ser:", options: ["De lástima", "De respeto, inclusión y asistencia si es requerida su labor", "Ignorarlos para no molestarlos", "Deber de sacarlos afuera"], correctAnswerIndex: 1 },
      { id: 15, question: "Un auxiliares es un promotor de salud porque:", options: ["Receta medicamentos", "Previene enfermedades mediante la higiene y el orden", "Es médico frustrado", "Vende suplementos vitamínicos"], correctAnswerIndex: 1 },
      { id: 16, question: "La 'Solidaridad' entre auxiliares consiste en:", options: ["Cubrir las faltas injustificadas", "Cooperar en tareas pesadas y compartir conocimientos técnicos", "Hacer el trabajo del otro siempre", "Irse juntos a casa"], correctAnswerIndex: 1 },
      { id: 17, question: "La relación con los gremios o sindicatos debe ser:", options: ["De pelea constante", "De participación informada en defensa de los derechos laborales", "Obligatoria", "Inexistente"], correctAnswerIndex: 1 },
      { id: 18, question: "El 'Vínculo Pedagógico' del auxiliar con el alumno es:", options: ["Inexistente", "Indirecto, a través del cuidado del ambiente donde aprende", "Directo, dándole órdenes", "Solo para retos"], correctAnswerIndex: 1 },
      { id: 19, question: "Un egresado dignifica su tarea cuando:", options: ["Se queja del sueldo", "Realiza su trabajo con excelencia profesional y compromiso ético", "Limpia rápido", "Tiene muchas licencias"], correctAnswerIndex: 1 },
      { id: 20, question: "La ética en la limpieza institucional implica:", options: ["Hacer que parezca limpio", "Limpiar donde no se ve con el mismo rigor que donde se ve", "Limpiar solo lo que pide el jefe", "No ensuciarse las manos"], correctAnswerIndex: 1 }
    ],
    12: [
      { id: 1, question: "En el sistema GIRSU, la BOLSA VERDE se utiliza para:", options: ["Restos de comida y basura húmeda", "Reciclables limpios y secos (plástico, cartón, metal)", "Residuos patogénicos", "Pilas y baterías"], correctAnswerIndex: 1 },
      { id: 2, question: "Para evitar accidentes con el personal de recolección, nunca se debe:", options: ["Separar la basura", "Comprimir las bolsas de residuos con los pies (riesgo de cortes)", "Atar las bolsas", "Sacar la basura de noche"], correctAnswerIndex: 1 },
      { id: 3, question: "¿Qué porcentaje aproximado de residuos escolares se puede reducir mediante el compost?", options: ["5%", "Hasta un 40%", "90%", "0%"], correctAnswerIndex: 1 },
      { id: 4, question: "Los residuos de riesgo sanitario (toallitas, pañales) deben ir en:", options: ["Bolsa verde de reciclables", "Bolsas resistentes y bien atadas (residuo común/negra)", "Un tacho abierto en el patio", "Directamente a la cloaca"], correctAnswerIndex: 1 },
      { id: 5, question: "El auxiliar puede liderar el compromiso ambiental escolar mediante:", options: ["El uso de aerosoles contaminantes", "La clasificación en origen y proyectos de reciclaje/compost", "Quemar la basura en el patio", "No usar agua para limpiar"], correctAnswerIndex: 1 },
      { id: 6, question: "La sigla GIRSU significa:", options: ["Gestión Integral de Residuos Sólidos Urbanos", "Gran Inventario de Residuos Sucios de Usuarios", "Gerencia de Interés de Reciclaje de Suelo Único", "Grupo de Intrahospitalarios de Riesgo Sumamente Urgente"], correctAnswerIndex: 0 },
      { id: 7, question: "Un residuo 'Reciclable' debe estar:", options: ["Mojado y sucio", "Limpio y seco", "Bajo tierra", "En una caja de madera"], correctAnswerIndex: 1 },
      { id: 8, question: "Los vidrios rotos en la basura deben:", options: ["Tirarse sueltos", "Envolverse en cartón o papel grueso y rotularse como 'vidrios rotos'", "Dejarse en el patio", "Mezclarse con la comida"], correctAnswerIndex: 1 },
      { id: 9, question: "La 'Basura Orgánica' es aquella que:", options: ["Se puede reciclar industrialmente", "Contiene restos de alimentos, cáscaras, etc. y se biodegrada", "Son vidrios y latas", "Viene de los baños"], correctAnswerIndex: 1 },
      { id: 10, question: "Las pilas y baterías deben:", options: ["Tirarse en la bolsa verde", "Gestionarse como residuos especiales (separados del resto)", "Enterrarse en el jardín de la escuela", "Tirarse al inodoro"], correctAnswerIndex: 1 },
      { id: 11, question: "El 'Lixiviado' es:", options: ["Un tipo de abono", "El líquido contaminante que sale de la basura acumulada", "Un producto de limpieza", "El papel reciclado"], correctAnswerIndex: 1 },
      { id: 12, question: "El compostaje escolar transforma restos de cocina en:", options: ["Plástico", "Abono orgánico (tierra fértil)", "Gas natural", "Basura negra"], correctAnswerIndex: 1 },
      { id: 13, question: "Las tres R de la ecología son:", options: ["Reír, Rezar, Reinar", "Reducir, Reutilizar, Reciclar", "Recoger, Romper, Revolver", "Rápido, Raro, Rico"], correctAnswerIndex: 1 },
      { id: 14, question: "Un auxiliar comprometido debe evitar el uso de:", options: ["Detergente", "Productos en aerosol con CFC o excesivos envoltorios plásticos", "Agua potable", "Escobas"], correctAnswerIndex: 1 },
      { id: 15, question: "Los residuos patogénicos (sangre visible) en instituciones no salud se deben:", options: ["Tirar a la calle", "Colocar en doble bolsa roja o negra muy resistente y bien sellada", "Lavar el residuo", "Quemar"], correctAnswerIndex: 1 },
      { id: 16, question: "La clasificación de residuos reduce:", options: ["El trabajo del auxiliar", "La contaminación ambiental y la cantidad de basura en rellenos sanitarios", "El hambre", "La cantidad de alumnos"], correctAnswerIndex: 1 },
      { id: 17, question: "¿Qué NO se debe poner nunca en una compostera?", options: ["Cáscaras de fruta", "Restos de carne, grasas, lácteos o excremento de mascotas", "Yerba mate", "Hojas secas"], correctAnswerIndex: 1 },
      { id: 18, question: "Reciclar papel salva:", options: ["Animales salvajes", "Árboles y ahorra agua y energía en su fabricación", "El tiempo del director", "La cooperadora"], correctAnswerIndex: 1 },
      { id: 19, question: "El auxiliar actúa como 'Primer Eslabón' del reciclaje porque:", options: ["Compra los materiales", "Inicia la separación en origen dentro de la escuela", "Vende la basura", "Limpia los camiones"], correctAnswerIndex: 1 },
      { id: 20, question: "La 'Economía Circular' propone que el residuo se convierta en:", options: ["Humo", "Materia prima para un nuevo producto", "Un problema para el futuro", "Dinero tirado"], correctAnswerIndex: 1 }
    ],
    13: [
      { id: 1, question: "Ante una inundación en la escuela, la primera medida de seguridad es:", options: ["Ponerse a secar con la mopa", "Corte inmediato de la energía eléctrica", "Abrir todas las canillas", "Continuar trabajando normalmente"], correctAnswerIndex: 1 },
      { id: 2, question: "Después de una inundación, la desinfección recomendada es con lavandina a:", options: ["100 ppm", "2000 ppm (concentración alta)", "Agua tibia sola", "Detergente de pino"], correctAnswerIndex: 1 },
      { id: 3, question: "En caso de un brote infectocontagioso en el aula, el auxiliar intensifica:", options: ["La limpieza de techos", "La desinfección de puntos de contacto frecuente (picaportes, teclados)", "El encerado de pisos", "La pintura de las paredes"], correctAnswerIndex: 1 },
      { id: 4, question: "Durante un simulacro de evacuación, el rol del auxiliar incluye:", options: ["Ser el último en salir sin avisar", "Asegurarse de que baños y depósitos estén vacíos", "Esconderse en la cocina", "No participar"], correctAnswerIndex: 1 },
      { id: 5, question: "Ante un derrame de químico peligroso, se debe:", options: ["Tapar con un trapo y seguir", "Ventilar y usar el absorbente inerte según protocolo de bioseguridad", "Lavar con mucha agua y detergente sin guantes", "Oler el vapor para identificarlo"], correctAnswerIndex: 1 },
      { id: 6, question: "En una inundación por desborde de pozos ciegos, el riesgo es:", options: ["Biológico por bacterias entéricas (ej: Cólera, Hepatitis A)", "Físico por la humedad", "Químico por los detergentes", "No hay riesgo grave"], correctAnswerIndex: 0 },
      { id: 7, question: "La ventilación después de un derrame químico debe ser:", options: ["Nula", "Cruzada y exhaustiva antes de ingresar", "Solo con ventilador de techo", "Con la puerta cerrada"], correctAnswerIndex: 1 },
      { id: 8, question: "Ante la presencia de una sospecha de escape de gas, se debe:", options: ["Encender la luz", "No accionar interruptores eléctricos, ventilar y cerrar la llave de paso general", "Llamar por celular al lado de la hornalla", "Prender un fósforo para ver"], correctAnswerIndex: 1 },
      { id: 9, question: "Si un auxiliar se corta con un elemento punzante, ¿qué debe hacer?", options: ["Lavar con abundante agua y jabón, y realizar la denuncia a la ART", "Chuparse el dedo", "Ponerse una curita y seguir trabajando", "No decir nada"], correctAnswerIndex: 0 },
      { id: 10, question: "El 'Aislamiento Preventivo' en la escuela sirve para:", options: ["Castigar a los alumnos", "Contener la propagación de una enfermedad hasta la llegada de salud/padres", "Que no se escuchen ruidos", "Estar solos"], correctAnswerIndex: 1 },
      { id: 11, question: "¿Qué es un 'Absorbente Inerte'?", options: ["Agua pura", "Material que atrapa un líquido sin reaccionar con él (ej: arena, aserrín seco)", "Detergente de pino", "Un trapo viejo"], correctAnswerIndex: 1 },
      { id: 12, question: "Ante un brote de piojos (pediculosis), el auxiliar:", options: ["Corta el pelo", "Limpia y aspira profundamente las superficies de contacto y textiles", "Usa veneno en aerosol", "No hace nada"], correctAnswerIndex: 1 },
      { id: 13, question: "La 'Contingencia' se diferencia de la 'Emergencia' en que:", options: ["Es más grave", "Es un evento previsto en un plan para mitigar daños", "Es un accidente doméstico", "Ocurre solo de noche"], correctAnswerIndex: 1 },
      { id: 14, question: "Si se corta el agua en la escuela por tiempo prolongado, se debe:", options: ["Seguir igual", "Suspender actividades si no se garantiza la higiene básica (baños/cocina)", "Traer agua del río", "No lavarse las manos"], correctAnswerIndex: 1 },
      { id: 15, question: "El equipo de emergencia del auxiliar debe incluir:", options: ["Linterna, guantes resistentes y planilla de contactos", "Comida", "Zapatos de fiesta", "Libros"], correctAnswerIndex: 0 },
      { id: 16, question: "Ante un derrame de aceite en la cocina, se utiliza:", options: ["Mucha agua caliente", "Material absorbente (papel/arena) y luego detergente desengrasante", "Solo el trapo de piso", "Harina para que se pegue"], correctAnswerIndex: 1 },
      { id: 17, question: "La 'Prioridad Sanitaria' en una catástrofe es:", options: ["Cuidar los muebles", "Preservar la vida y la integridad física de las personas", "Guardar los insumos", "Cerrar la puerta con llave"], correctAnswerIndex: 1 },
      { id: 18, question: "Un brote epidemiológico es:", options: ["Una flor nueva", "La aparición repentina de muchos casos de una enfermedad en un grupo", "Un tipo de veneno", "Una ley"], correctAnswerIndex: 1 },
      { id: 19, question: "La limpieza 'Saturada' consiste en:", options: ["No limpiar nada", "Inundar el área con desinfectante en casos de contaminación extrema", "Usar mucho jabón", "Cerrar el área"], correctAnswerIndex: 1 },
      { id: 20, question: "Al concluir una contingencia, el auxiliar debe:", options: ["Irse a descansar", "Reponer el kit de emergencias y evaluar la eficacia del plan con el equipo", "No hablar de lo que pasó", "Tirar todo"], correctAnswerIndex: 1 }
    ],
    14: [
      { id: 1, question: "¿Cuál es el perfil profesional de un egresado de este curso?", options: ["Solo un limpiador", "Un agente de salud e higiene institucional capacitado", "Un administrativo", "Un docente"], correctAnswerIndex: 1 },
      { id: 2, question: "La formación de 100 horas cátedra habilita para:", options: ["Ser director", "Sumar puntaje en el listado de aspirantes a auxiliares de la DGCyE", "Ser docente de aula", "No tiene validez"], correctAnswerIndex: 1 },
      { id: 3, question: "La 'Soberanía Técnica' consiste en:", options: ["Saber inglés", "Conocer los fundamentos científicos y técnicos del oficio para decidir correctamente", "Mandar a los compañeros", "Usar máquinas caras"], correctAnswerIndex: 1 },
      { id: 4, question: "¿Cuál es el mensaje final de la Instructora Maricel Gauna?", options: ["Que se diviertan", "Que se transformen en profesionales que cuiden la vida en la escuela", "Que busquen otro trabajo", "Que no estudien más"], correctAnswerIndex: 1 },
      { id: 5, question: "Un pilar de la formación recibida es:", options: ["La velocidad", "La bioseguridad como cultura", "El ahorro extremo de agua", "El uso de trapos de piso"], correctAnswerIndex: 1 },
      { id: 6, question: "Integrar saberes significa:", options: ["Copiar de los libros", "Relacionar la ley, la química y la práctica diaria en una sola acción profesional", "Hacer todo al mismo tiempo", "No separar las materias"], correctAnswerIndex: 1 },
      { id: 7, question: "El éxito del auxiliar se mide por:", options: ["El brillo del piso", "La prevención de enfermedades y el mantenimiento seguro del edificio", "Que el jefe no grite", "Cuántos amigos tiene"], correctAnswerIndex: 1 },
      { id: 8, question: "¿Qué implica la 'Responsabilidad Civil' del cargo?", options: ["Pagar impuestos", "Responder por los daños causados por negligencia o incumplimiento de tareas", "Ser amable", "Votar"], correctAnswerIndex: 1 },
      { id: 9, question: "La formación continua es necesaria porque:", options: ["Los virus y los productos químicos evolucionan", "Para no aburrirse", "Para tener más diplomas", "Es obligatoria por ley"], correctAnswerIndex: 0 },
      { id: 10, question: "El auxiliar en la Provincia de Buenos Aires se rige por la ley:", options: ["10.430", "11.723", "20.744", "Ley de la selva"], correctAnswerIndex: 0 },
      { id: 11, question: "Un examen sumativo final evalúa:", options: ["La memoria solamente", "La capacidad de aplicar lo aprendido en situaciones reales", "La ortografía", "La velocidad de escritura"], correctAnswerIndex: 1 },
      { id: 12, question: "La 'Identidad del Auxiliar' se basa en:", options: ["Su sueldo", "Su rol como nexo entre el edificio y la comunidad educativa", "Su uniforme", "Su horario"], correctAnswerIndex: 1 },
      { id: 13, question: "El uso de la terminología técnica correcta sirve para:", options: ["Verse importante", "Comunicarse profesionalmente con directivos, médicos de ART y colegas", "Confundir al personal", "No sirve"], correctAnswerIndex: 1 },
      { id: 14, question: "El mayor capital de un auxiliar egresado es:", options: ["Su mopa", "Su conocimiento y criterio profesional", "Su antigüedad", "Sus contactos"], correctAnswerIndex: 1 },
      { id: 15, question: "¿Qué es la 'Habitabilidad'?", options: ["Poder dormir en la escuela", "Las condiciones mínimas de higiene y seguridad para que el edificio sea usado", "Pagar el alquiler", "Tener muchas llaves"], correctAnswerIndex: 1 },
      { id: 16, question: "El auxiliar profesional actúa de forma:", options: ["Reactiva", "Proactiva (preventiva)", "Pasiva", "Inactiva"], correctAnswerIndex: 1 },
      { id: 17, question: "Aprender bioseguridad protege al auxiliar de:", options: ["El despido", "Infecciones, intoxicaciones y lesiones crónicas", "El aburrimiento", "La lluvia"], correctAnswerIndex: 1 },
      { id: 18, question: "La 'Cultura de Prevención' debe ser compartida con:", options: ["Nadie", "Toda la comunidad educativa (docentes, alumnos, padres)", "Solo con el sindicato", "Con la familia del auxiliar"], correctAnswerIndex: 1 },
      { id: 19, question: "El diploma del CFP es un reconocimiento a:", options: ["La asistencia", "El esfuerzo por profesionalizar una tarea esencial para la sociedad", "La suerte", "El pago de cuotas"], correctAnswerIndex: 1 },
      { id: 20, question: "La frase 'No solo pasamos el trapo' resume:", options: ["Que el trabajo es poco", "La complejidad y trascendencia de la labor del auxiliar profesional", "Que usamos aspiradoras", "Que estamos cansados"], correctAnswerIndex: 1 }
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
Es el accidente más frecuente en el ámbito escolar. Causado por:
- Pisos húmedos o recién encerados sin señalización.
- Cordones de zapatillas desatados o calzado inadecuado.
- Obstáculos en zonas de tránsito (mochilas, cables, juguetes).
- Iluminación deficiente en pasillos o escaleras.
El auxiliar debe señalizar con el cartel amarillo de 'Piso Resbaladizo' ANTES de comenzar la tarea de limpieza.

2. SEÑALÉTICA DE SEGURIDAD (NORMA IRAM):
- Rojo: Indica prohibición (ej: No pasar) o ubicación de elementos de lucha contra incendio (matafuegos, nichos hidrantes).
- Amarillo: Indica advertencia o precaución (ej: Riesgo eléctrico, Piso resbaladizo).
- Verde: Indica información de emergencia, rutas de escape, salidas y botiquines.
- Azul: Indica obligación (ej: Uso de guantes, Protección ocular).

3. PREVENCIÓN DE INCENDIOS (EL TRIÁNGULO DEL FUEGO):
Para que se inicie un fuego se necesitan tres componentes simultáneos:
- Combustible: Sólidos (papel, madera), Líquidos (nafta, alcohol) o Gases.
- Comburente: El oxígeno del aire.
- Calor: Energía de activación (chispa, llama, cortocircuito).
Si eliminamos uno de estos puntos, el fuego se apaga.

4. USO DEL MATAFUEGO (EXTINTOR ABC):
El tipo ABC es el más común porque sirve para fuegos de sólidos, líquidos inflamables y equipos eléctricos.
Técnica PAS:
- P: Quitar el precinto y seguro.
- A: Apuntar a la base de las llamas.
- S: Presionar la palanca y disparar en forma de zigzag o abanico.
NUNCA use agua en fuegos eléctricos (clase C) debido al riesgo de electrocución.` , questions: getQuestionsForClass(7) },
  { id: 8, title: "Desinfección de Áreas Críticas Especializadas", description: "Baños, laboratorios y oficinas administrativas.", keyword: "TECNICAS", duration: "7.1h", icon: "droplets", content: `PROTOCOLOS POR ÁREAS: MAPA DE HIGIENE PROFESIONAL

El auxiliar debe comprender que no todas las áreas requieren el mismo rigor desinfectante, optimizando recursos y tiempos.

1. ÁREA CRÍTICA (ALTO RIESGO):
Baños, cocinas, comedores y consultorio médico escolar.
- Frecuencia: Cada 2 horas o después de cada uso masivo (recreos).
- Protocolo: Limpieza mecánica profunda + Desinfección con Hipoclorito de sodio (lavandina) a 1000 ppm. 
- Puntos Críticos: Picaportes, grifería, mochila del inodoro, tablas de inodoros y bachas.

2. ÁREA SEMICRÍTICA (RIESGO INTERMEDIO):
Aulas, bibliotecas, laboratorios de informática y gimnasios.
- Frecuencia: Diaria (al finalizar la jornada).
- Protocolo: Barrido húmedo (mopa) + limpieza de superficies con detergente neutro. Desinfección periódica en zonas de contacto frecuente (teclados, pupitres).
- Laboratorios: Uso de alcohol al 70% para equipos electrónicos (nunca agua directa).

3. ÁREA NO CRÍTICA (BAJO RIESGO):
Pasillos, oficinas administrativas, patios abiertos y depósitos.
- Frecuencia: Diaria o según necesidad.
- Protocolo: Limpieza mecánica (barrido húmedo y eliminación de residuos). La desinfección es opcional salvo en situaciones de brote epidemiológico.

4. FLUJOS DE TRABAJO (LA REGLA DE ORO):
La limpieza profesional SIEMPRE se realiza:
- De lo más limpio a lo más sucio: Para evitar que la suciedad de un área contaminada pase a una limpia.
- De arriba hacia abajo: Primero techos, luego paredes y mobiliarios, y finalmente el piso.
- De adentro hacia afuera: Empezando por el fondo de la habitación hacia la puerta.` , questions: getQuestionsForClass(8) },
  { id: 9, title: "Planificación Estratégica L+D", description: "Cronogramas de tareas y gestión de recursos.", keyword: "PLANES", duration: "7.1h", icon: "list-checks", content: `ORGANIZACIÓN Y PLANIFICACIÓN DE LA TAREA AUXILIAR

La limpieza institucional deja de ser una tarea intuitiva para convertirse en una gestión profesional del tiempo y el insumo.

1. EL CRONOGRAMA DE TAREAS (CALENDARIO):
- Tareas Diarias: Higiene de baños, retiro de basura, barrido húmedo de aulas, limpieza de cocina.
- Tareas Semanales: Limpieza de vidrios internos, techos, desinfección profunda de depósitos, limpieza de ventiladores.
- Tareas Mensuales/Trimestrales: Limpieza de tanques de agua (supervisión), limpieza de canaletas, desmalezado bajo, encerado profundo de pisos de alto tránsito.

2. GESTIÓN RESPONSABLE DEL INSUMO:
El auxiliar debe saber dosificar. 
- El exceso de detergente no limpia mejor: Genera espuma excesiva que retrasa el enjuague, deja residuos pegajosos que atraen más suciedad y desperdicia recursos públicos.
- Almacenamiento: Rotación PEPS (Lo primero que entra es lo primero que sale) para evitar vencimientos de productos.

3. REGISTROS Y CONTROL (CHECKLIST):
Cada área debe contar con una planilla de control firmada por el auxiliar.
- Función Legal: Es la prueba documental de que la institución cumple con los protocolos ante inspecciones o casos de enfermedades.
- Función de Gestión: Permite al equipo directivo saber qué falta y qué áreas necesitan refuerzo inmediato.` , questions: getQuestionsForClass(9) },
  { id: 10, title: "Ergonomía y Cuidado de la Columna", description: "Técnicas de carga y postura para evitar invalidez.", keyword: "POSTURA", duration: "7.1h", icon: "activity", content: `EL CUERPO COMO HERRAMIENTA DE TRABAJO: ERGONOMÍA APLICADA

El auxiliar profesional debe entender que su salud es su principal capital. La ergonomía busca adaptar la tarea a la persona, no al revés.

1. BIOMECÁNICA DE LA COLUMNA:
La zona lumbar soporta todo el peso del tronco. Si nos doblamos sin doblar las rodillas, la presión sobre los discos intervertebrales es desproporcionada.
- Regla de Oro: Flexionar rodillas, mantener la espalda recta y el peso pegado al centro de gravedad (el ombligo).

2. CARGA MANUAL DE PESOS (TÉCNICA DE CARGA):
Para levantar un bidón de 20 litros o una caja de insumos:
- Pies separados a lo ancho de hombros para mayor base de sustentación.
- Bajar la cadera doblando rodillas (fuerza en piernas, no en espalda).
- Pegar el objeto al pecho.
- Levantar de forma suave, sin tirones bruscamente.

3. ERGONOMÍA DE BARREDO Y TRAPEADO:
- Longitud del mango: El mango del escobillón o la mopa debe llegar idealmente a la altura del mentón o la nariz. Si es corto, obliga a curvar la espalda.
- Movimiento: Mover el cuerpo de forma lateral en bloque, no rotando solo la cintura. La rotación de cintura con carga es la causa nro. 1 de hernias de disco.

4. EL GESTO PROFESIONAL:
Identificar movimientos repetitivos (ej: escurrir trapos) que pueden causar tendinitis o síndrome del túnel carpiano. Usar escurridores mecánicos en los baldes para proteger las articulaciones de la mano.` , questions: getQuestionsForClass(10) },
  { id: 11, title: "Ética, Derechos Humanos y Trabajo Decente", description: "La dimensión humana de la tarea pública.", keyword: "DERECHOS", duration: "7.1h", icon: "users", content: `VALORES EN LA FUNCIÓN PÚBLICA: ÉTICA DEL EGRESADO

La tarea del auxiliar trasciende la limpieza; es una función social de cuidado.

1. EL TRABAJO DECENTE (OIT):
Consiste en la oportunidad de acceder a un empleo productivo que genere un ingreso justo, seguridad en el lugar de trabajo y protección social para las familias. Implica trabajar en condiciones de libertad, igualdad y dignidad humana.

2. EQUIDAD Y PERSPECTIVA DE GÉNERO:
La limpieza institucional no es una tarea de género. El respeto entre compañeros y la división equitativa de tareas pesadas es fundamental. El auxiliar debe promover un ambiente libre de violencia y discriminación.

3. CONSTRUCCIÓN DE CIUDADANÍA Y EJEMPLARIDAD:
El auxiliar educa a los alumnos con el ejemplo:
- Respeto por el espacio común.
- Trato amable y no discriminatorio con las familias.
- Honestidad y transparencia en el manejo de los bienes públicos (patrimonio escolar).
- Reserva Profesional: No divulgar información sensible o privada de la comunidad educativa.

4. SOBERANÍA LABORAL:
Es el derecho del trabajador a ser respetado en su pericia técnica. Usted es el que sabe cómo desinfectar para cuidar la vida en la escuela. DIGNIFIQUE SU TAREA realizándola con excelencia técnica.` , questions: getQuestionsForClass(11) },
  { id: 12, title: "Gestión Ambiental GIRSU Escolar", description: "Residuos, reciclaje y compromiso verde.", keyword: "RESIDUOS", duration: "7.1h", icon: "recycle", content: `GESTIÓN INTEGRAL DE RESIDUOS (GIRSU): COMPROMISO VERDE

La escuela es una gran generadora de residuos. El auxiliar es el director de orquesta de la gestión ambiental interna.

1. CLASIFICACIÓN EN ORIGEN (SISTEMA DE BOLSAS):
- Bolsa Verde: Reciclables (Plástico seco, Cartón, Papel, Latas). Deben estar LIMPIOS Y SECOS. Un cartón de pizza con grasa ya no es verde, es negro.
- Bolsa Negra: Basura común (Restos de comida, papeles sucios, material de barrido, pañuel usados).

2. RESIDUOS DE RIESGO SANITARIO Y PUNZANTES:
- Riesgo biológico (Institucional): Toallitas femeninas y pañales deben disponerse en bolsas resistentes, nunca comprimirlas con los pies (riesgo de lesiones por objetos que los alumnos tiran por error).
- Vidrios rotos: Deben envolverse en cartón grueso, encintar y rotular como 'VIDRIO ROTO' para proteger al personal de recolección municipal.

3. EL COMPOST ESCOLAR (ECONOMÍA CIRCULAR):
Promover la separación de restos de frutas y verduras de la cocina y el comedor para transformarlos en abono. Esto reduce hasta un 40% el volumen de basura que sale de la escuela y enseña soberanía alimentaria.` , questions: getQuestionsForClass(12) },
  { id: 13, title: "Laboratorio de Contingencia y Práctica", description: "Acción ante brotes, inundaciones y derrames.", keyword: "PRACTICA", duration: "7.1h", icon: "microscope", content: `ACTUACIÓN ANTE EMERGENCIAS SANITARIAS (CONTINGENCIAS)

El auxiliar debe saber reaccionar con calma y técnica ante lo inesperado.

1. CONTINGENCIA POR INUNDACIÓN:
- Paso 1: Corte inmediato de la energía eléctrica (riesgo de electrocución).
- Paso 2: Retiro de agua estancada.
- Paso 3: Desinfección de Choque. Se debe desinfectar con lavandina a 2000 ppm (muy concentrada) para eliminar patógenos provenientes de desbordes de red o cloacas.

2. BROTES INFECTOCONTAGIOSOS (Gripe, Gastroenteritis, Sarna, Pediculosis):
- Gripe/Virus respiratorios: Intensificar desinfección de picaportes, pasamanos y teclados cada 1 hora. Máxima ventilación cruzada.
- Pediculosis: Aspirado profundo de superficies textiles (alfombras, sillas tapizadas) y limpieza con paño húmedo desinfectante.

3. SIMULACRO DE EVACUACIÓN Y EMERGENCIA:
El auxiliar es un guía de seguridad clave. Su rol incluye:
- Conocer la ubicación de todos los matafuegos.
- Asegurarse de que las puertas de emergencia no tengan obstáculos.
- Verificar que baños y depósitos estén vacíos al momento de la salida al punto de encuentro.` , questions: getQuestionsForClass(13) },
  { id: 14, title: "Soberanía Laboral y Perfil del Egresado Final", description: "Cierre, integración de saberes y examen sumativo.", keyword: "EXAMEN", duration: "7.7h", icon: "graduation-cap", content: `SÍNTESIS PROFESIONAL Y SOBERANÍA LABORAL DEL AUXILIAR

Este módulo cierra la formación de 100 horas cátedra, integrando la ley, la química y la bioseguridad.

1. EL PERFIL DEL EGRESADO PROFESIONAL:
Usted deja de ser un operario de limpieza intuitivo para convertirse en un Agente de Salud e Higiene Institucional. Su mirada ahora detecta riesgos bacteriológicos, ergonómicos y químicos antes de que ocurra un accidente.

2. EL EXAMEN SUMATIVO FINAL:
Evalúa la toma de decisiones basada en el criterio profesional por sobre la memoria. La 'Soberanía Laboral' es saber POR QUÉ se hace cada tarea y poder fundamentarla legal y técnicamente ante las autoridades directivas.

3. DESPEDIDA DE LA INSTRUCTORA MARICEL GAUNA:
'Lleven este conocimiento con orgullo. Cada superficie que desinfectan es un niño que no se enferma. Dignifiquen su tarea con excelencia técnica y compromiso ético. ¡Felicitaciones por haber completado el camino!'` , questions: getQuestionsForClass(14) }
];
