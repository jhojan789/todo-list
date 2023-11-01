import { TodoIcon } from '../TodoIcon';

function CompleteIcon({completed , onCompleted}){
  return(
    <TodoIcon
      type="check" 
      color= {completed ? "#01be01" : "gray"} 
      onClick={onCompleted}
    />

  );
}

export {CompleteIcon};

