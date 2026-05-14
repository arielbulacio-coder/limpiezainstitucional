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
  instructor: "Maricel Gauna", 
  hours: "50 Horas Cátedra",
  institution: "Capacitación Profesional",
  description: "Este curso brinda conocimientos sobre la higiene, trazabilidad y manipulación de alimentos para garantizar la salud pública y prevenir Enfermedades de Transmisión Alimentaria (ETA). Actualizado con el manual ANMAT 2025.",
  manualUrl: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_ma_2025_final.pdf"
};

const getQuestionsForFoodClass = (classId: number): Question[] => {
  const allClassQuestions: Record<number, Question[]> = {
    1: [
      { id: 1, question: "¿Quién es considerado 'manipulador de alimentos' según ANMAT 2025?", options: ["Solo los que cocinan", "Toda persona que realice actividades en un establecimiento alimentario (compra, transporte, venta, limpieza, etc.)", "Solo los dueños de locales", "Solo los que tienen carnet"], correctAnswerIndex: 1 },
      { id: 2, question: "El rol principal del manipulador es ser un agente de:", options: ["Ventas masivas", "Salud Pública", "Publicidad gastronómica", "Limpieza profunda únicamente"], correctAnswerIndex: 1 },
      { id: 3, question: "La Ley de Etiquetado Frontal utiliza octógonos negros para advertir sobre:", options: ["El precio alto del producto", "El origen extranjero", "Excesos en azúcares, grasas, sodio y calorías", "La fecha de vencimiento"], correctAnswerIndex: 2 },
      { id: 4, question: "Un alimento 'Genuino' es aquel que:", options: ["Es de marca conocida", "Responde a las especificaciones del Código Alimentario Argentino (CAA)", "Es de producción casera", "No tiene conservantes"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Cuál es una leyenda obligatoria para niños en productos con ciertos aditivos?", options: ["'Consumir con moderación'", "'Contiene edulcorantes/cafeína, no recomendable en niños/as'", "'Solo para mayores de 18'", "'Producto altamente nutritivo'"], correctAnswerIndex: 1 },
      { id: 6, question: "La ética profesional del manipulador exige responsabilidad ante:", options: ["El jefe de cocina", "El consumidor y la comunidad", "Los proveedores de materia prima", "El municipio únicamente"], correctAnswerIndex: 1 },
      { id: 7, question: "El Código Alimentario Argentino (CAA) es la ley fundamental que regula:", options: ["El sueldo de los mozos", "La producción, elaboración y circulación de alimentos en el país", "Los horarios de los restaurantes", "El transporte público"], correctAnswerIndex: 1 },
      { id: 8, question: "¿Qué sucede ante un incumplimiento grave de las normativas del CAA?", options: ["Se recibe una felicitación", "Puede haber sanciones penales, civiles y clausuras", "Se descuenta el presentismo", "No pasa nada"], correctAnswerIndex: 1 },
      { id: 9, question: "Un manipulador con síntomas de enfermedad transmisible debe:", options: ["Seguir trabajando con barbijo", "Informar inmediatamente a su superior y no manipular alimentos", "Tomar una aspirina y continuar", "Limpiar más seguido"], correctAnswerIndex: 1 },
      { id: 10, question: "El carnet de manipulador de alimentos tiene validez nacional por:", options: ["1 año", "3 años", "10 años", "Es de por vida"], correctAnswerIndex: 1 },
      { id: 11, question: "Un alimento 'Falsificado' es aquel que:", options: ["Tiene un sabor raro", "Tiene la apariencia de un producto legítimo pero no lo es", "Está vencido", "Es artesanal"], correctAnswerIndex: 1 },
      { id: 12, question: "El objetivo de la Ley de Etiquetado Frontal es:", options: ["Prohibir la venta de golosinas", "Garantizar el derecho a la salud y a la información nutricional simple", "Hacer que los envases sean más lindos", "Subir los impuestos"], correctAnswerIndex: 1 },
      { id: 13, question: "Un comportamiento ético incluye reportar:", options: ["Si el compañero llega tarde", "La presencia de plagas o desperfectos en la cadena de frío", "Los chismes del barrio", "El precio de la competencia"], correctAnswerIndex: 1 },
      { id: 14, question: "La 'Soberanía Alimentaria' implica el derecho a:", options: ["Comprar cualquier marca", "Alimentos sanos, nutritivos y culturalmente adecuados", "Tener muchos supermercados", "Importar toda la comida"], correctAnswerIndex: 1 },
      { id: 15, question: "El Trabajo Decente (OIT) en este sector garantiza:", options: ["Poder comer gratis en el trabajo", "Condiciones de libertad, igualdad y dignidad para el trabajador", "Que no haya inspecciones", "Trabajo sin horarios"], correctAnswerIndex: 1 },
      { id: 16, question: "Un alimento 'Adulterado' es aquel al que se le ha:", options: ["Puesto mucha sal", "Añadido o quitado elementos para ocultar alteraciones o engañar", "Cambiado el envase", "Cambiado el precio"], correctAnswerIndex: 1 },
      { id: 17, question: "La higiene personal es un deber porque:", options: ["Mejora la imagen del local", "Previene la transferencia de microorganismos al alimento", "Es una tradición", "Ahorra agua"], correctAnswerIndex: 1 },
      { id: 18, question: "El manipulador es el 'primer eslabón' de la:", options: ["Cadena de ventas", "Inocuidad alimentaria", "Producción agrícola", "Economía local"], correctAnswerIndex: 1 },
      { id: 19, question: "El derecho a la alimentación incluye que el alimento sea:", options: ["Barato y rico", "Inocuo y suficiente", "Rápido de cocinar", "De marca líder"], correctAnswerIndex: 1 },
      { id: 20, question: "ANMAT es el organismo encargado de:", options: ["Controlar el tránsito", "Controlar la calidad de alimentos, medicamentos y productos médicos", "Establecer los sueldos", "Vender seguros"], correctAnswerIndex: 1 }
    ],
    2: [
      { id: 1, question: "En la Gráfica de Alimentación Saludable (GAPA), ¿qué grupo ocupa la mitad del círculo?", options: ["Carnes y huevos", "Legumbres y cereales", "Frutas y verduras", "Lácteos"], correctAnswerIndex: 2 },
      { id: 2, question: "¿Cuál es el componente central en el círculo de la GAPA?", options: ["Aceite", "Agua segura", "Azúcar", "Pan"], correctAnswerIndex: 1 },
      { id: 3, question: "Los macronutrientes esenciales son:", options: ["Sodio, Potasio y Calcio", "Proteínas, Carbohidratos y Grasas", "Vitaminas y Agua", "Fibra y Minerales"], correctAnswerIndex: 1 },
      { id: 4, question: "Un alimento 'Perecedero' se caracteriza por:", options: ["Estar seco", "Tener alta 'Actividad Acuosa' (Aw) y requerir frío", "Dudar muchos años", "Tener octógonos negros"], correctAnswerIndex: 1 },
      { id: 5, question: "La 'Actividad Acuosa' (Aw) mide el agua:", options: ["Total del alimento", "Libre disponible para el crecimiento de microorganismos", "Que se agrega al cocinar", "Del grifo"], correctAnswerIndex: 1 },
      { id: 6, question: "Las bacterias prefieren alimentos con un pH cercano a:", options: ["0 (Muy ácido)", "7 (Neutro)", "14 (Muy básico)", "4 (Ácido como vinagre)"], correctAnswerIndex: 1 },
      { id: 7, question: "El grupo de 'Alimentos de Alto Riesgo' incluye:", options: ["Fideos secos y arroz", "Carnes crudas, lácteos, salsas y huevos", "Aceite y vinagre", "Frutas con cáscara"], correctAnswerIndex: 1 },
      { id: 8, question: "La fibra alimentaria se encuentra principalmente en:", options: ["Carnes rojas", "Cáscara de frutas, verduras y cereales integrales", "Lácteos enteros", "Agua mineral"], correctAnswerIndex: 1 },
      { id: 9, question: "Un alimento 'Alterado' es aquel que:", options: ["Tiene aditivos", "Sufrió cambios naturales por microorganismos o ambiente, no apto para consumo", "Es de marca blanca", "No tiene sal"], correctAnswerIndex: 1 },
      { id: 10, question: "Los octógonos negros deben aparecer en:", options: ["Todos los alimentos", "Solo en alimentos procesados y ultraprocesados con excesos de nutrientes críticos", "Solo en el pan", "Solo en la carne"], correctAnswerIndex: 1 },
      { id: 11, question: "La recomendación de GAPA respecto a la sal es:", options: ["Consumir más sal de mar", "Reducir el consumo de sal y evitar el salero en la mesa", "Usar solo sal fina", "No tiene recomendaciones de sal"], correctAnswerIndex: 1 },
      { id: 12, question: "Las proteínas cumplen una función principalmente:", options: ["Energética rápida", "Estructural (formación de tejidos)", "De transporte de agua", "Informativa"], correctAnswerIndex: 1 },
      { id: 13, question: "¿Qué nutriente aporta mayor energía por gramo?", options: ["Carbohidratos", "Proteínas", "Grasas (Lípidos)", "Vitaminas"], correctAnswerIndex: 2 },
      { id: 14, question: "La trazabilidad de un alimento sirve para:", options: ["Ponerle el precio", "Seguir el rastro desde el origen hasta el consumidor final", "Que se vea más limpio", "Adivinar la receta"], correctAnswerIndex: 1 },
      { id: 15, question: "Un ejemplo de alimento NO perecedero es:", options: ["Leche fresca", "Harina seca bien almacenada", "Pescado", "Yogurt"], correctAnswerIndex: 1 },
      { id: 16, question: "Los ultraprocesados se caracterizan por tener:", options: ["Muchos ingredientes naturales", "Muchos aditivos, sal, grasas y azúcares", "Mucha fibra", "Pocas calorías"], correctAnswerIndex: 1 },
      { id: 17, question: "El pH ácido (como el del limón) actúa como:", options: ["Un nutriente", "Una barrera que dificulta el crecimiento de bacterias", "Un veneno", "Un colorante"], correctAnswerIndex: 1 },
      { id: 18, question: "La leche es considerada un alimento 'completo' porque tiene:", options: ["Solo calcio", "Agua, proteínas, hidratos, grasas y vitaminas", "Solo grasas", "Mucha fibra"], correctAnswerIndex: 1 },
      { id: 19, question: "El objetivo de la rotulación nutricional es:", options: ["Confundir al cliente", "Permitir una elección informada de los alimentos", "Que el envase sea colorido", "Vender más"], correctAnswerIndex: 1 },
      { id: 20, question: "Un alimento genuino debe estar:", options: ["Frío", "Autorizado por el CAA y elaborado en establecimientos registrados (RNE/RNPA)", "Envasado en plástico", "Comprado en feria"], correctAnswerIndex: 1 }
    ],
    3: [
      { id: 1, question: "¿Cuál es la 'Zona de Peligro' para la reproducción de bacterias?", options: ["-18°C a 0°C", "5°C a 60°C", "70°C a 100°C", "40°C a 80°C"], correctAnswerIndex: 1 },
      { id: 2, question: "El Síndrome Urémico Hemolítico (SUH) se previene principalmente:", options: ["Lavando la ropa", "Cocinando completamente la carne picada y evitando la leche cruda", "Comiendo solo vegetales", "Usando mucha sal"], correctAnswerIndex: 1 },
      { id: 3, question: "¿A qué temperatura debe llegar el centro del alimento para ser seguro?", options: ["40°C", "71°C o más", "60°C", "100°C siempre"], correctAnswerIndex: 1 },
      { id: 4, question: "La 'Contaminación Cruzada Indirecta' ocurre a través de:", options: ["Contacto directo de dos alimentos", "Manos, utensilios o tablas mal lavados entre alimentos", "El aire solamente", "El envase cerrado"], correctAnswerIndex: 1 },
      { id: 5, question: "La bacteria Salmonella se asocia comúnmente con:", options: ["Pan seco", "Huevos crudos, pollo y mayonesa casera", "Agua mineral embotellada", "Fruta pelada"], correctAnswerIndex: 1 },
      { id: 6, question: "El Botulismo es una intoxicación que se asocia a:", options: ["Frituras", "Conservas caseras (escabeches, mermeladas) mal esterilizadas", "Asado", "Ensalada fresca"], correctAnswerIndex: 1 },
      { id: 7, question: "Las bacterias necesitan para crecer (CHAT):", options: ["Calor, Humedad, Alimento, Tiempo", "Comida, Heladera, Aire, Temperatura", "Solo luz y agua", "Solo azúcar"], correctAnswerIndex: 0 },
      { id: 8, question: "¿Cuál es un peligro FÍSICO en el alimento?", options: ["Salmonella", "Trozo de vidrio o viruta de metal", "Detergente", "Insecticida"], correctAnswerIndex: 1 },
      { id: 9, question: "La Triquinelosis se transmite por comer carne de:", options: ["Vaca mal cocida", "Cerdo o jabalí sin control sanitario (chacinados)", "Pollo", "Pescado de mar"], correctAnswerIndex: 1 },
      { id: 10, question: "Un síntoma grave del SUH en niños es:", options: ["Dolor de muela", "Falla renal y anemia", "Pérdida de visión", "Caída del cabello"], correctAnswerIndex: 1 },
      { id: 11, question: "Los alimentos listos para consumo NO deben estar a temp. ambiente más de:", options: ["10 minutos", "2 horas", "5 horas", "Toda la noche"], correctAnswerIndex: 1 },
      { id: 12, question: "Un peligro QUÍMICO incluye restos de:", options: ["Uñas", "Pesticidas, productos de limpieza o desinfectantes", "Bacterias", "Pelos"], correctAnswerIndex: 1 },
      { id: 13, question: "La Listeria es peligrosa porque puede crecer incluso en:", options: ["El horno", "La heladera (temperaturas bajas)", "Ambiente seco", "El freezer"], correctAnswerIndex: 1 },
      { id: 14, question: "La 'contaminación biológica' es causada por:", options: ["Cloro", "Microorganismos (bacterias, virus, parásitos, hongos)", "Tierra", "Vidrios"], correctAnswerIndex: 1 },
      { id: 15, question: "Para evitar el SUH, las frutas y verduras se deben:", options: ["Solo pelar", "Lavar cuidadosamente con agua segura (potable)", "Pasar por lavandina pura", "Cocinar siempre"], correctAnswerIndex: 1 },
      { id: 16, question: "¿Por qué no se debe usar el mismo cuchillo para carne cruda y luego para pan?", options: ["Porque se desafila", "Por riesgo de Contaminación Cruzada", "Porque el pan se moja", "No hay problema"], correctAnswerIndex: 1 },
      { id: 17, question: "El frío de la heladera:", options: ["Mata a todas las bacterias", "Retarda la multiplicación de las bacterias", "Las activa", "No influye"], correctAnswerIndex: 1 },
      { id: 18, question: "Un portador sano es alguien que:", options: ["No tiene bacterias", "Tiene el patógeno y puede contagiar pero no muestra síntomas", "Es un médico", "Usa barbijo"], correctAnswerIndex: 1 },
      { id: 19, question: "El recalentamiento de alimentos debe alcanzar los:", options: ["40°C", "74°C", "100°C", "Solo entibiar"], correctAnswerIndex: 1 },
      { id: 20, question: "La inocuidad alimentaria significa que el alimento:", options: ["Es rico", "No causará daño al consumidor cuando se prepare y consuma", "Es de color verde", "Es gratis"], correctAnswerIndex: 1 }
    ],
    4: [
      { id: 1, question: "El lavado de manos profesional debe durar entre:", options: ["5 y 10 segundos", "40 y 60 segundos", "2 y 5 minutos", "Solo lo que dure mojarlas"], correctAnswerIndex: 1 },
      { id: 2, question: "En la heladera, ¿dónde deben ubicarse las carnes crudas?", options: ["En el estante superior", "En los estantes inferiores (para evitar goteos)", "En la puerta", "Junto a los postres"], correctAnswerIndex: 1 },
      { id: 3, question: "El orden correcto de saneamiento es:", options: ["Desinfectar y luego limpiar", "Limpiar (remover suciedad) y luego Desinfectar (eliminar microbios)", "Solo mojar", "Limpiar con lavandina pura"], correctAnswerIndex: 1 },
      { id: 4, question: "¿Qué se debe usar para cerrar el grifo después del lavado de manos?", options: ["La mano limpia", "La misma toalla de papel descartable usada para secarse", "El codo", "No se debe cerrar"], correctAnswerIndex: 1 },
      { id: 5, question: "Las Buenas Prácticas de Manufactura (BPM) son:", options: ["Opcionales", "Obligatorias por el Código Alimentario Argentino", "Solo para grandes fábricas", "Solo para el Chef"], correctAnswerIndex: 1 },
      { id: 6, question: "El uso de cofia es obligatorio para evitar:", options: ["El frío", "La caída de cabellos (peligro físico y biológico)", "Verse mal", "Que el pelo se engrase"], correctAnswerIndex: 1 },
      { id: 7, question: "Las uñas del manipulador deben estar:", options: ["Largas y pintadas", "Cortas, limpias y sin esmalte", "Solo con esmalte transparente", "No importa"], correctAnswerIndex: 1 },
      { id: 8, question: "¿Por qué no se permiten anillos o relojes en la cocina?", options: ["Se pueden rayar", "Acumulan suciedad, bacterias y pueden caer en la comida", "Distraen al personal", "Son caros"], correctAnswerIndex: 1 },
      { id: 9, question: "El Manejo Integrado de Plagas (MIP) prioriza:", options: ["El uso de venenos fuertes", "La prevención (barreras físicas, limpieza, orden)", "Tener gatos en la cocina", "No hacer nada"], correctAnswerIndex: 1 },
      { id: 10, question: "Los POES son procedimientos escritos sobre:", options: ["Recetas de cocina", "Cómo y cuándo realizar la limpieza y desinfección", "Cómo atender al cliente", "El sueldo"], correctAnswerIndex: 1 },
      { id: 11, question: "Para desinfectar superficies con lavandina, esta debe aplicarse:", options: ["Sobre la suciedad directa", "Después de haber limpiado con agua y detergente", "Mezclada con detergente", "Pura siempre"], correctAnswerIndex: 1 },
      { id: 12, question: "Un tacho de basura en cocina debe tener:", options: ["Sin tapa", "Tapa con pedal y bolsa", "Hecho de madera", "Estar en el centro del pasillo"], correctAnswerIndex: 1 },
      { id: 13, question: "El agua segura es aquella que:", options: ["Es transparente", "Es apta para consumo humano y libre de patógenos", "Viene de un pozo", "Tiene sabor a cloro"], correctAnswerIndex: 1 },
      { id: 14, question: "Las tablas de picar ideales son de:", options: ["Madera de pino", "Plástico de alta densidad o acrílico (no porosas)", "Vidrio", "Cartón prensado"], correctAnswerIndex: 1 },
      { id: 15, question: "El secado de manos más higiénico es con:", options: ["Repasador de tela", "Toalla de papel descartable o aire caliente", "El delantal", "Sacudiendo las manos"], correctAnswerIndex: 1 },
      { id: 16, question: "Si cae comida al suelo, se considera:", options: ["Comestible si se levanta rápido", "Contaminada y debe descartarse", "Limpia si el suelo se ve limpio", "Para el perro"], correctAnswerIndex: 1 },
      { id: 17, question: "La infraestructura del local debe tener paredes:", options: ["De ladrillo visto", "Lisas, impermeables y lavables", "Con empapelado", "Negras"], correctAnswerIndex: 1 },
      { id: 18, question: "El uniforme de trabajo debe ser:", options: ["Ropa de calle cómoda", "Exclusivo para la tarea, limpio y de colores claros", "Solo el delantal", "Pijama"], correctAnswerIndex: 1 },
      { id: 19, question: "Las mosquiteras sirven para:", options: ["Adornar las ventanas", "Evitar el ingreso de moscas y otros insectos (vectores)", "Que no entre sol", "Que no entre aire"], correctAnswerIndex: 1 },
      { id: 20, question: "Un manipulador debe lavarse las manos:", options: ["Solo al llegar", "Frecuentemente (antes de empezar, después de tocar basura, ir al baño, etc.)", "Cada 4 horas", "Solo si se ven sucias"], correctAnswerIndex: 1 }
    ],
    5: [
      { id: 1, question: "El protocolo de enfriamiento rápido busca bajar de 60°C a 5°C en menos de:", options: ["1 hora", "4 horas (total)", "10 horas", "24 horas"], correctAnswerIndex: 1 },
      { id: 2, question: "¿Cuál es el nuevo logo oficial para alimentos SIN TACC (Libres de Gluten)?", options: ["Un círculo rojo tachado", "Un logo con el símbolo de una espiga y la leyenda 'Sin TACC'", "Una letra G grande", "No tiene logo"], correctAnswerIndex: 1 },
      { id: 3, question: "El método PEPS/FEFO asegura que:", options: ["Lo primero en vencer sea lo primero en salir", "Lo más rico se venda primero", "No se limpie el depósito", "Se tire la comida"], correctAnswerIndex: 0 },
      { id: 4, question: "La Pasteurización elimina microorganismos mediante:", options: ["Congelación", "Calor moderado (sin hervir) para no alterar el alimento", "Químicos", "Rayos X"], correctAnswerIndex: 1 },
      { id: 5, question: "Para descongelar de forma segura se recomienda usar:", options: ["La mesada de la cocina", "La heladera, el microondas o cocción directa", "El sol", "Agua caliente estancada"], correctAnswerIndex: 1 },
      { id: 6, question: "¿Se puede recongelar un alimento crudo ya descongelado?", options: ["Sí, si se hace rápido", "No, salvo que primero se cocine completamente", "Sí, si es carne", "Solo si está envasado"], correctAnswerIndex: 1 },
      { id: 7, question: "La Esterilización (UHT o latas) destruye:", options: ["Solo algunas bacterias", "Todos los microorganismos y sus esporas", "Solo los virus", "Nada, solo conserva"], correctAnswerIndex: 1 },
      { id: 8, question: "Un envase abollado o hinchado es señal de:", options: ["Un golpe sin importancia", "Posible contaminación bacteriana peligrosa (ej: Botulismo)", "Que tiene más contenido", "Que el producto es viejo"], correctAnswerIndex: 1 },
      { id: 9, question: "La Salazón y el Azucarado conservan porque:", options: ["Enfrían el alimento", "Reducen el agua libre (Aw) disponible para bacterias", "Matan por sabor", "Aumentan la acidez"], correctAnswerIndex: 1 },
      { id: 10, question: "El envasado al vacío retira el:", options: ["Agua", "Oxígeno (impidiendo bacterias aerobias)", "Sabor", "Precio"], correctAnswerIndex: 1 },
      { id: 11, question: "Un aditivo alimentario debe estar siempre:", options: ["Prohibido", "Autorizado por el CAA y declarado en el rótulo", "En gran cantidad", "Oculto"], correctAnswerIndex: 1 },
      { id: 12, question: "La congelación (-18°C) detiene:", options: ["Solo el color", "Toda actividad microbiana (pero no mata necesariamente)", "El sabor", "El peso"], correctAnswerIndex: 1 },
      { id: 13, question: "Los conservantes químicos sirven para:", options: ["Mejorar la nutrición", "Retrasar el deterioro causado por microorganismos", "Hacer el alimento más barato", "Engañar al cliente"], correctAnswerIndex: 1 },
      { id: 14, question: "Un alimento 'Liofilizado' es aquel que ha sido:", options: ["Frito", "Deshidratado por congelación y vacío", "Hervido", "Ahumado"], correctAnswerIndex: 1 },
      { id: 15, question: "La fermentación (yogurt, chucrut) conserva por aumento de:", options: ["Azúcar", "Acidez (baja de pH)", "Grasas", "Agua"], correctAnswerIndex: 1 },
      { id: 16, question: "Un envase primario es el que está en:", options: ["El camión", "Contacto directo con el alimento", "La caja grande", "El estante"], correctAnswerIndex: 1 },
      { id: 17, question: "La deshidratación tradicional usa:", options: ["Solo frío", "Calor o aire para extraer la humedad", "Lavandina", "Sal solamente"], correctAnswerIndex: 1 },
      { id: 18, question: "El ahumado tiene acción:", options: ["Solo decorativa", "Antimicrobiana y desecante", "Nutritiva", "Tóxica siempre"], correctAnswerIndex: 1 },
      { id: 19, question: "La cadena de frío no debe romperse porque:", options: ["Se gasta luz", "Permite que las bacterias se activen y multipliquen", "El envase se moja", "No pasa nada"], correctAnswerIndex: 1 },
      { id: 20, question: "El rótulo de un alimento debe incluir obligatoriamente:", options: ["La foto del dueño", "Fecha de vencimiento, lote y datos del fabricante", "El precio de costo", "Una receta"], correctAnswerIndex: 1 }
    ]
  };

  if (allClassQuestions[classId]) return allClassQuestions[classId];
  return [];
};

export const FOOD_CLASSES: ClassData[] = [
  {
    id: 1,
    title: "Marco Regulatorio y Ética (ANMAT 2025)",
    description: "Rol social, Ley de Etiquetado Frontal y ética del manipulador.",
    keyword: "ETICA",
    duration: "10h",
    icon: "gavel",
    image: "/images/etiquetado_frontal_octogonos.png",
    content: `MARCO REGULATORIO Y ÉTICA DEL MANIPULADOR (ACTUALIZADO 2025)

1. NUEVA DEFINICIÓN DE MANIPULADOR:
Según la actualización 2025 de ANMAT, manipulador es TODA persona que realice actividades en un establecimiento donde se elaboren, fraccionen, almacenen, transporten o comercialicen alimentos. Esto incluye personal de limpieza, administrativos de compras y transportistas.

2. LEY DE ETIQUETADO FRONTAL (LEY 27.642):
Implementación de octógonos negros que advierten sobre EXCESO en: Azúcares, Grasas Totales, Grasas Saturadas, Sodio y Calorías. 
- Leyendas precautorias: "Contiene edulcorantes, no recomendable en niños/as" y "Contiene cafeína, evitar en niños/as".
- Objetivo: Garantizar el derecho a la salud y a una alimentación informada.

3. ROL SOCIAL:
El manipulador es un agente de salud pública. Su honestidad y responsabilidad impactan directamente en la prevención de enfermedades en la comunidad.

4. CÓDIGO ALIMENTARIO ARGENTINO (CAA):
Es la ley suprema. Todo alimento debe ser GENUINO (cumplir con el CAA), estar rotulado correctamente y provenir de establecimientos habilitados (RNE y RNPA).`,
    questions: getQuestionsForFoodClass(1)
  },
  {
    id: 2,
    title: "Fundamentos Nutricionales y GAPA",
    description: "Composición de alimentos y Gráfica de Alimentación Saludable.",
    keyword: "FUNDAMENTOS",
    duration: "10h",
    icon: "apple",
    image: "/images/grafica_alimentacion_saludable_gapa.png",
    content: `FUNDAMENTOS DE LOS ALIMENTOS Y NUTRICIÓN

1. GRÁFICA DE LA ALIMENTACIÓN SALUDABLE (GAPA):
Representación oficial argentina para una dieta equilibrada.
- Mitad del plato: Frutas y verduras de estación.
- Centro: Agua segura (8 vasos diarios).
- Otros grupos: Legumbres, cereales, lácteos, carnes/huevos, aceites/frutos secos.
- Alerta: Menos sal y menos azúcar (alimentos opcionales).

2. COMPOSICIÓN QUÍMICA:
- Macronutrientes: Proteínas (estructurales), Glúcidos (energía), Lípidos (reserva y vitaminas).
- Micronutrientes: Vitaminas y minerales esenciales.
- Agua y Aw: La 'Actividad Acuosa' es el agua libre que las bacterias usan para vivir. A menor Aw (alimentos secos), más duradero es el alimento.

3. CLASIFICACIÓN POR RIESGO:
- Alto Riesgo: Alimentos con mucha humedad y proteínas (carnes, huevos, lácteos, salsas). Son los que más cuidados requieren.`,
    questions: getQuestionsForFoodClass(2)
  },
  {
    id: 3,
    title: "Riesgos Microbiológicos y Zona de Peligro",
    description: "Termometría, SUH, Salmonella y prevención de ETAs.",
    keyword: "RIESGOS",
    duration: "10h",
    icon: "microscope",
    image: "/images/termometro_zona_peligro.png",
    content: `MICROBIOLOGÍA Y PREVENCIÓN DE ETAs

1. LA ZONA DE PELIGRO (5°C A 60°C):
Es el rango de temperatura donde las bacterias se reproducen cada 20 minutos. 
- < 5°C (Refrigeración): El crecimiento se frena.
- > 70°C (Cocción): Las bacterias patógenas mueren.
- Recalentamiento: Debe alcanzar 74°C en el centro.

2. ETAS CRÍTICAS EN ARGENTINA:
- SUH (Síndrome Urémico Hemolítico): Causado por E. Coli. Principal causa de falla renal infantil. Se evita cocinando la carne picada hasta que no esté rosada y lavando bien los vegetales.
- Salmonella: En huevos (nunca lavarlos antes de guardar, solo antes de usar) y pollo.
- Botulismo: Toxina mortal en conservas caseras.
- Listeria: Bacteria 'psicrótrofa' que puede crecer incluso dentro de la heladera.

3. PELIGROS:
- Físicos: Vidrios, metales, cabellos.
- Químicos: Lavandina, pesticidas.
- Biológicos: Bacterias, virus, parásitos.`,
    questions: getQuestionsForFoodClass(3)
  },
  {
    id: 4,
    title: "Higiene y Saneamiento (L+D)",
    description: "Lavado de manos, organización de heladera y procesos POES.",
    keyword: "SISTEMAS",
    duration: "10h",
    icon: "shield",
    image: "/images/lavado_manos_profesional.png",
    content: `SISTEMAS DE INOCUIDAD Y PRÁCTICAS HIGIÉNICAS

1. LAVADO DE MANOS PROFESIONAL (40-60 SEG):
Paso fundamental. Mojar, enjabonar, frotar (palmas, dorsos, entre dedos, uñas y MUÑECAS), enjuagar y secar con papel descartable. Usar el papel para cerrar el grifo.

2. LIMPIEZA VS DESINFECCIÓN (L+D):
- Limpiar: Quitar suciedad visible con detergente.
- Desinfectar: Eliminar microorganismos invisibles con desinfectante (ej. lavandina 1000ppm).
*NUNCA mezclar detergente con lavandina (se anulan y liberan gases tóxicos).*

3. ORGANIZACIÓN DE LA HELADERA:
Fundamental para evitar la CONTAMINACIÓN CRUZADA.
- Estantes Superiores: Alimentos listos para consumir (cocidos, lácteos).
- Estantes Inferiores: Carnes crudas en recipientes cerrados (evita goteos).
- Cajones: Frutas y verduras lavadas.

4. CONTROL DE PLAGAS (MIP):
Eliminar 'el hotel y el restaurante' de las plagas (limpieza y orden).`,
    questions: getQuestionsForFoodClass(4)
  },
  {
    id: 5,
    title: "Conservación y Tecnologías 2025",
    description: "Protocolo de enfriamiento, logo Sin TACC y conservación.",
    keyword: "CONSERVACION",
    duration: "10h",
    icon: "flask",
    image: "/images/organizacion_heladera_segura.png",
    content: `TECNOLOGÍAS DE CONSERVACIÓN Y NUEVAS NORMAS

1. PROTOCOLO DE ENFRIAMIENTO RÁPIDO (REGLA 2-2-4):
Bajar la temperatura de los alimentos cocidos rápidamente para evitar la zona de peligro.
- De 60°C a 21°C en menos de 2 horas.
- De 21°C a 5°C en menos de 2 horas.
- Total: Máximo 4 horas para llegar a refrigeración segura.

2. ALIMENTOS LIBRES DE GLUTEN (SIN TACC):
ANMAT 2025 establece un nuevo logo oficial. La cocina debe evitar la contaminación cruzada por aire (harinas volátiles) o utensilios compartidos.

3. GESTIÓN DE STOCK (PEPS / FEFO):
'Primero en Entrar, Primero en Salir' o 'Lo Primero que Vence es lo Primero que Sale'. Reduce el desperdicio alimentario y garantiza frescura.

4. ENVASES Y ROTULACIÓN:
Revisar siempre la integridad del envase. Las latas abolladas o hinchadas deben ser descartadas inmediatamente por riesgo de Botulismo.`,
    questions: getQuestionsForFoodClass(5)
  }
];
