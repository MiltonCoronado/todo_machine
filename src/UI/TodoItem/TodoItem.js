import { IconCheck } from '../IconCheck/IconCheck.js';
import { IconEdit } from '../IconEdit/IconEdit.js';
import { IconDelete } from '../IconDelete/IconDelete.js';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <IconCheck 
      completed={props.completed}
      crossOut={props.onComplete}
      />   
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{/*Esta es la forma dinamica con el operador ternario && en que se agrega la clase "TodoItem-p--complete"*/}
        {props.text}
        </p>

      <IconEdit />

      <IconDelete 
      eliminate={props.onDelete}
      />
    </li>
  );
}


export { TodoItem };