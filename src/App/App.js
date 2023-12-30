import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoForm } from '../TodoForm/TodoForm';
import { Modal } from '../Modal/Modal';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { useCustomContext } from './useCustomContext';
import { ChangeAlertWithStorageListener } from '../ChangeAlert/ChangeAlert';

function App() {
  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    syncronizeTodos,
  } = useCustomContext();

  return (
    <>
      <TodoHeader //Esto es composicion de componentes donde el componente TodoHeader no define su contenido, si no el componente que llama al TodoHeader (en este caso App). Gracias a la props.children dentro del componente TodoHeader
        loading={loading}//Aca pasamos la prop "loading" para que los componentes que encierre TodoHeader (mas no que contenga) tengan todos la prop loading gracias React.Children y React.cloneElement.
      >
        <TodoCounter 
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
  
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={
          (searchText) => <p>No existe resultados para {searchText}</p>
        }
        render={item => (//Esta prop render se va a llamar en todo List como "props.searchedTodos.map(item => props.render(item)" debido a que el "item" itera en "searchedTodos" que es el array de Todos.
          <TodoItem 
            key={item.text} 
            text={item.text}
            completed={item.completed}
            onComplete={() => completeTodo(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
        )}
      />
    
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        loading={loading}
      />

      {openModal && (
        <Modal className='Modal'>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ChangeAlertWithStorageListener//Aca recibo la funcion de retorno de HOC WrappedComponentWithStorageListener({ syncronize }){return (<ChangeAlert... />)}. la prop syncronize tb se podria utilizar directamente en el componente de retorno "ChangeAlert({ show, toogleShow, syncronized })" no habria problema.
        syncronize={syncronizeTodos}
      />
 
    </>
  );
};

  
export { App }; 