import { Link, useParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import StockBadge from '../components/StockBadge';
import { useInventory } from '../context/InventoryContext';
import { formatearPrecio } from '../utils/formato';

export default function ArticleDetail() {
  const { id } = useParams(); // siempre llega como texto
  const { inventory, cart, addToCart } = useInventory();

  const articulo = inventory.find((i) => i.id === Number(id));
  const enCarrito = cart.find((c) => c.id === Number(id))?.cantidad ?? 0;

  if (!articulo) {
    return (
      <>
        <PageTitle title="Artículo no encontrado" />
        <Link to="/inventario" className="btn-secondary">Volver al inventario</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/inventario" className="mb-4 inline-block text-sm font-bold text-turquesa-dark hover:underline">
        ← Volver al inventario
      </Link>
      <PageTitle title={articulo.nombre} subtitle={`${articulo.marca} · ${articulo.tipo}`} />

      <div className="tarjeta max-w-md">
        <p className="text-3xl font-extrabold text-tinto">{formatearPrecio(articulo.precio)}</p>
        <div className="mt-3 flex items-center gap-3">
          <StockBadge cantidad={articulo.cantidad} />
          {enCarrito > 0 && <span className="text-sm text-carbon-soft">En tu carrito: {enCarrito}</span>}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="btn-primary" onClick={() => addToCart(articulo.id)} disabled={articulo.cantidad === 0}>
            {articulo.cantidad === 0 ? 'Sin stock' : 'Agregar al carrito'}
          </button>
          {enCarrito > 0 && (
            <Link to="/carrito" className="btn-secondary">
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
