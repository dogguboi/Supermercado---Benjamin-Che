import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import ArticleForm from '../components/ArticleForm';

export default function AddArticle() {
  const [guardado, setGuardado] = useState('');

  return (
    <>
      <PageTitle title="Agregar artículo" subtitle="Completa los datos para sumar un producto al inventario." />
      {guardado && (
        <p role="status" className="mb-4 aviso">
          Se guardó «{guardado}». <Link to="/inventario" className="font-bold underline">Ver inventario</Link>
        </p>
      )}
      <ArticleForm onSaved={setGuardado} />
    </>
  );
}
