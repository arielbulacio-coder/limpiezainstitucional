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
  {
    id: 6,
    category: "Bases y Gestión",
    title: "Salsa Criolla Clásica",
    ingredients: "- 1 Cebolla blanca, 1 Cebolla morada\n- 1/2 Morrón rojo, 1/2 Morrón verde\n- 2 Tomates perita (sin semillas)\n- 100 cc Aceite neutro o de Oliva\n- 50 cc Vinagre de alcohol o manzana\n- Sal y Pimienta negra",
    instructions: "1. Corte: Picar todos los vegetales en Brunoise (cubos minúsculos y muy parejos). Este es el secreto de una buena criolla.\n2. Mezcla: En un bol, integrar los vegetales picados.\n3. Aliño: Agregar la sal y la pimienta y revolver para que los vegetales suelten sus jugos.\n4. Emulsión: Añadir el vinagre y por último el aceite. Revolver bien.\n5. Reposo: Dejar reposar al menos 2 horas en la heladera antes de servir para que los sabores se asienten. Ideal para acompañar asados o empanadas.",
    icon: "book"
  },
  {
    id: 7,
    category: "Bases y Gestión",
    title: "Chimichurri Tradicional de Rotisería",
    ingredients: "- 3 cdas Orégano seco, 1 cda Ají molido\n- 1 cda Perejil deshidratado o fresco picado\n- 2 Dientes de ajo picados muy finos\n- 100 cc Agua tibia, 50 cc Vinagre\n- 150 cc Aceite (mitad oliva, mitad neutro)\n- Sal gruesa y Pimienta",
    instructions: "1. Hidratación: En un bol o frasco, colocar las especias secas (orégano, ají molido, perejil si es seco). Verter el agua tibia y el vinagre. Dejar hidratar 10 minutos.\n2. Condimentos: Sumar el ajo picado muy fino, la sal gruesa y la pimienta.\n3. Integración: Por último, agregar los aceites y mezclar vigorosamente.\n4. Conservación: Guardar en frasco de vidrio esterilizado en la heladera. \n5. Uso: Aunque puede usarse al instante, el sabor mejora drásticamente tras 2-3 días de maceración.",
    icon: "book"
  },
  {
    id: 8,
    category: "Bases y Gestión",
    title: "Mayonesa Casera Segura (Lactonesa sin huevo)",
    ingredients: "- 100 cc Leche entera (a temperatura ambiente)\n- 200 a 300 cc Aceite de girasol\n- 1 cdita Mostaza\n- 1 cda Jugo de limón o Vinagre\n- Sal y Pimienta blanca\n- Opcional: Ajo en polvo o Ciboulette",
    instructions: "1. Prevención ETA: Usar leche en vez de huevo crudo elimina el riesgo de Salmonella, ideal para rotiserías.\n2. Inicio: Colocar la leche, la sal y la mostaza en el vaso de la licuadora o minipimer.\n3. Emulsión: Comenzar a licuar a velocidad alta e ir agregando el aceite en forma de hilo muy fino y constante.\n4. Textura: A medida que se agrega el aceite, la mezcla comenzará a espesar. Detener el aceite cuando alcance la consistencia deseada.\n5. Toque Final: Agregar el jugo de limón al final para estabilizar y realzar el sabor. Conservar en frío estricto por no más de 3 días.",
    icon: "flask"
  },
  {
    id: 9,
    category: "Bases y Gestión",
    title: "Masa de Crepes (Panqueques Clásicos)",
    ingredients: "- 250 g Harina 0000\n- 500 cc Leche entera\n- 2 Huevos\n- 2 cdas Manteca derretida (o aceite)\n- Pizca de sal",
    instructions: "1. Batido: En un bol, batir los huevos con la leche y la sal.\n2. Incorporación: Agregar la harina previamente tamizada poco a poco, batiendo enérgicamente para evitar grumos.\n3. Materia Grasa: Sumar la manteca derretida al final. Esto evitará que los crepes se peguen en la sartén.\n4. Reposo: Dejar reposar la masa en la heladera por 30 minutos (permite que la harina se hidrate y relaje el gluten).\n5. Cocción: En una sartén panquequera caliente y apenas enmantecada, volcar un cucharón pequeño, girar para cubrir el fondo y cocinar 1 minuto de cada lado.",
    icon: "book"
  },
  {
    id: 10,
    category: "Bases y Gestión",
    title: "Almíbar Básico y Puntos de Cocción",
    ingredients: "- 500 g Azúcar Blanca\n- 500 cc Agua\n- Gotas de jugo de limón (opcional, para evitar cristalización)",
    instructions: "1. Proporción Típica: Partes iguales de agua y azúcar (TPT - Tant Pour Tant). Ideal para embeber bizcochuelos.\n2. Fuego: Llevar a fuego medio sin remover para no cristalizar el azúcar.\n3. Punto Hilo: Alcanza los 105°C - 110°C. Al tomar una gota entre los dedos y separar, forma un hilo fino que se corta rápido.\n4. Punto Bolita Blanda: 118°C - 120°C. Al dejar caer una gota en agua helada, se puede formar una bola blanda maleable. Usado para Merengue Italiano.\n5. Conservación: El almíbar TPT puede guardarse semanas en la heladera en frasco cerrado.",
    icon: "flask"
  },
  {
    id: 11,
    category: "Bases y Gestión",
    title: "Conserva de Berenjenas al Escabeche",
    ingredients: "- 1 kg Berenjenas (cortadas en tiras)\n- 500 cc Vinagre blanco, 500 cc Agua\n- Sal gruesa\n- Aceite (mitad oliva, mitad neutro)\n- Ajo, Laurel, Orégano, Ají molido",
    instructions: "1. Deshidratación: Colocar las tiras de berenjena en un colador, espolvorear con sal gruesa y dejar reposar 2 horas para que suelten el agua amarga.\n2. Enjuague: Lavarlas bien bajo el grifo y escurrirlas.\n3. Blanqueo: Hervir la mezcla de agua y vinagre. Sumergir las berenjenas por 3 a 5 minutos (deben quedar tiernas pero no deshechas). Escurrir y enfriar.\n4. Condimentación: Mezclar las berenjenas frías con láminas de ajo, orégano, ají molido y hojas de laurel.\n5. Envasado: Llenar frascos esterilizados y cubrir por completo con el aceite. Mantener en heladera. Son mejores a los 3-4 días de elaboradas.",
    icon: "flask"
  },
  {
    id: 12,
    category: "Bases y Gestión",
    title: "Aderezo Ranch para Ensaladas y Dips",
    ingredients: "- 100 g Mayonesa, 100 g Crema Ácida (o yogurt natural)\n- 1 Diente de ajo muy picado, 1 cdita Cebolla en polvo\n- Ciboulette fresco picado, Perejil picado\n- Sal, Pimienta negra, Gotas de limón",
    instructions: "1. Base: En un bol, mezclar en partes iguales la mayonesa y la crema ácida o yogurt natural.\n2. Saborización: Agregar el ajo triturado a pasta, la cebolla en polvo, el ciboulette y el perejil.\n3. Equilibrio: Condimentar con sal, pimienta negra molida gruesa y un chorrito de jugo de limón para realzar la frescura.\n4. Reposo: Mezclar bien y dejar reposar al menos 1 hora en la heladera antes de usar.\n5. Uso: Ideal para acompañar bastones de vegetales, papas fritas, o como aliño para ensaladas con pollo.",
    icon: "utensils"
  },
  {
    id: 13,
    category: "Bases y Gestión",
    title: "Fondo Claro de Ave (Caldo de Pollo)",
    ingredients: "- 1 a 2 kg Carcasas (huesos) y alas de Pollo\n- 2 Zanahorias, 2 Cebollas, 1 Apio (Mirepoix Blanco)\n- 5 Litros Agua fría\n- Bouquet Garni (Laurel, Perejil, Tomillo, Pimienta en grano)",
    instructions: "1. Limpieza: Limpiar las carcasas retirando excesos de grasa y vísceras.\n2. Blanqueo (opcional): Poner las carcasas en agua fría, llevar a ebullición y colar inmediatamente. Lavar los huesos. Esto asegura un caldo muy transparente.\n3. Cocción Lenta: Poner los huesos limpios en la olla con 5 litros de agua FRÍA. Llevar a fuego medio.\n4. Espumado y Verduras: A medida que suben impurezas (espuma), retirarlas. Añadir los vegetales cortados en trozos grandes y el bouquet garni. NUNCA agregar sal.\n5. Tiempo: Cocinar a fuego mínimo continuo (sin borbotones bruscos) por 2 a 3 horas. Colar fino, desgrasar en frío y almacenar.",
    icon: "flask"
  },

  // PIZZAS Y PANADERÍA SALADA
  {
    id: 14,
    category: "Pizzas y Panadería Salada",
    title: "Pizza Estilo Napolitano con Fermentación en Frío",
    ingredients: "- 1 kg Harina 000 (alta fuerza)\n- 650 cc Agua mineral (65% hidratación)\n- 3 g Levadura fresca\n- 25 g Sal fina\n- 20 cc Aceite de Oliva Extra Virgen",
    instructions: "1. Amasado: Disuelva la levadura en agua. Incorpore la harina. Repose 20 min. Agregue sal y aceite, amase hasta masa lisa (prueba del velo).\n2. Fermentación: Deje 1 hora a temperatura ambiente. Guarde en frío (heladera) tapada durante 24-48 hs.\n3. Bolleado: Retire del frío, divida en bollos de 250g. Repose 3 horas a temperatura ambiente.\n4. Estirado: Con los dedos. Coloque salsa de tomate perita triturado en frío.\n5. Cocción: Horno a máxima temperatura con piedra refractaria hasta que bordes inflen y doren. Agregue mozzarella fresca al final.",
    image: "/images/pizza_recipe_m2.png",
    icon: "book"
  },
  {
    id: 15,
    category: "Pizzas y Panadería Salada",
    title: "Pizza de Molde Estilo Porteño (Media Masa)",
    ingredients: "- 1 kg Harina 0000\n- 600 cc Agua tibia\n- 25 g Levadura fresca\n- 20 g Sal fina\n- 50 cc Aceite de Girasol\n- 350 g Mozzarella por pizza",
    instructions: "1. Esponja: Diluir la levadura en 100 cc de agua tibia con una cucharada de harina y dejar espumar 15 min.\n2. Masa: Hacer una corona con harina y sal. Verter la esponja, agua y aceite en el centro. Amasar 10 min.\n3. Leudado: Dividir en 3 bollos de 550g. Dejar leudar al doble de volumen.\n4. Estirado: Aceitar generosamente los moldes. Estirar copiando la forma. Dejar puntear 20 min en el molde.\n5. Cocción: Pintar con salsa, precocinar 8 min a 220°C. Retirar, añadir mozzarella y hornear hasta gratinar.",
    icon: "book"
  },
  {
    id: 16,
    category: "Pizzas y Panadería Salada",
    title: "Focaccia Genovesa de Alta Hidratación",
    ingredients: "- 500 g Harina de fuerza (000)\n- 400 cc Agua (80% hidratación)\n- 15 g Sal fina, 5 g Levadura fresca\n- Abundante Aceite de Oliva, Sal gruesa, Romero",
    instructions: "1. Mezcla: Mezclar agua, levadura y harina. No amasar. Reposar 30 min.\n2. Pliegues: Agregar sal. Cada 30 min, estirar la masa y plegarla sobre sí misma 4 veces. Repetir 3 veces.\n3. Fermentación: Pasar a tupper aceitado y dejar en heladera 24 horas.\n4. Moldeado: Volcar sobre asadera muy aceitada. Dejar a temperatura ambiente 2-3 horas hasta llenar el molde de burbujas.\n5. Horneado: Presionar formando hoyuelos. Espolvorear sal gruesa y romero. Hornear a 230°C por 20-25 min.",
    icon: "book"
  },
  {
    id: 17,
    category: "Pizzas y Panadería Salada",
    title: "Tarta Quiche Lorraine Clásica",
    ingredients: "Masa: 250g Harina 0000, 125g Manteca fría, 1 Huevo, agua helada.\nRelleno: 200g Panceta en lardons, 150g Gruyère rallado, 3 Huevos, 200cc Crema de leche, Nuez moscada.",
    instructions: "1. Sablage: Frotar manteca fría con harina hasta hacer un arenado. Unir con huevo y agua helada sin amasar. Enfriar 30 min.\n2. Precocción: Forrar tartera, pinchar base, poner peso y hornear 15 min a 180°C.\n3. Aparejo: Saltear la panceta. Batir huevos, crema, especias.\n4. Horneado: Esparcir panceta y queso sobre la base. Volcar el líquido. Hornear 35 min a 180°C.",
    icon: "book"
  },
  {
    id: 18,
    category: "Pizzas y Panadería Salada",
    title: "Calzone Relleno Napolitano",
    ingredients: "- 1 Bollo de masa de pizza (250g-300g)\n- 150 g Ricota fresca escurrida\n- 100 g Mozzarella feteada\n- 50 g Salame o Jamón picado\n- Pimienta negra, Parmesano",
    instructions: "1. Estirado: Estirar el bollo de pizza de forma circular, dejando los bordes un poco más gruesos.\n2. Relleno: En la mitad inferior del círculo, colocar la ricota mezclada con pimienta y parmesano. Sumar el salame y la mozzarella.\n3. Cierre: Doblar la mitad superior de la masa sobre el relleno formando una empanada gigante. Sellar los bordes firmemente para que no se escape el queso.\n4. Horneado: Pintar la superficie con una fina capa de salsa de tomate o aceite de oliva. Hornear a 250°C durante 12-15 minutos.",
    icon: "book"
  },
  {
    id: 19,
    category: "Pizzas y Panadería Salada",
    title: "Fugazzeta Rellena de Cuartetas",
    ingredients: "- 2 Bollos de masa de pizza (uno de 400g, otro de 300g)\n- 500 g Mozzarella o Cuartirolo\n- 700 g Cebolla en pluma\n- Aceite, Orégano, Sal gruesa, Parmesano",
    instructions: "1. Cebollas: Cortar la cebolla en pluma y blanquearla apenas. Escurrir bien.\n2. Base: Estirar el bollo grande en una asadera aceitada. Cubrir con la mozzarella (dejar borde de 2cm).\n3. Tapa: Estirar el bollo chico y cubrir el queso. Sellar los bordes.\n4. Cobertura: Distribuir la cebolla escurrida sobre la tapa. Rociar con abundante aceite, sal gruesa y parmesano.\n5. Horneado: Hornear a 200°C por 30-35 minutos. El queso debe derretirse y la cebolla dorarse intensamente.",
    image: "/images/recipe_fugazzeta.png",
    icon: "book"
  },
  {
    id: 20,
    category: "Pizzas y Panadería Salada",
    title: "Pan de Campo de Masa Madre",
    ingredients: "- 500 g Harina 000\n- 350 cc Agua\n- 100 g Masa Madre activa\n- 12 g Sal fina",
    instructions: "1. Mezcla y Autólisis: Integrar harina, agua y masa madre. Reposar 40 min.\n2. Sal y Pliegues: Incorporar sal. Realizar pliegues (Stretch & Fold) cada 45 min por 3 horas.\n3. Forma: Bollar suavemente. Colocar en un banetón enharinado.\n4. Fermentación: Retardar en heladera por 12 a 24 horas.\n5. Cocción: Volcar el pan, hacer cortes. Hornear en olla de hierro tapada a 250°C por 20 min, destapar y bajar a 220°C por 20 min más.",
    icon: "book"
  },
  {
    id: 21,
    category: "Pizzas y Panadería Salada",
    title: "Tarta Pascualina Clásica",
    ingredients: "- 2 Tapas de pascualina\n- 2 Atados de espinaca lavada y blanqueada\n- 1 Cebolla, 1/2 Morrón\n- 250 g Ricota, 50 g Queso Rallado\n- 4 Huevos duros + 1 huevo para pintar",
    instructions: "1. Relleno: Saltear cebolla y morrón. Escurrir MUY bien la espinaca y picarla. Mezclar verduras con ricota, queso rallado y especias.\n2. Armado: Forrar tartera. Volcar mitad del relleno. Hacer huecos y colocar huevos duros. Cubrir con el resto.\n3. Tapa: Colocar la tapa, repulgar y pinchar la superficie. Pintar con huevo.\n4. Horneado: Horno 180°C durante 40-45 minutos.",
    icon: "book"
  },
  {
    id: 22,
    category: "Pizzas y Panadería Salada",
    title: "Grisines Artesanales y Marineras",
    ingredients: "- 500 g Harina 0000\n- 250 cc Agua\n- 25 g Levadura fresca, 10 g Sal\n- 50 g Grasa vacuna o Manteca\n- Orégano o sésamo",
    instructions: "1. Masa: Diluir levadura en agua. Mezclar con harina y sal. Incorporar la grasa. Amasar 10 min.\n2. Reposo: Dejar leudar al doble.\n3. Formado Grisines: Estirar la masa en un rectángulo de 5 mm. Cortar tiras finas, rodarlas.\n4. Formado Marineras: Cortar rectángulos de masa de 2 mm, pinchar con tenedor.\n5. Cocción: Hornear a 200°C por 10 a 15 min hasta que estén crocantes.",
    icon: "book"
  },
  {
    id: 23,
    category: "Pizzas y Panadería Salada",
    title: "Chipá (Pan de Queso Tradicional)",
    ingredients: "- 500 g Fécula de Mandioca\n- 250 g Queso Mar del Plata\n- 250 g Queso Sardo o Reggianito\n- 100 g Manteca pomada, 3 Huevos\n- 100 cc Leche, Pizca de sal",
    instructions: "1. Mezcla seca: Mezclar la fécula con los quesos rallados y sal.\n2. Mezcla húmeda: Agregar manteca, huevos y leche en el centro.\n3. Amasado: Mezclar con las manos. La fécula no tiene gluten; amasar hasta formar un bollo homogéneo y tierno.\n4. Formado: Hacer bolitas del tamaño de una nuez.\n5. Cocción: Horno Fuerte (200°C) por 12-15 min. Dorados por fuera, chiclosos por dentro.",
    icon: "book"
  },
  {
    id: 24,
    category: "Pizzas y Panadería Salada",
    title: "Pan de Viena (Panchos y Hamburguesas)",
    ingredients: "- 500 g Harina 0000\n- 15 g Levadura fresca\n- 250 cc Leche tibia\n- 50 g Azúcar, 10 g Sal\n- 50 g Manteca pomada",
    instructions: "1. Fermento: Disolver levadura con un poco de leche y azúcar.\n2. Masa: Mezclar harina, sal, azúcar y levadura. Agregar leche restante y amasar. Integrar la manteca al final hasta masa lisa.\n3. Leudado: Dejar duplicar volumen.\n4. Formado: Dividir en porciones de 100g para hamburguesas (bollos) o 70g para panchos (cilindros). Estibar en placa enmantecada muy juntos para que crezcan hacia arriba.\n5. Cocción: Pintar con huevo o leche y hornear a 190°C por 15 minutos. Pintar con manteca fundida al salir.",
    icon: "book"
  },
  {
    id: 25,
    category: "Pizzas y Panadería Salada",
    title: "Pan Pita (Árabe) para Shawarma",
    ingredients: "- 500 g Harina 0000\n- 300 cc Agua tibia\n- 15 g Levadura fresca\n- 10 g Sal, 1 cda Aceite de Oliva",
    instructions: "1. Masa: Formar una masa suave con todos los ingredientes. Amasar por 10 minutos.\n2. Bolleado: Dividir la masa en 10 bollitos iguales. Dejar reposar 30 minutos cubiertos.\n3. Estirado: Con palote, estirar cada bollito en discos de 3 mm de espesor sobre superficie enharinada. Dejar reposar 15 min más.\n4. Cocción Rápida: En horno PRECALENTADO al máximo (250°C) sobre placa caliente. Cocinar por apenas 4-5 minutos. La masa debe inflarse como un globo creando el bolsillo interno.\n5. Enfriado: Retirar y tapar inmediatamente con un repasador húmedo para que queden tiernos.",
    icon: "book"
  },
  {
    id: 26,
    category: "Pizzas y Panadería Salada",
    title: "Baguette Francesa Clásica",
    ingredients: "- 500 g Harina de Fuerza (000)\n- 350 cc Agua (70%)\n- 10 g Sal fina\n- 5 g Levadura fresca",
    instructions: "1. Autólisis y Amasado: Integrar ingredientes (amasado suave). Descansar 30 min y dar pliegues para fortalecer gluten.\n2. Fermentación: Retardar en heladera toda la noche.\n3. Formado: Dividir en porciones de 250g. Preformar en cilindros, descansar 20 min y formar las baguettes estirando los bordes.\n4. Greñado: Hacer cortes longitudinales con hoja de afeitar (ángulo 45°).\n5. Horneado con Vapor: Hornear a 240°C inyectando vapor los primeros 10 min (bandeja con agua abajo). Retirar vapor y hornear 10 min más hasta lograr costra muy dorada.",
    icon: "book"
  },
  {
    id: 27,
    category: "Pizzas y Panadería Salada",
    title: "Empanadas Árabes (Fatay o Sfija)",
    ingredients: "- Masa: 500g Harina, 250cc Agua, 15g Levadura, Aceite, Sal.\n- Relleno: 500g Carne picada MAGRA (cruda), 500g Cebolla picada, 2 Tomates picados.\n- Jugo de 3 Limones, Baharat (especias árabes) o Comino, Ají molido.",
    instructions: "1. Relleno en frío: Poner la carne cruda en un bol grande. Agregar la cebolla y el tomate picados crudos.\n2. Maceración (Cocción ácida): Agregar el jugo de limón abundante, las especias y la sal. Mezclar con las manos. Dejar reposar 8 HORAS en heladera.\n3. Escurrido: Antes de armar, colocar el relleno en un colador y presionar fuerte para sacarle todo el jugo líquido (vital para que no rompa la masa).\n4. Armado: Sobre discos de masa leudada (levadura), poner relleno en el centro y doblar en forma de triángulo dejando el centro semiabierto.\n5. Cocción: Horno máximo 15-20 minutos.",
    icon: "book"
  },
  {
    id: 28,
    category: "Pizzas y Panadería Salada",
    title: "Scones de Queso y Hierbas",
    ingredients: "- 250 g Harina 0000\n- 15 g Polvo de hornear\n- 100 g Queso duro (Reggianito) y 50 g Queso Pategrás\n- 60 g Manteca fría\n- 1 Huevo, 80 cc Leche\n- Orégano o Tomillo fresco, Pizca de Sal",
    instructions: "1. Secos: En un bol, tamizar harina, polvo de hornear y sal.\n2. Arenado: Incorporar la manteca bien fría en cubos pequeños y frotar con las yemas de los dedos hasta lograr textura de arena gruesa.\n3. Saborizado: Añadir los quesos rallados y las hierbas.\n4. Unión: Mezclar el huevo con la leche y volcar a los secos. Unir sin amasar (muy importante para que queden hojaldrados y no duros).\n5. Corte y Cocción: Estirar de 2 cm de alto, cortar círculos. Pintar con huevo y hornear a 200°C por 12-15 min.",
    icon: "book"
  },
  {
    id: 29,
    category: "Pizzas y Panadería Salada",
    title: "Masa para Empanadas al Horno (Hojaldrada)",
    ingredients: "- 500 g Harina 0000\n- 250 cc Agua tibia\n- 120 g Grasa vacuna o Margarina de hojaldre\n- 10 g Sal",
    instructions: "1. Salmuera: Disolver la sal en el agua tibia.\n2. Amasado: Mezclar la harina con la mitad de la grasa (60g). Verter la salmuera y amasar hasta obtener un bollo liso.\n3. Hojaldre Rápido (Opcional): Estirar la masa, untar el resto de la grasa empastada en el centro. Dar dos vueltas simples (plegar en 3 como una carta). Dejar reposar en heladera 1 hora.\n4. Corte: Estirar fino (2 mm) y cortar discos de 12 o 14 cm de diámetro.\n5. Conservación: Separar con separadores plásticos. Se pueden guardar en heladera 3 días o freezar meses.",
    icon: "book"
  },
  {
    id: 30,
    category: "Pizzas y Panadería Salada",
    title: "Masa de Tartas Integrales Saludables",
    ingredients: "- 200 g Harina Integral Fina\n- 100 g Harina 0000\n- 50 cc Aceite de Oliva o Girasol\n- 120 cc Agua tibia\n- Semillas (Lino, Sésamo, Chía) al gusto\n- Pizca de Sal",
    instructions: "1. Mezcla: En un bol, unir las dos harinas, la sal y las semillas.\n2. Húmedos: Hacer un hueco en el centro, verter el aceite y el agua tibia.\n3. Unión: Con una cuchara y luego con la mano, integrar hasta formar un bollo tierno. Si queda muy seca, agregar cucharadas de agua.\n4. Reposo: Reposar 20 minutos tapada para relajar el gluten.\n5. Uso: Estirar con palote fino. Al ser integral es más frágil, manipular con cuidado. Forrar tartera y precocinar 10 min a 180°C antes de rellenar.",
    icon: "book"
  },
  {
    id: 31,
    category: "Pizzas y Panadería Salada",
    title: "Pan de Leche (Pebetes Dulces o Salados)",
    ingredients: "- 500 g Harina 0000, 15 g Levadura fresca\n- 200 cc Leche tibia, 100 g Azúcar\n- 2 Huevos, 80 g Manteca pomada, Vainilla\n- Crema Pastelera (opcional para versión dulce)",
    instructions: "1. Fermento: Levadura, cucharada de azúcar y chorrito de leche. Espumar.\n2. Masa: Unir harina, azúcar, huevos, leche, vainilla y fermento. Amasar. Integrar manteca blanda al final (quedará pegajosa, amasar hasta que se despegue).\n3. Fermentación: Duplicar volumen.\n4. Formado: Bollitos de 60g. Poner en placa aceitada. Dejar que tripliquen su volumen (es clave que leven mucho para ser muy esponjosos).\n5. Cocción: Pintar con doradura. (Si son dulces, hacerles un corte e inyectar crema pastelera arriba). Hornear a 180°C por 15 min.",
    icon: "book"
  },

  // PASTAS, SALSAS Y ENSALADAS
  {
    id: 32,
    category: "Pastas, Salsas y Ensaladas",
    title: "Sorrentinos Artesanales de Jamón y Queso",
    ingredients: "Masa: 400g Harina, 100g Sémola, 5 Huevos.\nRelleno: 300g Mozzarella, 200g Jamón.\nSalsa Filetto: Tomate, ajo, albahaca.",
    instructions: "1. Masa: Amase harinas y huevos. Repose 30 min.\n2. Relleno: Mezcle jamón picado y mozzarella. Debe estar FRÍO.\n3. Armado: Estire la masa fina. Molde sorrentinero, rellene, selle y corte.\n4. Salsa: Dore ajo, añada tomate y reduzca 15 min.\n5. Cocción: Hierva en 1L de agua salada por 100g de pasta. Al flotar, sartenéelos con salsa.",
    image: "/images/pizza_recipe_m3.png",
    icon: "utensils"
  },
  {
    id: 33,
    category: "Pastas, Salsas y Ensaladas",
    title: "Fideos al Pesto Genovés Auténtico",
    ingredients: "- 500 g Fideos secos o frescos\n- 1 atado Albahaca, 50 g Parmesano\n- 30 g Nueces, 1 ajo, 100 cc Aceite de Oliva",
    instructions: "1. Procesado en Frío: En mortero o procesadora, muela ajo, nueces y sal gruesa.\n2. Emulsión: Agregue hojas de albahaca muy secas, procese en pulsos cortos. Agregue oliva en hilo.\n3. Queso: Incorpore parmesano con cuchara (no procesar).\n4. Hervido: Hierva la pasta. Reserve un pocillo de agua de cocción.\n5. Mantecatura: Mezcle pasta y pesto en un BOL fuera del fuego con un poco del agua reservada para emulsionar.",
    icon: "utensils"
  },
  {
    id: 34,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ñoquis de Papa Soufflé (Gnocchi)",
    ingredients: "- 1 kg Papas (viejas/negras)\n- 250 g Harina 0000\n- 1 Huevo\n- Nuez moscada, sal y pimienta",
    instructions: "1. Cocción en seco: Hornee las papas enteras con piel o hiérvalas enteras para que no absorban agua.\n2. Puré: Pele en caliente y pise hasta puré liso. Entibiar.\n3. Masa: Condimente, agregue huevo y harina. Una cortando con espátula, sin amasar en exceso.\n4. Corte: Haga cilindros y corte los ñoquis. Pase por tenedor o ñoquera.\n5. Hervido: Échelos en agua hirviendo con sal. Cuando flotan, retirarlos directo a la salsa.",
    image: "/images/recipe_gnocchi.png",
    icon: "utensils"
  },
  {
    id: 35,
    category: "Pastas, Salsas y Ensaladas",
    title: "Lasaña a la Boloñesa y Salsa Blanca",
    ingredients: "Masa: 500g pasta fresca.\nRagú Boloñesa: 500g carne picada, zanahoria, cebolla, puré tomate, vino.\nBechamel: 50g manteca, 50g harina, 700cc leche.\nQueso: 300g Mozzarella y Parmesano.",
    instructions: "1. Boloñesa: Dore carne, agregue vegetales, desglase con vino, sume tomate y cocine lento 2hs.\n2. Bechamel: Roux de manteca y harina (2 min). Agregue leche tibia batiendo hasta espesar.\n3. Montaje: Base de bechamel, masa, boloñesa, masa, bechamel, queso. Repita 4 pisos.\n4. Gratinado: Hornee a 200°C por 30-40 min hasta dorar. Reposar 15 min antes de cortar.",
    icon: "utensils"
  },
  {
    id: 36,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ravioles de Ricota, Nuez y Espinaca",
    ingredients: "Masa: 300g Harina, 3 Huevos.\nRelleno: 400g Ricota, 1 atado Espinaca, Nueces picadas, Nuez moscada, Parmesano.",
    instructions: "1. Relleno: Espinaca MUY exprimida. Mezclar todo. Enfriar.\n2. Masa: Estirar fina.\n3. Armado: Porciones de relleno. Pincelar agua. Cubrir, sacar aire y cortar.\n4. Cocción: Hervir 3-4 minutos en agua salada.",
    icon: "utensils"
  },
  {
    id: 37,
    category: "Pastas, Salsas y Ensaladas",
    title: "Malfatti de Espinaca y Ricota",
    ingredients: "500g Ricota, 2 atados Espinaca cocida picada, 1 Huevo, 50g Parmesano, 100g Harina.",
    instructions: "1. Preparación: Ricota y espinaca super secas.\n2. Mezcla: Unir todo.\n3. Aglutinado: Harina de a poco, masa tierna pegajosa.\n4. Formado: Bolitas tamaño nuez.\n5. Cocción: Hervir hasta que floten, bañar en salsa rosa y gratinar al horno.",
    icon: "utensils"
  },
  {
    id: 38,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ensalada Caesar Clásica",
    ingredients: "Romana, Pollo grillado, Crutones, Parmesano.\nAderezo: Yema, Anchoas, Mostaza, Limón, Aceite, Ajo.",
    instructions: "1. Aderezo: Procesar yema, ajo, anchoas, mostaza. Emulsionar con aceite en hilo.\n2. Preparación: Lavar y secar romana.\n3. Armado: Mezclar lechuga con aderezo. Poner pollo, crutones y queso encima.",
    icon: "utensils"
  },
  {
    id: 39,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ensalada Caprese",
    ingredients: "Tomates perita, Mozzarella de Búfala, Albahaca, Oliva, Sal, Aceto Balsámico reducido.",
    instructions: "1. Reducción: Hervir aceto con miel hasta textura jarabe.\n2. Armado: Intercalar rodaja tomate, queso y albahaca.\n3. Aliño: Sal en escamas, oliva generoso, hilos de reducción.",
    icon: "utensils"
  },
  {
    id: 40,
    category: "Pastas, Salsas y Ensaladas",
    title: "Salsa Tuco Casero de Rotisería",
    ingredients: "500g Ternera en trozos, Cebolla, Morrón, Zanahoria rallada, Tomate perita lata, Vino Tinto, Especias.",
    instructions: "1. Sellado: Dorar carne. Retirar.\n2. Sofrito: Rehogar vegetales.\n3. Desglasar: Volver carne, echar vino.\n4. Cocción: Agregar tomate, cocinar tapado mínimo 2 hs a fuego corona.\n5. Listo cuando la carne se desarma sola.",
    icon: "utensils"
  },
  {
    id: 41,
    category: "Pastas, Salsas y Ensaladas",
    title: "Salsa Bechamel Vegana (Leche de Almendras)",
    ingredients: "- 50 cc Aceite de Oliva (o aceite neutro)\n- 50 g Harina de trigo (o almidón de maíz para sin TACC)\n- 600 cc Leche de Almendras sin endulzar\n- Nuez moscada, Pimienta blanca, Sal",
    instructions: "1. Roux de Aceite: En una olla a fuego medio, colocar el aceite y la harina. Cocinar por 2 minutos revolviendo (Roux rubio vegano).\n2. Líquido: Incorporar la leche de almendras preferentemente tibia, batiendo constantemente con batidor de alambre.\n3. Cocción: Cocinar a fuego moderado hasta que rompa hervor y espese. \n4. Condimentos: Fuera del fuego, sazonar fuertemente con nuez moscada, sal y pimienta.\n5. Uso: Base perfecta para lasañas y canelones plant-based.",
    icon: "utensils"
  },
  {
    id: 42,
    category: "Pastas, Salsas y Ensaladas",
    title: "Salsa Blanca con Champiñones (Salsa de Hongos)",
    ingredients: "- 500 cc Salsa Bechamel base\n- 200 g Champiñones frescos (Portobello o París)\n- 1 Diente de ajo picado\n- 20 g Manteca\n- Vino blanco (medio vaso)",
    instructions: "1. Limpieza: Limpiar los hongos con papel húmedo (nunca bajo el agua). Cortar en láminas.\n2. Salteado: En sartén bien caliente con la manteca, saltear los hongos sin encimarlos para que doren y no hiervan. Agregar el ajo.\n3. Desglasado: Verter el vino blanco y dejar que el alcohol evapore por completo (1 min).\n4. Mezcla: Incorporar el salteado de hongos (con sus jugos) a la salsa bechamel caliente.\n5. Terminado: Cocinar juntos 2 minutos. Ideal para bañar cintas de pasta, pollo o lomo.",
    icon: "utensils"
  },
  {
    id: 43,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ensalada Waldorf Clásica",
    ingredients: "- 2 Manzanas verdes (Granny Smith)\n- 3 Tallos de Apio tiernos (pelados para quitar hilos)\n- 100 g Nueces picadas gruesas\n- Aderezo: 100 g Mayonesa, 50 g Crema de leche, 1 cda Jugo de limón\n- Hojas de lechuga para la base",
    instructions: "1. Corte Manzanas: Cortar las manzanas en dados parejos (brunoise grueso o macedonia) y rociar inmediatamente con jugo de limón para evitar la oxidación (que se pongan marrones).\n2. Apio: Cortar los tallos de apio en cubitos o rebanadas finas.\n3. Aderezo: En un bol, mezclar mayonesa, crema, una pizca de sal y pimienta.\n4. Unión: Mezclar manzanas, apio y nueces con el aderezo de manera uniforme.\n5. Presentación: Servir fría sobre una cuna de lechuga fresca. Clásico acompañamiento para carnes frías de fin de año.",
    icon: "utensils"
  },
  {
    id: 44,
    category: "Pastas, Salsas y Ensaladas",
    title: "Ensalada Rusa Perfecta",
    ingredients: "- 1 kg Papas\n- 500 g Zanahorias\n- 200 g Arvejas (preferentemente frescas o congeladas, no de lata)\n- Abundante Mayonesa de buena calidad\n- Sal y un toque de mostaza",
    instructions: "1. Corte: Cortar papas y zanahorias crudas en cubos idénticos (Macedonia, 1x1 cm).\n2. Cocción por separado: Hervir las verduras por separado en agua salada. Las zanahorias tardan más. Las papas deben estar cocidas pero firmes (no puré).\n3. Arvejas: Si son congeladas, blanquearlas 3 minutos en agua hirviendo.\n4. Enfriado: Enfriar todos los vegetales completamente en placa antes de unirlos.\n5. Aderezo: Mezclar con abundante mayonesa, sal y una cucharadita de mostaza para realzar sabor. Mantener en heladera estricta.",
    icon: "utensils"
  },
  {
    id: 45,
    category: "Pastas, Salsas y Ensaladas",
    title: "Canelones Clásicos de Verdura y Carne",
    ingredients: "- Masa: 12 a 15 Panqueques/Crepes\n- Relleno: 1 atado Acelga cocida picada, 250 g Carne picada cocida, 1 Cebolla salteada, 250 g Ricota seca.\n- Cobertura: Salsa Tuco, Salsa Blanca y Queso Parmesano.",
    instructions: "1. Relleno: Mezclar la verdura hiper exprimida con la carne, la cebolla, ricota y condimentos (Nuez moscada clave). Debe ser una pasta compacta.\n2. Armado: Colocar dos o tres cucharadas de relleno en un extremo del panqueque y enrollar firmemente formando un cilindro.\n3. Base: En una asadera para horno, esparcir una base mixta de salsa tuco y salsa blanca.\n4. Acomodado: Colocar los canelones uno al lado del otro sin aplastarlos.\n5. Cobertura y Gratinado: Bañar generosamente con más salsa mixta (Rosini). Espolvorear abundante queso y gratinar en horno fuerte 20 minutos.",
    icon: "utensils"
  },
  {
    id: 46,
    category: "Pastas, Salsas y Ensaladas",
    title: "Fideos Cinta (Pappardelle) al Huevo",
    ingredients: "- 400 g Harina 0000\n- 4 Huevos grandes\n- Semolín para estirar\n- 1 cda Aceite de Oliva",
    instructions: "1. Masa: Volcán de harina, huevos en el centro. Integrar progresivamente. Amasar vigorosamente 10 minutos hasta lograr masa elástica.\n2. Reposo: Envolver en film, descansar 30 min (imprescindible para poder estirar).\n3. Estirado: Con sobadora de pastas, pasar hasta el penúltimo punto de grosor, espolvoreando semolín para que no se pegue.\n4. Corte: Enrollar las láminas de masa sobre sí mismas y cortar cuchillo transversalmente en tiras de 2 cm de ancho (Pappardelle). \n5. Hervido: Desenrollar formando nidos. Hervir en abundante agua con sal durante 3 a 5 minutos máximo.",
    icon: "utensils"
  },
  {
    id: 47,
    category: "Pastas, Salsas y Ensaladas",
    title: "Pesto Rosso (Pesto de Tomates Secos)",
    ingredients: "- 100 g Tomates secos hidratados\n- 50 g Almendras tostadas o Nueces\n- 50 g Queso Sardo o Parmesano\n- 1 Diente de ajo, Hojas de albahaca (un puñado)\n- 100 cc Aceite de Oliva Extra Virgen",
    instructions: "1. Hidratación: Remojar los tomates secos en agua caliente o té negro durante 30 min hasta que estén blandos. Escurrir muy bien.\n2. Procesado: En licuadora o mortero, triturar los tomates, almendras, ajo y albahaca.\n3. Emulsión: Añadir el aceite de oliva gradualmente mientras se procesa hasta lograr una pasta untuosa y roja intensa.\n4. Queso: Incorporar el queso rallado al final y mezclar.\n5. Uso: Excelente para mezclar con pastas cortas (Penne) o como dip para untar en focaccia.",
    icon: "utensils"
  },
  {
    id: 48,
    category: "Pastas, Salsas y Ensaladas",
    title: "Salsa Bolognesa Vegana (Ragú de Lentejas)",
    ingredients: "- 200 g Lentejas secas (o 2 latas escurridas)\n- 1 Cebolla, 1 Zanahoria, 1 Apio, 1 Ajo\n- 800 g Tomate triturado (2 latas)\n- Medio vaso de Vino tinto\n- Laurel, Orégano, Pimentón Ahumado",
    instructions: "1. Lentejas: Si son secas, hervirlas hasta que estén apenas tiernas (al dente). Reservar.\n2. Sofrito: Picar los vegetales muy fino (Mirepoix brunoise). Saltear en oliva a fuego bajo por 15 min hasta caramelizar.\n3. Desglasar: Verter el vino y reducir.\n4. Cocción: Incorporar el tomate triturado, los condimentos y las lentejas escurridas.\n5. Reducción: Cocinar tapado a fuego lento 40 minutos. La textura de la lenteja imitará maravillosamente a la carne picada.",
    icon: "utensils"
  },
  {
    id: 49,
    category: "Pastas, Salsas y Ensaladas",
    title: "Salsa Cuatro Quesos Clásica",
    ingredients: "- 200 cc Crema de leche pesada\n- 50 g Gorgonzola o Roquefort (Queso azul)\n- 50 g Fontina o Gruyère\n- 50 g Parmesano rallado\n- 50 g Mozzarella o Provola\n- Pimienta negra molida",
    instructions: "1. Base: En una cacerola a fuego muy suave o a Baño María, calentar la crema de leche. (No debe hervir fuerte para no separarse).\n2. Quesos Fundentes: Incorporar los quesos más duros picados pequeños o rallados (Fontina/Gruyère y Parmesano) revolviendo continuamente.\n3. Quesos Blandos: Agregar el queso azul desmenuzado y la mozzarella al final.\n4. Textura: Remover en forma de 8 hasta que todos los quesos estén completamente fundidos y la salsa sea una seda.\n5. Terminado: Agregar abundante pimienta negra. (Poca o nada de sal porque los quesos ya son salados).",
    icon: "utensils"
  },

  // ROTISERÍA Y CARNES
  {
    id: 50,
    category: "Rotisería y Carnes",
    title: "Bondiola Braseada a la Cerveza Negra",
    ingredients: "- 1.5 kg Bondiola de cerdo\n- 500 cc Cerveza negra\n- Cebolla, Zanahoria, Ajo\n- Caldo oscuro, Miel, Especias\n- Papas para guarnición",
    instructions: "1. Sellado: Dore la bondiola entera en olla fuerte.\n2. Desglasado: Dore vegetales, vierta cerveza negra para despegar jugos.\n3. Braseado: Introduzca bondiola, cubra por la mitad con caldo. Tape y hornee a 160°C por 3-4 horas.\n4. Slurry: Reduzca y ligue los jugos de cocción con almidón de maíz frío para la salsa.\n5. Sirva: La carne debe deshacerse. Acompañe con puré o papas.",
    image: "/images/pizza_recipe_m4.png",
    icon: "flask"
  },
  {
    id: 51,
    category: "Rotisería y Carnes",
    title: "Pollo Arrollado Clásico de Rotisería",
    ingredients: "- 1 Pollo entero deshuesado\n- 200g Queso, 200g Jamón\n- Morrón asado, Aceitunas, Huevos duros",
    instructions: "1. Preparación: Abra el pollo deshuesado, condimente con sal, pimienta y provenzal.\n2. Relleno: Coloque sobre papel aluminio. Agregue capas de jamón, queso, morrón, aceitunas y huevos.\n3. Enrollado: Enrolle compactando muy bien. Ate con hilo. Envuelva en aluminio.\n4. Cocción: Hornee o hierva a 180°C por 1.5 horas.\n5. Prensado: Enfríe en heladera con un peso encima para que no se desarme.",
    icon: "flask"
  },
  {
    id: 52,
    category: "Rotisería y Carnes",
    title: "Empanadas de Carne Cortada a Cuchillo",
    ingredients: "- Tapas de empanada\n- 1 kg Roast Beef en cubitos\n- 1 kg Cebolla, 200g Verdeo\n- 150g Grasa, Pimentón, Comino",
    instructions: "1. Sofrito: Derrita grasa, fría cebolla común. Agregue carne y cocine rápido (no secar).\n2. Condimentos: Agregue especias fuera del fuego.\n3. Enfriado: Enfríe totalmente. Agregue verdeo crudo. El frío solidifica la grasa.\n4. Armado: Rellene. Repulgue.\n5. Cocción: Pinte con doradura y hornee a 250°C por 12-15 min.",
    icon: "flask"
  },
  {
    id: 53,
    category: "Rotisería y Carnes",
    title: "Asado o Vacío al Horno con Papas Rústicas",
    ingredients: "- 1.5 kg Vacío\n- 1 kg Papas\n- Sal gruesa, Romero, Oliva",
    instructions: "1. Salazón: Frote la carne con sal. Repose 30 min.\n2. Sellado: Sobre rejilla, hornee a 220°C por 20 min.\n3. Cocción Lenta: Baje a 160°C. Cocine 1 hs más.\n4. Papas: Cuñas blanqueadas, aliñadas con oliva y romero.\n5. Tostado final: Hornee papas a 250°C los últimos 30 min junto a la carne.",
    icon: "flask"
  },
  {
    id: 54,
    category: "Rotisería y Carnes",
    title: "Milanesa Napolitana Suprema",
    ingredients: "- 4 Milanesas cocidas\n- 300 cc Salsa Filetto\n- Jamón Cocido y Mozzarella",
    instructions: "1. Base: Coloque las milanesas en asadera.\n2. Cubierta: Pinte con salsa caliente. Coloque jamón.\n3. Queso: Cubra con mozzarella rallada.\n4. Gratinado: Horno a máxima potencia hasta derretir el queso.\n5. Sirva con orégano y papas fritas.",
    icon: "flask"
  },
  {
    id: 55,
    category: "Rotisería y Carnes",
    title: "Pastel de Papa Argentino",
    ingredients: "- 1 kg Carne picada\n- 1.5 kg Papas\n- Cebolla, Morrón\n- Huevos duros, Aceitunas\n- Manteca, Queso Rallado",
    instructions: "1. Puré: Haga puré sostenido (poca leche).\n2. Picadillo: Rehogue verduras y carne. Condimente.\n3. Base: Asadera enmantecada. Volque el picadillo.\n4. Tapa: Cubra con puré, dibuje con tenedor. Parmesano encima.\n5. Horneado: 220°C por 25 min hasta costra crocante.",
    icon: "flask"
  },
  {
    id: 56,
    category: "Rotisería y Carnes",
    title: "Matambre a la Pizza Tiernizado",
    ingredients: "- 1 Matambre\n- Leche o Caldo para hervir\n- Salsa de tomate, Mozzarella",
    instructions: "1. Tiernizado: Hierva el matambre en leche/caldo a fuego mínimo 1.5 hs.\n2. Base: Ponga el matambre tierno en asadera aceitada (grasa hacia abajo). Hornee 10 min.\n3. Cobertura: Cubra con salsa y mozzarella.\n4. Gratinado: Hornee a máxima temperatura hasta fundir queso.",
    icon: "flask"
  },
  {
    id: 57,
    category: "Rotisería y Carnes",
    title: "Vitel Toné Clásico",
    ingredients: "- 1 Peceto\n- Caldo de verduras\n- Atún, Anchoas, Yemas duras, Mayonesa, Crema.",
    instructions: "1. Carne: Hierva peceto en caldo por 1.5 hs. ENFRÍE EN EL CALDO.\n2. Salsa: Procese atún, anchoas, yemas y caldo. Emulsione con mayonesa.\n3. Feteado: Corte peceto muy fino.\n4. Emplatado: Capas de carne y salsa. Decore con alcaparras.",
    icon: "flask"
  },
  {
    id: 58,
    category: "Rotisería y Carnes",
    title: "Albóndigas de Carne a la Pomarola",
    ingredients: "- 700 g Carne picada magra, 300 g Carne picada de cerdo\n- Miga de pan remojada en leche\n- 2 Huevos, Ajo y Perejil picados, Queso Rallado\n- 1 Litro Salsa de Tomate (Pomarola)",
    instructions: "1. Mezcla de Carne: En un bol grande, mezclar ambas carnes. El cerdo aporta grasa y humedad indispensable.\n2. Aglutinante: Escurrir la miga de pan. Sumarla a la carne junto a huevos, ajo, perejil, queso rallado, sal y pimienta.\n3. Amasado y Formado: Amasar con las manos hasta lograr una pasta compacta que no se desarme. Formar bolas de tamaño uniforme (50-60g).\n4. Sellado: Pasar apenas por harina (opcional) y dorarlas en sartén caliente con aceite por todos sus lados para que no se rompan en la salsa.\n5. Estofado: Sumergirlas en la salsa de tomate caliente y cocinar a fuego bajo y tapado durante 45 minutos. Servir con puré o pastas.",
    icon: "flask"
  },
  {
    id: 59,
    category: "Rotisería y Carnes",
    title: "Suprema Suiza de Pollo",
    ingredients: "- 4 Pechugas de pollo deshuesadas y limpias\n- Harina, Huevos, Pan Rallado (para empanar)\n- 500 cc Salsa Bechamel (Salsa Blanca) muy espesa\n- 200 g Queso Gruyère o Parmesano rallado\n- Aceite para fritura",
    instructions: "1. Empanado: Aplastar ligeramente las pechugas (hacerlas supremas). Pasarlas por harina, luego por huevo batido con sal y mostaza, y finalmente por pan rallado presionando bien.\n2. Fritura: Freír en abundante aceite a 170°C hasta que estén doradas y cocidas en el centro (74°C interno). Escurrir en papel absorbente.\n3. Cubierta: Colocarlas en una placa para horno. Bañar cada suprema con una capa gruesa y generosa de salsa blanca caliente.\n4. Gratinado: Espolvorear abundante queso rallado sobre la salsa blanca.\n5. Horno: Llevar a gratinar a horno máximo (función grill) hasta que la cubierta burbujee y se dore intensamente.",
    icon: "flask"
  },
  {
    id: 60,
    category: "Rotisería y Carnes",
    title: "Tortilla de Papas Española Clásica",
    ingredients: "- 1 kg Papas (variedad negra preferentemente)\n- 1 Cebolla grande\n- 6 a 7 Huevos grandes\n- Abundante Aceite de Oliva o Girasol para freír\n- Sal gruesa y Pimienta negra",
    instructions: "1. Corte: Cortar las papas en láminas finas (tipo española) o en cubitos muy pequeños. Picar la cebolla fina.\n2. Pochado (Cocción lenta): En sartén honda, calentar mucho aceite a temperatura media. Freír las papas y cebollas LENTAMENTE. No deben quedar doradas y crujientes, sino confitadas y muy tiernas. Escurrir hiper bien el aceite.\n3. Batido: En un bol grande, romper ligeramente los huevos (no batir hasta espumar). Añadir sal.\n4. Unión: Volcar la papa y cebolla calientes sobre los huevos. Dejar reposar 15 minutos (El almidón y el calor pre-cuajan el huevo, secreto de la jugosidad).\n5. Cuajado: En sartén limpia con gota de aceite bien caliente, volcar la mezcla. Cocinar fuego fuerte 1 min para sellar bordes, luego bajar el fuego. Dar vuelta con plato playo y terminar cocción (Babé o cocida según preferencia).",
    icon: "flask"
  },
  {
    id: 61,
    category: "Rotisería y Carnes",
    title: "Lengua a la Vinagreta de Rotisería",
    ingredients: "- 1 Lengua de vaca (entera)\n- Caldo de verduras aromático (cebolla, laurel, pimienta en grano)\n- 200 cc Aceite neutro, 100 cc Vinagre de alcohol\n- Ajo picado, Perejil fresco picado, Huevos duros picados\n- Sal y Pimienta",
    instructions: "1. Limpieza y Hervido: Lavar bien la lengua. Hervir en el caldo aromático durante 2.5 a 3 horas a fuego lento hasta que esté hiper tierna (se pincha fácil con tenedor).\n2. Pelado Crítico: Retirar del agua y, MIENTRAS ESTÉ CALIENTE, pelar la piel gruesa y blanca (si se enfría es imposible). Dejar enfriar la carne limpia.\n3. Feteado: Cortar en rodajas lo más finas posibles.\n4. Vinagreta: Emulsionar el aceite con el vinagre, sal y pimienta. Añadir montones de ajo y perejil picado.\n5. Macerado: En fuente profunda, intercalar capas de lengua con baño de vinagreta y huevo duro picado. Dejar macerar en heladera por 48 horas antes de servir. Fundamental para el sabor.",
    icon: "flask"
  },
  {
    id: 62,
    category: "Rotisería y Carnes",
    title: "Tomates Rellenos (Atún y Arroz)",
    ingredients: "- 6 Tomates redondos firmes e iguales\n- 2 Latas de Atún escurrido\n- 1 Taza de Arroz blanco hervido y frío\n- Mayonesa a gusto, Ciboulette picado\n- Aceitunas negras (decoración)",
    instructions: "1. Ahuecado: Cortar una tapa en la parte superior del tomate. Con una cucharita o sacabocados, vaciar el interior cuidando de no romper la pared. \n2. Purgado: Salar ligeramente el interior de cada tomate ahuecado y ponerlos boca abajo sobre papel de cocina por 30 minutos para que drenen el exceso de líquido.\n3. Relleno: Mezclar el arroz blanco (bien graneado), el atún, la mayonesa y el ciboulette formando una pasta sostenida.\n4. Rellenado: Rellenar los tomates haciendo un copete que sobresalga.\n5. Presentación: Coronar con media aceituna negra, una hoja de perejil y refrigerar hasta servir.",
    icon: "flask"
  },
  {
    id: 63,
    category: "Rotisería y Carnes",
    title: "Pionono Salado Primavera",
    ingredients: "- 1 Plancha de Pionono dulce o salado\n- 150 g Mayonesa, 50 g Queso Crema\n- 200 g Jamón Cocido en fetas\n- 150 g Queso de máquina en fetas\n- Hojas de Lechuga, Tomates en rodajas ultrafinas, Huevos duros",
    instructions: "1. Humectado: Estirar el pionono sobre papel manteca o film. Mezclar mayonesa con queso crema y untar una capa fina por toda la superficie (evita que se rompa al enrollar).\n2. Capas Planas: Distribuir las fetas de queso y luego las de jamón cubriendo casi toda la superficie (dejar 3 cm limpios en el borde final para cerrar).\n3. Vegetales: Colocar una franja de lechuga sin nervaduras, tomates finitos y huevo duro picado cerca del borde por donde se empezará a enrollar.\n4. Enrollado: Con ayuda del papel o film inferior, enrollar ejerciendo presión firme para compactarlo.\n5. Decoración: Untar el cilindro exterior con mayonesa y decorar con tiritas de morrón y aceitunas. Heladera 3 horas antes de cortar.",
    icon: "flask"
  },
  {
    id: 64,
    category: "Rotisería y Carnes",
    title: "Bife a la Criolla de Olla",
    ingredients: "- 1 kg Bifes gruesos (Roast Beef, Paleta, Bife de Chorizo)\n- 3 Papas, 2 Cebollas, 1 Morrón rojo, 2 Tomates\n- 1 vaso de Caldo, Medio vaso de Vino blanco\n- Aceite, Orégano, Ají molido, Laurel, Sal",
    instructions: "1. Preparación: Cortar todas las verduras (papas, cebollas, tomates, morrón) en rodajas gruesas (aprox 1 cm). \n2. Sellado de carne (Opcional pero recomendado): Sellar los bifes en la olla para dar color, luego retirarlos.\n3. Armado en Capas: En una olla grande de fondo grueso (ideal hierro), fuera del fuego, intercalar: un poco de aceite, capa de cebollas/morrón, capa de bifes, capa de papas, capa de tomates. Repetir.\n4. Condimentos y Líquidos: Salpimentar entre capa y capa. Añadir orégano y laurel. Verter el vino y el caldo.\n5. Cocción Lenta: Tapar la olla. Cocinar a fuego lento durante 1 hora y media sin revolver (para que no se desarmen los ingredientes). Todo debe quedar hiper tierno.",
    icon: "flask"
  },

  // POSTRES Y PASTELERÍA
  {
    id: 65,
    category: "Postres y Pastelería",
    title: "Tiramisú Clásico de Vitrina",
    ingredients: "Mascarpone, Yemas, Azúcar, Vainillas, Café, Amaretto, Cacao.",
    instructions: "1. Aparato Bomba: Almíbar a 118°C sobre yemas batiendo rápido.\n2. Crema: Integrar queso a temperatura ambiente.\n3. Armado: Mojar vainillas rápido. Alternar capas con crema.\n4. Frío: 6hs heladera. Cacao espolvoreado al servir.",
    image: "/images/pizza_recipe_m5.png",
    icon: "activity"
  },
  {
    id: 66,
    category: "Postres y Pastelería",
    title: "Flan Mixto Casero",
    ingredients: "Leche, Huevos, Azúcar, Vainilla.",
    instructions: "1. Caramelo Seco: Funda azúcar sin revolver. Bañe molde.\n2. Ligado: Mezcle huevos y azúcar sin aire.\n3. Mezcla: Añada leche tibia y filtre.\n4. Cocción: Baño maría, horno lento 150°C tapado por 1h.",
    icon: "activity"
  },
  {
    id: 67,
    category: "Postres y Pastelería",
    title: "Cheesecake Estilo New York",
    ingredients: "Base Galletitas. Relleno Queso Crema, Azúcar, Huevos, Crema.",
    instructions: "1. Base: Hornee la mezcla de galleta.\n2. Cremado: Bata queso y azúcar lentamente.\n3. Integración: Agregue huevos y crema.\n4. Horneado: 140°C por 55 min (centro tembloroso).\n5. Enfriado: Enfriar LENTO dentro del horno apagado.",
    icon: "activity"
  },
  {
    id: 68,
    category: "Postres y Pastelería",
    title: "Lemon Pie con Merengue Italiano",
    ingredients: "Sablée. Curd Limón. Merengue Italiano.",
    instructions: "1. Base: Fondee molde y cocine a blanco.\n2. Curd: Hierva jugo y agua con almidón y yemas hasta espesar. Vuelque en tarta.\n3. Merengue: Almíbar a 118°C sobre claras a nieve.\n4. Decoración: Manga pastelera y soplete.",
    icon: "activity"
  },
  {
    id: 69,
    category: "Postres y Pastelería",
    title: "Chocotorta Clásica",
    ingredients: "Galletitas Chocolate, Dulce de Leche, Queso Crema, Café.",
    instructions: "1. Relleno: Mezclar DDL y Queso crema en partes iguales.\n2. Mojado: Remojar galletas en café unos segundos.\n3. Armado: Capa galletas, capa crema. Repetir.\n4. Frío: Heladera mínimo 6hs para consistencia.",
    icon: "activity"
  },
  {
    id: 70,
    category: "Postres y Pastelería",
    title: "Brownie Intenso de Chocolate",
    ingredients: "Chocolate Semiamargo, Manteca, Azúcar, Huevos, Harina, Nueces.",
    instructions: "1. Fundido: Derretir manteca y chocolate.\n2. Batido: Huevos y azúcar (sin espumar).\n3. Secos: Agregar harina con espátula, más nueces.\n4. Cocción: Horno 180°C por 20 min exactos. Centro húmedo.",
    icon: "activity"
  },
  {
    id: 71,
    category: "Postres y Pastelería",
    title: "Alfajores de Maicena Tradicionales",
    ingredients: "Manteca, Azúcar, Yemas, Almidón, Harina, Polvo hornear, DDL.",
    instructions: "1. Cremado: Manteca y azúcar, más yemas.\n2. Secos: Unir almidón y harina sin amasar.\n3. Corte: Reposar masa, estirar y cortar círculos.\n4. Cocción: Horno 170°C por 10 min. No dorar.\n5. Armado: Rellenar con DDL y rodar por coco.",
    image: "/images/recipe_alfajores.png",
    icon: "activity"
  },
  {
    id: 72,
    category: "Postres y Pastelería",
    title: "Pasta Frola de Membrillo",
    ingredients: "Masa Sablée, Dulce de Membrillo, Oporto.",
    instructions: "1. Masa: Sablée clásica, fondeado de tartera.\n2. Relleno: Pisar dulce con un líquido caliente.\n3. Enrejado: Tiras romboidales arriba.\n4. Cocción: 180°C por 35 min hasta dorar.",
    icon: "activity"
  },
  {
    id: 73,
    category: "Postres y Pastelería",
    title: "Budín de Pan de Rotisería",
    ingredients: "- 500 g Miga de Pan viejo (francés)\n- 1 Litro Leche tibia\n- 200 g Azúcar, 6 Huevos\n- Ralladura de limón, Esencia de vainilla\n- Opcional: Pasas de uva maceradas al ron\n- 150 g Azúcar (para acaramelar el molde)",
    instructions: "1. Remojo: Desmenuzar el pan (sin la corteza muy dura) y remojarlo en la leche tibia por 30 minutos. \n2. Textura: Si se desea liso, procesar la mezcla de pan y leche con minipimer. Si se desea rústico, pisar groseramente con tenedor.\n3. Ligado: En otro bol, mezclar los huevos con el azúcar y la ralladura (sin espumar). Incorporar a la mezcla de pan.\n4. Caramelo: Acaramelar una budinera o molde tipo savarín (igual que para el flan).\n5. Cocción: Volcar la preparación en el molde acaramelado. Hornear a Baño María a horno suave (160°C) durante 1 hora a 1 hora y cuarto, hasta que un palillo salga limpio. Enfriar totalmente antes de desmoldar.",
    icon: "activity"
  },
  {
    id: 74,
    category: "Postres y Pastelería",
    title: "Flan de Coco Estilo Brasileño (Quindim/Pudim)",
    ingredients: "- 1 Lata Leche Condensada (395g)\n- 1 Lata Leche Evaporada o Leche entera\n- 100 g Coco rallado fino\n- 4 Huevos enteros\n- Azúcar para caramelo del molde",
    instructions: "1. Caramelo: Acaramelar un molde tipo savarín de 20cm.\n2. Hidratación: Mezclar la leche entera con el coco rallado y dejar reposar 15 minutos para que se hidrate y suelte su aceite y sabor.\n3. Mezcla Rápida: En una licuadora, poner los huevos, la leche condensada y la mezcla de leche con coco. Licuar a velocidad baja por apenas 30 segundos.\n4. Baño María: Volcar en el molde. Tapar con papel aluminio herméticamente.\n5. Horneado: Hornear a Baño María (160°C) por unos 50 minutos. Al enfriar y desmoldar, el coco formará una capa separada deliciosa en la base del postre.",
    icon: "activity"
  },
  {
    id: 75,
    category: "Postres y Pastelería",
    title: "Arroz con Leche Cremoso y Canela",
    ingredients: "- 1 Litro Leche entera\n- 100 g Arroz de grano corto o medio (Doble Carolina)\n- 150 g Azúcar\n- Piel de Limón (sin parte blanca), Rama de Canela\n- Opcional: 50cc Crema de leche para el final",
    instructions: "1. Infusión: En una olla de fondo grueso, colocar la leche con la piel de limón y la rama de canela. Llevar a fuego medio hasta casi hervir.\n2. Cocción de Arroz: Lavar levemente el arroz para quitar excedente superficial de almidón. Agregarlo a la leche.\n3. Reducción Lenta: Bajar el fuego a MÍNIMO. Cocinar destapado removiendo frecuentemente (sobre todo en los últimos minutos para que no se pegue) por unos 40 minutos. El almidón del arroz espesará la leche.\n4. Azúcar: NUNCA agregar el azúcar al principio porque endurece el grano. Agregarlo 10 minutos antes del final, revolviendo hasta que se funda.\n5. Enfriado: Retirar canela y limón. Si se desea extra cremoso, sumar la crema de leche. Servir frío en cazuelas, espolvoreado con canela en polvo.",
    icon: "activity"
  },
  {
    id: 76,
    category: "Postres y Pastelería",
    title: "Mousse de Chocolate Francesa (Sin Gelatina)",
    ingredients: "- 200 g Chocolate Semiamargo de buena calidad\n- 4 Huevos (separar yemas y claras)\n- 50 g Manteca o Crema\n- 50 g Azúcar",
    instructions: "1. Fundido: Derretir a Baño María suave el chocolate troceado con la manteca. Dejar entibiar.\n2. Yemas: Fuera del calor, incorporar las 4 yemas (una a una) al chocolate tibio, mezclando vigorosamente.\n3. Claras Montadas: En un bol impecablemente limpio y sin rastros de grasa, batir las claras. Cuando empiecen a espumar, agregar el azúcar en forma de lluvia y seguir batiendo hasta punto nieve firme (que forme picos que no se caen).\n4. Unión Aireada: Incorporar un tercio de las claras al chocolate mezclando fuerte para aligerar. Luego, incorporar el resto con espátula de goma en 2 o 3 adiciones haciendo MOVIMIENTOS ENVOLVENTES súper suaves para no perder el aire atrapado.\n5. Frío: Distribuir en copas o vasitos y llevar a heladera mínimo 4 horas. Es textura de pura burbuja, ideal.",
    icon: "activity"
  },
  {
    id: 77,
    category: "Postres y Pastelería",
    title: "Palmeritas de Hojaldre Caseras",
    ingredients: "- 1 Paquete de masa de Hojaldre (rectangular, comprada o casera)\n- Abundante Azúcar blanca para espolvorear\n- Pizca de canela (opcional)\n- Placa siliconada o papel manteca",
    instructions: "1. Base Azucarada: Espolvorear generosamente la mesada con azúcar. Colocar la lámina de hojaldre encima.\n2. Superficie Azucarada: Espolvorear más azúcar por encima de la masa. Pasar el palote por arriba presionando ligeramente para que los granos de azúcar se incrusten en el hojaldre por ambos lados.\n3. Doblado: Marcar mentalmente el centro del rectángulo. Doblar los bordes izquierdo y derecho hacia el centro (que se toquen en el medio). Volver a espolvorear azúcar y doblar nuevamente hacia el centro. Por último, doblar una mitad sobre la otra (como cerrar un libro estrecho).\n4. Corte: Cortar en rodajas de 1 a 1.5 cm de grosor.\n5. Cocción: Acostar las palmeritas en la placa dejando bastante espacio entre ellas (se abren mucho). Hornear a 200°C por unos 12 min hasta que caramelicen de un lado, darlas vuelta y hornear 3 min más. Enfriar sobre rejilla.",
    icon: "activity"
  },
  {
    id: 78,
    category: "Postres y Pastelería",
    title: "Conitos de Dulce de Leche y Chocolate",
    ingredients: "- Masa base: Alfajor de maicena o galletita seca lisa\n- 500 g Dulce de Leche Repostero MUY firme\n- 250 g Baño de Repostería Semiamargo (Chocolate para derretir)\n- Manga pastelera con pico liso muy ancho",
    instructions: "1. Manga: Colocar el dulce de leche repostero a temperatura ambiente en la manga.\n2. Armado del Cono: Sostener una galletita de base. Apoyar el pico de la manga en el centro, presionar firmemente dejando que el dulce de leche se expanda casi hasta los bordes y luego, sin dejar de presionar suavemente, subir la manga para formar el pico cónico. Terminar de presionar y levantar de golpe.\n3. Frío Estricto: Colocar los conitos armados en una placa y llevar a FREEZER por al menos 40 minutos. Deben estar durísimos antes de bañar.\n4. Baño: Derretir el chocolate a baño maría fluido. \n5. Bañado: Tomar cada conito por la base, sumergirlo boca abajo en el chocolate tibio/caliente cubriendo todo el dulce de leche, sacudir el exceso ligeramente y apoyar en papel manteca. El contraste de temperaturas hará que el chocolate endurezca casi al instante.",
    icon: "activity"
  },
  {
    id: 79,
    category: "Postres y Pastelería",
    title: "Trufas de Chocolate y Dulce de Leche (Reciclaje)",
    ingredients: "- 300 g Restos de bizcochuelo, vainillas o galletitas rotas\n- 150 g Dulce de Leche\n- 50 g Queso crema\n- 2 cdas Cacao amargo o licor\n- Granas de chocolate, Coco o Frutos secos picados para rebozar",
    instructions: "1. Molido: Procesar o desmenuzar finamente los restos de bizcochuelo/galletas hasta hacerlos migas.\n2. Aglutinante: Mezclar el dulce de leche con el queso crema y el cacao/licor.\n3. Amasado: Verter los húmedos sobre las migas y amasar con las manos. Si está muy seco, agregar más dulce de leche; si está muy blando, agregar más migas o un poco de cacao.\n4. Formado: Tomar porciones pequeñas y hacer bolitas rodándolas entre las palmas de las manos.\n5. Rebozado: Pasar las bolitas inmediatamente por granas de chocolate, coco o nueces picadas presionando para que se adhieran. Conservar en pirotines dentro de la heladera.",
    icon: "activity"
  },
  {
    id: 80,
    category: "Postres y Pastelería",
    title: "Rosca de Pascua o Reyes Clásica",
    ingredients: "- Esponja: 25g Levadura, 100cc Leche tibia, 1 cda Miel.\n- Masa: 500g Harina 0000, 100g Azúcar, 2 Huevos, 100g Manteca, Vainilla, Ralladura Limón/Naranja.\n- Decoración: Crema Pastelera dura, Azúcar grana, Cerezas al marraschino.",
    instructions: "1. Esponja: Mezclar los ingredientes de la esponja y dejar espumar 15 min.\n2. Masa Dulce: Formar corona con harina y azúcar. En el centro poner huevos, esencias y la esponja. Amasar bien y agregar la manteca pomada al final. Amasar hasta que quede elástica y no se pegue. Leudar 1 hora.\n3. Formado: Hacer un hueco en el centro del bollo con los dedos y estirar formando la rosca. Poner en placa aceitada. Dejar que duplique volumen.\n4. Decorado: Decorar con manga con crema pastelera (debe ser muy espesa para que no se derrita en el horno).\n5. Cocción: Pintar con huevo la masa expuesta. Hornear a 170°C por 25 a 30 min. Al sacar, decorar con cerezas y azúcar grana.",
    icon: "activity"
  }
];
