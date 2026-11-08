import PageTitle from '../components/PageTitle';

export default function About() {
  return (
    <>
      <PageTitle title="Quiénes somos" />
      <div className="tarjeta max-w-prose space-y-3 text-carbon">
        <p>
          Somos un supermercado de barrio que busca tener siempre lo que sus clientes necesitan, sin quiebres de stock
          ni sobreabastecimiento.
        </p>
        <p>
          Este sistema de inventario nos permite registrar cada producto, saber cuántas unidades quedan y actualizar el
          stock apenas se arma un pedido.
        </p>
      </div>
    </>
  );
}
