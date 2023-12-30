import { useState, useEffect } from 'react';
 
function useLocalStarage(itemName, initialValue) {//todo para localStorage es un "Item" por eso el cambio de nombres, tambien el customhook recibe parametros, "itemName e initialValue" podrian llamarse y tener otro valor inicial respectivamente. en este caso el componente App le asigna 'TODOS_V1.0' como itemName y '[]' como initialValue.
  const [item, setItem] = useState(initialValue);//el estado va aqui y va a ser el inicial value, que es un array vacio.
  const [loading, setLoading] = useState(true);//esto es para el estado de carga en el useEffect.
  const [error, setError] = useState(false);//esto es para el estado de error, en caso que suceda algun error en el useEffect.
  const [syncronizedItem, setsyncronizedItem] = useState(true);//???????
   
  
  useEffect(() => {
    setTimeout(() => {//El setTimeout detiene la ejecucion repetitiva, pero esto es falso... se necesita esto [].
      try {
        const localStorageItem = localStorage.getItem(itemName);//TODOS_V1.0 cambio por itemName.
      
        let parsedItem;
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));//asignamos un array vacio (cambio por initialValue) al localStorage.
          parsedItem = initialValue;//asignamos un array vacio (cambio por initialValue) si no existe nada en el estado inicial.
        }else{
          parsedItem = JSON.parse(localStorageItem);//si ya existe algo en el estado inicial que lo parsee.
          setItem(parsedItem);
        };
  
        setLoading(false);//Si todo salio bien y ya terminamos de traer al localStorage luego de 2 segundos; pon en false el estado de loading.
        setsyncronizedItem(true)//si todo salio bien, no estamos sincronizando, ya que el estado "syncronizedItem" vuelve al estado original.
      }catch(error){
        setLoading(false);//si ocurre un error, loading en false.
        setError(true);//si ocurre un error, error en true.
      };
    }, 2000)
  }, [syncronizedItem])//un array vacio en el useEffect hace que este no se renderize cada vez que cambie algun componente, solo hace un primer render al cerrar la pagina.

  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))//aca se realiza la persistencia de datos.
    setItem(newItem)//aca se actualiza el nuevo estado de los TODOS.                              
  };

  const syncronizeItem = (newItem) => {//Aca se debe disparar es Fn como un evento...
    setLoading(true)//colocamos a loading como true (por 2 segundos)
    setsyncronizedItem(false)// y colocamos a "sincronizedItem" como false para modificar el estado "syncronizedItem" que lo tenemos como dependencia del useEffect(), para asi poder correr nuevamente toda la logica del localStorage y renderizarla.
  };

  return {
    item,
    saveItem, 
    loading, 
    error,
    syncronizeItem,
  };//Por convencion si tenemos mas de dos elementos que retornar ya no es recomendable retornarlos en un array debido a que se tiene que llamar a los elementos deacuerdo a su posicion, en estos casos y lo mas recomendable es retornarlos en un objeto, asi los podemos llamar por su nombre y no por su posicion y tambien se le puede asignar otros nombres. 
};


export { useLocalStarage };


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de React.js', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Comprender es muy importante', completed: true },
//   { text: 'LALALALALA', completed: true },
// ];


// localStorage.setItem('TODOS_V1.0', defaultTodos);
// localStorage.removeItem('TODOS_V1.0');