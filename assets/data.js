const productsData = [
  {
    id: 1,
    name: 'Weekend Standart',
    category: 'weekend',
    bid: 3.56,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✖ Fotos personales y grabacion de video',
    feature4: '✖ Paseos y actividades especiales',
    feature5: '✖ Comida variada e ilimitada ',
    cardImg: './assets/img/products/1.png',
  },
  {
    id: 2,
    name: 'Weekend Confort',
    category: 'weekend',
    bid: 6.23,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✔ Fotos personales y grabacion de video',
    feature4: '✖ Paseos y actividades especiales',
    feature5: '✖ Comida variada e ilimitada ',
    cardImg: './assets/img/products/2.png',
  },
  {
    id: 3,
    name: 'Weekend Exclusive',
    category: 'weekend',
    bid: 9.45,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✔ Fotos personales y grabacion de video',
    feature4: '✔ Paseos y actividades especiales',
    feature5: '✔ Comida variada e ilimitada ',
    cardImg: './assets/img/products/3.png',
  },
  {
    id: 4,
    name: 'Weekly Standard',
    bid: 6.97,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✖ Fotos personales y grabacion de video',
    feature4: '✖ Paseos y actividades especiales',
    feature5: '✖ Comida variada e ilimitada ',
    category: 'weekly',
    cardImg: './assets/img/products/4.png',
  },
  {
    id: 5,
    name: 'Weekly Confort',
    bid: 9.47,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✔ Fotos personales y grabacion de video',
    feature4: '✖ Paseos y actividades especiales',
    feature5: '✖ Comida variada e ilimitada ',
    category: 'weekly',
    cardImg: './assets/img/products/5.png',
  },
  {
    id: 6,
    name: 'Weekly Exclusive',
    bid: 12.67,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✔ Fotos personales y grabacion de video',
    feature4: '✔ Paseos y actividades especiales',
    feature5: '✔ Comida variada e ilimitada ',
    category: 'weekly',
    cardImg: './assets/img/products/6.png',
  },
  {
    id: 7,
    name: 'Monthly Standard',
    bid: 6.42,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✖ Fotos personales y grabacion de video',
    feature4: '✖ Paseos y actividades especiales',
    feature5: '✖ Comida variada e ilimitada ',
    category: 'monthly',
    cardImg: './assets/img/products/7.png',
  },
  {
    id: 8,
    name: 'Monthly Confort',
    bid: 9.57,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✔ Fotos personales y grabacion de video',
    feature4: '✖ Paseos y actividades especiales',
    feature5: '✖ Comida variada e ilimitada ',
    category: 'monthly',
    cardImg: './assets/img/products/8.png',
  },
  {
    id: 9,
    name: 'Monthly Exclusive',
    bid: 12.89,
    feature1: '✔ Paseos ilimitados',
    feature2: '✔ Comodas capsulas para dormir',
    feature3: '✔ Fotos personales y grabacion de video',
    feature4: '✔ Paseos y actividades especiales',
    feature5: '✔ Comida variada e ilimitada ',
    category: 'monthly',
    cardImg: './assets/img/products/9.png',
  },
];

// Para hacer la paginacion de Ver Más
const splitProducts = size => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size) {
    dividedProducts.push(productsData.slice(i, i + size));
  }
  return dividedProducts;
};

// Dividir los productos en arrays de 6 y manejar la paginacion
const productsController = {
  dividedProducts: splitProducts(6),
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};

