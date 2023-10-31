import { TodoIcon } from './TodoIcon.js';

function DeleteIcon({onRemoved}){
  return(
    <TodoIcon
      type="delete" 
      color= "gray" 
      onClick={onRemoved}
    />

  );
}

export {DeleteIcon};