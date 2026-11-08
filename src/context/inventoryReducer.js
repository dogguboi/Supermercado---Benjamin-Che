import { initialInventory } from '../data/initialInventory.js';

// inventory: lista de artículos con su stock actual (campo "cantidad").
// cart: solo guarda { id, cantidad }; los datos del producto se leen del inventario
//       para tener una única fuente de verdad.
export const initialState = {
  inventory: initialInventory,
  cart: [],
};

export function inventoryReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const nextId = state.inventory.reduce((max, item) => Math.max(max, item.id), 0) + 1;
      return {
        ...state,
        inventory: [...state.inventory, { ...action.payload, id: nextId }],
      };
    }

    case 'ADD_TO_CART': {
      const item = state.inventory.find((i) => i.id === action.id);
      if (!item || item.cantidad < 1) return state; // sin stock: no hace nada

      const enCarrito = state.cart.find((c) => c.id === action.id);
      return {
        ...state,
        // el stock del inventario disminuye en 1
        inventory: state.inventory.map((i) =>
          i.id === action.id ? { ...i, cantidad: i.cantidad - 1 } : i
        ),
        cart: enCarrito
          ? state.cart.map((c) => (c.id === action.id ? { ...c, cantidad: c.cantidad + 1 } : c))
          : [...state.cart, { id: action.id, cantidad: 1 }],
      };
    }

    case 'DECREASE_FROM_CART': {
      const enCarrito = state.cart.find((c) => c.id === action.id);
      if (!enCarrito) return state;
      return {
        ...state,
        // el stock del inventario aumenta en 1
        inventory: state.inventory.map((i) =>
          i.id === action.id ? { ...i, cantidad: i.cantidad + 1 } : i
        ),
        cart:
          enCarrito.cantidad === 1
            ? state.cart.filter((c) => c.id !== action.id) // llegó a 0: sale del carrito
            : state.cart.map((c) => (c.id === action.id ? { ...c, cantidad: c.cantidad - 1 } : c)),
      };
    }

    case 'REMOVE_FROM_CART': {
      const enCarrito = state.cart.find((c) => c.id === action.id);
      if (!enCarrito) return state;
      return {
        ...state,
        // se devuelve al inventario todo lo que había en el carrito
        inventory: state.inventory.map((i) =>
          i.id === action.id ? { ...i, cantidad: i.cantidad + enCarrito.cantidad } : i
        ),
        cart: state.cart.filter((c) => c.id !== action.id),
      };
    }

    case 'CHECKOUT':
      // Compra confirmada: el carrito se vacía y el stock queda descontado.
      return { ...state, cart: [] };

    default:
      return state;
  }
}
