import { CheckIcon } from '../CheckIcon/CheckIcon.js';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon.js';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CheckIcon 
      completed={props.completed}
      crossOut={props.onComplete}
      />   
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{/*Esta es la forma dinamica con el operador ternario && en que se agrega la clase "TodoItem-p--complete"*/}
        {props.text}
      </p>
      <DeleteIcon 
      eliminate={props.onDelete}
      />
    </li>
  );
}


export { TodoItem };