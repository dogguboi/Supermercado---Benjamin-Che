import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import CartItem from '../components/CartItem';
import { useInventory } from '../context/InventoryContext';
import { formatearPrecio } from '../utils/formato';

export default function Cart() {
  const { inventory, cart, checkout } = useInventory();
  const [comprado, setComprado] = useState(false);

  // Unimos cada línea del carrito con los datos actuales del inventario
  const lineas = cart
    .map((linea) => ({ ...linea, articulo: inventory.find((i) => i.id === linea.id) }))
    .filter((l) => l.articulo);

  const total = lineas.reduce((s, l) => s + l.articulo.precio * l.cantidad, 0);

  const confirmar = () => {
    checkout();
    setComprado(true);
  };

  if (lineas.length === 0) {
    return (
      <>
        <PageTitle title="Carrito" />
        {comprado && (
          <p role="status" className="mb-4 aviso">
            Compra confirmada. El inventario ya refleja las unidades vendidas.
          </p>
        )}
        <p className="tarjeta text-carbon-soft">
          Tu carrito está vacío. <Link to="/inventario" className="font-bold text-turquesa-dark underline">Ir al inventario</Link>
        </p>
      </>
    );
  }

  return (
    <>
      <PageTitle title="Carrito" subtitle="Ajusta las cantidades: el inventario se actualiza al instante." />
      <ul className="space-y-3">
        {lineas.map((l) => (
          <CartItem key={l.id} articulo={l.articulo} cantidad={l.cantidad} stockRestante={l.articulo.cantidad} />
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xl font-extrabold">
          Total: <span className="text-tinto">{formatearPrecio(total)}</span>
        </p>
        <button className="btn-primary" onClick={confirmar}>
          Confirmar compra
        </button>
      </div>
    </>
  );
}
