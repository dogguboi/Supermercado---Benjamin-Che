import PageTitle from '../components/PageTitle';

export default function Contact() {
  return (
    <>
      <PageTitle title="Contáctanos" subtitle="Escríbenos o llámanos en horario de atención." />
      <dl className="tarjeta grid max-w-md gap-3 text-sm">
        <div>
          <dt className="font-bold">Correo</dt>
          <dd className="text-carbon">contacto@supermercado.cl</dd>
        </div>
        <div>
          <dt className="font-bold">Teléfono</dt>
          <dd className="text-carbon">+56 2 2345 6789</dd>
        </div>
        <div>
          <dt className="font-bold">Horario</dt>
          <dd className="text-carbon">Lunes a domingo, de 8:00 a 22:00 h</dd>
        </div>
      </dl>
    </>
  );
}
