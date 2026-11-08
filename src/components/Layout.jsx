import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import BottomMenu from './BottomMenu';

// Estructura común de todas las páginas. <Outlet /> muestra la ruta hija activa.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 pb-24">
        <Suspense fallback={<p className="text-carbon-soft">Cargando…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <BottomMenu />
    </div>
  );
}
