import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue,
  } = useContext(TodoContext)

  return (
    <input
      placeholder='Busca Tu TODO...'
      className='TodoSearch'
      value={searchValue}
      onChange={event => {
        setSearchValue(event.target.value)//La unica forma que se renderize en el html los nuevos valores son atra vez del estado, asi funciona REACT*** 
      }}
    />
  )
};

export { TodoSearch };
