import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input 
      disabled={loading}//"disabled" es un input HTML atributte, no es cualquier prop, es especial de los inputs.
      placeholder="Escribne aqui tu placeHolder"
      className='TodoSearch'
      value={searchValue}//Este value no es cualquier prop, viene del input.value='', de JS. y el valor del value se guarda en el estado. en este caso caracter cambia por otro caracter.
      onChange={(event) => {
        setSearchValue(event.target.value);//aca el value se guarda en el estado y se guardan todos los caracteres escritos gracias a la funcion actualizadora del estado. solo se vuelve a renderizar el estado del componente, gracias al virtualDom de react para luego cambiar parte del Dom mas no todo el Dom.
        // console.log(event.target.value);
      }}
    />
  );
};

export { TodoSearch };