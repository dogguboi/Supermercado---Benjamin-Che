import { NavLink } from 'react-router-dom';
import { useInventory } from '../context/InventoryContext';

const enlaces = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/agregar', label: 'Agregar artículo' },
  { to: '/inventario', label: 'Inventario' },
];

// Enlace activo: naranja con texto carbón. Inactivo: crema sobre carbón.
const claseEnlace = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-bold transition-colors ${
    isActive ? 'bg-naranja text-carbon' : 'text-crema hover:bg-white/10'
  }`;

export default function Navbar() {
  const { cart } = useInventory();
  const totalUnidades = cart.reduce((suma, item) => suma + item.cantidad, 0);

  return (
    <header>
      <div className="bg-carbon">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-3" aria-label="Principal">
          <span className="mr-auto text-lg font-extrabold text-crema">Supermercado</span>
          {enlaces.map((e) => (
            <NavLink key={e.to} to={e.to} end={e.end} className={claseEnlace}>
              {e.label}
            </NavLink>
          ))}
          <NavLink to="/carrito" className={claseEnlace}>
            Carrito
            <span className="ml-2 rounded-full bg-turquesa px-2 py-0.5 text-xs text-carbon">{totalUnidades}</span>
          </NavLink>
        </nav>
      </div>
      {/* Franja de acento (carbón y crema ya están en la barra y el fondo) */}
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-tinto" />
        <span className="flex-1 bg-naranja" />
        <span className="flex-1 bg-turquesa" />
      </div>
    </header>
  );
}
