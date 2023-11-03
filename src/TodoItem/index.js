import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';


function TodoItem ({ name , completed, onCompleted, onRemoved }){

  return (
    <li className="TodoItem">

      <CompleteIcon 
        completed={completed} 
        onCompleted={onCompleted}/>

      <p className={`TodoItem-name ${completed && 'TodoItem-name--completed'}`}>{name}</p>

      <DeleteIcon onRemoved={onRemoved}/>
    </li>
  );
}

export {TodoItem};