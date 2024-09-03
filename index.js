const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Las pizzas que tengan un id impar //
const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
pizzasIdImpar.forEach((pizza) => {
  console.log(`La ${pizza.nombre}`);
});

// b) Responder: ¿Hay alguna pizza que valga menos de $600? //
const pizzasBaratas = pizzas.filter((pizza) => pizza.precio < 600);

if (pizzasBaratas.length > 0) {
  pizzasBaratas.forEach((pizza) => {
    console.log(`La ${pizza.nombre} cuesta ${pizza.precio}.`);
  });
} else {
  console.log("No, ninguna pizza cuesta menos de $600.");
}

// c) El nombre de cada pizza con su respectivo precio //
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene un valor de $${pizza.precio}.`);
});

// d) Todos los ingredientes de cada pizza
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene los siguientes ingredientes:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(`- ${ingrediente}`);
  });
});
