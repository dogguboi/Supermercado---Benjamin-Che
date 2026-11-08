export default function PageTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-extrabold text-carbon">{title}</h1>
      <div className="mt-2 h-1.5 w-14 rounded-full bg-naranja" aria-hidden="true" />
      {subtitle && <p className="mt-3 max-w-prose text-carbon-soft">{subtitle}</p>}
    </div>
  );
}
