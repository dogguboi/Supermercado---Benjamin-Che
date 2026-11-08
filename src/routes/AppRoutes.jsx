import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

// Lazy loading: cada página se descarga solo cuando el usuario la visita.
const Home = lazy(() => import('../pages/Home'));
const AddArticle = lazy(() => import('../pages/AddArticle'));
const InventoryPage = lazy(() => import('../pages/InventoryPage'));
const ArticleDetail = lazy(() => import('../pages/ArticleDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agregar" element={<AddArticle />} />
        <Route path="inventario" element={<InventoryPage />} />
        <Route path="inventario/:id" element={<ArticleDetail />} />
        <Route path="carrito" element={<Cart />} />
        <Route path="quienes-somos" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
