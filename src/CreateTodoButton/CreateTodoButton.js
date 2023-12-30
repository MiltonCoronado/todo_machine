import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, loading }) {
  return (
    <button 
      className={`CreateTodoButton ${!!loading && "CreateTodoButton--dissabled"}`}
      onClick={ () => setOpenModal (state => !state) }//para que los eventos no se disparen al hacer render de la pagina debemos envolver todo en una arrow function.
    >
      +
    </button>
  );
};

export { CreateTodoButton };