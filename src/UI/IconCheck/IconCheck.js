import { TodoIcon } from '../TodoIcon/TodoIcon.js';

const IconCheck = ({ completed, crossOut }) => {
  return (
    <TodoIcon 
      type='check'
      color={completed ? 'green' : 'gray'}
      joinCrossOutEliminate={crossOut}
    />
  );
};


export { IconCheck };