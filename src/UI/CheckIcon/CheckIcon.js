import { TodoIcon } from '../TodoIcon/TodoIcon.js';

const CheckIcon = ({ completed, crossOut }) => {
  return (
    <TodoIcon 
      type='check'
      color={completed ? 'green' : 'gray'}
      joinCrossOutEliminate={crossOut}
    />
  );
};


export { CheckIcon };