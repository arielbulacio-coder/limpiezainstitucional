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
    content: `Módulo I: Bases de la Cocina y Seguridad Alimentaria

1. MANIPULACIÓN SEGURA DE ALIMENTOS (BPM):
Las Buenas Prácticas de Manufactura son esenciales para cualquier emprendedor. Garantizan que su producto no causará una ETA (Enfermedad de Transmisión Alimentaria). 
- Higiene Personal: Uñas cortas, sin esmalte, cofia y uniforme exclusivo para la cocina.
- Contaminación Cruzada: Es el mayor peligro en rotisería. Usar tablas separadas (o lavadas profundamente) entre crudos (pollo/carne) y cocidos o verduras.

2. HIGIENE Y ESPACIO DE TRABAJO:
Diferencia entre Limpiar (remover suciedad visible con detergente) y Desinfectar (eliminar bacterias con alcohol 70% o solución clorada). Las mesadas deben sanitizarse constantemente.

3. CONSERVACIÓN DE MATERIAS PRIMAS:
- Regla PEPS: Primero en Entrar, Primero en Salir. Garantiza la rotación de stock.
- Cadena de Frío: Las carnes deben descongelarse en la heladera, NUNCA a temperatura ambiente. La zona de peligro bacteriano es de 5°C a 60°C.`,
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
    content: `Módulo II: Pizzas y Panadería Salada

1. HARINAS, GLUTEN Y LEVADURAS:
El gluten es la red proteica que retiene los gases de la fermentación y da elasticidad a la masa.
- Se recomienda harina de fuerza (000 o 0000 específica) según el tiempo de leudado.
- La levadura produce gas carbónico (alveolatura) y alcohol (sabor). NUNCA mezclarla de forma directa con la sal, que la inactiva por ósmosis.

2. AMASADO Y FERMENTACIÓN:
La técnica moderna pizzera exige fermentaciones largas y en frío (24-72hs en heladera). Esto desarrolla un perfil de sabor complejo (pizza napolitana o porteña aireada) y una digestibilidad muy superior al leudado rápido.

3. FOCACCIAS Y TARTAS:
- Focaccias: Alta hidratación (70-80% agua) y buen aceite de oliva para lograr cortezas crujientes y migas agujereadas.
- Tartas (Quiche): La masa brisée requiere un 'Sablage' o arenado de harina y manteca fría, amasando lo mínimo para que no quede dura (no desarrollar gluten). Hornear a blanco antes de rellenar.`,
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
    content: `Módulo III: Pastas, Salsas y Ensaladas

1. PASTA FRESCA:
La fórmula base (1 huevo cada 100g de harina). Para más estructura 'al dente', usar sémola de trigo duro. Es vital dejar reposar el bollo 30 min para relajar el gluten. 
Hervir en abundante agua salada (1L de agua x 100g de pasta), no ponerle aceite.

2. SALSAS MADRE Y DERIVADAS:
- Salsa Blanca (Bechamel): Base de un 'Roux' (partes iguales de manteca y harina) al que se le agrega leche tibia. Derivada famosa: Salsa Mornay (+ queso).
- Fileto: Aceite de oliva, ajo, albahaca y buen tomate. Cocciones cortas para frescura.
- Pesto: Emulsión en frío; evitar calentarlo para que la albahaca no se oxide.

3. ENSALADAS Y CORTES:
Los vegetales deben estar bien secos antes de aliñar, o el agua diluirá la vinagreta. Cortes clásicos como Juliana (tiras finas) profesionalizan la presentación. En rotisería, aliñar las hojas solo al momento de servir para evitar la marchitez por la sal (ósmosis).`,
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
    content: `Módulo IV: Rotisería (Carnes y Platos Complejos)

1. TÉCNICAS DE COCCIÓN EN CARNES:
- Sellado: Dorar a fuego fuerte para lograr la Reacción de Maillard (sabor a asado, umami).
- Braseado / Slow Cook: Cocciones lentas y húmedas ideales para cortes económicos (bondiola, osobuco). Deshace el colágeno en gelatina, tiernizando cortes duros.
- Laqueado: Pincelar piezas (ej. pollo) en horno con líquidos azucarados/salsa de soja, buscando color y brillo extremo.

2. TEMPERATURAS DE INOCUIDAD:
Cualquier plato a base de pollo o carne picada DEBE alcanzar los 74°C en el centro para destruir patógenos letales como Salmonella y E. Coli.

3. FONDOS, SALSAS Y GUARNICIONES:
El aprovechamiento de carcasas de pollo o huesos para armar 'Fondos Oscuros' permite maximizar la rentabilidad del negocio gastronómico. La guarnición (ej. puré cremoso montado con manteca) debe contrastar en textura con la proteína.`,
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
    content: `Módulo V: Postres y Cocina Dulce

1. LA QUÍMICA DE LA PASTELERÍA:
La exactitud en el pesaje es obligatoria. No se cocina 'al ojo'. 
- Punto Letra / Cinta: Batir huevos y azúcar hasta blanquear, base para bizcochuelos aireados sin polvo de hornear.

2. CLÁSICOS DE ROTISERÍA (FLAN, TIRAMISÚ, CHEESECAKE):
- Flan: Se cuaja por la coagulación de proteínas del huevo a calor suave. Siempre cocción a Baño María para que no hierva y quede liso sin "agujeros".
- Tiramisú: Postre ensamblado. Almíbar de café para humedecer vainillas, crema a base de queso mascarpone auténtico.
- Cheesecake: Horneada baja temperatura, evitar sobrecocción para que no se agriete arriba.

3. MERENGUE Y TERMINACIONES:
El merengue italiano (claras con almíbar a 118°C) es el único seguro a nivel bacteriológico para exhibir en postres fríos. Presentaciones limpias y glaseados brillantes añaden gran valor percibido.`,
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
    content: `Módulo VI: Gestión, Costos y Emprendimiento

1. EL CÁLCULO DEL "FOOD COST":
Para ser rentable, el costo de materia prima (Food Cost) de un plato o pizza no debe exceder el 30%-35% del precio de venta final. El gramaje de los ingredientes (ej: la mozzarella) debe estar estandarizado (usar balanza siempre).

2. COSTOS FIJOS Y PUNTO DE EQUILIBRIO:
No olvide el alquiler, gas, luz y su propio sueldo. El Punto de Equilibrio indica cuántas pizzas/platos debe vender al mes solo para pagar gastos antes de ver ganancia pura.

3. DISEÑO DE MENÚ EFICIENTE (MENU ENGINEERING):
Apostar a un menú corto, focalizado en productos "Estrella" (alta rentabilidad y alta popularidad). Evite cartas kilométricas que generan grandes mermas y desperdicios de mercadería.

4. MARKETING Y ATENCIÓN AL CLIENTE:
Una excelente foto de su producto ("Food Porn") en redes, buen packaging (caja térmica de calidad) y respuestas amables a quejas fidelizan al cliente y profesionalizan un emprendimiento doméstico o rotisería.`,
    questions: getQuestionsForPizzaClass(6)
  }
];
