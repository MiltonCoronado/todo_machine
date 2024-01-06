import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css'

const iconTypes = {
  'check': (color) => <CheckSVG className='Icon-svg' fill={color} />,
  'delete': (color) => <DeleteSVG className='Icon-svg' fill={color} />,
};

const TodoIcon = ({ type, color, joinCrossOutEliminate }) => {
  return (
    <span
    className={`Icon-container Icon-container-${type}`}
    onClick={joinCrossOutEliminate}
    > 
    {iconTypes[type](color)}
    </span>
  )
};


export { TodoIcon };