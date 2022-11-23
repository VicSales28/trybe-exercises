const info01 = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const info02 = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (order) => {
  return console.log(`Olá ${info01.order.delivery.deliveryPerson}, entrega para: ${info01.name}, Telefone: ${info01.phoneNumber}, R. ${info01.address.street}, Nº: ${info01.address.number}, AP: ${info01.address.apartment}.`); 
};

customerInfo(info01);

const orderModifier = (order) => {
  return console.log(`Olá ${info02.name}, o total do seu pedido de ${Object.keys(info02.order.pizza)} e ${info02.order.drinks.coke.type} é R$ ${info02.payment.total}.`); 
};

orderModifier(info02);