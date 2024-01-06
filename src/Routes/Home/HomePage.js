import { TodoCounter } from '../../UI/TodoCounter/TodoCounter.js';
import { TodoSearch } from '../../UI/TodoSearch/TodoSearch.js';
import { TodoList } from '../../UI/TodoList/TodoList.js';
import { TodoItem } from '../../UI/TodoItem/TodoItem.js';
import { CreateTodoButton } from '../../UI/CreateTodoButton/CreateTodoButton.js';
import { TodosLoading } from '../../UI/TodosLoading/TodosLoading.js';
import { TodosError } from '../../UI/TodosError/TodosError.js';
import { EmptyTodos } from '../../UI/EmptyTodos/EmptyTodos.js';
import { TodoForm } from '../../UI/TodoForm/TodoForm.js';
import { Modal } from '../../UI/Modal/Modal.js';
import { TodoHeader } from '../../UI/TodoHeader/TodoHeader.js';
import { useCustomContext } from '../useCustomContext.js';
import { ChangeAlertWithStorageListener } from '../../UI/ChangeAlert/ChangeAlert.js';

const HomePage = () => {
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
            onEdit={() => console.log('EDITAR TODO')}
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

  
export { HomePage }; 