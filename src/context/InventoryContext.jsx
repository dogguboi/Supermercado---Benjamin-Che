import { createContext, useContext, useMemo, useReducer } from 'react';
import { inventoryReducer, initialState } from './inventoryReducer';

const InventoryContext = createContext(null);

export function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  // Funciones expuestas a los componentes: ellos no necesitan conocer las acciones.
  const value = useMemo(
    () => ({
      inventory: state.inventory,
      cart: state.cart,
      addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
      addToCart: (id) => dispatch({ type: 'ADD_TO_CART', id }),
      decreaseFromCart: (id) => dispatch({ type: 'DECREASE_FROM_CART', id }),
      removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', id }),
      checkout: () => dispatch({ type: 'CHECKOUT' }),
    }),
    [state]
  );

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) throw new Error('useInventory debe usarse dentro de <InventoryProvider>');
  return context;
}
