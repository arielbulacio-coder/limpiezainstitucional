export interface Recipe {
  id: number;
  category: string;
  title: string;
  ingredients: string;
  instructions: string;
  image?: string;
  icon: string;
}

export const PIZZA_RECIPES: Recipe[] = [
  // BASES Y GESTIÓN
  {
    id: 1,
    category: "Bases y Gestión",
    title: "Mise en Place y Sanitización del Puesto de Trabajo",
    ingredients: "- Solución de detergente\n- Agua caliente\n- Solución desinfectante (Alcohol 70% o solución clorada)\n- Tablas de corte plásticas (por colores)\n- Materia prima (vegetales y carnes)",
    instructions: "1. Vestimenta: Colóquese el uniforme limpio en el vestuario. Lave sus manos vigorosamente por 40 a 60 segundos.\n2. Limpieza de Estación: Lave la mesada de acero inoxidable con detergente, enjuague y luego rocíe alcohol al 70%. Deje evaporar.\n3. Recepción (PEPS): Pese e inspeccione los vegetales. Si algo tiene mal olor, descártelo.\n4. Separación: Coloque la tabla verde para vegetales y la roja para carnes en extremos separados de la mesada para evitar contaminación cruzada.\n5. Pre-preparación (Mise en Place): Pese y agrupe todos los ingredientes antes de encender el fuego. Al terminar, lave, enjuague y desinfecte nuevamente los utensilios.",
    image: "/images/pizza_recipe_m1.png",
    icon: "shield"
  },
  {
    id: 2,
    category: "Bases y Gestión",
    title: "Ficha Técnica y Costeo de Pizza",
    ingredients: "Lista de ingredientes pesados en báscula digital:\n- 250 g Masa base estandarizada\n- 80 g Salsa Filetto en frío\n- 250 g Queso Mozzarella cilíndrica de calidad\n- 10 g Aceitunas\n- 5 cc Aceite de Oliva y Orégano\n- 1 Caja de Cartón corrugado",
    instructions: "1. Ficha Técnica: Ingrese el peso exacto de cada ingrediente en una planilla de Excel. \n2. Food Cost Bruto: Calcule cuánto le cuesta cada fracción de producto. Ejemplo: si el Kilo de Mozzarella cuesta $5000, los 250g de su pizza cuestan $1250.\n3. Rendimiento: Sume el costo total de todos los ingredientes más el envase (Caja térmica). Supongamos que el Food Cost total de la pizza más la caja es de $2000.\n4. Precio de Venta (Pricing): Siguiendo la regla de oro, si el Food Cost es $2000 y debe representar solo el 30% del precio final, el cálculo es $2000 / 0.30 = $6666. \n5. Análisis: Ese precio de $6666 le permite que los $4666 restantes paguen los costos fijos y dejen un margen de ganancia real.",
    image: "/images/pizza_recipe_m6.png",
    icon: "list-checks"
  },

  // PIZZAS Y PANADERÍA SALADA
  {
    id: 3,
    category: "Pizzas y Panadería Salada",
    title: "Pizza Estilo Napolitano con Fermentación en Frío",
    ingredients: "- 1 kg de Harina 000 (alta fuerza)\n- 650 cc de Agua mineral (65% hidratación)\n- 3 g de Levadura fresca (o 1g seca)\n- 25 g de Sal fina\n- 20 cc de Aceite de Oliva Extra Virgen",
    instructions: "1. Autólisis y Amasado: Disuelva la levadura en el agua. Incorpore la harina y mezcle levemente. Deje reposar 20 minutos. Agregue la sal y el aceite, y amase mediante pliegues hasta lograr una masa lisa (prueba del velo).\n2. Primera Fermentación: Deje la masa en bloque a temperatura ambiente por 1 hora. Luego, realice un desgasificado suave y guárdela en frío (heladera) tapada durante 24-48 hs.\n3. Bolleado (Estandarización): Retire la masa del frío, divídala en bollos de 250 g exactos usando balanza digital. Deje reposar los bollos 3-4 horas a temperatura ambiente.\n4. Estirado: Con los dedos (sin paloote para no quitar el aire de los bordes). Coloque salsa de tomate perita triturado en frío.\n5. Cocción: Introduzca en horno precalentado a máxima temperatura (si es posible con piedra refractaria) hasta que los bordes inflen y doren. Agregue la mozzarella fresca en los últimos minutos.",
    image: "/images/pizza_recipe_m2.png",
    icon: "book"
  },
  {
    id: 4,
    category: "Pizzas y Panadería Salada",
    title: "Pizza de Molde Estilo Porteño (Media Masa)",
    ingredients: "- 1 kg Harina 0000\n- 600 cc Agua tibia\n- 25 g Levadura fresca\n- 20 g Sal fina\n- 50 cc Aceite de Girasol\n- 350 g Mozzarella por pizza",
    instructions: "1. Esponja: Diluir la levadura en 100 cc de agua tibia con una cucharada de harina y dejar espumar 15 minutos.\n2. Masa: En un bol hacer una corona con la harina y la sal por los bordes. Verter la esponja, el resto del agua y el aceite en el centro. Amasar 10 minutos hasta obtener un bollo liso.\n3. Leudado y Bolleado: Dividir en 3 bollos de aprox. 550g. Dejar leudar al doble de volumen.\n4. Estirado: Aceitar generosamente los moldes pizzeros. Estirar la masa copiando la forma del molde. Dejar puntear (leudar) 20 minutos más en el molde.\n5. Pre-pizza y Cocción: Pintar con salsa de tomate y precocinar 8 minutos a horno fuerte (220°C). Retirar, añadir la mozzarella y hornear hasta que gratine.",
    icon: "book"
  },
  {
    id: 5,
    category: "Pizzas y Panadería Salada",
    title: "Focaccia Genovesa de Alta Hidratación",
    ingredients: "- 500 g Harina de fuerza (000)\n- 400 cc Agua (80% hidratación)\n- 15 g Sal fina\n- 5 g Levadura fresca\n- Abundante Aceite de Oliva Extra Virgen\n- Sal gruesa, Romero fresco",
    instructions: "1. Mezcla: En un bol grande, mezclar el agua con la levadura. Incorporar la harina y mezclar hasta que no haya harina seca. No amasar aún. Tapar y dejar reposar 30 min.\n2. Pliegues (Folds): Agregar la sal. Cada 30 minutos, tomar un extremo de la masa húmeda, estirarlo hacia arriba y plegarlo sobre sí mismo. Repetir 4 veces por los 4 lados. Hacer esto 3 veces.\n3. Fermentación: Pasar la masa a un tupper aceitado y dejar en la heladera por 24 horas.\n4. Moldeado: Volcar la masa suavemente sobre una asadera rectangular muy bien aceitada. Dejar a temperatura ambiente 2-3 horas hasta que llene el molde y esté llena de burbujas.\n5. Horneado: Presionar la masa con los dedos aceitados (formando los hoyuelos característicos). Espolvorear sal gruesa y romero. Hornear a 230°C por 20-25 minutos hasta que esté bien dorada y crujiente.",
    icon: "book"
  },
  {
    id: 6,
    category: "Pizzas y Panadería Salada",
    title: "Tarta Quiche Lorraine Clásica",
    ingredients: "Masa Brisée:\n- 250 g Harina 0000\n- 125 g Manteca muy fría en cubos\n- 1 Huevo\n- Pizca de sal y chorrito de agua helada\n\nRelleno:\n- 200 g Panceta ahumada en lardons\n- 150 g Queso Gruyère rallado\n- 3 Huevos\n- 200 cc Crema de leche\n- Sal, pimienta y nuez moscada",
    instructions: "1. Sablage (Arenado): Mezclar harina y sal. Incorporar la manteca fría y frotar con las yemas de los dedos hasta formar un arenado. NO amasar.\n2. Unión: Agregar el huevo y el agua helada justos para unir la masa en un bollo. Envolver en film y enfriar 30 min.\n3. Fondeado y Cocción a Blanco: Estirar y forrar una tartera. Pinchar el fondo. Poner papel aluminio con peso (porotos) y precocinar a 180°C por 15 min.\n4. Aparejo: Saltear la panceta para desgrasarla. En un bol, batir huevos, crema, sal, pimienta y nuez moscada.\n5. Horneado Final: Sobre la tarta precocida, esparcir el queso y la panceta. Verter el líquido. Hornear a 180°C por 30-35 minutos hasta que cuaje y dore.",
    icon: "book"
  },

  // PASTAS, SALSAS Y ENSALADAS
  {
    id: 7,
    category: "Pastas, Salsas y Ensaladas",
    title: "Sorrentinos Artesanales de Jamón y Queso",
    ingredients: "Masa:\n- 400 g Harina 0000 y 100 g Sémola fina\n- 5 Huevos enteros\n\nRelleno:\n- 300 g Mozzarella (escurrida)\n- 200 g Jamón cocido procesado\n\nSalsa Filetto:\n- 1 lata de Tomate Perita\n- 2 dientes de ajo\n- Albahaca, Oliva, Sal",
    instructions: "1. Masa: Forme una corona con harinas, añada los huevos. Amase hasta lograr una textura lisa. Envuelva en film y deje reposar 30 minutos (Relajación de gluten).\n2. Relleno: Mezcle el jamón y la mozzarella. Es clave que el relleno esté FRÍO y COMPACTO para no humedecer la masa.\n3. Armado: Estire la masa fina con máquina. Coloque sobre un molde sorrentinero espolvoreado con sémola. Rellene, pinte con agua los bordes y cubra con masa. Cortar.\n4. Salsa: Dore el ajo en oliva entero y retírelo. Añada el tomate triturado, sal y cocine 15 min. Agregue albahaca al final.\n5. Cocción: Hierva en 1 litro de agua salada por cada 100g de pasta. Al flotar, retírelos y sartenéelos brevemente con la salsa.",
    image: "/images/pizza_recipe_m3.png",
    icon: "utensils"
  },
  {
    id: 8,
    category: "Pastas, Salsas y Ensaladas",
    title: "Fideos al Pesto Genovés Auténtico",
    ingredients: "- 500 g Fideos secos (Spaghetti o Linguine) o frescos\n- 1 atado grande de Albahaca fresca (solo hojas)\n- 50 g Queso Parmesano o Sardo duro\n- 30 g Nueces o Piñones\n- 1 diente de ajo\n- 100 cc Aceite de Oliva Extra Virgen de calidad\n- Sal gruesa",
    instructions: "1. Prevención de Oxidación: Para que el pesto quede verde brillante, las hojas de albahaca deben estar lavadas y sumamente secas. \n2. Procesado en Frío: En un mortero (tradicional) o procesadora, muela el ajo con las nueces y una pizca de sal gruesa (ayuda a triturar sin oxidar).\n3. Emulsión: Agregue las hojas de albahaca y procese usando pulsos cortos (para no calentar la cuchilla). Vaya agregando el aceite de oliva en hilo continuo.\n4. Queso: Incorpore el queso rallado al final y mezcle con cuchara (no procesar el queso).\n5. Hervido y Mantecatura: Hierva la pasta al dente. Retire y reserve un pocillo del agua de cocción. Coloque la pasta en un bol (NUNCA EN SARTÉN AL FUEGO, el pesto se oscurece y amarga al cocinarse), agregue el pesto y un poco de agua de cocción para que emulsione. Sirva.",
    icon: "utensils"
  },
  {
    id: 9,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ñoquis de Papa Soufflé (Gnocchi)",
    ingredients: "- 1 kg Papas (preferentemente viejas/negras, con menos agua)\n- 250 g Harina 0000 (aprox)\n- 1 Huevo\n- Nuez moscada, sal y pimienta\n- Salsa a elección",
    instructions: "1. Cocción en seco: Lave las papas y hornéelas enteras con piel sobre una cama de sal gruesa, o hiérvalas enteras con piel. Esto evita que absorban agua, lo que requeriría más harina y los haría duros.\n2. Puré: Pele las papas en caliente y píselas hasta obtener un puré liso. Deje entibiar.\n3. Formado de masa: Condimente el puré, agregue el huevo y vierta la harina. Únala con un cornet (espátula) cortando y aplastando, sin amasar en exceso para no desarrollar gluten.\n4. Corte: Tome porciones, haga cilindros largos sobre la mesada enharinada y corte los ñoquis. Si desea, páselos por la ñoquera o tenedor para hacerles la marca (ayuda a retener salsa).\n5. Hervido: Échelos en agua hirviendo con sal por tandas. Cuando suben a la superficie (flotan), están listos. Retirar con espumadera directo a la salsa caliente.",
    icon: "utensils"
  },
  {
    id: 10,
    category: "Pastas, Salsas y Ensaladas",
    title: "Lasaña a la Boloñesa y Salsa Blanca",
    ingredients: "- 500 g Masa de pasta estirada (o placas secas hidratadas)\n- Salsa Boloñesa (Ragú): 500g carne picada, zanahoria, apio, cebolla, puré de tomate, vino tinto.\n- Salsa Bechamel (Salsa Blanca): 50g manteca, 50g harina, 700cc leche.\n- 300 g Queso Mozzarella y Parmesano",
    instructions: "1. Boloñesa (Slow Cook): Dore muy bien la carne. Agregue vegetales (mirepoix). Desglase con vino tinto. Agregue tomate y cocine a fuego lentísimo por 2 a 3 horas para concentrar sabor.\n2. Bechamel: Haga un roux (manteca y harina cocidas 2 min). Agregue leche tibia batiendo. Sal, pimienta y nuez moscada. Debe quedar fluida.\n3. Montaje: En una placa profunda para horno, coloque una base de bechamel. Luego masa, boloñesa, masa, bechamel, queso. Repita 3 o 4 pisos terminando siempre en bechamel y abundante queso rallado.\n4. Gratinado: Hornee a 200°C durante 30 a 40 minutos hasta que la superficie esté dorada y crujiente y la pasta cocida. Dejar reposar 15 min antes de cortar.",
    icon: "utensils"
  },

  // ROTISERÍA Y CARNES
  {
    id: 11,
    category: "Rotisería y Carnes",
    title: "Bondiola Braseada a la Cerveza Negra",
    ingredients: "- 1.5 kg Bondiola de cerdo\n- 500 cc Cerveza negra\n- 1 Cebolla, 1 Zanahoria, 2 dientes de ajo\n- Caldo de carne (Fondo Oscuro)\n- Especias (Pimentón, tomillo, miel)\n- 1 kg Papas para guarnición",
    instructions: "1. Sellado: En una olla con aceite a fuego muy fuerte, dore la bondiola entera por todas sus caras (Reacción de Maillard). Retire.\n2. Mirepoix y Desglasado: En la misma olla dore los vegetales. Vierta la cerveza negra para despegar los jugos caramelizados del fondo.\n3. Braseado: Introduzca la bondiola. Agregue el caldo hasta cubrir por la mitad. Añada especias y miel. Tape herméticamente y cocine a horno bajo (160°C) durante 3-4 horas.\n4. Slurry: Al finalizar (la carne se deshace), reduzca los jugos de cocción y líguelos con almidón de maíz disuelto en agua fría para lograr una salsa brillante.\n5. Guarnición: Sirva con puré rústico o papas al horno.",
    image: "/images/pizza_recipe_m4.png",
    icon: "flask"
  },
  {
    id: 12,
    category: "Rotisería y Carnes",
    title: "Pollo Arrollado Clásico de Rotisería",
    ingredients: "- 1 Pollo entero grande (deshuesado) o 3 pechugas abiertas\n- 200 g Queso feteado y 200 g Jamón\n- 1 Pimiento rojo asado, Aceitunas\n- Huevos duros (2 o 3)\n- Hilo choricero, papel aluminio",
    instructions: "1. Preparación de la Carne: Deshuesar el pollo abriéndolo como un libro (o filetear y superponer las pechugas). Condimentar fuertemente con sal, pimienta y provenzal.\n2. Relleno: Colocar el pollo sobre papel film o aluminio. Extender una capa de jamón, luego queso. Colocar en el centro morrones en tiras, aceitunas y los huevos duros en fila.\n3. Enrollado: Con ayuda del aluminio, enrollar apretando muy bien para compactar. Atar con hilo choricero para mantener la forma cilíndrica. Envolver completamente en papel aluminio cerrado.\n4. Cocción: Hornear o hervir a fuego moderado (180°C) por 1 hora y media (Asegurar que el centro supere los 74°C). \n5. Enfriado: En rotisería se prensa con un peso encima durante toda la noche en la heladera para que al cortar no se desarme. Servir frío.",
    icon: "flask"
  },
  {
    id: 13,
    category: "Rotisería y Carnes",
    title: "Empanadas de Carne (Picadillo Jugoso)",
    ingredients: "- Tapas de empanada para horno\n- 1 kg Carne (Roast Beef o bola de lomo)\n- 1 kg Cebolla común y 200g Cebolla de verdeo\n- 150 g Grasa de pella o manteca\n- Pimentón dulce, comino, ají molido\n- Huevos duros",
    instructions: "1. Corte: Cortar la carne a cuchillo en cubitos muy pequeños. Picar las cebollas.\n2. Sofrito: En una olla derretir la grasa. Sofreír la cebolla común hasta que esté transparente. Agregar la carne y cocinar a fuego fuerte solo hasta que cambie de color (no secar).\n3. Condimentación: Fuera del fuego o fuego mínimo, agregar abundante pimentón, comino, ají molido y sal. Revolver.\n4. Enfriado Obligatorio: Pasar el picadillo a una placa ancha. Agregar la cebolla de verdeo cruda picada. Enfriar completamente en heladera toda la noche. La grasa debe solidificarse; esto permite armar la empanada sin que el jugo moje y rompa la masa.\n5. Armado y Cocción: Rellenar agregando huevo duro picado. Repulgar. Pintar con doradura (huevo batido con leche) y hornear a 250°C por 12-15 minutos.",
    icon: "flask"
  },
  {
    id: 14,
    category: "Rotisería y Carnes",
    title: "Asado o Vacío al Horno con Papas Rústicas",
    ingredients: "- 1.5 kg Vacío o Tira de Asado ancha\n- 1 kg Papas\n- Sal gruesa, pimienta negra, ajo en polvo\n- Romero y Aceite de Oliva",
    instructions: "1. Salazón: Frotar la pieza de carne con abundante sal gruesa y pimienta por ambos lados. Dejar reposar 30 min.\n2. Cocción Inicial: Colocar la carne en una asadera con rejilla (para que la grasa escurra y no hierva la carne). Hornear a fuego fuerte (220°C) por 20 minutos para sellar y dorar la capa exterior.\n3. Cocción Lenta: Bajar el horno a 160°C. Si se desea muy tierna, añadir medio vaso de agua al fondo de la fuente y tapar con aluminio. Cocinar 1 hora a 1.5 horas adicionales.\n4. Papas: Lavar las papas y cortarlas en cuñas sin pelar. Blanquearlas (hervir 5 min). Escurrir bien y mezclarlas en un bol con aceite, romero, sal y ajo en polvo.\n5. Tostado final: Poner las papas en placa caliente en el horno a fuego máximo (250°C) durante los últimos 30 min de cocción de la carne.",
    icon: "flask"
  },

  // POSTRES Y PASTELERÍA
  {
    id: 15,
    category: "Postres y Pastelería",
    title: "Tiramisú Clásico de Vitrina",
    ingredients: "- 500 g Queso Mascarpone\n- 5 Yemas y 150 g Azúcar\n- 2 Paquetes de Vainillas\n- 300 cc Café Expreso frío\n- 30 cc Licor de Amaretto\n- Cacao amargo",
    instructions: "1. Aparato Bomba (Yemas Pasteurizadas): Hacer un almíbar con azúcar y agua a 118°C (Punto bolita blanda). Volcar en hilo sobre las yemas batiendo a máxima velocidad hasta que enfríe.\n2. Crema Mascarpone: Incorporar suavemente el queso a temperatura ambiente a la mezcla de yemas con espátula.\n3. Armado: Mojar RÁPIDAMENTE las vainillas en el café y licor. Formar base, cubrir con crema, repetir.\n4. Presentación: Enfriar 4-6 horas en heladera. Espolvorear cacao amargo con colador justo antes de servir.",
    image: "/images/pizza_recipe_m5.png",
    icon: "activity"
  },
  {
    id: 16,
    category: "Postres y Pastelería",
    title: "Flan Mixto Casero con Caramelo Seco",
    ingredients: "- 1 Litro de Leche entera\n- 8 Huevos y 2 Yemas extra\n- 200 g Azúcar (para el flan) + 150 g (para caramelo)\n- Esencia de Vainilla\n- Dulce de Leche y Crema Chantilly (para servir)",
    instructions: "1. Caramelo Seco: En una cacerola u olla para flan, poner a fuego medio los 150g de azúcar sin revolver. Cuando los bordes se fundan, mover la olla (no usar cuchara). Una vez dorado, esparcir por el molde y dejar enfriar.\n2. Ligado: En un bol, mezclar los huevos, yemas y azúcar con un batidor de alambre. No batir fuerte para no incorporar aire (lo que genera burbujas en el flan).\n3. Mezcla: Añadir la leche a temperatura ambiente y la vainilla. Pasar la mezcla por un colador o tamiz para retirar los \"chalazos\" del huevo y volcar al molde acaramelado.\n4. Baño María: Colocar el molde en una asadera profunda. Verter agua caliente en la asadera hasta la mitad del molde. Tapar el molde de flan con aluminio.\n5. Cocción: Hornear a 150°C (fuego muy bajo) por aprox. 1 hora. El agua NUNCA debe hervir. Retirar, enfriar a temperatura ambiente y luego 12h de heladera antes de desmoldar.",
    icon: "activity"
  },
  {
    id: 17,
    category: "Postres y Pastelería",
    title: "Cheesecake Estilo New York",
    ingredients: "Base:\n- 200 g Galletitas dulces (tipo vainilla o graham)\n- 100 g Manteca derretida\n\nRelleno:\n- 600 g Queso Crema tipo americano firme\n- 150 g Azúcar\n- 3 Huevos\n- 150 cc Crema de leche\n- Ralladura de limón, vainilla\n- Frutos rojos para topping",
    instructions: "1. Base: Procesar las galletitas y mezclar con la manteca. Presionar en el fondo de un molde desmontable forrado con papel manteca. Hornear 10 min a 180°C y enfriar.\n2. Cremado: Batir el queso crema a velocidad baja con el azúcar hasta que esté sedoso (no sobrebatir para no incorporar aire). \n3. Incorporación: Agregar los huevos uno a uno, batiendo lo justo para integrar. Añadir la crema, vainilla y limón.\n4. Horneado Lento: Volcar sobre la base. Hornear a 140°C-150°C (horno bajo) por 50-60 minutos. Los bordes deben verse firmes pero el centro debe temblar ligeramente como gelatina.\n5. Enfriado Crítico: Apagar el horno, abrir la puerta un poco y dejar enfriar la cheesecake adentro por 1 hora. Luego llevar a heladera mínimo 12 horas antes de desmoldar. Cubrir con coulis de frutos rojos.",
    icon: "activity"
  },
  {
    id: 18,
    category: "Postres y Pastelería",
    title: "Lemon Pie con Merengue Italiano",
    ingredients: "Masa Sablée:\n- 250 g Harina, 125 g Manteca fría, 80 g Azúcar impalpable, 1 Huevo\n\nCurd de Limón:\n- 150 cc Jugo de Limón, Ralladura de 2 limones\n- 150 g Azúcar, 4 Yemas, 40 g Almidón de maíz, 500 cc Agua o leche\n\nMerengue Italiano:\n- 4 Claras de huevo, 240 g Azúcar, 80 cc Agua",
    instructions: "1. Base: Arenar manteca, harina y azúcar. Unir con el huevo sin amasar. Fondeado y cocción a blanco (ver técnica de quiche) 15 min a 180°C.\n2. Relleno (Curd): Hervir el agua/leche con la mitad del azúcar y ralladura. En un bol mezclar yemas, resto de azúcar, jugo de limón y almidón. Volcar el líquido caliente sobre el bol batiendo, devolver todo a la olla y cocinar hasta espesar (ebullición de 1 minuto). Volcar caliente sobre la tarta.\n3. Merengue: Hacer un almíbar con agua y azúcar a 118°C (bolita blanda). Batir claras a nieve. Volcar almíbar en hilo batiendo a máxima velocidad hasta enfriar el bol.\n4. Decoración: Colocar el merengue (muy estable y seguro microbiológicamente) con manga o espátula. Quemar levemente con soplete gastronómico.",
    icon: "activity"
  }
];
