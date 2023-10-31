import './TodoItem.css';
import {CompleteIcon} from './CompleteIcon.js';
import {DeleteIcon} from './DeleteIcon.js';


function TodoItem ({ name , completed, onCompleted, onRemoved }){

  return (
    <li className="TodoItem">

      <CompleteIcon />
      {/* <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onCompleted}  
      ></span> */}
      <p className={`TodoItem-name ${completed && 'TodoItem-name--completed'}`}>{name}</p>
      {/* <span 
        className="Icon Icon-delete" 
        onClick={onRemoved}
      ></span> */}
      <DeleteIcon />
    </li>
  );
}

export {TodoItem};