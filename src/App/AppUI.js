import { useContext } from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoForm } from '../TodoForm/TodoForm';
import { Modal } from '../Modal/Modal';

const AppUI = () => {//COMPONENTE STATELESS.
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
  
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo => (//este return es igual ha esto {defaultTodos.map(item => { return ( <TodoItem/> ) })}*** "searchedTodos" es un array de obj. siempre va a tener un valor gracias al "useLocalStorage", el valor minimo que puede tener es el de un array vacio y en un Array vacio la longitud es = 0.
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
           />
          ))}
        </TodoList>
  
      <CreateTodoButton
        setOpenModal={setOpenModal}
        loading={loading}
      />

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  )
};
  
export { AppUI };



//Es mucho mejor usar useContext. ya no se necesita de una render function y el useEffect tiene una sintaxis mas amigable.



// return (
//   <>

//     <TodoCounter />
//     <TodoSearch />

//     <TodoContext.Consumer>
//       {({
//         loading,
//         error,
//         searchedTodos,
//         completeTodo,
//         deleteTodo, 
//       }) => (
//         <TodoList>
//         { loading && (
//           <>
//             <TodosLoading />
//             <TodosLoading />
//             <TodosLoading />
//           </>)}
//         { error && <TodosError /> }
//         { (!loading && searchedTodos.length === 0) && <EmptyTodos /> }

//         {searchedTodos.map(item => (
//           <TodoItem 
//             key={item.text} 
//             text={item.text}
//             completed={item.completed}
//             onComplete={() => completeTodo(item.text)}
//             onDelete={() => deleteTodo(item.text)}
//           />
//         ))}
//       </TodoList>
//       )}
//     </TodoContext.Consumer>

//     <CreateTodoButton />
//   </>
// );


  
