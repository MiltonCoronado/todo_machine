import './TodoList.css';

function TodoList(props) {
  return (
    <div>
      {props.error && props.onError()}{/*la prop onError se llama con parentesis debido a que es una funcion e igual con las demas llamadas a las render props que se encuentran en App dentro de TodoList.*/}

      {!!props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}{/*searchedTodos" es siempre un array y con "!props.searchedTodos.length" preguntamos si es NULO (null), si no hay ni un Todo dentro de el... pero tb es una Fn que dentro guarda el estado "searchValue" del componente de busqueda "TodoSearch", si esta funcion filtra algo que no existe se convierte en null y no renderiza nada*/}

      {(!props.loading && !props.error) && props.searchedTodos
      .map(item => 
        props.render(item)
          )}{/*Aca llamamos a "props.searchedTodos" que es el array de Todos y con la funcion map() iteramos el array. luego enviamos el item con el array de Todos llamando a la render function "props.render" pasandole como argumento el "item" con los Todos.*/}
    </div>
  );
};

export { TodoList };