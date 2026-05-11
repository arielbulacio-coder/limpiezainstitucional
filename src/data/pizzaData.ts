import { Question, ClassData } from './foodData';

export const PIZZA_COURSE_INFO = {
  title: "Maestro Pizzero Rotisero",
  instructor: "Maricel Gauna",
  hours: "60 Horas Cátedra",
  institution: "Formación en Gastronomía",
  description: "De la pasión a la profesión segura y rentable. Formación integral para elaborar pizzas, pastas, carnes y postres, garantizando calidad, inocuidad y rentabilidad."
};

const getQuestionsForPizzaClass = (classId: number): Question[] => {
  const allClassQuestions: Record<number, Question[]> = {
    1: [
      { id: 1, question: "¿Qué son las BPM en gastronomía?", options: ["Buenas Preparaciones Manuales", "Buenas Prácticas de Manufactura", "Bases Para Masas", "Buen Provecho Maestro"], correctAnswerIndex: 1 },
      { id: 2, question: "El principal objetivo de la seguridad alimentaria en la cocina es:", options: ["Que la comida sea sabrosa", "Evitar la contaminación y prevenir enfermedades (ETA)", "Ahorrar dinero", "Cocinar más rápido"], correctAnswerIndex: 1 },
      { id: 3, question: "La higiene personal del cocinero incluye:", options: ["Usar perfume", "Manos limpias, uñas cortas, sin esmalte ni joyas, y uso de cofia", "Pelo suelto", "Ropa de calle"], correctAnswerIndex: 1 },
      { id: 4, question: "La contaminación cruzada ocurre cuando:", options: ["Se cruzan dos recetas", "Se transfieren microorganismos de alimentos crudos a cocidos o listos para consumo", "Se bate muy rápido", "Se usa mucha sal"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Cómo se debe almacenar la materia prima cruda (ej: pollo) en la heladera?", options: ["En el estante superior", "En el estante inferior para evitar que sus jugos goteen sobre otros alimentos", "Fuera de la heladera", "Junto a las tortas"], correctAnswerIndex: 1 },
      { id: 6, question: "El lavado correcto de manos antes de cocinar debe durar:", options: ["5 segundos", "40 a 60 segundos con agua caliente y jabón", "No hace falta si uso guantes", "10 minutos"], correctAnswerIndex: 1 },
      { id: 7, question: "Para sanitizar correctamente la mesada de acero inoxidable, el orden es:", options: ["Desinfectar y luego limpiar", "Limpiar con detergente, enjuagar y luego desinfectar (ej: con alcohol al 70%)", "Solo pasar un trapo húmedo", "Echar lavandina pura"], correctAnswerIndex: 1 },
      { id: 8, question: "Las tablas de picar en la cocina profesional deben ser preferentemente de:", options: ["Madera, porque es rústica", "Plástico o teflón de colores según el tipo de alimento", "Vidrio", "Cartón"], correctAnswerIndex: 1 },
      { id: 9, question: "Si un manipulador tiene una herida en la mano, ¿qué debe hacer?", options: ["Cocinar normal", "Cubrir la herida con apósito impermeable y usar guantes", "Esconder la mano", "Echarse alcohol y seguir"], correctAnswerIndex: 1 },
      { id: 10, question: "La zona de temperatura de peligro microbiano (donde las bacterias se multiplican) es:", options: ["-18°C a 0°C", "5°C a 60°C", "80°C a 100°C", "0°C a 4°C"], correctAnswerIndex: 1 },
      { id: 11, question: "Para descongelar carne de forma segura, el mejor método es:", options: ["Dejarla al sol", "Pasarla del freezer a la heladera con 24hs de anticipación", "Bajo agua caliente estancada", "Sobre el horno prendido"], correctAnswerIndex: 1 },
      { id: 12, question: "El sistema PEPS de almacenamiento significa:", options: ["Poner El Pollo Siempre", "Primero en Entrar, Primero en Salir", "Pelar, Empanar, Preparar, Servir", "Productos Especiales Para Salsas"], correctAnswerIndex: 1 },
      { id: 13, question: "¿Qué se considera un riesgo físico en la cocina?", options: ["Exceso de sal", "Un pelo, vidrio o trozo de plástico en la comida", "Bacterias", "Restos de detergente"], correctAnswerIndex: 1 },
      { id: 14, question: "El uniforme de cocina (chaqueta, delantal, pantalón) se debe:", options: ["Traer puesto desde la calle", "Poner exclusivamente al ingresar al lugar de trabajo", "Usar una semana sin lavar", "Lavar solo con agua"], correctAnswerIndex: 1 },
      { id: 15, question: "¿Por qué se prohíbe masticar chicle mientras se cocina?", options: ["Para no hacer ruido", "Riesgo de contaminación física y biológica por proyección de saliva", "Para no dar hambre a los demás", "No está prohibido"], correctAnswerIndex: 1 },
      { id: 16, question: "En un emprendimiento culinario, la inocuidad garantiza:", options: ["Premios Michelin", "La protección de la salud del cliente y el prestigio del negocio", "Más ventas directas", "Descuentos en materia prima"], correctAnswerIndex: 1 },
      { id: 17, question: "¿Cuál es la función del termómetro de cocina?", options: ["Medir la temperatura del ambiente", "Garantizar que el centro del alimento alcance la temperatura segura de cocción (>71°C)", "Pesar ingredientes", "Revolver salsas"], correctAnswerIndex: 1 },
      { id: 18, question: "El uso de guantes de látex o nitrilo en cocina:", options: ["Reemplaza el lavado de manos", "No exime del lavado de manos y deben cambiarse entre tareas diferentes", "Son eternos", "Solo se usan para horno"], correctAnswerIndex: 1 },
      { id: 19, question: "Si un ingrediente huele mal pero no se ve feo:", options: ["Se cocina más tiempo y listo", "Ante la duda, se descarta para evitar riesgos de ETA", "Se tapa con muchas especias", "Se prueba un poquito"], correctAnswerIndex: 1 },
      { id: 20, question: "Los productos químicos de limpieza deben guardarse:", options: ["Debajo de la bacha cerca de la comida", "En un área separada y rotulada, lejos de los alimentos", "En la heladera", "Sin etiquetas"], correctAnswerIndex: 1 }
    ],
    2: [
      { id: 1, question: "La proteína fundamental de la harina de trigo que da elasticidad a la masa de pizza es:", options: ["El almidón", "El gluten", "La caseína", "La lactosa"], correctAnswerIndex: 1 },
      { id: 2, question: "Para hacer pizzas clásicas de buena estructura, se recomienda harina:", options: ["Leudante", "De fuerza (000 o 0000 según estilo)", "De maíz", "Integral exclusivamente"], correctAnswerIndex: 1 },
      { id: 3, question: "La levadura (Saccharomyces cerevisiae) es un microorganismo que:", options: ["Solo da sabor", "Fermenta los azúcares de la masa produciendo gas carbónico (CO2) y alcohol", "Endurece la masa", "Destruye el gluten"], correctAnswerIndex: 1 },
      { id: 4, question: "El proceso de 'Fermentación en frío' aporta a la masa de pizza:", options: ["Menor sabor", "Mejor digestibilidad, aroma complejo y textura alveolar", "Rapidez", "Un sabor agrio desagradable"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Qué sucede si mezclamos la levadura directamente con sal pura?", options: ["Sube más rápido", "La sal mata o inhibe la levadura por deshidratación osmótica", "No pasa nada", "Se hace levadura dulce"], correctAnswerIndex: 1 },
      { id: 6, question: "El amasado tiene como función técnica:", options: ["Cansar al cocinero", "Desarrollar la red de gluten integrando agua y harina", "Secar la masa", "Romper la levadura"], correctAnswerIndex: 1 },
      { id: 7, question: "La 'Mise en place' en panadería significa:", options: ["Pesar todos los ingredientes con precisión antes de empezar (Preparar todo en su lugar)", "Hornear de inmediato", "Limpiar al final", "Comer antes de cocinar"], correctAnswerIndex: 0 },
      { id: 8, question: "Una pizza 'a la piedra' se caracteriza por:", options: ["Ser cocinada en molde profundo con mucho aceite", "Estar cocida directamente sobre la base refractaria del horno, resultando fina y crujiente", "Llevar mucha miga", "No llevar salsa"], correctAnswerIndex: 1 },
      { id: 9, question: "Para una focaccia, la hidratación de la masa suele ser:", options: ["Muy baja (masa dura)", "Alta (superior al 70%) para lograr agujeros grandes (alvéolos) y textura esponjosa", "Cero", "Solo aceite sin agua"], correctAnswerIndex: 1 },
      { id: 10, question: "El desgasificado (ponchar) de una masa antes del bollo final sirve para:", options: ["Sacarle el sabor", "Redistribuir la levadura y homogeneizar la temperatura para un segundo leudado", "Que no crezca más", "Romper el gluten"], correctAnswerIndex: 1 },
      { id: 11, question: "La temperatura del agua para activar levadura fresca idealmente ronda los:", options: ["80°C", "25°C - 35°C (tibia)", "0°C", "100°C (hirviendo)"], correctAnswerIndex: 1 },
      { id: 12, question: "En un emprendimiento, el gramaje de los bollos de pizza debe ser:", options: ["Al ojo", "Estandarizado usando balanza, para garantizar uniformidad de producto y costeo", "Diferente según el cliente", "Siempre 1 kilo"], correctAnswerIndex: 1 },
      { id: 13, question: "La salsa clásica de pizza se elabora a base de:", options: ["Ketchup", "Tomate perita triturado, condimentado con orégano, ajo y oliva (generalmente en crudo para hornear)", "Salsa blanca", "Pesto pesado"], correctAnswerIndex: 1 },
      { id: 14, question: "Una masa 'masa madre' se diferencia de la levadura industrial porque:", options: ["Es más rápida", "Es un cultivo simbiótico de levaduras salvajes y bacterias lácticas, requiere más tiempo", "Es en polvo", "Viene en pastilla"], correctAnswerIndex: 1 },
      { id: 15, question: "Para que una tarta (quiche) tenga la base crocante y no húmeda, un secreto es:", options: ["Poner mucho relleno líquido", "Realizar una cocción 'a blanco' (pre-cocción) de la masa antes de rellenar", "No usar horno", "Llenarla de agua"], correctAnswerIndex: 1 },
      { id: 16, question: "La masa 'Brisée' (masa quebrada) utilizada para tartas se amasa:", options: ["Lo mínimo posible para no desarrollar el gluten, usando materia grasa fría (sablage)", "Durante 30 minutos vigorosamente", "Con agua hirviendo", "Solo con harina y agua"], correctAnswerIndex: 0 },
      { id: 17, question: "La técnica de 'Ligar' el relleno de una quiche clásica se hace con:", options: ["Harina pura", "Huevos y crema de leche (aparejo)", "Solo queso", "Gelatina"], correctAnswerIndex: 1 },
      { id: 18, question: "¿Por qué el queso mozzarella se quema si el horno de leña está muy fuerte (400°C)?", options: ["Porque es de mala calidad", "Porque requiere menos tiempo; en pizza napolitana se cuece en 90 segundos", "Por la sal", "Porque le falta agua"], correctAnswerIndex: 1 },
      { id: 19, question: "Al hornear pizza en horno eléctrico de casa (250°C), para simular el piso pizzero es útil:", options: ["Precalentar una placa de hierro o piedra refractaria", "Poner la pizza fría", "Hornear a 100°C", "Usar microondas"], correctAnswerIndex: 0 },
      { id: 20, question: "La 'Prueba del velo' sirve para:", options: ["Saber si la masa tiene sal", "Comprobar que la red de gluten se ha desarrollado correctamente (elasticidad máxima sin romperse)", "Ver el color de la harina", "Medir la levadura"], correctAnswerIndex: 1 }
    ],
    3: [
      { id: 1, question: "La proporción clásica para hacer pasta fresca al huevo es:", options: ["100g de harina por 1 litro de agua", "100g de harina 0000 por cada huevo entero (aprox. 50g)", "Mucha harina y poco huevo", "1 kilo de harina por 1 huevo"], correctAnswerIndex: 1 },
      { id: 2, question: "El uso de sémola de trigo duro en la pasta aporta:", options: ["Dulzura", "Mejor estructura, textura 'al dente' y rugosidad para retener la salsa", "Que se desarme", "Color blanco puro"], correctAnswerIndex: 1 },
      { id: 3, question: "La masa de pasta fresca debe reposar (envuelta) al menos 30 minutos para:", options: ["Enfriarse", "Relajar el gluten y permitir que se hidrate parejo, facilitando el estirado", "Que leve", "Que se ponga dura"], correctAnswerIndex: 1 },
      { id: 4, question: "El punto 'Al dente' en las pastas significa:", options: ["Que están crudas y duras", "Cocinadas pero ofreciendo leve resistencia al morder (punto blanco en el centro mínimo)", "Muy pasadas y blandas", "Frías"], correctAnswerIndex: 1 },
      { id: 5, question: "¿Cuál es considerada una 'Salsa Madre' blanca en la gastronomía francesa?", options: ["Salsa Fileto", "Salsa Bechamel (Salsa Blanca)", "Pesto Genovés", "Salsa Criolla"], correctAnswerIndex: 1 },
      { id: 6, question: "El 'Roux', base de muchas salsas ligadas, se elabora cocinando partes iguales de:", options: ["Leche y agua", "Materia grasa (manteca/aceite) y harina", "Queso y crema", "Azúcar y huevo"], correctAnswerIndex: 1 },
      { id: 7, question: "Para evitar grumos al incorporar líquido a un Roux caliente, el líquido debe estar:", options: ["Hirviendo a borbotones", "Frío o a temperatura ambiente, agregando gradualmente y batiendo", "Congelado", "Mezclado con sal gruesa"], correctAnswerIndex: 1 },
      { id: 8, question: "Una salsa derivada de la Bechamel a la que se le agrega queso Gruyère/Parmesano se llama:", options: ["Salsa Portuguesa", "Salsa Mornay", "Salsa Rosada", "Salsa de ajo"], correctAnswerIndex: 1 },
      { id: 9, question: "Para un buen Pesto Genovés tradicional, el verde intenso se logra:", options: ["Añadiendo colorante artificial", "Evitando la oxidación de la albahaca (trabajo rápido, uso de buen aceite, a veces blanqueo rápido)", "Herviendo la albahaca por horas", "Agregando espinaca hervida"], correctAnswerIndex: 1 },
      { id: 10, question: "Al hervir pastas secas, la regla general italiana del agua es:", options: ["Poca agua, mucho aceite", "1 litro de agua por cada 100g de pasta, y abundante sal (10g) cuando rompe hervor", "Agua tibia", "No usar sal"], correctAnswerIndex: 1 },
      { id: 11, question: "Añadir aceite al agua de cocción de la pasta:", options: ["Es un truco mágico necesario", "Es un mito que no evita que se peguen y además impide que la salsa se adhiera a la pasta luego", "Le da más sabor", "Es obligatorio en restaurantes"], correctAnswerIndex: 1 },
      { id: 12, question: "La técnica de emulsionar una salsa con el agua de cocción de la pasta se llama:", options: ["Hervido", "Mantecatura (el almidón del agua ayuda a ligar la salsa con la grasa)", "Fritura", "Glaseado"], correctAnswerIndex: 1 },
      { id: 13, question: "Para que las hojas de una ensalada (ej: lechuga) queden crujientes, deben ser:", options: ["Lavadas, desinfectadas y muy bien secadas (centrifugadas)", "Dejadas en agua tibia", "Aliñadas dos horas antes", "Cortadas con cuchillo de metal desafilado"], correctAnswerIndex: 0 },
      { id: 14, question: "El corte en juliana aplicado a las verduras es:", options: ["Cubos grandes", "Tiras finas y alargadas de unos 2mm x 5cm", "Rodajas gruesas", "Picado irregular"], correctAnswerIndex: 1 },
      { id: 15, question: "Una vinagreta básica se compone tradicionalmente por:", options: ["3 partes de aceite por 1 de ácido (vinagre/limón), sal y pimienta emulsionada", "3 partes de vinagre por 1 de aceite", "Solo vinagre", "Aceite y azúcar"], correctAnswerIndex: 0 },
      { id: 16, question: "Las ensaladas en una rotisería deben aderezarse:", options: ["En la mañana temprano", "En el momento del servicio o entregar el aliño aparte para evitar la marchitez (pérdida de turgencia por ósmosis)", "Antes de exhibirlas en vidriera", "Nunca"], correctAnswerIndex: 1 },
      { id: 17, question: "Para rellenar sorrentinos, el relleno debe estar:", options: ["Caliente y líquido", "Frío, seco y compacto (para no humedecer la masa y desarmarla al hervir)", "A temperatura ambiente y aguado", "No importa"], correctAnswerIndex: 1 },
      { id: 18, question: "La salsa filetto clásica se aromatiza comúnmente con:", options: ["Curry", "Ajo, albahaca y aceite de oliva extra virgen", "Salsa de soja", "Crema de leche"], correctAnswerIndex: 1 },
      { id: 19, question: "En gastronomía, blanquear un vegetal (ej: brócoli) significa:", options: ["Pintarlo de blanco", "Sumergirlo brevemente en agua hirviendo y cortar cocción en agua helada para fijar color y textura", "Hervirlo hasta hacerlo puré", "Fritarlo en mucho aceite"], correctAnswerIndex: 1 },
      { id: 20, question: "Un factor clave de rentabilidad en las pastas caseras es:", options: ["Comprar la harina más cara del mercado", "El bajo costo de la materia prima (harina, huevo) frente al alto valor agregado artesanal percibido por el cliente", "Hacerlas muy rápido", "No cobrar el trabajo manual"], correctAnswerIndex: 1 }
    ],
    4: [
      { id: 1, question: "En rotisería, la técnica de 'Braseado' consiste en:", options: ["Cocinar a fuego directo fuerte en la parrilla", "Dorar la carne y luego cocinarla lentamente tapada en un medio líquido (caldo/vino) a baja temperatura", "Freír en abundante aceite", "Hervir en agua pura"], correctAnswerIndex: 1 },
      { id: 2, question: "El 'Sellado' inicial de una carne roja en sartén caliente busca:", options: ["Cerrar los poros para que no salgan los jugos (mito)", "Lograr la Reacción de Maillard (dorado) que aporta sabor, color y aroma complejo", "Cocinarla por dentro", "Enfriarla"], correctAnswerIndex: 1 },
      { id: 3, question: "La temperatura interna segura para un pollo asado debe superar los:", options: ["50°C", "74°C (en la pechuga/muslo grueso) para garantizar la eliminación de Salmonella", "100°C", "30°C"], correctAnswerIndex: 1 },
      { id: 4, question: "Para evitar que la pechuga de pollo quede seca al horno, un método efectivo es:", options: ["Hornearla 3 horas", "Macerarla previamente en salmuera (brining) o cocinar a fuego moderado con humedad", "Cortarla en trozos diminutos", "Ponerle mucha sal gruesa antes de entrar"], correctAnswerIndex: 1 },
      { id: 5, question: "Un adobo o marinada tiene dos propósitos principales:", options: ["Pintar y ensuciar", "Aportar sabor profundo y, si tiene ácido, tiernizar las fibras de la carne", "Darle color artificial", "Que no se queme en la sartén"], correctAnswerIndex: 1 },
      { id: 6, question: "La técnica de laqueado (ej: pollo laqueado) implica:", options: ["Lavar la carne", "Pintar la pieza repetidas veces durante la cocción con una reducción dulce/salada para formar una costra brillante", "Envolverla en papel aluminio", "Ponerle queso"], correctAnswerIndex: 1 },
      { id: 7, question: "El aprovechamiento de subproductos (ej: huesos de pollo, recortes de verduras) sirve para:", options: ["Tirar a la basura", "Elaborar caldos base (fondos oscuros o claros) que dan sabor a salsas y guisos, mejorando la rentabilidad", "Dar a las mascotas", "Hacer pan"], correctAnswerIndex: 1 },
      { id: 8, question: "Un 'Fondo Oscuro' se logra:", options: ["Hirviendo todo crudo", "Tostando o dorando los huesos y vegetales en horno antes de hervirlos por largas horas", "Añadiendo colorante negro", "Quemando la cebolla"], correctAnswerIndex: 1 },
      { id: 9, question: "La merma en la cocción de una carne es:", options: ["La ganancia", "La pérdida de peso del producto (por evaporación de agua y fundición de grasa) respecto a su peso crudo", "El condimento añadido", "El hueso"], correctAnswerIndex: 1 },
      { id: 10, question: "Al costear un plato de carne (ej: bondiola braseada), se debe calcular en base al peso:", options: ["Solo el crudo", "El peso final cocido (rendimiento real o porción) tras aplicar el % de merma y desperdicio (hueso/grasa)", "Cualquier peso", "El peso del envase"], correctAnswerIndex: 1 },
      { id: 11, question: "Para ligar y espesar los jugos de cocción de un braseado se puede usar:", options: ["Agua fría", "Un slurry (almidón de maíz disuelto en frío) o manteca fría al final (monter au beurre)", "Levadura", "Polvo de hornear"], correctAnswerIndex: 1 },
      { id: 12, question: "Las empanadas de carne al horno deben pintarse con doradura (huevo/leche) para:", options: ["Dar sabor", "Lograr un acabado dorado, brillante y profesional", "Que no se abran", "Para que estén más pesadas"], correctAnswerIndex: 1 },
      { id: 13, question: "El relleno de una empanada jugosa (picadillo) requiere:", options: ["Cocinarlo y armarlo caliente", "Enfriarlo completamente en heladera para que la grasa solidifique y no ablande/rompa la masa al repulgar", "Solo carne cruda", "Usar mucha agua"], correctAnswerIndex: 1 },
      { id: 14, question: "Una guarnición debe:", options: ["Tapar el sabor de la carne", "Acompañar y contrastar en sabor, color, textura y método de cocción con el producto principal", "Ser más grande que la carne", "Ser siempre papas fritas"], correctAnswerIndex: 1 },
      { id: 15, question: "El puré de papas liso y cremoso se logra:", options: ["Procesando en licuadora (libera mucho almidón y queda chicloso)", "Pisando la papa en caliente y montando con manteca y leche/crema caliente", "Pisando la papa fría", "Agregando agua de cocción"], correctAnswerIndex: 1 },
      { id: 16, question: "Para mantener crujientes unas papas fritas tras la cocción en rotisería:", options: ["Se deben tapar herméticamente (se ablandan por vapor)", "Se aplica doble fritura, se escurren bien y se mantienen ventiladas", "Se dejan en aceite frío", "Se rocían con agua"], correctAnswerIndex: 1 },
      { id: 17, question: "Un arrollado de pollo seguro requiere deshuesado pulcro y cocción envuelta en aluminio/film apto para:", options: ["Que no se vea el pollo", "Mantener la forma cilíndrica (prensado) y concentrar la humedad durante el hervor o asado", "Que no lo ataquen moscas", "Que sea vegano"], correctAnswerIndex: 1 },
      { id: 18, question: "En un menú de rotisería, ofrecer platos de 'cocción lenta' (slow cook):", options: ["Es pérdida de tiempo", "Permite usar cortes de carne más económicos (duros), tiernizándolos y maximizando la rentabilidad (Food Cost)", "Es obligatorio por ley", "Solo es para ricos"], correctAnswerIndex: 1 },
      { id: 19, question: "La exhibición de alimentos calientes en vitrina de rotisería debe mantener una temperatura de mantenimiento de:", options: ["20°C", "Superior a 60°C para estar fuera de la zona de peligro bacteriano", "100°C", "0°C"], correctAnswerIndex: 1 },
      { id: 20, question: "El glaseado de vegetales (ej: zanahorias baby) se realiza cocinando con:", options: ["Solo vinagre", "Agua/caldo, un poco de manteca y azúcar hasta que el líquido reduzca y los cubra brillantemente", "Mucho aceite y fuego fuerte", "Horno de microondas"], correctAnswerIndex: 1 }
    ],
    5: [
      { id: 1, question: "En pastelería básica, ¿por qué la precisión en los pesajes es crítica?", options: ["Para no ensuciar platos", "Porque la pastelería es química pura; una alteración de proporciones (ej: levadura o azúcar) arruina la estructura", "Para cobrar más caro", "Es un mito, se puede hacer al ojo"], correctAnswerIndex: 1 },
      { id: 2, question: "Para que un bizcochuelo clásico (genoise) sea esponjoso sin polvo de hornear, la clave es:", options: ["Batir huevos y azúcar (punto letra/cinta) para incorporar aire mecánicamente, y mezclar secos con movimientos envolventes", "Batir solo harina", "Echarle mucha agua", "Hornear a fuego muy bajo 5 horas"], correctAnswerIndex: 1 },
      { id: 3, question: "El 'Punto Letra' o 'Punto Cinta' en el batido de huevos y azúcar se logra cuando:", options: ["Queda líquido amarillo oscuro", "La mezcla espumó, blanqueó y al levantar el batidor se pueden trazar dibujos que no desaparecen de inmediato", "Se hizo duro como merengue", "Está tibio"], correctAnswerIndex: 1 },
      { id: 4, question: "La técnica del 'Baño María' consiste en:", options: ["Bañar al cocinero", "Cocinar/derretir un ingrediente (ej: chocolate) en un bol sobre vapor de agua sin que toque el agua hirviendo, para dar calor muy suave y controlado", "Fritar en grasa", "Poner agua al horno"], correctAnswerIndex: 1 },
      { id: 5, question: "Un postre Flan tradicional obtiene su textura coagulada gracias a:", options: ["La gelatina añadida", "Las proteínas del huevo que se desnaturalizan y coagulan al calor suave (ideal baño maría en horno para que no hierva y queden burbujas/agujeros)", "El caramelo oscuro", "La vainilla"], correctAnswerIndex: 1 },
      { id: 6, question: "El caramelo seco se realiza:", options: ["Fritando azúcar", "Fundiendo azúcar sola en cacerola limpia a fuego bajo, sin mover con cuchara al inicio para evitar cristalización", "Mezclando azúcar con sal", "Hirviendo mucha agua"], correctAnswerIndex: 1 },
      { id: 7, question: "Para un Tiramisú italiano genuino, el queso utilizado en la crema es:", options: ["Queso Crema común", "Queso Mascarpone", "Queso Ricota", "Queso Cheddar"], correctAnswerIndex: 1 },
      { id: 8, question: "Los bizcochos vainillas (vainillas) para Tiramisú deben mojarse en:", options: ["Leche chocolatada", "Almíbar de café expreso (a menudo con un toque de licor Amaretto o ron) rápidamente para que no se deshagan", "Agua azucarada", "No se mojan"], correctAnswerIndex: 1 },
      { id: 9, question: "Una 'Cheesecake' horneada estilo New York requiere en su preparación base:", options: ["Masa hojaldre", "Galletitas trituradas mezcladas con manteca derretida", "Bizcochuelo de chocolate", "Masa de tarta salada"], correctAnswerIndex: 1 },
      { id: 10, question: "Para evitar que la Cheesecake se agriete en la superficie al enfriarse, un buen método es:", options: ["Cocinarla al máximo y sacarla a la heladera enseguida", "Cocinar a temperatura moderada, apagar el horno y dejarla enfriar lentamente con la puerta entreabierta", "Cubrirla de crema cruda", "Ponerle hielo encima"], correctAnswerIndex: 1 },
      { id: 11, question: "El Merengue Italiano, que es el más estable y seguro (pasteurizado) para decorar, se hace:", options: ["Batiendo claras con azúcar en frío", "Volcando un almíbar a punto bolita blanda (118-121°C) sobre las claras montadas a nieve sin dejar de batir", "Batiendo a baño maría suave", "Agregando harina"], correctAnswerIndex: 1 },
      { id: 12, question: "El 'Punto Bolita Blanda' de un almíbar (118°C) se comprueba cuando:", options: ["Al echar una gota en agua fría se forma una bolita maleable y suave", "Se pone negro", "Hierve muy fuerte 1 minuto", "Huele a quemado"], correctAnswerIndex: 0 },
      { id: 13, question: "Para montar crema de leche (Crema Chantilly), esta debe estar:", options: ["A temperatura ambiente", "Muy fría (ideal 4°C) para que la grasa retenga el aire, batiendo cuidando de no cortarla (hacerla manteca)", "Tibia", "Congelada sólida"], correctAnswerIndex: 1 },
      { id: 14, question: "La gelatina sin sabor debe ser activada mediante:", options: ["Hidratación previa en 5 partes de agua fría, y luego fundida a calor suave antes de incorporarla", "Tirarla directa al polvo", "Mezclada con aceite", "Hervida 10 minutos"], correctAnswerIndex: 0 },
      { id: 15, question: "En un postre en vasito (Verrine), el contraste de texturas (crumble crocante, crema suave, gelée frutal) aporta:", options: ["Solo color", "Una experiencia sensorial compleja y un mayor valor percibido por el cliente", "Desorden visual", "Más calorías vacías"], correctAnswerIndex: 1 },
      { id: 16, question: "La crema pastelera lleva como agente espesante principal:", options: ["Harina de trigo y/o almidón de maíz", "Gelatina", "Crema batida", "Chocolate picado"], correctAnswerIndex: 0 },
      { id: 17, question: "Al enfriar la crema pastelera, se debe:", options: ["Dejar destapada en mesada", "Cubrir con film en contacto directo ('a piel') para evitar que forme nata o costra superficial", "Poner en el freezer 1 hora", "Revolver sin parar"], correctAnswerIndex: 1 },
      { id: 18, question: "Un coulis de frutos rojos es:", options: ["Un fruto asado", "Una salsa fluida obtenida triturando y tamizando frutas, generalmente con algo de azúcar y limón", "Una masa dulce", "Un helado pesado"], correctAnswerIndex: 1 },
      { id: 19, question: "El balance de sabores en pastelería moderna implica:", options: ["Poner mucho azúcar siempre", "Jugar con el dulzor y toques ácidos (limón/frambuesa), salados (caramelo salado) o amargos (cacao intenso) para no empalagar", "Solo usar vainilla", "No usar sal nunca"], correctAnswerIndex: 1 },
      { id: 20, question: "En la presentación final de un postre de vitrina, el 'Glaseado Espejo' aporta:", options: ["Peor sabor", "Un acabado brillante sumamente profesional y protección contra la desecación del producto en la heladera", "Opacidad rústica", "Dureza extrema"], correctAnswerIndex: 1 }
    ],
    6: [
      { id: 1, question: "El 'Food Cost' (Costo de Materia Prima) de un plato o pizza se calcula:", options: ["Solo el costo de la carne", "Sumando el costo exacto de los ingredientes de la receta (Mise en Place estandarizada) por porción", "Multiplicando la harina por dos", "Sumando la luz y gas"], correctAnswerIndex: 1 },
      { id: 2, question: "En gastronomía, para que un negocio sea rentable, el 'Food Cost' ideal de un plato NO debería superar:", options: ["El 100% del precio de venta", "El 30% al 35% del precio de venta al público", "El 5%", "El 80%"], correctAnswerIndex: 1 },
      { id: 3, question: "La 'Merma' o desperdicio inevitable (ej. cáscara de cebolla, hueso de pollo) debe:", options: ["Ignorarse al calcular el costo", "Calcularse e incluirse en el costo real del ingrediente utilizable (rendimiento)", "Tirarse sin pesar", "Regalarse"], correctAnswerIndex: 1 },
      { id: 4, question: "El Diseño de un Menú inicial para emprendedores debe ser:", options: ["De 100 páginas", "Corto, especializado (enfocado en pocos productos de alta calidad) y con ingredientes cruzados para minimizar mermas", "Solo de un producto", "Variar todos los días sin repetición"], correctAnswerIndex: 1 },
      { id: 5, question: "Los Costos Fijos de una rotisería incluyen:", options: ["Solo harina y queso", "Alquiler, luz, gas, sueldos fijos (independientemente de si se vende mucho o poco)", "El packaging de delivery variable", "Solo ingredientes"], correctAnswerIndex: 1 },
      { id: 6, question: "El Punto de Equilibrio (Break-even) de un emprendimiento es:", options: ["Cuando el pizzero no se cae", "El nivel de ventas donde los ingresos cubren exactamente los costos (no hay ni ganancia ni pérdida)", "Ganar el primer millón", "Pagar el alquiler"], correctAnswerIndex: 1 },
      { id: 7, question: "Para estandarizar recetas, el emprendedor debe abandonar el uso de:", options: ["Cuchillos grandes", "'Puñados', 'pizcas' o 'tazas', para usar exclusivamente una balanza digital (gramos)", "Horno a gas", "Cuadernos de notas"], correctAnswerIndex: 1 },
      { id: 8, question: "La técnica 'FIFO' (First In, First Out) en la cámara de frío sirve para:", options: ["Que todo se enfríe rápido", "Asegurar la rotación (lo primero que entra es lo primero que se usa) para que nada venza", "Cocinar rápido", "Esconder mercadería"], correctAnswerIndex: 1 },
      { id: 9, question: "El 'Precio de Venta' se determina analizando:", options: ["Lo que cobra el vecino únicamente", "El Food Cost, costos fijos, margen de ganancia deseado y análisis de la competencia/mercado", "Multiplicando el costo por 10", "Lo que pida el cliente"], correctAnswerIndex: 1 },
      { id: 10, question: "El Packaging (cajas de pizza, bandejas) se contabiliza como:", options: ["Gasto innecesario", "Parte del costo directo del plato y como herramienta clave de marketing y preservación del calor/textura", "Un regalo para el cliente", "Un costo fijo del local"], correctAnswerIndex: 1 },
      { id: 11, question: "En un emprendimiento casero (dark kitchen), es fundamental habilitar:", options: ["Cualquier cuarto", "Un espacio físico que cumpla las normativas bromatológicas (separación física, lavados de mano, azulejos lavables, libretas sanitarias)", "La cochera compartida con animales", "El living"], correctAnswerIndex: 1 },
      { id: 12, question: "Para evitar compras compulsivas o faltantes de stock, la rotisería debe mantener:", options: ["Una planilla de inventario y pedidos con un 'Stock Crítico' o 'Punto de Pedido' establecido", "Mucho de todo siempre", "Cero stock, comprar a diario en el súper", "Cajas cerradas sin mirar"], correctAnswerIndex: 0 },
      { id: 13, question: "El 'Menú Engineering' o Ingeniería de menú clasifica a los platos tipo 'Estrella' como aquellos que:", options: ["Son ricos pero nadie compra", "Tienen alta rentabilidad y alta popularidad (se venden mucho)", "Son caros de hacer y no se venden", "Son solo postres"], correctAnswerIndex: 1 },
      { id: 14, question: "Aprovechar productos de estación/temporada (ej: tomate en verano) permite:", options: ["Perder dinero", "Abaratar el Food Cost y ofrecer mejor sabor, aumentando la rentabilidad", "Cocinar aburrido", "No sirve en pizzerías"], correctAnswerIndex: 1 },
      { id: 15, question: "Si un cliente se queja de un plato (manejo de quejas), la mejor estrategia del emprendedor es:", options: ["Gritarle o discutir", "Escuchar activamente, disculparse, compensar rápidamente (ej. reemplazar producto) para fidelizar", "Ignorarlo en redes sociales", "Culpar al empleado de cocina frente al cliente"], correctAnswerIndex: 1 },
      { id: 16, question: "El 'Márgen de Contribución' de un producto es:", options: ["Lo que contribuye a ensuciar", "La diferencia entre el precio de venta y su costo variable (Food Cost + packaging)", "La propina", "El sueldo"], correctAnswerIndex: 1 },
      { id: 17, question: "En pizzería, ¿qué ingrediente suele ser el más costoso del Food Cost y debe ser pesarse estrictamente?", options: ["El agua", "La mozzarella de buena calidad", "La sal", "La levadura"], correctAnswerIndex: 1 },
      { id: 18, question: "La promoción por redes sociales (Instagram/WhatsApp) para la rotisería debe enfocarse en:", options: ["Fotos oscuras y borrosas", "Fotos profesionales de comida ('Food Porn'), claridad en el menú, precios y medios de pedido directos", "No mostrar precios nunca", "Textos larguísimos sin imagen"], correctAnswerIndex: 1 },
      { id: 19, question: "La gestión del tiempo (Mise en Place) afecta los costos porque:", options: ["No afecta", "El tiempo es dinero (horas hombre); la desorganización requiere más horas extras o personal innecesario", "Se gasta más luz", "Solo afecta el estrés"], correctAnswerIndex: 1 },
      { id: 20, question: "Un emprendedor gastronómico exitoso se caracteriza por:", options: ["Cocinar bien y nada más", "Combinar excelencia técnica culinaria, obsesión por la inocuidad y control riguroso de números (costos)", "Delegar todo", "Trabajar solo de noche"], correctAnswerIndex: 1 }
    ]
  };

  if (allClassQuestions[classId]) return allClassQuestions[classId];
  return [];
};

export const PIZZA_CLASSES: ClassData[] = [
  {
    id: 1,
    title: "Bases de la Cocina y Seguridad Alimentaria",
    description: "BPM, higiene del espacio, uso seguro de materias primas.",
    keyword: "INOCUIDAD",
    duration: "10h",
    icon: "shield",
    image: "/images/pizza_m1.png",
    content: `MÓDULO I: BASES DE LA COCINA Y SEGURIDAD ALIMENTARIA

1. MANIPULACIÓN SEGURA DE ALIMENTOS (BPM):
Las Buenas Prácticas de Manufactura (BPM) son fundamentales en cualquier entorno gastronómico, sea un emprendimiento pequeño o un gran restaurante. Garantizan que los productos elaborados sean inocuos, previniendo las Enfermedades de Transmisión Alimentaria (ETA), cuyo objetivo principal es proteger la salud del consumidor y el prestigio del negocio.
- Higiene Personal: Es innegociable. El manipulador debe presentarse con manos limpias, uñas cortas, sin esmalte, sin joyas (anillos, pulseras, relojes) porque estas acumulan bacterias y pueden convertirse en un riesgo físico al caer en la comida. El uso de cofia es obligatorio para evitar la caída de cabello. El uniforme (chaqueta, delantal y pantalón) debe ponerse exclusivamente en el lugar de trabajo, no traerse puesto de la calle. Masticar chicle está prohibido porque proyecta saliva y puede caer al plato. Si se tiene una herida, debe cubrirse con apósito impermeable y usar guantes. Los guantes no eximen del lavado constante y deben cambiarse al cambiar de tarea.
- Lavado de manos: Debe durar entre 40 a 60 segundos con agua caliente y jabón.
- Contaminación Cruzada: Ocurre cuando se transfieren patógenos de alimentos crudos a cocidos o listos para consumo. Nunca se debe usar la misma tabla de madera para crudos y cocidos. Las tablas deben ser de plástico o teflón.

2. HIGIENE DEL ESPACIO DE TRABAJO:
Diferencia entre Limpiar y Desinfectar: Limpiar es remover suciedad con detergente y agua; Desinfectar es reducir microbios con químicos (ej. alcohol al 70%). El orden de sanitización para mesadas de acero es: Limpiar con detergente, Enjuagar y luego Desinfectar. Los químicos de limpieza siempre deben guardarse en un área separada y rotulada, lejos de alimentos para evitar peligros químicos. Los peligros físicos son objetos extraños en la comida (pelos, vidrio, plástico).

3. USO Y CONSERVACIÓN DE MATERIAS PRIMAS:
- Almacenamiento: Se rige por el sistema PEPS (Primero en Entrar, Primero en Salir) para evitar vencimientos. En la heladera, las carnes crudas siempre van en el estante inferior para que sus jugos no goteen sobre otros productos listos.
- Zona de Peligro Microbiano: Las bacterias se multiplican entre los 5°C y los 60°C. 
- Descongelamiento seguro: Pasando del freezer a la heladera con 24hs de anticipación.
- Termómetro: Garantiza que el centro del alimento (especialmente pollo o cerdo) alcance >71°C. Si algo huele mal (o se duda), se descarta inmediatamente.`,
    recipe: {
      title: "Mise en Place y Sanitización del Puesto de Trabajo",
      ingredients: "- Solución de detergente\n- Agua caliente\n- Solución desinfectante (Alcohol 70% o solución clorada)\n- Tablas de corte plásticas (por colores)\n- Materia prima (vegetales y carnes)",
      instructions: "1. Vestimenta: Colóquese el uniforme limpio en el vestuario. Lave sus manos vigorosamente por 40 a 60 segundos.\n2. Limpieza de Estación: Lave la mesada de acero inoxidable con detergente, enjuague y luego rocíe alcohol al 70%. Deje evaporar.\n3. Recepción (PEPS): Pese e inspeccione los vegetales. Si algo tiene mal olor, descártelo.\n4. Separación: Coloque la tabla verde para vegetales y la roja para carnes en extremos separados de la mesada para evitar contaminación cruzada.\n5. Pre-preparación (Mise en Place): Pese y agrupe todos los ingredientes antes de encender el fuego. Al terminar, lave, enjuague y desinfecte nuevamente los utensilios.",
      image: "/images/pizza_recipe_m1.png"
    },
    questions: getQuestionsForPizzaClass(1)
  },
  {
    id: 2,
    title: "Pizzas y Panadería Salada",
    description: "Harinas, fermentación fría, focaccias y tartas.",
    keyword: "MASAS",
    duration: "10h",
    icon: "book",
    image: "/images/pizza_m2.png",
    content: `MÓDULO II: PIZZAS Y PANADERÍA SALADA

1. LA CIENCIA DE LAS MASAS Y EL GLUTEN:
El pilar de una buena pizza es la harina de trigo. Su proteína fundamental es el Gluten, que al hidratarse y amasarse, desarrolla una red elástica que atrapa el gas carbónico (CO2) generado por la levadura.
- Harinas recomendadas: Para pizzas clásicas, usar harina de fuerza (000 o 0000 según estilo y fuerza de la harina). La "Prueba del velo" comprueba que la red de gluten se ha desarrollado correctamente (se estira hasta quedar casi transparente sin romperse).
- La Levadura: (Saccharomyces cerevisiae) fermenta los azúcares y produce gas carbónico y alcohol. Se activa con agua tibia (25°C - 35°C). Nunca se debe mezclar la sal pura directamente con la levadura fresca, ya que la sal mata o inhibe la levadura por deshidratación osmótica. A diferencia de la levadura comercial, la Masa Madre es un cultivo simbiótico de levaduras salvajes y bacterias lácticas, requiriendo procesos mucho más largos.

2. AMASADO Y FERMENTACIÓN:
- Amasado: Su función técnica es desarrollar la red de gluten integrando agua y harina.
- Fermentación en Frío: Introducir la masa en la heladera durante 24-72h aporta una mejor digestibilidad, un aroma más complejo y una textura muy alveolar (agujeros). 
- Desgasificado (ponchar): Antes del bollo final, permite redistribuir la levadura y homogeneizar la temperatura. El gramaje de los bollos debe ser estandarizado usando balanza para costeo preciso.
- Mise en Place en panadería: Significa pesar todos los ingredientes con precisión antes de empezar.

3. COCCIÓN Y ESTILOS:
- Pizza a la Piedra: Se cuece directamente sobre la base refractaria del horno, resultando fina y crujiente. En un horno eléctrico casero (250°C), es útil precalentar una piedra refractaria o placa de hierro pesada. La mozzarella puede quemarse si el horno de leña está muy fuerte (400°C) porque allí la cocción de la napolitana dura sólo 90 segundos.
- Focaccias: Tienen hidratación muy alta (superior al 70%) para lograr agujeros grandes (alvéolos).
- Tartas (Quiches): Usan masa Brisée (quebrada). Se amasa lo mínimo posible usando manteca fría (sablage) para NO desarrollar gluten (que la haría dura). Se cocina 'a blanco' (precocción) antes de rellenar para que quede crocante. Se liga con un aparejo de huevos y crema de leche. La salsa clásica de pizza suele ser tomate perita crudo triturado con orégano, ajo y oliva.`,
    recipe: {
      title: "Pizza Estilo Napolitano con Fermentación en Frío (Biga/Directa)",
      ingredients: "- 1 kg de Harina 000 (alta fuerza)\n- 650 cc de Agua mineral (65% hidratación)\n- 3 g de Levadura fresca (o 1g seca)\n- 25 g de Sal fina\n- 20 cc de Aceite de Oliva Extra Virgen",
      instructions: "1. Autólisis y Amasado: Disuelva la levadura en el agua. Incorpore la harina y mezcle levemente. Deje reposar 20 minutos. Agregue la sal y el aceite, y amase mediante pliegues hasta lograr una masa lisa (prueba del velo).\n2. Primera Fermentación: Deje la masa en bloque a temperatura ambiente por 1 hora. Luego, realice un desgasificado suave y guárdela en frío (heladera) tapada durante 24-48 hs.\n3. Bolleado (Estandarización): Retire la masa del frío, divídala en bollos de 250 g exactos usando balanza digital. Deje reposar los bollos 3-4 horas a temperatura ambiente.\n4. Estirado: Con los dedos (sin paloote para no quitar el aire de los bordes). Coloque salsa de tomate perita triturado en frío.\n5. Cocción: Introduzca en horno precalentado a máxima temperatura (si es posible con piedra refractaria) hasta que los bordes inflen y doren. Agregue la mozzarella fresca en los últimos minutos.",
      image: "/images/pizza_recipe_m2.png"
    },
    questions: getQuestionsForPizzaClass(2)
  },
  {
    id: 3,
    title: "Pastas, Salsas y Ensaladas",
    description: "Pasta fresca al huevo, salsas madre, emulsiones y cortes.",
    keyword: "SALSAS",
    duration: "10h",
    icon: "utensils",
    image: "/images/pizza_m3.png",
    content: `MÓDULO III: PASTAS, SALSAS Y ENSALADAS

1. PASTA FRESCA AL HUEVO:
La proporción clásica es 100g de harina 0000 por cada huevo entero. Incorporar sémola de trigo duro mejora la estructura, dando textura 'al dente' y rugosidad para atrapar mejor la salsa. Luego de amasar, la masa debe reposar envuelta 30 min para relajar el gluten e hidratar parejo.
Para pastas rellenas (ej. sorrentinos), el relleno debe estar frío, seco y compacto; un relleno caliente o líquido ablanda y rompe la masa en la cocción.
El hervido: La regla de oro italiana es 1L de agua por cada 100g de pasta y unos 10g de sal cuando rompe hervor. NO se debe añadir aceite al agua (es un mito; no evita que se peguen y resbala la salsa). El punto 'al dente' significa que la pasta ofrece una leve resistencia central al morder. "Mantecatura" es emulsionar la salsa y la pasta en la sartén con un cucharón del agua del hervido. El bajo costo de harina/huevo contra el precio del plato artesanal da una altísima rentabilidad.

2. SALSAS CLÁSICAS:
- Salsas Madres (ej: Bechamel/Salsa Blanca). Nace del 'Roux': cocinar partes iguales de materia grasa (manteca/aceite) y harina. Para no tener grumos, el líquido a incorporar al Roux debe estar frío o a temperatura ambiente, batiendo constantemente. Si a la Bechamel le agregamos Gruyère o Parmesano, derivamos en una Salsa Mornay.
- Salsas de Tomate: La Filetto clásica lleva ajo, albahaca y aceite de oliva.
- Emulsiones en frío: Para el Pesto Genovés, el verde intenso se logra evitando oxidar la albahaca (blanqueo muy rápido o procesado frío con aceite).

3. ENSALADAS Y VEGETALES:
Las hojas verdes para ensalada deben ser lavadas y secadas (centrifugadas) al máximo para estar crujientes. Una Vinagreta Básica lleva 3 partes de aceite por 1 de ácido (vinagre o jugo de limón). Para exhibir en rotisería, NO aliñar las ensaladas con antelación, el ácido "quema" la hoja por ósmosis produciendo marchitez. Se aliñan en el momento. El corte de los vegetales para ensaladas profesionaliza el plato (ej: Juliana son tiras finas de 2mm x 5cm). Blanquear verduras (ej. brócoli) es hervir brevemente y enfriar rápido en agua helada para fijar color y textura.`,
    recipe: {
      title: "Sorrentinos Artesanales de Jamón y Queso con Salsa Bechamel",
      ingredients: "Masa:\n- 400 g Harina 0000\n- 100 g Sémola fina\n- 5 Huevos enteros\n\nRelleno:\n- 300 g Queso mozzarella (bien escurrido)\n- 200 g Jamón cocido\n- Nuez moscada y pimienta\n\nSalsa Bechamel:\n- 50 g Manteca y 50 g Harina (Roux)\n- 500 cc Leche tibia o a temperatura ambiente\n- Sal y Nuez Moscada",
      instructions: "1. Masa: Forme una corona con las harinas, añada los huevos en el centro. Amase hasta lograr una textura lisa. Envuelva en film y deje reposar 30 minutos (Relajación de gluten).\n2. Relleno: Procese el jamón y ralle la mozzarella. Es clave que el relleno esté FRÍO y COMPACTO para no humedecer la masa.\n3. Armado: Estire la masa fina con máquina. Coloque sobre un molde sorrentinero espolvoreado con sémola. Rellene y cubra con otra capa de masa. Pase el rodillo para cortar.\n4. Salsa Bechamel: En una olla derrita la manteca, agregue la harina y cocine 2 minutos (Roux rubio). Vierta la leche gradualmente batiendo con fuerza para evitar grumos. Condimente.\n5. Cocción: Hierva en 1 litro de agua salada por cada 100g de pasta. Al flotar, retírelos, sartenéelos brevemente con la Bechamel (Mantecatura) y sirva inmediatamente.",
      image: "/images/pizza_recipe_m3.png"
    },
    questions: getQuestionsForPizzaClass(3)
  },
  {
    id: 4,
    title: "Rotisería: Carnes y Platos Complejos",
    description: "Técnicas térmicas (braseado, laqueado), fondos y guarniciones.",
    keyword: "CARNES",
    duration: "10h",
    icon: "flask",
    image: "/images/pizza_m4.png",
    content: `MÓDULO IV: ROTISERÍA (CARNES Y PLATOS COMPLEJOS)

1. TÉCNICAS DE COCCIÓN DE CARNES:
- Sellado: Dorar la pieza en sartén fuerte. Busca la Reacción de Maillard (dorado exterior) que aporta complejidad aromática. (Mito: No "cierra los poros").
- Braseado / Slow Cook (Cocción lenta): Dorar la carne y luego cocinarla en olla tapada con medio líquido (vino, caldo) a baja temperatura. Destruye el colágeno de cortes duros y económicos (bondiola, vacío) convirtiéndolo en gelatina tierna, aumentando así la rentabilidad (Food Cost) del plato.
- Laqueado: Se pinta la pieza asada repetidas veces con una salsa dulce/salada para generar una costra brillante caramelizada.
Para evitar la pechuga seca al horno, se puede someter previamente a una salmuera o marinado. Las marinadas con ácido ayudan a tiernizar fibras. La temperatura interna del pollo debe superar los 74°C obligatoriamente.

2. APROVECHAMIENTO: FONDOS Y RENDIMIENTO:
En rotisería es vital usar subproductos. Huesos tostados en horno y luego hervidos con vegetales generan un "Fondo Oscuro", base para espesar salsas, lo que incrementa ganancias bajando desperdicios. Para ligar el jugo de un braseado se usa un "Slurry" (almidón disuelto en frío) o un toque de manteca fría.
En los costos, la merma es la pérdida natural de peso (evaporación de agua y fundición de grasa) que sufre la carne al cocinarse. El plato se costea siempre considerando el peso final (rendimiento real porción) que considera la merma.

3. GUARNICIONES Y ACOMPAÑAMIENTOS:
La guarnición acompaña y contrasta la carne en sabor, textura o color. Un buen puré de papas liso se logra pisando la papa en caliente y agregando leche y manteca también calientes; nunca usar licuadora porque libera exceso de almidón dejándolo chicloso. Para glasear vegetales baby se los hierve en caldo con azúcar y manteca hasta reducir brillantemente. Papas fritas de rotisería: requieren doble fritura, ventilación y NUNCA taparlas herméticas (el vapor las ablanda).

4. EXHIBICIÓN Y CLÁSICOS DEL MOSTRADOR:
Vitrina caliente: Mantener por arriba de 60°C. Empanadas de carne deben pintarse con doradura (huevo/leche) para el brillo. El picadillo (relleno) debe enfriarse totalmente en heladera antes del repulgue, para que la grasa cuaje y no humedezca/rompa la masa. Un arrollado de pollo requiere ser presionado y envuelto firme en papel aluminio/film térmico para mantener su forma cilíndrica.`,
    recipe: {
      title: "Bondiola de Cerdo Braseada a la Cerveza Negra con Puré Rústico",
      ingredients: "- 1.5 kg Bondiola de cerdo\n- 500 cc Cerveza negra\n- 1 Cebolla, 1 Zanahoria, 2 dientes de ajo\n- Caldo de carne (Fondo Oscuro)\n- Especias (Pimentón, tomillo, miel)\n- 1 kg Papas\n- 50 g Manteca, 100 cc Leche",
      instructions: "1. Sellado (Reacción de Maillard): En una olla de hierro con un poco de aceite a fuego muy fuerte, dore la bondiola entera por todas sus caras hasta que forme una costra marrón. Retire y reserve.\n2. Mirepoix y Desglasado: En la misma olla dore los vegetales picados burdamente. Vierta la cerveza negra para despegar los jugos caramelizados del fondo (desglasar).\n3. Braseado (Cocción Lenta): Vuelva a introducir la bondiola. Agregue el caldo hasta cubrirla por la mitad. Añada especias y miel. Tape herméticamente (con papel aluminio si es necesario) y cocine a horno bajo (160°C) durante 3 a 4 horas.\n4. Guarnición y Slurry: Hierva las papas con piel (puré rústico), píselas en caliente con leche y manteca tibias. Al finalizar la carne (se debe deshacer con tenedor), reduzca los jugos de cocción y líguelos con una cucharadita de almidón disuelto en agua fría (slurry) para lograr una salsa brillante.\n5. Emplatado y Costeo: Sirva generosamente. Recuerde que la bondiola tendrá entre 30% a 40% de merma, por lo que el costo del plato debe basarse en el peso cocido final.",
      image: "/images/pizza_recipe_m4.png"
    },
    questions: getQuestionsForPizzaClass(4)
  },
  {
    id: 5,
    title: "Postres y Cocina Dulce",
    description: "Técnicas pasteleras, baños, merengues, flan, tiramisú.",
    keyword: "POSTRES",
    duration: "10h",
    icon: "activity",
    image: "/images/pizza_m5.png",
    content: `MÓDULO V: PASTELERÍA Y POSTRES DE ROTISERÍA

1. PASTELERÍA COMO QUÍMICA EXACTA:
La precisión en la pastelería es vital; una balanza no es opcional, ya que alteraciones en los pesos rompen la estructura química del postre. 
- Punto Letra / Cinta: Al batir huevos y azúcar (para bizcochuelos o genoise sin polvo leudante) la mezcla blanquea, incorpora aire mecánico y al levantar el batidor se puede "escribir" un dibujo que permanece sobre la superficie.
- Baño María: Cocinar ingredientes delicados (ej. derretir chocolate o cocer flan) sobre el vapor de agua en ebullición suave, garantizando un calor delicado y homogéneo.

2. POSTRES CLÁSICOS DE VITRINA:
- El Flan: Obtiene su estructura mediante la coagulación suave de las proteínas del huevo (nunca debe hervir el agua, o el flan quedará lleno de burbujas/agujeros). El caramelo seco se hace fundiendo azúcar sola en cacerola limpia a fuego lento sin revolver inicialmente (evita cristalizar).
- Tiramisú: Sus bizcochos vainilla se sumergen fugazmente en almíbar de café expreso para no deshacerse. La crema genuina exige Queso Mascarpone.
- Cheesecake estilo New York: Base de galletitas molidas con manteca. Para evitar grietas en la superficie, se debe cocinar a temperatura baja y moderada, y dejar enfriar lentamente apagando el horno y dejando la puerta entreabierta.

3. MERENGUES, CREMAS Y GELATINAS:
- Merengue Italiano: El único 100% seguro contra salmonella. Se bate vertiendo en forma de hilo un almíbar a "punto bolita blanda" (118-121°C) sobre las claras. Este punto se comprueba si al volcar una gota de almíbar en agua fría se puede armar una bolita maleable con los dedos.
- Crema de leche (Chantilly): Debe estar muy fría (4°C ideal) para retener el aire al batirla; si nos pasamos, la grasa se separa y se convierte en manteca.
- Crema Pastelera: Se espesa gracias al almidón de maíz o harina. Al enfriarse, debe cubrirse con film directamente en contacto con la crema ("a piel") para evitar que forme costra en la superficie.
- Gelatina sin sabor: Debe activarse hidratándola en agua fría (5 partes de agua por 1 de polvo) y luego disolverla al calor antes de usar.

4. PRESENTACIÓN Y TEXTURAS:
En los postres "Verrine" (vasitos), contrastar texturas (suave crema, crocante crumble, ácido gelée frutal) aumenta enormemente el valor percibido. Un "Glaseado Espejo" otorga un brillo sumamente profesional y protege el producto en la heladera. El "Coulis" es una salsa dulce fina hecha licuando y tamizando frutos (ej: frutos rojos). El balance ideal implica contrarrestar el dulzor empalagoso con toques ácidos, amargos (cacao) o salados (caramelo salado).`,
    recipe: {
      title: "Tiramisú Clásico de Vitrina",
      ingredients: "- 500 g Queso Mascarpone (o mezcla queso crema firme/crema batida si es rotisería económica)\n- 5 Yemas y 150 g Azúcar (para el aparato bomba)\n- 2 Paquetes de Vainillas o bizcochos de soletilla\n- 300 cc Café Expreso fuerte y frío\n- 30 cc Licor de Amaretto o licor de café\n- Cacao amargo en polvo (para espolvorear)",
      instructions: "1. Almíbar de Café: Mezcle el café frío con el licor en una fuente plana. Reserve.\n2. Aparato Bomba (Pasteurización de Yemas): Para evitar riesgos de ETA, haga un almíbar con el azúcar a 118°C (Punto bolita blanda). Viértalo en forma de hilo sobre las yemas mientras bate a máxima velocidad hasta que la preparación enfríe y blanquee.\n3. Crema Mascarpone: Incorpore suavemente el queso mascarpone a temperatura ambiente a la mezcla de yemas, realizando movimientos envolventes para no bajar el volumen.\n4. Armado: Moje RÁPIDAMENTE las vainillas en el café (si se mojan mucho se deshacen) y forme una capa en la base de la fuente o vasito. Cubra con una capa de la crema de mascarpone. Repita la operación formando otra capa de vainillas y otra de crema.\n5. Presentación: Alise la superficie, lleve a la heladera (frio intenso) por al menos 4 a 6 horas para asentar la estructura. Espolvoree una abundante y tamizada capa de cacao amargo justo antes de exhibir/servir para que no se humedezca.",
      image: "/images/pizza_recipe_m5.png"
    },
    questions: getQuestionsForPizzaClass(5)
  },
  {
    id: 6,
    title: "Gestión, Costos y Emprendimiento",
    description: "Food Cost, diseño de menú, ventas y marketing.",
    keyword: "NEGOCIO",
    duration: "10h",
    icon: "list-checks",
    image: "/images/pizza_m6.png",
    content: `MÓDULO VI: GESTIÓN, COSTOS Y EMPRENDIMIENTO RENTABLE

1. EL CÁLCULO DE COSTOS EN GASTRONOMÍA:
La habilidad técnica no es suficiente si los números no cierran. Un emprendedor exitoso combina técnica, inocuidad y control de números.
- Food Cost (Costo de Materia Prima): Es el costo exacto de los ingredientes utilizados por porción. Para que el negocio sea sano, el Food Cost ideal NUNCA debe superar el 30% a 35% del precio final de venta.
- Estandarización de Recetas: Es imposible costear usando "tazas", "puñados" o al "ojo". El emprendedor debe usar obligatoriamente una balanza digital. (Ej: en pizzería, la mozzarella de buena calidad es el ingrediente más costoso, pesarlo rigurosamente por cada pizza dicta si la noche arrojó ganancias o pérdidas).
- Merma y Rendimiento: Las cáscaras, la merma por cocción o huesos no se ignoran; se calculan e incluyen en el costo real de los ingredientes que terminan en el plato.

2. GESTIÓN FINANCIERA DEL LOCAL:
- Costos Fijos: Aquellos que se pagan obligatoriamente haya o no haya ventas (Alquiler, luz comercial, gas, el sueldo del propio dueño/empleado).
- Punto de Equilibrio (Break-even): La cantidad exacta de pizzas/platos que debe vender al mes para lograr pagar los costos variables (harina, cajas) y fijos. Recién a partir de esa venta se genera ganancia.
- Packaging: La caja de pizza no es un regalo. Es parte del costo directo (variable) del plato y una poderosa herramienta de marketing. El Margen de Contribución es la diferencia entre el precio de venta y este costo variable.

3. LOGÍSTICA DE COMPRAS (Mise en Place y Stock):
La cámara de frío y almacén se rige por el sistema FIFO/PEPS (lo primero en entrar es lo primero en salir). Para no quebrar stock ni comprar de más (generando podredumbre), se usan planillas con "Puntos Críticos de Pedido". Usar productos frescos de temporada no solo aporta sabor excepcional sino que minimiza brutalmente el Food Cost.
En cuanto al tiempo, "Mise en place es dinero"; un chef desorganizado hace que se incurra en horas extras, demoras y mala atención, aumentando los costos indirectos.

4. DISEÑO DEL MENÚ (Menu Engineering) Y MARKETING:
- El Menú: Emprendimientos exitosos comienzan con un menú CORTO, enfocado y cruzando los mismos ingredientes en distintos platos para evitar mermas. Los "Platos Estrella" son aquellos muy rentables y de alta popularidad.
- Locales e Inocuidad: En un emprendimiento hogareño (Dark Kitchen), debe destinarse un sector físico aislado para producir, respetando exigencias bromatológicas (azulejos lavables, bacha independiente).
- Ventas: Las fotos oscuras venden poco. El esfuerzo en fotos "Food Porn" profesionales para Instagram es mandatorio. Ante una queja, el emprendedor profesional escucha activamente, se disculpa, compensa rápidamente y fideliza a ese cliente, jamás discutiendo en redes.`,
    recipe: {
      title: "Costeo y Ficha Técnica de una Pizza Muzzarella",
      ingredients: "Lista de ingredientes pesados en báscula digital:\n- 250 g Masa base estandarizada\n- 80 g Salsa Filetto en frío\n- 250 g Queso Mozzarella cilíndrica de calidad\n- 10 g Aceitunas\n- 5 cc Aceite de Oliva y Orégano\n- 1 Caja de Cartón corrugado",
      instructions: "1. Ficha Técnica: Ingrese el peso exacto de cada ingrediente en una planilla de Excel. \n2. Food Cost Bruto: Calcule cuánto le cuesta cada fracción de producto. Ejemplo: si el Kilo de Mozzarella cuesta $5000, los 250g de su pizza cuestan $1250.\n3. Rendimiento: Sume el costo total de todos los ingredientes más el envase (Caja térmica). Supongamos que el Food Cost total de la pizza más la caja es de $2000.\n4. Precio de Venta (Pricing): Siguiendo la regla de oro, si el Food Cost es $2000 y debe representar solo el 30% del precio final, el cálculo es $2000 / 0.30 = $6666. \n5. Análisis: Ese precio de $6666 le permite que los $4666 restantes paguen la luz, el gas, su salario como maestro pizzero, el alquiler y finalmente dejen un margen de ganancia real para que el negocio crezca. Verifique este precio contra la competencia local; si está fuera de mercado, modifique los gramajes o cambie de proveedores, NUNCA sacrifique inocuidad.",
      image: "/images/pizza_recipe_m6.png"
    },
    questions: getQuestionsForPizzaClass(6)
  }
];
