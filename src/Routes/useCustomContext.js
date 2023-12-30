import { useState } from 'react';
import { useLocalStarage } from './useLocalStorage';

function useCustomContext() {//por lo general lo que suele hacer es crear nuestro propio provider como componente personalizado, el metodo "Normal" no suele ser tan usado, aparte el consumer sera deprecado.

  const {
    item: todos,
    saveItem: saveTodos,
    syncronizeItem: syncronizeTodos,
    loading, 
    error,
 } = useLocalStarage ('TODOS_V1.0', []);

  const [searchValue, setSearchValue] = useState('');//useState tiene una Fn que guarda el estado y una Fn actualizadora del estado, por esto necesita un estado inicial(en este caso un string vacio).
  
  const [openModal, setOpenModal] = useState(false);

  //Estados derivados: valores secundarios que sacamos apartir de un estado.///////////////////////---------------
  


  const completedTodos = todos.filter(item => !!item.completed).length;//filter es inmutable, genera un nuevo array.
  
  
  const totalTodos = todos.length;
  
  
  const searchedTodos = todos.filter(
    item => {
      const todoText = item.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });//Aca filter, filtra todos los TODOs del "localStorage" y la condicion que tengan un string vacio (todos lo tienen por eso la lista no queda vacia), es dada con el metodo includes, tambien dentro de esta funcion esta el estado del "TodoSearch" que es el input de busqueda y se llama "searchValue" (encargado de actualizar el estado del input caracter por caracter). Todo esto se guarda en la varieble "searchedTodos" y la colocamos dentro del componente TodoList, para que renderize gracias al map y al children de TodoList.
    


    //Estados derivados: valores secundarios que sacamos apartir de un estado.///////////////////////----------------
    

    const addTodo = (text) => {//1. creamos una arrow function que espere un parametro (text).
      const newTodos = [...todos];//2. creamos un copia de el estado actual de los TODOs. 
      newTodos.push({//3. enviamos al array un objeto que tiene 2 keys: completed (complete es una tarea nueva por eso siempre en false) y text.
        text,
        completed: false,
      });
      saveTodos(newTodos);//4. enviamos el nuevo array de todos (newTodos) a la funcion "saveTodos" en donde van a persistir los datos y actualizar la nueva lista de TODOS.
    };

  const completeTodo = (text) => {//1. creamos una arrow function que espere un parametro (text).
    const newTodos = [...todos];//2. creamos un copia de el estado actual de los TODOs. 
    const todoIndex = newTodos.findIndex(
      item => item.text === text);//3. con el metodo findIndex encontramos en indice del objeto en el array de TODOs, comparando cada item.text que haga match con el argumento text de la funcion.
    newTodos[todoIndex].completed = true;//4. teniendo el index ingresemos a la key completed y lo colocamos como true. 
    saveTodos(newTodos);//5. enviamos el nuevo array de todos (newTodos) a la funcion "saveTodos" en donde van a persistir los datos y actualizar la nueva lista de TODOS.
  };


  const deleteTodo = (text) => {//1. creamos una arrow function que espere un parametro (text).
    const newTodos = [...todos];//2. creamos un copia de el estado actual de los TODOs. 
    const todoIndex = newTodos.findIndex(
      item => item.text === text);//3. con el metodo findIndex encontramos en indice del objeto en el array de TODOs, comparando cada item.text que haga match con el argumento text de la funcion.
    newTodos.splice(todoIndex, 1);//4. teniendo el index, usamos el metodo splice en newTodos, le decimos que del indice encontrado corte solo 1 indice (objeto TODO.) 
    saveTodos(newTodos);//5. enviamos el nuevo array de todos (newTodos) a la funcion "saveTodos" en donde van a persistir los datos y actualizar la nueva lista de TODOS.
  };

  return {
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
  }
};


export { useCustomContext };