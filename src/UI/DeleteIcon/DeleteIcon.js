import { TodoIcon } from '../TodoIcon/TodoIcon.js';

const DeleteIcon = ({ eliminate }) => {
  return (
    <TodoIcon 
      type='delete'
      color='gray'
      joinCrossOutEliminate={eliminate}
    />
  );
};


export { DeleteIcon };