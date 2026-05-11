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
    instructions: "1. Vestimenta: Colóquese el uniforme limpio en el vestuario. Lave sus manos vigorosamente por 40 a 60 segundos.\n2. Limpieza de Estación: Lave la mesada de acero inoxidable con detergente, enjuague y luego rocíe alcohol al 70%. Deje evaporar.\n3. Recepción (PEPS): Pese e inspeccione los vegetales. Si algo tiene mal olor, descártelo.\n4. Separación: Coloque la tabla verde para vegetales y la roja para carnes en extremos separados de la mesada para evitar contaminación cruzada.\n5. Pre-preparación (Mise en Place): Pese y agrupe todos los ingredientes antes de encender el fuego.",
    image: "/images/pizza_recipe_m1.png",
    icon: "shield"
  },
  {
    id: 2,
    category: "Bases y Gestión",
    title: "Ficha Técnica y Costeo de Pizza",
    ingredients: "Lista de ingredientes pesados en báscula digital:\n- 250 g Masa base estandarizada\n- 80 g Salsa Filetto en frío\n- 250 g Queso Mozzarella de calidad\n- 10 g Aceitunas\n- 5 cc Aceite de Oliva y Orégano\n- 1 Caja de Cartón",
    instructions: "1. Ficha Técnica: Ingrese el peso exacto de cada ingrediente en una planilla.\n2. Food Cost Bruto: Calcule cuánto cuesta cada fracción. Ejemplo: si el Kilo de Mozzarella cuesta $5000, los 250g cuestan $1250.\n3. Rendimiento: Sume el costo total de todos los ingredientes más el envase. Supongamos que el Food Cost total es de $2000.\n4. Pricing: Si el Food Cost es $2000 y debe representar el 30% del precio final, el cálculo es $2000 / 0.30 = $6666.\n5. Análisis: Ese precio permite pagar los costos fijos y dejar margen de ganancia.",
    image: "/images/pizza_recipe_m6.png",
    icon: "list-checks"
  },
  {
    id: 3,
    category: "Bases y Gestión",
    title: "Masa Madre Básica (Cultivo Natural)",
    ingredients: "- 100 g Harina Integral o de Centeno\n- 100 cc Agua mineral sin cloro\n- Frasco de vidrio limpio",
    instructions: "1. Día 1: Mezclar la harina y el agua en el frasco. Tapar sin ajustar y dejar a temperatura ambiente (25°C).\n2. Día 2: Observar si hay pequeñas burbujas. No hacer nada.\n3. Día 3: Descartar la mitad de la mezcla. Agregar 50g de harina y 50cc de agua (Alimentar). Mezclar.\n4. Día 4 al 7: Repetir el proceso de descartar y alimentar cada 24hs. La masa madre estará lista cuando duplique su volumen a las 4-6 horas de ser alimentada y tenga olor ácido frutal agradable.\n5. Mantenimiento: Guardar en heladera y alimentar una vez por semana.",
    icon: "flask"
  },
  {
    id: 4,
    category: "Bases y Gestión",
    title: "Fondo Oscuro de Res (Caldo Base)",
    ingredients: "- 2 kg Huesos de vaca (caracú, asado)\n- 2 Cebollas, 2 Zanahorias, 1 tallo Apio\n- 1 cda Extracto de tomate\n- 5 Litros Agua fría\n- Bouquet Garni (Tomillo, Laurel, Perejil)",
    instructions: "1. Tostado: Colocar los huesos en una asadera y hornear a 220°C por 45 min hasta que estén bien oscuros y dorados (Reacción de Maillard).\n2. Mirepoix: Agregar los vegetales cortados groseramente y el extracto de tomate a la placa. Hornear 15 min más.\n3. Desglasado: Pasar todo a una olla grande. Verter un poco de agua en la asadera caliente para despegar los jugos pegados y sumar a la olla.\n4. Hervido Lento: Cubrir con el agua FRÍA. Llevar a hervor suave. Espumar (retirar impurezas de la superficie) constantemente.\n5. Reducción: Cocinar a fuego mínimo por 4 a 6 horas. Colar muy fino y enfriar. Usar como base para salsas de rotisería.",
    icon: "flask"
  },
  {
    id: 5,
    category: "Bases y Gestión",
    title: "Técnicas de Corte Vegetal Clásicas",
    ingredients: "- Zanahorias, Cebollas, Morrones, Papas\n- Cuchillo Chef (Cuchillo de medio golpe)\n- Tabla de corte verde",
    instructions: "1. Postura: Agarrar el cuchillo por el mango, colocando el índice y el pulgar en la hoja para mayor control. La mano que sostiene el vegetal debe tener forma de 'garra', escondiendo las yemas de los dedos.\n2. Juliana: Cortar los vegetales en tiras finas de aprox 2 mm x 5 cm. Ideal para salteados y ensaladas.\n3. Brunoise: A partir de la Juliana, cortar transversalmente para lograr cubitos minúsculos (1 a 2 mm). Perfecto para salsas y aderezos.\n4. Mirepoix: Cortes irregulares de 1.5 cm. Se usan para saborizar fondos o braseados que luego se colarán o licuarán.\n5. Bastón: Tiras de 6 mm x 6 cm. El corte clásico de las papas fritas.",
    icon: "book"
  },

  // PIZZAS Y PANADERÍA SALADA
  {
    id: 6,
    category: "Pizzas y Panadería Salada",
    title: "Pizza Estilo Napolitano con Fermentación en Frío",
    ingredients: "- 1 kg Harina 000 (alta fuerza)\n- 650 cc Agua mineral (65% hidratación)\n- 3 g Levadura fresca\n- 25 g Sal fina\n- 20 cc Aceite de Oliva Extra Virgen",
    instructions: "1. Amasado: Disuelva la levadura en agua. Incorpore la harina. Repose 20 min. Agregue sal y aceite, amase hasta masa lisa (prueba del velo).\n2. Fermentación: Deje 1 hora a temperatura ambiente. Guarde en frío (heladera) tapada durante 24-48 hs.\n3. Bolleado: Retire del frío, divida en bollos de 250g. Repose 3 horas a temperatura ambiente.\n4. Estirado: Con los dedos. Coloque salsa de tomate perita triturado en frío.\n5. Cocción: Horno a máxima temperatura con piedra refractaria hasta que bordes inflen y doren. Agregue mozzarella fresca al final.",
    image: "/images/pizza_recipe_m2.png",
    icon: "book"
  },
  {
    id: 7,
    category: "Pizzas y Panadería Salada",
    title: "Pizza de Molde Estilo Porteño (Media Masa)",
    ingredients: "- 1 kg Harina 0000\n- 600 cc Agua tibia\n- 25 g Levadura fresca\n- 20 g Sal fina\n- 50 cc Aceite de Girasol\n- 350 g Mozzarella por pizza",
    instructions: "1. Esponja: Diluir la levadura en 100 cc de agua tibia con una cucharada de harina y dejar espumar 15 min.\n2. Masa: Hacer una corona con harina y sal. Verter la esponja, agua y aceite en el centro. Amasar 10 min.\n3. Leudado: Dividir en 3 bollos de 550g. Dejar leudar al doble de volumen.\n4. Estirado: Aceitar generosamente los moldes. Estirar copiando la forma. Dejar puntear 20 min en el molde.\n5. Cocción: Pintar con salsa, precocinar 8 min a 220°C. Retirar, añadir mozzarella y hornear hasta gratinar.",
    icon: "book"
  },
  {
    id: 8,
    category: "Pizzas y Panadería Salada",
    title: "Focaccia Genovesa de Alta Hidratación",
    ingredients: "- 500 g Harina de fuerza (000)\n- 400 cc Agua (80% hidratación)\n- 15 g Sal fina, 5 g Levadura fresca\n- Abundante Aceite de Oliva, Sal gruesa, Romero",
    instructions: "1. Mezcla: Mezclar agua, levadura y harina. No amasar. Reposar 30 min.\n2. Pliegues: Agregar sal. Cada 30 min, estirar la masa y plegarla sobre sí misma 4 veces. Repetir 3 veces.\n3. Fermentación: Pasar a tupper aceitado y dejar en heladera 24 horas.\n4. Moldeado: Volcar sobre asadera muy aceitada. Dejar a temperatura ambiente 2-3 horas hasta llenar el molde de burbujas.\n5. Horneado: Presionar formando hoyuelos. Espolvorear sal gruesa y romero. Hornear a 230°C por 20-25 min.",
    icon: "book"
  },
  {
    id: 9,
    category: "Pizzas y Panadería Salada",
    title: "Tarta Quiche Lorraine Clásica",
    ingredients: "Masa: 250g Harina 0000, 125g Manteca fría, 1 Huevo, agua helada.\nRelleno: 200g Panceta en lardons, 150g Gruyère rallado, 3 Huevos, 200cc Crema de leche, Nuez moscada.",
    instructions: "1. Sablage: Frotar manteca fría con harina hasta hacer un arenado. Unir con huevo y agua helada sin amasar. Enfriar 30 min.\n2. Precocción: Forrar tartera, pinchar base, poner peso y hornear 15 min a 180°C.\n3. Aparejo: Saltear la panceta. Batir huevos, crema, especias.\n4. Horneado: Esparcir panceta y queso sobre la base. Volcar el líquido. Hornear 35 min a 180°C.",
    icon: "book"
  },
  {
    id: 10,
    category: "Pizzas y Panadería Salada",
    title: "Calzone Relleno Napolitano",
    ingredients: "- 1 Bollo de masa de pizza (250g-300g)\n- 150 g Ricota fresca escurrida\n- 100 g Mozzarella feteada\n- 50 g Salame o Jamón picado\n- Pimienta negra, Parmesano",
    instructions: "1. Estirado: Estirar el bollo de pizza de forma circular, dejando los bordes un poco más gruesos.\n2. Relleno: En la mitad inferior del círculo, colocar la ricota mezclada con pimienta y parmesano. Sumar el salame y la mozzarella.\n3. Cierre: Doblar la mitad superior de la masa sobre el relleno formando una empanada gigante. Sellar los bordes firmemente (repulgue o pellizcos) para que no se escape el queso.\n4. Horneado: Pintar la superficie con una fina capa de salsa de tomate o aceite de oliva. Hornear a 250°C durante 12-15 minutos hasta dorar.",
    icon: "book"
  },
  {
    id: 11,
    category: "Pizzas y Panadería Salada",
    title: "Fugazzeta Rellena de Cuartetas",
    ingredients: "- 2 Bollos de masa de pizza (uno de 400g, otro de 300g)\n- 500 g Mozzarella o Cuartirolo\n- 700 g Cebolla en pluma\n- Aceite, Orégano, Sal gruesa, Parmesano",
    instructions: "1. Cebollas: Cortar la cebolla en pluma y blanquearla (agua hirviendo 1 minuto) o saltearla apenas. Escurrir bien.\n2. Base: Estirar el bollo grande en una asadera profunda aceitada. Cubrir con la mozzarella cortada gruesa (dejar borde de 2cm).\n3. Tapa: Estirar el bollo chico y cubrir el queso. Sellar los bordes de la base sobre la tapa (como tarta).\n4. Cobertura: Distribuir la cebolla escurrida sobre la tapa. Rociar con abundante aceite, sal gruesa y parmesano.\n5. Horneado: Hornear a 200°C por 30-35 minutos. El queso debe derretirse y la cebolla dorarse intensamente.",
    icon: "book"
  },
  {
    id: 12,
    category: "Pizzas y Panadería Salada",
    title: "Pan de Campo de Masa Madre",
    ingredients: "- 500 g Harina 000 (o mezcla con integral)\n- 350 cc Agua (70% hidratación)\n- 100 g Masa Madre activa\n- 12 g Sal fina",
    instructions: "1. Mezcla y Autólisis: Integrar harina, agua y masa madre. Reposar 40 min.\n2. Sal y Pliegues: Incorporar sal. Realizar pliegues (Stretch & Fold) cada 45 min durante 3 horas.\n3. Pre-forma y Forma: Bollar suavemente, reposar 20 min. Formar el bollo final (boule) dando tensión. Colocar en un banetón enharinado.\n4. Fermentación: Retardar en heladera por 12 a 24 horas.\n5. Cocción: Volcar el pan, hacerle cortes (greñado) con hoja de afeitar. Hornear en olla de hierro precalentada y tapada a 250°C por 20 min, destapar y bajar a 220°C por 20 min más para dorar costra.",
    icon: "book"
  },
  {
    id: 13,
    category: "Pizzas y Panadería Salada",
    title: "Tarta Pascualina Clásica",
    ingredients: "- 2 Tapas de pascualina (Hojaldre o Criolla)\n- 2 Atados de acelga o espinaca lavada\n- 1 Cebolla, 1/2 Morrón\n- 250 g Ricota, 50 g Queso Rallado\n- 4 Huevos duros + 1 huevo para pintar",
    instructions: "1. Relleno: Saltear cebolla y morrón. Blanquear la espinaca, escurrirla EXTREMADAMENTE bien (presionar con las manos) y picarla. Mezclar verduras con ricota, queso rallado, sal, pimienta y nuez moscada.\n2. Armado: Forrar tartera. Volcar la mitad del relleno. Hacer huecos y colocar los huevos duros pelados. Cubrir con el resto del relleno.\n3. Tapa: Colocar la tapa, repulgar y pinchar la superficie para que escape el vapor. Pintar con huevo.\n4. Horneado: Horno 180°C durante 40-45 minutos hasta dorar.",
    icon: "book"
  },
  {
    id: 14,
    category: "Pizzas y Panadería Salada",
    title: "Grisines Artesanales y Marineras",
    ingredients: "- 500 g Harina 0000\n- 250 cc Agua\n- 25 g Levadura fresca, 10 g Sal\n- 50 g Grasa vacuna refinada o Manteca\n- Orégano, sésamo o queso para saborizar",
    instructions: "1. Masa: Diluir levadura en agua. Mezclar con harina y sal. Incorporar la grasa a temperatura ambiente. Amasar 10 min.\n2. Reposo: Dejar leudar al doble.\n3. Formado Grisines: Estirar la masa en un rectángulo de 5 mm de espesor. Cortar tiras finas, rodarlas ligeramente y estirarlas. (Para saborizados, esparcir sésamo antes de cortar).\n4. Formado Marineras: Cortar rectángulos de masa de 2 mm de espesor, pinchar con tenedor.\n5. Cocción: Hornear a 200°C por 10 a 15 min hasta que estén secos y crocantes.",
    icon: "book"
  },
  {
    id: 15,
    category: "Pizzas y Panadería Salada",
    title: "Chipá (Pan de Queso Tradicional)",
    ingredients: "- 500 g Fécula de Mandioca\n- 250 g Queso Mar del Plata o Pategrás\n- 250 g Queso Sardo o Reggianito\n- 100 g Manteca pomada, 3 Huevos\n- 100 cc Leche, Pizca de sal",
    instructions: "1. Secos: En un bol amplio, mezclar la fécula con los dos tipos de queso rallados y la sal (cuidado con la sal si el queso es muy salado).\n2. Húmedos: Hacer un hueco, agregar la manteca pomada, los huevos y la leche. \n3. Amasado: Mezclar con las manos. La fécula de mandioca no tiene gluten, por lo que la masa se sentirá quebradiza hasta que la grasa de los quesos y la manteca la unan. Amasar hasta formar un bollo homogéneo.\n4. Formado: Hacer bolitas del tamaño de una nuez y colocar en placa sin enmantecar.\n5. Cocción: Horno Fuerte (200°C) por 12-15 minutos. Deben quedar dorados por fuera y chiclosos por dentro.",
    icon: "book"
  },

  // PASTAS, SALSAS Y ENSALADAS
  {
    id: 16,
    category: "Pastas, Salsas y Ensaladas",
    title: "Sorrentinos Artesanales de Jamón y Queso",
    ingredients: "Masa: 400g Harina, 100g Sémola, 5 Huevos.\nRelleno: 300g Mozzarella, 200g Jamón.\nSalsa Filetto: Tomate, ajo, albahaca.",
    instructions: "1. Masa: Amase harinas y huevos. Repose 30 min.\n2. Relleno: Mezcle jamón picado y mozzarella. Debe estar FRÍO.\n3. Armado: Estire la masa fina. Molde sorrentinero, rellene, selle y corte.\n4. Salsa: Dore ajo, añada tomate y reduzca 15 min.\n5. Cocción: Hierva en 1L de agua salada por 100g de pasta. Al flotar, sartenéelos con salsa.",
    image: "/images/pizza_recipe_m3.png",
    icon: "utensils"
  },
  {
    id: 17,
    category: "Pastas, Salsas y Ensaladas",
    title: "Fideos al Pesto Genovés Auténtico",
    ingredients: "- 500 g Fideos secos o frescos\n- 1 atado Albahaca, 50 g Parmesano\n- 30 g Nueces, 1 ajo, 100 cc Aceite de Oliva",
    instructions: "1. Procesado en Frío: En mortero o procesadora, muela ajo, nueces y sal gruesa.\n2. Emulsión: Agregue hojas de albahaca muy secas, procese en pulsos cortos. Agregue oliva en hilo.\n3. Queso: Incorpore parmesano con cuchara (no procesar).\n4. Hervido: Hierva la pasta. Reserve un pocillo de agua de cocción.\n5. Mantecatura: Mezcle pasta y pesto en un BOL fuera del fuego con un poco del agua reservada para emulsionar.",
    icon: "utensils"
  },
  {
    id: 18,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ñoquis de Papa Soufflé (Gnocchi)",
    ingredients: "- 1 kg Papas (viejas/negras)\n- 250 g Harina 0000\n- 1 Huevo\n- Nuez moscada, sal y pimienta",
    instructions: "1. Cocción en seco: Hornee las papas enteras con piel o hiérvalas enteras para que no absorban agua.\n2. Puré: Pele en caliente y pise hasta puré liso. Entibiar.\n3. Masa: Condimente, agregue huevo y harina. Una cortando con espátula, sin amasar en exceso.\n4. Corte: Haga cilindros y corte los ñoquis. Pase por tenedor o ñoquera.\n5. Hervido: Échelos en agua hirviendo con sal. Cuando flotan, retirarlos directo a la salsa.",
    icon: "utensils"
  },
  {
    id: 19,
    category: "Pastas, Salsas y Ensaladas",
    title: "Lasaña a la Boloñesa y Salsa Blanca",
    ingredients: "Masa: 500g pasta fresca.\nRagú Boloñesa: 500g carne picada, zanahoria, cebolla, puré tomate, vino.\nBechamel: 50g manteca, 50g harina, 700cc leche.\nQueso: 300g Mozzarella y Parmesano.",
    instructions: "1. Boloñesa: Dore carne, agregue vegetales, desglase con vino, sume tomate y cocine lento 2hs.\n2. Bechamel: Roux de manteca y harina (2 min). Agregue leche tibia batiendo hasta espesar.\n3. Montaje: Base de bechamel, masa, boloñesa, masa, bechamel, queso. Repita 4 pisos.\n4. Gratinado: Hornee a 200°C por 30-40 min hasta dorar. Reposar 15 min antes de cortar.",
    icon: "utensils"
  },
  {
    id: 20,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ravioles de Ricota, Nuez y Espinaca",
    ingredients: "Masa: 300g Harina, 3 Huevos.\nRelleno: 400g Ricota, 1 atado Espinaca blanqueada y súper exprimida, 50g Nueces picadas tostadas, Nuez moscada, Parmesano.",
    instructions: "1. Relleno: Mezclar la espinaca finamente picada con la ricota escurrida, nueces, parmesano y condimentos. Enfriar.\n2. Masa: Estirar la masa de pasta de forma rectangular y muy fina.\n3. Armado: Colocar pequeñas porciones de relleno equidistantes sobre la masa (usar molde raviolero si se tiene). Pincelar con agua los espacios vacíos y cubrir con otra lámina de masa. Presionar para sacar el aire y cortar.\n4. Cocción: Hervir 3-4 minutos en agua salada. Ideal para servir con manteca de salvia o salsa de tomate.",
    icon: "utensils"
  },
  {
    id: 21,
    category: "Pastas, Salsas y Ensaladas",
    title: "Malfatti de Espinaca y Ricota",
    ingredients: "- 500 g Ricota seca\n- 2 atados Espinaca (cocida, muy escurrida y picada)\n- 1 Huevo, 50 g Parmesano\n- 100 g Harina (aprox)\n- Sal, pimienta, nuez moscada",
    instructions: "1. Preparación: Es vital que la ricota y la espinaca no tengan NADA de líquido. Presionar ambas en un colador o lienzo limpio.\n2. Mezcla: Mezclar en un bol la ricota, espinaca, queso rallado, huevo y condimentos.\n3. Aglutinado: Agregar harina de a poco hasta que la masa tome cuerpo pero siga siendo tierna y pegajosa. (Malfatti significa 'mal hechos', no deben ser perfectos).\n4. Formado: Con manos enharinadas, formar bolitas del tamaño de una nuez.\n5. Cocción y Gratinado: Hervir como ñoquis (hasta que floten). Retirar, colocar en fuente, bañar en salsa rosa (filetto y crema) y gratinar en horno fuerte 10 min.",
    icon: "utensils"
  },
  {
    id: 22,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ensalada Caesar Clásica (Caesar Salad)",
    ingredients: "- 2 Plantas de Lechuga Romana (Cós)\n- 1 Pechuga de Pollo grillada (opcional)\n- Crutones de pan fritos o tostados al ajo\n- Parmesano en láminas\n- Aderezo: 1 Yema, 3 Anchoas, 1 cdita Mostaza Dijon, Medio limón, 100cc Aceite neutro, 1 diente de ajo",
    instructions: "1. Aderezo Caesar (Emulsión): En vaso de minipimer, procesar la yema, el ajo, las anchoas, la mostaza y el limón. Agregar el aceite en forma de hilo hasta lograr una emulsión espesa (como mayonesa). Aligerar con una cucharada de agua si está muy espeso.\n2. Lechuga: Lavar, secar rigurosamente y cortar con las manos la lechuga romana.\n3. Montaje: En un bol grande, mezclar la lechuga con 3/4 del aderezo. Disponer en el plato.\n4. Toppings: Agregar el pollo en tiras, los crutones crocantes y las escamas de parmesano. Terminar con hilos del aderezo restante.",
    icon: "utensils"
  },
  {
    id: 23,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ensalada Caprese con Reducción de Balsámico",
    ingredients: "- 3 Tomates perita maduros pero firmes\n- 250 g Bocconcini o Mozzarella de Búfala\n- Hojas frescas de Albahaca\n- Aceite de Oliva Extra Virgen\n- Sal en escamas, Pimienta negra recién molida\n- 100 cc Aceto Balsámico, 1 cda Miel",
    instructions: "1. Reducción: En una pequeña olla, hervir a fuego bajo el aceto balsámico con la miel durante 10-15 minutos hasta que reduzca a la mitad y adquiera textura de jarabe. Enfriar.\n2. Cortes: Cortar los tomates y la mozzarella en rodajas de 1 cm de espesor uniforme.\n3. Emplatado: En una fuente plana, intercalar una rodaja de tomate, una hoja de albahaca y una rodaja de mozzarella, formando una espiral o hilera continua.\n4. Aliño: Condimentar con sal en escamas y pimienta negra. Rociar generosamente con aceite de oliva de alta calidad.\n5. Toque Final: Dibujar hilos finos de la reducción de balsámico por encima justo antes de servir.",
    icon: "utensils"
  },
  {
    id: 24,
    category: "Pastas, Salsas y Ensaladas",
    title: "Salsa Tuco Casero de Rotisería",
    ingredients: "- 500 g Carne de ternera (Roast Beef o Paleta) en trozos grandes\n- 1 Cebolla, 1/2 Morrón rojo, 1 Zanahoria rallada\n- 2 Latas de tomate perita o puré de tomate rústico\n- Pimentón, Ají molido, Laurel, Orégano, Sal\n- Medio vaso de Vino Tinto",
    instructions: "1. Sellado de Carne: En olla grande con aceite, dorar los trozos de carne por todas sus caras. Retirar y reservar.\n2. Sofrito: En esa misma olla, rehogar cebolla y morrón finamente picados, y zanahoria rallada (le aporta dulzor natural bajando la acidez del tomate).\n3. Desglasado: Volver la carne a la olla, subir el fuego y verter el vino tinto. Dejar evaporar el alcohol 2 minutos.\n4. Tomate y Cocción: Incorporar el tomate y condimentos. Bajar el fuego al mínimo (corona). Cocinar destapado o a medio tapar por 2 a 3 horas, revolviendo de a ratos.\n5. Terminado: El tuco está listo cuando la carne se deshace sola y el aceite sube a la superficie (salsa pesada y concentrada).",
    icon: "utensils"
  },

  // ROTISERÍA Y CARNES
  {
    id: 25,
    category: "Rotisería y Carnes",
    title: "Bondiola Braseada a la Cerveza Negra",
    ingredients: "- 1.5 kg Bondiola de cerdo\n- 500 cc Cerveza negra\n- Cebolla, Zanahoria, Ajo\n- Caldo oscuro, Miel, Especias\n- Papas para guarnición",
    instructions: "1. Sellado: Dore la bondiola entera en olla fuerte.\n2. Desglasado: Dore vegetales, vierta cerveza negra para despegar jugos.\n3. Braseado: Introduzca bondiola, cubra por la mitad con caldo. Tape y hornee a 160°C por 3-4 horas.\n4. Slurry: Reduzzca y ligue los jugos de cocción con almidón de maíz frío para la salsa.\n5. Sirva: La carne debe deshacerse. Acompañe con puré o papas.",
    image: "/images/pizza_recipe_m4.png",
    icon: "flask"
  },
  {
    id: 26,
    category: "Rotisería y Carnes",
    title: "Pollo Arrollado Clásico de Rotisería",
    ingredients: "- 1 Pollo entero deshuesado\n- 200g Queso, 200g Jamón\n- Morrón asado, Aceitunas, Huevos duros",
    instructions: "1. Preparación: Abra el pollo deshuesado, condimente con sal, pimienta y provenzal.\n2. Relleno: Coloque sobre papel aluminio. Agregue capas de jamón, queso, morrón, aceitunas y los huevos duros.\n3. Enrollado: Enrolle compactando muy bien. Ate con hilo choricero. Envuelva en aluminio.\n4. Cocción: Hornee o hierva a 180°C por 1.5 horas.\n5. Prensado: Enfríe toda la noche en heladera con un peso encima para que no se desarme al cortar.",
    icon: "flask"
  },
  {
    id: 27,
    category: "Rotisería y Carnes",
    title: "Empanadas de Carne Cortada a Cuchillo",
    ingredients: "- Tapas de empanada\n- 1 kg Roast Beef en cubitos\n- 1 kg Cebolla, 200g Cebolla verdeo\n- 150g Grasa, Pimentón, Comino\n- Huevos duros",
    instructions: "1. Sofrito: Derrita grasa, fría cebolla común. Agregue carne y cocine rápido (no secar).\n2. Condimentos: Agregue pimentón, comino y sal fuera del fuego.\n3. Enfriado: Enfríe totalmente en placa. Agregue verdeo crudo. El frío solidifica la grasa y el jugo no rompe la masa.\n4. Armado: Rellene con carne y huevo duro. Repulgue.\n5. Cocción: Pinte con doradura y hornee a 250°C por 12-15 min.",
    icon: "flask"
  },
  {
    id: 28,
    category: "Rotisería y Carnes",
    title: "Asado o Vacío al Horno con Papas Rústicas",
    ingredients: "- 1.5 kg Vacío o Tira de Asado ancha\n- 1 kg Papas\n- Sal gruesa, Romero, Oliva",
    instructions: "1. Salazón: Frote la carne con sal gruesa. Repose 30 min.\n2. Sellado Horno: Coloque sobre rejilla, hornee a 220°C por 20 min.\n3. Cocción Lenta: Baje a 160°C. Si quiere, añada agua al fondo y tape con aluminio. Cocine 1 a 1.5 hs más.\n4. Papas: Cuñas con piel blanqueadas (5 min hervor), aliñadas con oliva y romero.\n5. Tostado final: Hornee papas a 250°C los últimos 30 min junto a la carne destapada.",
    icon: "flask"
  },
  {
    id: 29,
    category: "Rotisería y Carnes",
    title: "Milanesa a la Napolitana Suprema",
    ingredients: "- 4 Milanesas (Nalga, Peceto o Suprema de pollo) grandes, fritas o al horno.\n- 300 cc Salsa de Tomate (Filetto espesa)\n- 4 fetas Jamón Cocido grueso\n- 300 g Mozzarella fresca\n- Orégano, Papas fritas",
    instructions: "1. Pre-cocción: Asegúrese de que las milanesas base estén crujientes y cocidas por completo (mediante fritura o doradas al horno). Colóquelas en placa asadera.\n2. Cubierta: Pinte generosamente cada milanesa con salsa filetto caliente. Coloque una feta de jamón cocido encima.\n3. Queso: Cubra completamente con mozzarella rallada o feteada.\n4. Gratinado: Lleve a horno a máxima potencia (Ideal con función grill/dorador de la parte superior) hasta que el queso se derrita y burbujee dorándose ligeramente. Tenga cuidado de que no se queme la base de la milanesa.\n5. Toque Final: Retire, espolvoree orégano frotado entre las manos y sirva con abundante porción de papas fritas doble cocción.",
    icon: "flask"
  },
  {
    id: 30,
    category: "Rotisería y Carnes",
    title: "Pastel de Papa Argentino Clásico",
    ingredients: "- 1 kg Carne picada magra\n- 1.5 kg Papas\n- 2 Cebollas, 1/2 Morrón, 1 diente de ajo\n- 3 Huevos duros, Aceitunas\n- 50 g Manteca, 100 cc Leche\n- Pimentón, Comino, Queso Rallado",
    instructions: "1. Puré Fuerte: Hierva las papas, haga un puré bien sostenido (pisar con poca leche y manteca, sal y nuez moscada). Si queda muy líquido, el pastel colapsará.\n2. Picadillo: Rehogue cebolla y morrón. Agregue la carne picada y cocine hasta dorar. Condimente con comino, pimentón dulce y sal. Fuera del fuego agregue huevo picado y aceitunas.\n3. Base y Montaje: En una fuente profunda para horno enmantecada, ponga una fina capa de puré (opcional). Volque todo el picadillo compactando bien. \n4. Tapa: Cubra con el puré restante. Realice dibujos con un tenedor en la superficie y espolvoree abundante queso parmesano y trocitos de manteca.\n5. Horneado: Hornee a horno fuerte (220°C) por 25-30 minutos hasta lograr una costra dorada y crocante.",
    icon: "flask"
  },
  {
    id: 31,
    category: "Rotisería y Carnes",
    title: "Matambre a la Pizza Tiernizado",
    ingredients: "- 1 Matambre de vaca entero (aprox 1.5 kg)\n- 2 Litros Leche o Caldo\n- 400 cc Salsa de tomate perita\n- 400 g Mozzarella\n- Sal, Pimienta, Orégano",
    instructions: "1. Desgrasado: Limpie el matambre retirando el exceso grosero de grasa, pero dejando una fina película para aportar sabor.\n2. Tiernizado (Secreto de Rotisería): Coloque el matambre enrollado o plegado en una olla a presión o cacerola grande. Cubra con leche (la caseína tierniza) o caldo, sal y laurel. Hierva a fuego mínimo por 1.5 a 2 horas. Apague y deje enfriar en el líquido para que no se seque.\n3. Base: Retire el matambre tiernizado y póngalo estirado sobre una asadera aceitada (la parte que tenía grasa hacia abajo). Cocine a horno fuerte 10 min para dorar la base.\n4. Armado: Gírelo, cubra con salsa de tomate caliente y mozzarella rallada.\n5. Gratinado: Hornee a máxima temperatura hasta que el queso funda y se dore. Condimente con orégano y sirva.",
    icon: "flask"
  },
  {
    id: 32,
    category: "Rotisería y Carnes",
    title: "Vitel Toné Clásico",
    ingredients: "- 1 Peceto de ternera (aprox 1.2 kg)\n- Verduras para caldo (cebolla, apio, zanahoria)\n- Salsa: 1 lata Atún en aceite, 5 Anchoas\n- 4 Yemas de huevo duro, 1 cdita Mostaza\n- 2 cdas Alcaparras, 150 cc Mayonesa, Crema",
    instructions: "1. Cocción de la Carne: Hierva el peceto entero en una olla con agua y las verduras (caldo) por 1.5 a 2 horas hasta que esté tierno. Deje enfriar COMPLETAMENTE dentro del caldo (crucial para que no se oscurezca ni reseque).\n2. Salsa Toné: En una procesadora o licuadora, coloque el atún escurrido, las anchoas, las yemas de huevo duro, la mostaza y un poco de caldo de cocción de la carne. Procese hasta formar una pasta.\n3. Emulsión: Incorpore la mayonesa y procese brevemente. Si queda muy espesa, aligere con un hilo de crema de leche o más caldo.\n4. Feteado: Retire el peceto frío y córtelo en rodajas muy finas (idealmente con máquina feteadora).\n5. Presentación: En una fuente, coloque capas de carne y báñelas con abundante salsa. Decore con alcaparras lavadas. Sirva frío.",
    icon: "flask"
  },

  // POSTRES Y PASTELERÍA
  {
    id: 33,
    category: "Postres y Pastelería",
    title: "Tiramisú Clásico de Vitrina",
    ingredients: "- 500 g Queso Mascarpone\n- 5 Yemas y 150 g Azúcar\n- 2 Paquetes de Vainillas\n- 300 cc Café Expreso frío\n- 30 cc Licor Amaretto\n- Cacao amargo",
    instructions: "1. Aparato Bomba: Almíbar a 118°C volcado en hilo sobre yemas batiendo a máxima velocidad hasta enfriar. Pasteuriza las yemas.\n2. Crema Mascarpone: Incorporar suavemente el queso a temperatura ambiente a la mezcla de yemas.\n3. Armado: Mojar RÁPIDAMENTE las vainillas en café. Intercalar capas de vainillas y crema.\n4. Presentación: Enfriar 6hs. Espolvorear cacao amargo justo antes de servir.",
    image: "/images/pizza_recipe_m5.png",
    icon: "activity"
  },
  {
    id: 34,
    category: "Postres y Pastelería",
    title: "Flan Mixto Casero con Caramelo Seco",
    ingredients: "- 1 L Leche entera\n- 8 Huevos y 2 Yemas\n- 200 g Azúcar (flan) + 150 g (caramelo)\n- Vainilla\n- Dulce de Leche y Crema",
    instructions: "1. Caramelo Seco: Funda los 150g de azúcar a fuego bajo sin revolver. Bañe el molde.\n2. Ligado: Mezcle huevos, yemas y azúcar suavemente, sin incorporar aire.\n3. Mezcla: Añada leche y vainilla. Cuele la mezcla en el molde acaramelado.\n4. Baño María: Coloque el molde en asadera con agua caliente. Tape con aluminio.\n5. Cocción: Hornee a 150°C por 1 hora. Enfríe a temperatura ambiente y luego 12hs de heladera.",
    icon: "activity"
  },
  {
    id: 35,
    category: "Postres y Pastelería",
    title: "Cheesecake Estilo New York",
    ingredients: "Base: 200g Galletitas de vainilla molidas, 100g Manteca derretida.\nRelleno: 600g Queso Crema, 150g Azúcar, 3 Huevos, 150cc Crema, Vainilla, Limón.",
    instructions: "1. Base: Presione la mezcla de galletitas en un molde. Hornee 10 min a 180°C.\n2. Cremado: Bata queso y azúcar lentamente hasta sedoso.\n3. Integración: Agregue huevos uno a uno. Añada crema y saborizantes.\n4. Horneado: Vuelque sobre la base. Hornee a 140°C por 55 min (centro tembloroso).\n5. Enfriado Crítico: Apague el horno, entreabra la puerta y deje enfriar 1h. Luego 12hs de heladera.",
    icon: "activity"
  },
  {
    id: 36,
    category: "Postres y Pastelería",
    title: "Lemon Pie con Merengue Italiano",
    ingredients: "Sablée: 250g Harina, 125g Manteca fría, 80g Azúcar impalpable, 1 Huevo.\nCurd: 150cc Jugo Limón, 150g Azúcar, 4 Yemas, 40g Almidón, 500cc Agua.\nMerengue: 4 Claras, 240g Azúcar, 80cc Agua.",
    instructions: "1. Base: Forme masa, fondee molde, cocine a blanco a 180°C por 15 min.\n2. Curd (Relleno): Hierva agua con mitad azúcar. Mezcle yemas, resto de azúcar, jugo y almidón. Vuelque líquido caliente sobre esto, vuelva al fuego y cocine hasta espesar. Vuelque en tarta.\n3. Merengue: Almíbar a 118°C sobre claras a nieve batiendo rápido.\n4. Decoración: Use manga. Queme con soplete.",
    icon: "activity"
  },
  {
    id: 37,
    category: "Postres y Pastelería",
    title: "Chocotorta Clásica de Rotisería",
    ingredients: "- 3 Paquetes grandes de Galletitas de Chocolate (tipo Chocolinas)\n- 500 g Dulce de Leche Repostero\n- 500 g Queso Crema (tipo Mendicrim o Finlandia)\n- 250 cc Leche o Café (para humedecer)\n- Cacao o rulos de chocolate para decorar",
    instructions: "1. Relleno: En un bol amplio, mezclar el dulce de leche con el queso crema utilizando batidor de alambre o espátula, hasta lograr una crema color caramelo homogénea. (No excederse en el batido si el queso es muy blando para no licuar la mezcla).\n2. Humedecido: Remojar rápidamente cada galletita en leche chocolatada fría o café. No dejarlas en remojo porque se desharán.\n3. Capas: En un molde rectangular, hacer una base de galletitas juntas. Cubrir con una capa gruesa de la mezcla de dulce de leche.\n4. Montaje: Repetir el proceso alternando capas hasta terminar con una capa de relleno lisa. Lo ideal son al menos 4 capas de galletitas.\n5. Frío: Llevar a heladera un mínimo de 6 horas (o freezer 2 horas) para que tome consistencia de torta. Decorar con cacao espolvoreado.",
    icon: "activity"
  },
  {
    id: 38,
    category: "Postres y Pastelería",
    title: "Brownie Intenso de Chocolate con Helado",
    ingredients: "- 200 g Chocolate Semiamargo (mín. 60% cacao) de buena calidad\n- 150 g Manteca\n- 250 g Azúcar (ideal mezcla blanca y rubia)\n- 3 Huevos\n- 120 g Harina 0000\n- 1 cda Cacao amargo en polvo\n- 100 g Nueces (opcional)",
    instructions: "1. Fundido: En un bol a Baño María o microondas a muy baja potencia, derretir juntos la manteca y el chocolate troceado.\n2. Batido: En otro recipiente, mezclar los huevos y el azúcar solo hasta integrar. NO batir a punto letra, no queremos incorporar aire (el brownie debe ser húmedo y denso, no un bizcochuelo).\n3. Integración: Volcar la mezcla de chocolate tibio sobre los huevos y unir.\n4. Secos: Tamizar encima la harina y el cacao. Incorporar con espátula de goma usando movimientos envolventes. Agregar nueces picadas.\n5. Cocción: Volcar en molde cuadrado forrado en papel manteca enmantecado. Hornear a 180°C durante EXACTAMENTE 20-22 minutos. Los bordes deben verse cocidos pero el centro muy húmedo. Enfriar totalmente antes de cortar. Servir caliente con bocha de helado de americana.",
    icon: "activity"
  },
  {
    id: 39,
    category: "Postres y Pastelería",
    title: "Alfajores de Maicena Tradicionales",
    ingredients: "- 200 g Manteca pomada, 150 g Azúcar\n- 3 Yemas de huevo, Esencia de vainilla, Ralladura de limón\n- 300 g Almidón de Maíz (Maicena)\n- 200 g Harina 0000\n- 2 cdtas Polvo de hornear\n- Dulce de Leche Repostero y Coco rallado",
    instructions: "1. Cremado: Batir la manteca blanda con el azúcar hasta blanquear y lograr una crema. Agregar las yemas una a una, la vainilla y la ralladura de limón.\n2. Secos: Tamizar juntos la harina, el almidón de maíz y el polvo de hornear.\n3. Unión: Incorporar los secos a la crema sin amasar. Presionar con las manos hasta formar una masa tierna. Envolver en film y refrigerar 30 minutos.\n4. Corte: Estirar la masa en mesada enharinada (0.5 cm de grosor). Cortar las tapitas con cortapastas. Colocar en placa limpia.\n5. Cocción y Armado: Hornear a 170°C por 10 a 12 minutos. Las tapitas NO deben dorarse. Enfriar. Rellenar generosamente con dulce de leche usando manga y hacer rodar los bordes por coco rallado.",
    icon: "activity"
  },
  {
    id: 40,
    category: "Postres y Pastelería",
    title: "Pasta Frola de Membrillo",
    ingredients: "- Masa Sablée: 150g Manteca, 100g Azúcar, 1 Huevo y 1 yema, 300g Harina 0000, 1 cdita Polvo hornear, Vainilla.\n- Relleno: 500g Dulce de Membrillo, 50cc Oporto o agua caliente.",
    instructions: "1. Masa: Batir manteca y azúcar (cremado). Sumar huevo y yema. Incorporar harina y polvo hornear sin amasar. Enfriar 30 min.\n2. Relleno: Pisar el membrillo junto con el Oporto o agua caliente, calentándolo levemente hasta lograr una mermelada espesa sin grumos.\n3. Fondeado: Estirar 3/4 partes de la masa y forrar una tartera. Volcar el membrillo emparejando la superficie.\n4. Enrejado: Con el cuarto de masa restante, estirar y cortar tiras parejas. Disponer sobre la tarta formando un clásico enrejado romboidal. Pintar las tiras con huevo batido.\n5. Cocción: Horno moderado (180°C) por 35 a 40 minutos hasta que la masa esté bien dorada. Enfriar antes de desmoldar.",
    icon: "activity"
  }
];
