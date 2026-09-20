import { AlertCircle, SearchX } from "lucide-react";
export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="state">
      <AlertCircle />
      <h2>Algo no salió como esperábamos</h2>
      <p>No pudimos cargar la información. Intenta nuevamente.</p>
      <button className="button" onClick={onRetry}>
        Reintentar
      </button>
    </div>
  );
}
export function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="state">
      <SearchX />
      <h2>No encontramos vehículos</h2>
      <p>Prueba cambiando la búsqueda o los filtros seleccionados.</p>
      <button className="button" onClick={onClear}>
        Limpiar filtros
      </button>
    </div>
  );
}
