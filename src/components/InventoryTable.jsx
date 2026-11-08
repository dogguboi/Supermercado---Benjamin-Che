import { Link, useNavigate } from 'react-router-dom';
import StockBadge from './StockBadge';
import { formatearPrecio } from '../utils/formato';

export default function InventoryTable({ items }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto rounded-xl border border-carbon/15 bg-crema-light">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-crema">
          <tr>
            <th className="px-4 py-3 font-bold">Artículo</th>
            <th className="hidden px-4 py-3 font-bold sm:table-cell">Marca</th>
            <th className="hidden px-4 py-3 font-bold sm:table-cell">Tipo</th>
            <th className="px-4 py-3 text-right font-bold">Precio</th>
            <th className="px-4 py-3 font-bold">Stock</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              onClick={() => navigate(`/inventario/${item.id}`)}
              className="cursor-pointer border-t border-carbon/10 hover:bg-turquesa-light"
            >
              <td className="px-4 py-3 font-bold">
                {/* El Link permite entrar con teclado; el clic en la fila hace lo mismo */}
                <Link to={`/inventario/${item.id}`} className="text-turquesa-dark hover:underline">
                  {item.nombre}
                </Link>
              </td>
              <td className="hidden px-4 py-3 sm:table-cell">{item.marca}</td>
              <td className="hidden px-4 py-3 sm:table-cell">{item.tipo}</td>
              <td className="px-4 py-3 text-right font-bold text-tinto">{formatearPrecio(item.precio)}</td>
              <td className="px-4 py-3">
                <StockBadge cantidad={item.cantidad} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
