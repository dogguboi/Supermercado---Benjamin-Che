// Indicador visual del stock: turquesa = disponible, naranja = poco, tinto = agotado
export default function StockBadge({ cantidad }) {
  let estilo = 'bg-turquesa-light text-turquesa-dark';
  let texto = `${cantidad} disponibles`;

  if (cantidad === 0) {
    estilo = 'bg-tinto-light text-tinto';
    texto = 'Agotado';
  } else if (cantidad <= 5) {
    estilo = 'bg-naranja-light text-naranja-dark';
    texto = `Quedan ${cantidad}`;
  }

  return <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ${estilo}`}>{texto}</span>;
}
