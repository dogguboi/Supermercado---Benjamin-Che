import { useMemo, useState } from 'react';
import PageTitle from '../components/PageTitle';
import CategoryFilter from '../components/CategoryFilter';
import InventoryTable from '../components/InventoryTable';
import { useInventory } from '../context/InventoryContext';

export default function InventoryPage() {
  const { inventory } = useInventory();
  const [categoria, setCategoria] = useState('Todas');

  // El filtro se DERIVA del inventario original: nunca lo modifica ni lo reemplaza.
  const filtrados = useMemo(
    () => (categoria === 'Todas' ? inventory : inventory.filter((i) => i.tipo === categoria)),
    [inventory, categoria]
  );

  return (
    <>
      <PageTitle title="Inventario" subtitle="Haz clic en un artículo para ver su detalle y agregarlo al carrito." />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <CategoryFilter value={categoria} onChange={setCategoria} />
        <p className="text-sm text-carbon-soft" aria-live="polite">
          Mostrando {filtrados.length} de {inventory.length} artículos
        </p>
      </div>

      {filtrados.length === 0 ? (
        <p className="tarjeta text-carbon-soft">No hay artículos en la categoría «{categoria}».</p>
      ) : (
        <InventoryTable items={filtrados} />
      )}
    </>
  );
}
