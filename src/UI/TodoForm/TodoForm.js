import { useState } from 'react';
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
   const [newTodoValue, setNewTodoValue] = useState('')//Esto es un estado local, mas no global.

  const onSubmit = (event) => {
    event.preventDefault();//con este metodo del evento onSubmit evitamos que los botones del formulario al presionarlos traten de enviar cualquier informacion y recarguen la pagina.
    addTodo(newTodoValue);//este es el parametro texto que recibe la funcion addTodo(); en el contexto.
    setOpenModal(false);//una vez enviado el texto al input actualizamos el estado con 'false' para que el modal se cierre luego de enviar el text.
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {//onChange es el listener de eventos de los inputs, este registra cada cambio de estado en el input (escribir una nueva letra).
    setNewTodoValue(event.target.value);//por medio de una Fn actualizadora, actualiza el estado con el nuevo caracter del input.
    // console.log(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>{/* aca llamamos al Listener de formularios "onSubmit" y le enviamos una funcion con un "preventDefault()" */}
      <label>Escribe un nuevo TODO!</label>
      <textarea 
        value={newTodoValue}//Pasamos el estado actual al atributo value del input, este valor va a ser el parametro "text" de la funcion addTodo.
        onChange={onChange}
        placeholder="Escribe un nuevo TODO!"
      />
      <div className="TodoForm-buttonContainer">
        <button
        type='button'
        onClick={onCancel}
        className="TodoForm-button TodoForm-button--cancel"
        >
        Cancelar
        </button>
        <button
        type='submit'//los botones dentro de un form por defecto son de tipo submit y recargan la pagina.
        className="TodoForm-button TodoForm-button--add"
        >
        Añadir
        </button>
      </div>
    </form>
  )
};


export { TodoForm };