import { CATEGORIAS } from '../data/initialInventory';

// Componente controlado: el estado del filtro vive en el padre (InventoryPage).
export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="filtro-categoria" className="text-sm font-bold text-carbon">
        Categoría
      </label>
      <select
        id="filtro-categoria"
        className="campo max-w-xs"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="Todas">Todas</option>
        {CATEGORIAS.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
