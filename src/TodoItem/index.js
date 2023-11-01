import './TodoItem.css';
import {CompleteIcon} from '../CompleteIcon';
import {DeleteIcon} from '../DeleteIcon';


function TodoItem ({ name , completed, onCompleted, onRemoved }){

  return (
    <li className="TodoItem">

      <CompleteIcon 
        completed={completed} 
        onCompleted={onCompleted}/>
      {/* <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onCompleted}  
      ></span> */}
      <p className={`TodoItem-name ${completed && 'TodoItem-name--completed'}`}>{name}</p>
      {/* <span 
        className="Icon Icon-delete" 
        onClick={onRemoved}
      ></span> */}
      <DeleteIcon onRemoved={onRemoved}/>
    </li>
  );
}

export {TodoItem};