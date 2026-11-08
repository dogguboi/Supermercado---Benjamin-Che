// Prueba rápida de la lógica: npm test
import assert from 'node:assert/strict';
import { inventoryReducer, initialState } from './inventoryReducer.js';

const stock = (s, id) => s.inventory.find((i) => i.id === id).cantidad;

let s = initialState;
const stockInicial = stock(s, 1);

s = inventoryReducer(s, { type: 'ADD_TO_CART', id: 1 });
s = inventoryReducer(s, { type: 'ADD_TO_CART', id: 1 });
assert.equal(stock(s, 1), stockInicial - 2, 'agregar al carrito resta stock');
assert.equal(s.cart[0].cantidad, 2);

s = inventoryReducer(s, { type: 'DECREASE_FROM_CART', id: 1 });
assert.equal(stock(s, 1), stockInicial - 1, 'disminuir devuelve stock');

s = inventoryReducer(s, { type: 'DECREASE_FROM_CART', id: 1 });
assert.equal(s.cart.length, 0, 'al llegar a 0 sale del carrito');
assert.equal(stock(s, 1), stockInicial);

// Sin stock no se puede agregar
let sinStock = { ...initialState, inventory: [{ id: 99, nombre: 'x', marca: 'y', tipo: 'z', precio: 1, cantidad: 0 }], cart: [] };
sinStock = inventoryReducer(sinStock, { type: 'ADD_TO_CART', id: 99 });
assert.equal(sinStock.cart.length, 0, 'sin stock no agrega');

// Quitar todo el producto devuelve todo el stock
s = inventoryReducer(s, { type: 'ADD_TO_CART', id: 2 });
s = inventoryReducer(s, { type: 'ADD_TO_CART', id: 2 });
s = inventoryReducer(s, { type: 'ADD_TO_CART', id: 2 });
s = inventoryReducer(s, { type: 'REMOVE_FROM_CART', id: 2 });
assert.equal(stock(s, 2), 40, 'quitar producto restituye el stock');

// Nuevo artículo recibe id único y no muta el estado anterior
const antes = s;
s = inventoryReducer(s, { type: 'ADD_ITEM', payload: { nombre: 'Té', marca: 'Lipton', tipo: 'Bebidas', precio: 1000, cantidad: 5 } });
assert.equal(s.inventory.length, antes.inventory.length + 1);
assert.equal(antes.inventory.length, 9, 'el estado anterior no se muta');
assert.equal(s.inventory.at(-1).id, 10);

console.log('✔ Todas las pruebas del reducer pasaron');
