import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { useInventory } from '../context/InventoryContext';

export default function Home() {
  const { inventory, cart } = useInventory();
  const unidades = inventory.reduce((s, i) => s + i.cantidad, 0);
  const bajoStock = inventory.filter((i) => i.cantidad <= 5).length;

  return (
    <>
      <PageTitle
        title="Inventario del supermercado"
        subtitle="Registra productos, revisa lo que hay en bodega y arma pedidos descontando el stock en tiempo real."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Link to="/agregar" className="tarjeta border-t-4 border-t-tinto transition-shadow hover:shadow-md">
          <h2 className="font-extrabold text-carbon">Agregar artículo</h2>
          <p className="mt-1 text-sm text-carbon-soft">Ingresa un producto nuevo al inventario.</p>
        </Link>
        <Link to="/inventario" className="tarjeta border-t-4 border-t-naranja transition-shadow hover:shadow-md">
          <h2 className="font-extrabold text-carbon">Ver inventario</h2>
          <p className="mt-1 text-sm text-carbon-soft">Filtra por categoría y abre el detalle de cada artículo.</p>
        </Link>
        <Link to="/carrito" className="tarjeta border-t-4 border-t-turquesa transition-shadow hover:shadow-md">
          <h2 className="font-extrabold text-carbon">Carrito</h2>
          <p className="mt-1 text-sm text-carbon-soft">
            {cart.length === 0 ? 'Aún no hay artículos.' : `${cart.length} producto(s) en el carrito.`}
          </p>
        </Link>
      </div>

      <section className="tarjeta mt-6">
        <h2 className="font-extrabold">Resumen actual</h2>
        <p className="mt-2 text-carbon">
          Hay <strong>{inventory.length}</strong> artículos distintos y <strong>{unidades}</strong> unidades disponibles.{' '}
          {bajoStock > 0 ? (
            <>
              <strong>{bajoStock}</strong> artículo(s) tienen stock bajo (5 unidades o menos).
            </>
          ) : (
            'Ningún artículo tiene stock bajo.'
          )}
        </p>
      </section>
    </>
  );
}
