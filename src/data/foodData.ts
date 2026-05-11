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
  recipe?: {
    title: string;
    ingredients: string;
    instructions: string;
    image: string;
  };
}

export const FOOD_COURSE_INFO = {
  title: "Curso de Manipulación de Alimentos",
  instructor: "Maricel Gauna", // Or any instructor if not specified
  hours: "50 Horas Cátedra",
  institution: "Capacitación Profesional",
  description: "Este curso brinda conocimientos sobre la higiene, trazabilidad y manipulación de alimentos para garantizar la salud pública y prevenir Enfermedades de Transmisión Alimentaria (ETA)."
};

const getQuestionsForFoodClass = (classId: number): Question[] => {
  const allClassQuestions: Record<number, Question[]> = {
    1: [
      { id: 1, question: "¿Qué significa CAA?", options: ["Centro de Ayuda Alimentaria", "Código Alimentario Argentino", "Comité de Alimentos Actuales", "Control de Alimentos Argentinos"], correctAnswerIndex: 1 },
      { id: 2, question: "El rol social del manipulador de alimentos es:", options: ["Vender más", "Garantizar la salud pública mediante prácticas seguras", "Cocinar platos gourmet", "Limpiar solo cuando se ensucia"], correctAnswerIndex: 1 },
      { id: 3, question: "La Ley N° 13230 está relacionada con:", options: ["Tránsito vehicular", "Manipulación de alimentos y salud", "Construcción de cocinas", "Venta de envases"], correctAnswerIndex: 1 },
      { id: 4, question: "El concepto de Trabajo Decente (OIT) en la manipulación de alimentos implica:", options: ["Trabajar gratis", "Condiciones de libertad, igualdad y seguridad", "Solo trabajar en restaurantes de lujo", "No tener horarios"], correctAnswerIndex: 1 },
      { id: 5, question: "Un deber fundamental del manipulador es:", options: ["Evitar la contaminación de los alimentos", "Usar ropa de calle en la cocina", "Trabajar aunque esté enfermo", "Probar la comida con las manos"], correctAnswerIndex: 0 },
      { id: 6, question: "La ética profesional del manipulador exige:", options: ["Ocultar alimentos vencidos", "Responsabilidad en el cumplimiento del CAA", "Usar ingredientes más baratos aunque sean riesgosos", "Vender comida en mal estado si nadie se da cuenta"], correctAnswerIndex: 1 },
      { id: 7, question: "¿A quiénes protege principalmente el Código Alimentario Argentino?", options: ["Solo a los cocineros", "A los consumidores y la salud de la población", "A los dueños de los locales", "A los inspectores"], correctAnswerIndex: 1 },
      { id: 8, question: "¿Qué pasa si un manipulador no cumple con las normativas?", options: ["No pasa nada", "Puede causar un brote de ETA y enfrentar sanciones legales", "Le pagan menos", "Lo cambian de turno"], correctAnswerIndex: 1 },
      { id: 9, question: "¿Quién es considerado 'manipulador de alimentos'?", options: ["Solo el Chef", "Cualquier persona que esté en contacto con alimentos, superficies o equipos", "Solo el que transporta la comida", "El que la compra"], correctAnswerIndex: 1 },
      { id: 10, question: "El derecho laboral de un manipulador incluye:", options: ["Recibir capacitación continua en BPM", "Trabajar sin luz", "Comprar sus propios guantes siempre", "Limpiar sin productos adecuados"], correctAnswerIndex: 0 },
      { id: 11, question: "Si observas que un compañero no se lava las manos, ¿qué debes hacer éticamente?", options: ["Ignorarlo", "Advertirle y reportarlo si es necesario para evitar una ETA", "Hacer lo mismo", "Reírse"], correctAnswerIndex: 1 },
      { id: 12, question: "El CAA establece normas para:", options: ["La música del local", "Producción, elaboración y circulación de alimentos", "El color del uniforme", "El precio de venta"], correctAnswerIndex: 1 },
      { id: 13, question: "Un alimento seguro es aquel que:", options: ["Es muy rico", "No causará daño al consumidor", "Es barato", "Tiene mucho color"], correctAnswerIndex: 1 },
      { id: 14, question: "El certificado de manipulador de alimentos es:", options: ["Opcional", "Obligatorio para todo el personal que manipule alimentos", "Solo para dueños", "Se saca una sola vez y no vence"], correctAnswerIndex: 1 },
      { id: 15, question: "La responsabilidad civil ante un brote de ETA recae sobre:", options: ["Los clientes", "Los establecimientos y los manipuladores responsables", "El municipio", "Nadie"], correctAnswerIndex: 1 },
      { id: 16, question: "Las autoridades sanitarias realizan auditorías para:", options: ["Molestar al personal", "Verificar el cumplimiento del CAA y las BPM", "Robar recetas", "Comer gratis"], correctAnswerIndex: 1 },
      { id: 17, question: "El marco legal vigente protege:", options: ["Solo la economía", "La inocuidad de los alimentos desde el campo a la mesa", "Solo la estética del local", "Las marcas de los productos"], correctAnswerIndex: 1 },
      { id: 18, question: "Un comportamiento ético incluye:", options: ["Informar si se padece una enfermedad transmitible por alimentos", "Callar si hay plagas", "No usar cofia si hace calor", "Masticar chicle cocinando"], correctAnswerIndex: 0 },
      { id: 19, question: "El consumidor tiene derecho a:", options: ["Comida gratis", "Alimentos inocuos y genuinos", "Entrar a la cocina", "Cambiar la receta"], correctAnswerIndex: 1 },
      { id: 20, question: "¿Qué significa que un alimento esté 'adulterado'?", options: ["Que tiene mucha sal", "Que se le ha quitado o añadido elementos para engañar sobre su calidad", "Que está muy caliente", "Que es para adultos"], correctAnswerIndex: 1 }
    ],
    2: [
      { id: 1, question: "Según su origen, los alimentos se clasifican en:", options: ["Dulces y salados", "Animal, vegetal y mineral", "Grandes y chicos", "Ricos y feos"], correctAnswerIndex: 1 },
      { id: 2, question: "¿Qué son los macronutrientes?", options: ["Vitaminas y minerales", "Proteínas, carbohidratos y grasas", "Agua y fibra", "Aditivos artificiales"], correctAnswerIndex: 1 },
      { id: 3, question: "Un alimento 'Perecedero' es aquel que:", options: ["Se mantiene meses fuera de la heladera", "Se altera rápidamente y necesita frío", "No tiene fecha de vencimiento", "Es duro"], correctAnswerIndex: 1 },
      { id: 4, question: "El agua en los alimentos influye en:", options: ["Su color", "El desarrollo de microorganismos (a mayor agua libre, más rápido se echan a perder)", "Su precio", "Nada"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Cuál de estos es un alimento NO perecedero?", options: ["Carne cruda", "Arroz blanco seco", "Leche fresca", "Pescado"], correctAnswerIndex: 1 },
      { id: 6, question: "Las proteínas en los alimentos se encuentran principalmente en:", options: ["Carnes, huevos y lácteos", "Azúcar y caramelos", "Aceites y mantecas", "Agua mineral"], correctAnswerIndex: 0 },
      { id: 7, question: "La 'Actividad Acuosa' (Aw) mide:", options: ["La cantidad de agua libre disponible para bacterias", "El nivel de mar", "Cuánta agua hay en la cocina", "El peso del alimento"], correctAnswerIndex: 0 },
      { id: 8, question: "Los alimentos semi-perecederos incluyen:", options: ["Pescado crudo", "Papas, nueces y cebollas", "Leche larga vida abierta", "Carne picada"], correctAnswerIndex: 1 },
      { id: 9, question: "Los carbohidratos aportan principalmente:", options: ["Estructura", "Energía", "Sabor", "Vitaminas"], correctAnswerIndex: 1 },
      { id: 10, question: "Un alimento de 'Alto Riesgo' se caracteriza por:", options: ["Tener mucha azúcar", "Tener alta humedad y proteínas (ej: pollo crudo, salsas, cremas)", "Estar seco", "Ser muy ácido"], correctAnswerIndex: 1 },
      { id: 11, question: "La leche es un alimento compuesto principalmente por:", options: ["Pura grasa", "Agua, proteínas, lactosa y grasa", "Solo vitaminas", "Fibras vegetales"], correctAnswerIndex: 1 },
      { id: 12, question: "El pH de un alimento indica:", options: ["Su temperatura", "Su nivel de acidez o alcalinidad", "Su precio", "Su tamaño"], correctAnswerIndex: 1 },
      { id: 13, question: "Las bacterias prefieren alimentos con un pH:", options: ["Muy ácido (ej. jugo de limón)", "Cercano a neutro (ej. pollo, leche, carne)", "Muy alcalino", "El pH no importa"], correctAnswerIndex: 1 },
      { id: 14, question: "Los alimentos 'Alterados' son aquellos que:", options: ["Sufrieron cambios en su naturaleza o características, haciéndolos no aptos para el consumo", "Están mezclados", "Se vendieron caros", "Son saludables"], correctAnswerIndex: 0 },
      { id: 15, question: "Un alimento 'Falsificado' es:", options: ["Aquel que se prepara en casa", "El que tiene apariencia de un producto legítimo y no lo es", "Un alimento procesado", "Un alimento importado"], correctAnswerIndex: 1 },
      { id: 16, question: "La cadena agroalimentaria comprende:", options: ["Solo el campo", "Desde la producción primaria hasta el consumo final", "Solo el supermercado", "El transporte"], correctAnswerIndex: 1 },
      { id: 17, question: "Los aditivos alimentarios se usan para:", options: ["Hacer daño", "Mejorar la conservación, textura, sabor o apariencia", "Reemplazar ingredientes reales por agua", "Aumentar el peso"], correctAnswerIndex: 1 },
      { id: 18, question: "El azúcar actúa como conservante porque:", options: ["Mata a las bacterias por golpes", "Reduce el agua disponible (Aw) que necesitan los microorganismos", "Es venenosa para ellas", "Tiene pH ácido"], correctAnswerIndex: 1 },
      { id: 19, question: "Los lípidos o grasas son importantes porque:", options: ["Son malos siempre", "Transportan vitaminas liposolubles y dan energía", "Tienen mucha agua", "No tienen calorías"], correctAnswerIndex: 1 },
      { id: 20, question: "La trazabilidad permite:", options: ["Saber la historia, ubicación y trayectoria de un lote de alimento", "Adivinar la receta", "Saber cuántas personas lo comen", "Ocultar errores"], correctAnswerIndex: 0 }
    ],
    3: [
      { id: 1, question: "Las siglas ETA significan:", options: ["Estudio Técnico Analítico", "Enfermedades Transmitidas por Alimentos", "Envasado Termo-Aislante", "Energía Total Absorbida"], correctAnswerIndex: 1 },
      { id: 2, question: "Un peligro FÍSICO en un alimento podría ser:", options: ["Una bacteria", "Un trozo de vidrio, metal o hueso", "Detergente", "Humedad"], correctAnswerIndex: 1 },
      { id: 3, question: "Un peligro QUÍMICO incluye la presencia de:", options: ["Residuos de pesticidas o productos de limpieza en el alimento", "Trozos de plástico", "Virus", "Hongos"], correctAnswerIndex: 0 },
      { id: 4, question: "La Salmonelosis se transmite frecuentemente por:", options: ["Agua mineral", "Huevos crudos, mayonesa casera y pollo mal cocido", "Frutas bien lavadas", "Pan lactal"], correctAnswerIndex: 1 },
      { id: 5, question: "El Síndrome Urémico Hemolítico (SUH) es causado por:", options: ["Virus de la gripe", "Bacteria Escherichia coli (E. coli) productora de toxina Shiga", "Comer muy rápido", "Un hongo en el pan"], correctAnswerIndex: 1 },
      { id: 6, question: "¿Cuál es el principal vehículo de contaminación en el SUH?", options: ["Carne picada mal cocida", "Manzanas", "Gaseosas", "Pan"], correctAnswerIndex: 0 },
      { id: 7, question: "La 'Contaminación Cruzada' se produce cuando:", options: ["Se mezclan dos salsas", "Se transfieren microbios de alimentos crudos a alimentos cocidos/listos para consumir", "Se cruzan dos empleados", "Se cocina con agua de red"], correctAnswerIndex: 1 },
      { id: 8, question: "Las bacterias necesitan para reproducirse (CHAT):", options: ["Comida, Humedad, Acidez, Temperatura", "Comida, Humedad, Aire, Tiempo", "Solo frío", "Solo luz solar"], correctAnswerIndex: 1 },
      { id: 9, question: "La 'Zona de Peligro' de temperatura está entre:", options: ["-18°C y 0°C", "5°C y 60°C", "80°C y 100°C", "200°C y 300°C"], correctAnswerIndex: 1 },
      { id: 10, question: "El Botulismo es una intoxicación grave que suele asociarse a:", options: ["Carnes frescas", "Conservas caseras mal esterilizadas (escabeches, mermeladas)", "Helados", "Pan fresco"], correctAnswerIndex: 1 },
      { id: 11, question: "¿A qué temperatura deben cocinarse los alimentos para ser seguros (en el centro)?", options: ["40°C", "Por encima de los 71°C", "10°C", "Solo deben estar tibios"], correctAnswerIndex: 1 },
      { id: 12, question: "La Trichinellosis se transmite por el consumo de:", options: ["Carne de cerdo mal cocida o chacinados sin control", "Pescado", "Lechuga", "Pollo"], correctAnswerIndex: 0 },
      { id: 13, question: "Un síntoma común de una ETA es:", options: ["Dolor de muela", "Diarrea, vómitos, náuseas y fiebre", "Caída de cabello", "Visión perfecta"], correctAnswerIndex: 1 },
      { id: 14, question: "Si la carne picada queda 'rosadita' en el centro, el alimento es:", options: ["Seguro, estilo gourmet", "Riesgoso, puede contener E. Coli y causar SUH", "Sin sabor", "Perfecto para niños"], correctAnswerIndex: 1 },
      { id: 15, question: "La contaminación biológica está dada por:", options: ["Bacterias, virus, parásitos y hongos", "Trozos de madera", "Restos de lavandina", "Insecticidas"], correctAnswerIndex: 0 },
      { id: 16, question: "Los grupos de riesgo más vulnerables a las ETA son:", options: ["Solo hombres", "Niños pequeños, ancianos, embarazadas e inmunodeprimidos", "Adolescentes sanos", "Solo mujeres"], correctAnswerIndex: 1 },
      { id: 17, question: "El período de incubación de una ETA es:", options: ["El tiempo entre el consumo del alimento y la aparición de síntomas", "El tiempo que está en el horno", "El tiempo de compra", "Un año"], correctAnswerIndex: 0 },
      { id: 18, question: "Una toxina es:", options: ["Un tipo de hongo", "Una sustancia venenosa producida por bacterias u hongos", "Un mineral", "Un síntoma"], correctAnswerIndex: 1 },
      { id: 19, question: "¿Por qué no se debe cortar el pollo crudo y luego tomates para ensalada en la misma tabla sin lavarla?", options: ["Porque mezcla sabores", "Por riesgo alto de Contaminación Cruzada", "Para ahorrar tiempo", "No hay problema"], correctAnswerIndex: 1 },
      { id: 20, question: "El frío de la heladera (0°C a 5°C):", options: ["Mata a todas las bacterias", "Detiene o hace muy lenta la multiplicación de bacterias", "Acelera el crecimiento bacteriano", "Cocina el alimento"], correctAnswerIndex: 1 }
    ],
    4: [
      { id: 1, question: "Las siglas BPM significan:", options: ["Buenas Prácticas de Manufactura", "Buenos Productos en Mesa", "Barrido, Pulido y Mantenimiento", "Base de Preparaciones Mixtas"], correctAnswerIndex: 0 },
      { id: 2, question: "Las BPM se aplican a:", options: ["Solo al personal", "Personal, procesos, materias primas, agua e infraestructura", "Solo a la infraestructura", "Solo al envasado"], correctAnswerIndex: 1 },
      { id: 3, question: "El lavado correcto de manos dura aproximadamente:", options: ["5 segundos", "40 a 60 segundos", "10 minutos", "2 segundos"], correctAnswerIndex: 1 },
      { id: 4, question: "La sigla POES significa:", options: ["Procedimientos Operativos Estandarizados de Saneamiento", "Plan de Organización Especial", "Programa Oficial de Enfermedades Sanitarias", "Prácticas Optimizadas de Especialidades Saladas"], correctAnswerIndex: 0 },
      { id: 5, question: "Un POES incluye instrucciones escritas sobre:", options: ["Qué, cómo, cuándo y quién limpia y desinfecta", "Recetas de cocina", "Cómo vender", "Cómo cobrar"], correctAnswerIndex: 0 },
      { id: 6, question: "En el almacenamiento en la heladera, los crudos (ej: carnes) deben ir:", options: ["En el estante superior", "En los estantes inferiores (abajo) para evitar que goteen sobre otros", "Junto a las tortas", "En la puerta"], correctAnswerIndex: 1 },
      { id: 7, question: "El Manejo Integrado de Plagas (MIP) busca:", options: ["Solo usar venenos", "Prevenir el ingreso y anidación de plagas mediante barreras físicas y limpieza antes del control químico", "Criar mascotas", "Dejar comida para los ratones"], correctAnswerIndex: 1 },
      { id: 8, question: "El agua utilizada en la elaboración de alimentos debe ser:", options: ["De lluvia", "Agua potable / segura", "Agua de río sin tratar", "Agua oxigenada"], correctAnswerIndex: 1 },
      { id: 9, question: "La limpieza significa:", options: ["Remover la suciedad visible usando detergente y acción mecánica", "Eliminar todas las bacterias", "Echar perfume", "Pasar un trapo seco"], correctAnswerIndex: 0 },
      { id: 10, question: "La desinfección consiste en:", options: ["Dejar todo brillante", "Reducir la cantidad de microorganismos a niveles seguros mediante químicos (ej: lavandina) o calor", "Barrer fuerte", "Usar desodorante de ambientes"], correctAnswerIndex: 1 },
      { id: 11, question: "El orden correcto de saneamiento es:", options: ["Desinfectar y luego limpiar", "Limpiar, enjuagar, desinfectar y volver a enjuagar", "Solo mojar", "Desinfectar sin limpiar"], correctAnswerIndex: 1 },
      { id: 12, question: "Los tachos de basura en la cocina deben:", options: ["Estar sin tapa", "Tener tapa a pedal y bolsa, y vaciarse frecuentemente", "Ser de cartón", "Tener agujeros"], correctAnswerIndex: 1 },
      { id: 13, question: "La infraestructura (paredes y pisos) de un establecimiento debe ser:", options: ["De madera porosa", "Lisa, impermeable, lavable y de colores claros", "De alfombra", "Oscura para que no se vea la suciedad"], correctAnswerIndex: 1 },
      { id: 14, question: "La regla PEPS para manejo de materias primas significa:", options: ["Primero en Entrar, Primero en Salir", "Poner el Envase Por Separado", "Pelar, Enjuagar, Picar, Servir", "Productos Especiales Para Sopas"], correctAnswerIndex: 0 },
      { id: 15, question: "¿Por qué no se deben usar anillos o relojes al manipular alimentos?", options: ["Porque se pueden perder", "Porque acumulan bacterias y son un riesgo físico (pueden caer en la comida)", "Porque se estropean", "No hay problema en usarlos"], correctAnswerIndex: 1 },
      { id: 16, question: "Las mosquiteras en ventanas son parte de:", options: ["El diseño estético", "Las barreras físicas del MIP para evitar vectores", "La ventilación", "Para frenar la luz"], correctAnswerIndex: 1 },
      { id: 17, question: "Para secarse las manos luego del lavado, en la cocina se usa:", options: ["El repasador o delantal", "Toallas de papel descartables", "La ropa de calle", "Secado al aire libre solamente"], correctAnswerIndex: 1 },
      { id: 18, question: "Un 'Punto Crítico de Control' (PCC) en la cocción de una hamburguesa es:", options: ["La temperatura interna que asegure la eliminación de E. Coli", "El color del pan", "La cantidad de mayonesa", "El precio"], correctAnswerIndex: 0 },
      { id: 19, question: "Si un manipulador tiene una herida en la mano, debe:", options: ["Cocinar igual", "Cubrirla con un vendaje impermeable y un guante desechable", "No venir a trabajar por un mes", "Esconder la mano"], correctAnswerIndex: 1 },
      { id: 20, question: "Las tablas de picar de madera:", options: ["Son las más seguras", "Están prohibidas por ser porosas y difíciles de desinfectar", "Solo sirven para cortar verduras", "Deben hervirse a diario"], correctAnswerIndex: 1 }
    ],
    5: [
      { id: 1, question: "Los métodos de conservación sirven para:", options: ["Cambiar el sabor", "Prolongar la vida útil del alimento impidiendo el desarrollo de microorganismos", "Hacer que pesen más", "Aumentar el precio"], correctAnswerIndex: 1 },
      { id: 2, question: "La Pasteurización es un método de conservación basado en:", options: ["La adición de sal", "El uso de calor moderado para destruir patógenos sin alterar el alimento (ej: leche)", "El enfriamiento extremo", "La irradiación"], correctAnswerIndex: 1 },
      { id: 3, question: "El método de 'Esterilización' (ej: UHT o latas) se diferencia de la pasteurización porque:", options: ["Es más frío", "Aplica temperaturas más altas (120°C+) eliminando todas las bacterias y esporas", "Usa químicos", "Solo sirve para verduras"], correctAnswerIndex: 1 },
      { id: 4, question: "La refrigeración conserva los alimentos mediante:", options: ["La cocción", "Las bajas temperaturas (0 a 5°C) que frenan la multiplicación microbiana", "El secado", "La eliminación del oxígeno"], correctAnswerIndex: 1 },
      { id: 5, question: "La congelación profunda (-18°C) debe hacerse de forma:", options: ["Lenta", "Rápida, para formar cristales de hielo pequeños que no rompan las fibras del alimento", "En etapas", "Con sal"], correctAnswerIndex: 1 },
      { id: 6, question: "Para descongelar carne de forma segura, se debe:", options: ["Dejar sobre la mesada al sol", "Pasar del freezer a la heladera (con tiempo) o usar microondas", "Poner bajo agua caliente", "Dejar en el patio"], correctAnswerIndex: 1 },
      { id: 7, question: "El método de 'Deshidratación' consiste en:", options: ["Agregar agua", "Extraer el agua libre del alimento, bajando su Aw y deteniendo bacterias", "Agregar azúcar", "Congelar"], correctAnswerIndex: 1 },
      { id: 8, question: "La 'Salazón' conserva alimentos porque:", options: ["Mata por frío", "La sal absorbe la humedad, quitando el agua libre a las bacterias", "Le da color rojo", "Reduce el oxígeno"], correctAnswerIndex: 1 },
      { id: 9, question: "Un envasado al vacío funciona:", options: ["Poniendo el alimento en un frasco con agua", "Extrayendo el oxígeno del envase, impidiendo el crecimiento de bacterias aerobias", "Congelando", "Añadiendo gas carbónico"], correctAnswerIndex: 1 },
      { id: 10, question: "Los conservantes químicos (ej: benzoatos, sorbatos) deben:", options: ["Estar autorizados por el CAA y usarse en las dosis permitidas", "Usarse sin límite", "No sirven para nada", "Ser tóxicos"], correctAnswerIndex: 0 },
      { id: 11, question: "El 'Escaldado' es un tratamiento térmico breve previo a:", options: ["Cocinar al horno", "La congelación de vegetales, para inactivar enzimas que causan deterioro", "Hacer helado", "Fritar carne"], correctAnswerIndex: 1 },
      { id: 12, question: "Si un envase (lata) de tomate está abollado o hinchado, usted debe:", options: ["Usarlo inmediatamente", "Descartarlo, puede haber contaminación con Clostridium botulinum", "Pincharlo para sacarle el gas", "Venderlo más barato"], correctAnswerIndex: 1 },
      { id: 13, question: "El ahumado conserva por:", options: ["Solo por el sabor", "Acción antimicrobiana del humo y desecación", "Añadir agua", "Enfriamiento"], correctAnswerIndex: 1 },
      { id: 14, question: "Los envases primarios son aquellos que:", options: ["Están en el depósito", "Están en contacto directo con el alimento", "Son de cartón grande", "Transportan los pallets"], correctAnswerIndex: 1 },
      { id: 15, question: "Un envase Tetra Brik es multicapa, lo que permite:", options: ["Que sea más caro", "Proteger al alimento esterilizado de la luz, el oxígeno y los microorganismos", "Que sea transparente", "Que se pueda mojar"], correctAnswerIndex: 1 },
      { id: 16, question: "La fermentación (ej: yogurt, queso) conserva por:", options: ["Enfriamiento", "Aumento de la acidez (bajada de pH) gracias a bacterias beneficiosas (lácticas)", "Adición de sal", "Extracción de aire"], correctAnswerIndex: 1 },
      { id: 17, question: "¿Puede volver a congelar un alimento crudo que ya fue descongelado?", options: ["Sí, sin problema", "No, salvo que primero se cocine", "Solo si es carne", "Sí, si se lava"], correctAnswerIndex: 1 },
      { id: 18, question: "El agregado de azúcar (ej: mermeladas) es un método de:", options: ["Refrigeración", "Conservación química por disminución de actividad acuosa", "Pasteurización", "Liofilización"], correctAnswerIndex: 1 },
      { id: 19, question: "El rotulado nutricional de un envase envasado es:", options: ["Opcional", "Obligatorio según el CAA", "Solo un consejo", "Para decorar"], correctAnswerIndex: 1 },
      { id: 20, question: "Si se rompe la 'cadena de frío' de un alimento congelado:", options: ["Queda igual", "El alimento puede entrar en la zona de peligro y permitir el crecimiento de patógenos", "El alimento se cocina", "Se mejora el sabor"], correctAnswerIndex: 1 }
    ]
  };

  if (allClassQuestions[classId]) return allClassQuestions[classId];
  return [];
};

export const FOOD_CLASSES: ClassData[] = [
  {
    id: 1,
    title: "Marco Regulatorio y Ética",
    description: "Rol social, derechos y deberes del manipulador, CAA.",
    keyword: "ETICA",
    duration: "10h",
    icon: "scale",
    image: "/images/food_m1.png",
    content: `MARCO REGULATORIO Y ÉTICA DEL MANIPULADOR

1. ROL SOCIAL Y TRABAJO DECENTE:
El manipulador de alimentos no solo cocina o procesa, sino que tiene una gran responsabilidad en la salud pública. 
El trabajo decente (OIT) promueve condiciones seguras, libertad y respeto.

2. CÓDIGO ALIMENTARIO ARGENTINO (CAA):
Es el cuerpo normativo que regula toda la actividad relacionada con los alimentos en el país. Define qué es un alimento genuino, adulterado o falsificado, y establece los requisitos higiénicos-sanitarios para su elaboración y venta.

3. DERECHOS Y DEBERES:
- Deberes: Higiene personal estricta, informar enfermedades transmisibles, aplicar Buenas Prácticas.
- Derechos: Recibir capacitación, trabajar en ambientes seguros y con las herramientas necesarias.

4. LA LEY Y LA RESPONSABILIDAD:
El incumplimiento puede derivar en brotes de ETA (Enfermedades de Transmisión Alimentaria), con consecuencias penales y civiles. La responsabilidad ética implica proteger al consumidor.`,
    questions: getQuestionsForFoodClass(1)
  },
  {
    id: 2,
    title: "Fundamentos de los Alimentos",
    description: "Definición, clasificación y composición nutricional.",
    keyword: "FUNDAMENTOS",
    duration: "10h",
    icon: "book",
    image: "/images/food_m2.png",
    content: `FUNDAMENTOS DE LOS ALIMENTOS

1. DEFINICIÓN Y COMPOSICIÓN:
Un alimento aporta nutrientes (proteínas, carbohidratos, lípidos, vitaminas, minerales y agua). 
El agua disponible (Actividad Acuosa - Aw) y el pH (acidez) son los factores más determinantes para la vida útil de un alimento. 

2. CLASIFICACIÓN SEGÚN ALTERABILIDAD:
- Perecederos: Carnes, lácteos, huevos. Requieren frío continuo. Tienen alta Aw.
- Semi-perecederos: Papas, cebollas. Duran más pero en condiciones adecuadas.
- No perecederos: Arroz seco, harinas, enlatados. Baja Aw o esterilizados.

3. ALIMENTOS ALTERADOS, ADULTERADOS Y FALSIFICADOS:
- Alterados: Sufrieron daño por el paso del tiempo, clima o bacterias (ej: leche cortada).
- Adulterados: Se les agregó o quitó algo engañando sobre su calidad (ej: leche aguada).
- Falsificados: Se hacen pasar por marcas o tipos que no son.

4. ALTO Y BAJO RIESGO EPIDEMIOLÓGICO:
Los alimentos ricos en proteínas y humedad (carnes crudas, cremas) son los favoritos de las bacterias. Son de "Alto Riesgo".`,
    questions: getQuestionsForFoodClass(2)
  },
  {
    id: 3,
    title: "Riesgos y Microbiología (ETA)",
    description: "Peligros, contaminación cruzada y microbiología.",
    keyword: "RIESGOS",
    duration: "10h",
    icon: "microscope",
    image: "/images/food_m3.png",
    content: `MICROBIOLOGÍA Y RIESGOS ALIMENTARIOS

1. PELIGROS EN LOS ALIMENTOS:
- Físicos: Vidrios, anillos, pelos, huesos.
- Químicos: Restos de lavandina, pesticidas, metales pesados.
- Biológicos: Bacterias, virus, parásitos, hongos.

2. ENFERMEDADES DE TRANSMISIÓN ALIMENTARIA (ETA):
Ocurren al ingerir alimentos o agua con patógenos. Ejemplos críticos:
- SUH (Síndrome Urémico Hemolítico): E. Coli, en carne picada mal cocida. Afecta riñones, mortal en niños.
- Salmonelosis: Salmonella en pollo y huevos mal cocidos o mayonesas caseras.
- Botulismo: Toxina botulínica en conservas mal esterilizadas.
- Trichinellosis: Parásito en cerdo mal cocido y chacinados clandestinos.

3. CONTAMINACIÓN CRUZADA:
Paso de bacterias de zonas sucias a limpias. Directa (un pollo crudo gotea sobre una lechuga) o Indirecta (cortar carne con un cuchillo y usar el mismo cuchillo sin lavar para tomates).

4. LA ZONA DE PELIGRO BACTERIANO:
Las bacterias se multiplican rápidamente entre los 5°C y los 60°C. 
- Frio (<5°C) adormece a las bacterias.
- Calor (>71°C en el centro) las destruye.`,
    questions: getQuestionsForFoodClass(3)
  },
  {
    id: 4,
    title: "Sistemas de Inocuidad",
    description: "BPM, POES y manejo integrado de plagas.",
    keyword: "SISTEMAS",
    duration: "10h",
    icon: "shield",
    image: "/images/food_m4.png",
    content: `SISTEMAS DE INOCUIDAD (BPM Y POES)

1. BUENAS PRÁCTICAS DE MANUFACTURA (BPM):
Normas básicas para producir alimentos seguros. Incluyen:
- Higiene del personal: Lavado de manos frecuente (40 a 60 segundos), uñas cortas, cofia, uniforme limpio, prohibición de anillos/relojes.
- Procesos: Respetar la cadena de frío, evitar contaminación cruzada, cocinar a más de 71°C.
- Materias Primas: Comprar a proveedores autorizados, revisar rotulación (PEPS).

2. LIMPIEZA VS DESINFECCIÓN:
- Limpieza: Remueve suciedad usando agua y detergente.
- Desinfección: Elimina microorganismos usando químicos (lavandina) a niveles seguros. Nunca mezclarlos. El orden es Limpiar, Enjuagar, Desinfectar.

3. POES (Procedimientos Operativos Estandarizados de Saneamiento):
Documentos escritos que detallan los pasos para limpiar y desinfectar cada área de forma estandarizada.

4. MANEJO INTEGRADO DE PLAGAS Y RESIDUOS:
El MIP previene antes de fumigar. Barreras físicas (tejidos, zócalos, puertas cerradas) y gestión de basura (tachos cerrados con pedal, vaciado frecuente) para evitar que encuentren alimento o refugio.`,
    questions: getQuestionsForFoodClass(4)
  },
  {
    id: 5,
    title: "Tecnologías de Conservación",
    description: "Métodos físicos, químicos y envases.",
    keyword: "CONSERVACION",
    duration: "10h",
    icon: "flask",
    image: "/images/food_m5.png",
    content: `TECNOLOGÍAS DE CONSERVACIÓN Y ENVASES

1. OBJETIVO DE LA CONSERVACIÓN:
Alargar la vida útil del alimento impidiendo o retrasando el crecimiento bacteriano, usando barreras térmicas o químicas.

2. MÉTODOS POR FRÍO Y CALOR:
- Refrigeración (0°C a 5°C): Frena el crecimiento bacteriano.
- Congelación (<-18°C): Cristaliza el agua, deteniendo la actividad microbiana. No recongelar sin cocinar.
- Pasteurización: Calor moderado que elimina patógenos sin hervir (ej. leche).
- Esterilización comercial (UHT o latas): Alta temperatura que elimina todo patógeno y esporas.

3. MÉTODOS QUÍMICOS Y POR REDUCCIÓN DE AGUA:
- Salazón / Azucarado: La sal o azúcar "chupan" el agua libre (bajan la Aw), impidiendo que las bacterias la usen (ej: charqui, mermeladas).
- Acidificación / Fermentación: Bajar el pH. Las bacterias no crecen bien en medios ácidos (ej: escabeches controlados, yogur).
- Conservantes artificiales: Aditivos autorizados por el CAA.

4. ENVASES:
El envase primario (contacto directo) protege al alimento. El envasado al vacío retira el oxígeno, frenando a las bacterias aerobias. Es vital revisar que los envases (como las latas) no estén abollados o hinchados.`,
    questions: getQuestionsForFoodClass(5)
  }
];
