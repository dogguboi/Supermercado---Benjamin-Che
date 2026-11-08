import { useState } from 'react';
import { CATEGORIAS } from '../data/initialInventory';
import { useInventory } from '../context/InventoryContext';

const vacio = { nombre: '', marca: '', tipo: CATEGORIAS[0], precio: '', cantidad: '' };

export default function ArticleForm({ onSaved }) {
  const { addItem } = useInventory();
  const [datos, setDatos] = useState(vacio);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

  const validar = () => {
    const e = {};
    if (!datos.nombre.trim()) e.nombre = 'Ingresa el nombre del artículo.';
    if (!datos.marca.trim()) e.marca = 'Ingresa la marca.';
    if (!(Number(datos.precio) > 0)) e.precio = 'El precio debe ser mayor que 0.';
    if (!Number.isInteger(Number(datos.cantidad)) || Number(datos.cantidad) < 1)
      e.cantidad = 'La cantidad debe ser un número entero de 1 o más.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encontrados = validar();
    setErrores(encontrados);
    if (Object.keys(encontrados).length > 0) return;

    addItem({
      nombre: datos.nombre.trim(),
      marca: datos.marca.trim(),
      tipo: datos.tipo,
      precio: Number(datos.precio),
      cantidad: Number(datos.cantidad),
    });
    setDatos(vacio);
    onSaved?.(datos.nombre.trim());
  };

  const Campo = ({ name, label, type = 'text', ...resto }) => (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-bold text-carbon">
        {label}
      </label>
      <input id={name} name={name} type={type} className="campo" value={datos[name]} onChange={handleChange} {...resto} />
      {errores[name] && <p className="mt-1 text-sm font-bold text-tinto">{errores[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="tarjeta grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">{Campo({ name: 'nombre', label: 'Nombre del artículo' })}</div>
      {Campo({ name: 'marca', label: 'Marca' })}
      <div>
        <label htmlFor="tipo" className="mb-1 block text-sm font-bold text-carbon">
          Tipo de producto
        </label>
        <select id="tipo" name="tipo" className="campo" value={datos.tipo} onChange={handleChange}>
          {CATEGORIAS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {Campo({ name: 'precio', label: 'Precio (CLP)', type: 'number', min: 1 })}
      {Campo({ name: 'cantidad', label: 'Cantidad en stock', type: 'number', min: 1 })}
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary">
          Guardar artículo
        </button>
      </div>
    </form>
  );
}
