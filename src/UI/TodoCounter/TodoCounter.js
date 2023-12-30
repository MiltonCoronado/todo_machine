import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${!!loading && "TodoCounter--dissabled"}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}
      </span> TODOS
    </h1>
  );
};

export { TodoCounter };//Esto es una exportacion nombrada y aca se puede colocar mas de una funcion al contrario del export default... si fuera un export default nos podriamos equivocar en el import. Nos weveamos y podemos poner cualquier cosa errorDeTuVieja from el archivo.jsx... se recomienda un expor nombrado (PUNTO)(.)...