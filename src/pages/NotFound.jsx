import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

export default function NotFound() {
  return (
    <>
      <PageTitle title="Página no encontrada" subtitle="La dirección que ingresaste no existe." />
      <Link to="/" className="btn-primary">Volver al inicio</Link>
    </>
  );
}
