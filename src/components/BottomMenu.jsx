import { NavLink } from 'react-router-dom';

const enlaces = [
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/contacto', label: 'Contáctanos' },
];

// Menú inferior fijo (requisito de la semana 1)
export default function BottomMenu() {
  return (
    <nav
      aria-label="Información"
      className="fixed inset-x-0 bottom-0 z-10 flex justify-center gap-2 border-t border-carbon/15 bg-crema-light/95 px-4 py-2 backdrop-blur"
    >
      {enlaces.map((e) => (
        <NavLink
          key={e.to}
          to={e.to}
          className={({ isActive }) =>
            `rounded-md px-4 py-2 text-sm font-bold ${
              isActive ? 'bg-carbon text-crema' : 'text-carbon hover:bg-crema'
            }`
          }
        >
          {e.label}
        </NavLink>
      ))}
    </nav>
  );
}
