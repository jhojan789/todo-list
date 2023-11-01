import { TodoIcon } from '../TodoIcon';

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