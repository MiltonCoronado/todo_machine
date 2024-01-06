import { TodoIcon } from '../TodoIcon/TodoIcon.js';

const IconDelete = ({ eliminate }) => {
  return (
    <TodoIcon 
      type='delete'
      color='gray'
      joinCrossOutEliminate={eliminate}
    />
  );
};


export { IconDelete };