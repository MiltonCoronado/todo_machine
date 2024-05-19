import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {
  const {completedTodos,totalTodos} = useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  )
};

export { TodoCounter };