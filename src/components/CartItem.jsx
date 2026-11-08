import { useInventory } from '../context/InventoryContext';
import { formatearPrecio } from '../utils/formato';

export default function CartItem({ articulo, cantidad, stockRestante }) {
  const { addToCart, decreaseFromCart, removeFromCart } = useInventory();

  return (
    <li className="tarjeta flex flex-wrap items-center gap-4">
      <div className="mr-auto min-w-[10rem]">
        <p className="font-bold">{articulo.nombre}</p>
        <p className="text-sm text-carbon-soft">
          {articulo.marca} · {formatearPrecio(articulo.precio)} c/u
        </p>
        <p className="text-xs text-carbon-soft">Stock restante: {stockRestante}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn-secondary h-9 w-9 !p-0"
          onClick={() => decreaseFromCart(articulo.id)}
          aria-label={`Disminuir cantidad de ${articulo.nombre}`}
        >
          −
        </button>
        <span className="w-8 text-center font-bold" aria-live="polite">
          {cantidad}
        </span>
        <button
          className="btn-secondary h-9 w-9 !p-0"
          onClick={() => addToCart(articulo.id)}
          disabled={stockRestante === 0}
          aria-label={`Aumentar cantidad de ${articulo.nombre}`}
        >
          +
        </button>
      </div>

      <p className="w-28 text-right font-extrabold text-tinto">{formatearPrecio(articulo.precio * cantidad)}</p>

      <button className="btn-danger" onClick={() => removeFromCart(articulo.id)}>
        Quitar
      </button>
    </li>
  );
}
