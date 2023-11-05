import { useContext } from 'react';
import './TodoCreateButton.css';
import { TodoContext } from '../TodoContext';
import { ReactComponent as CreateSVG} from './create.svg';


function TodoCreateButton(){
  const {setOpenPortal} = useContext(TodoContext);

  const showPortal = (event)=>{
    event.preventDefault();
    setOpenPortal(state=>!state);
  }

  return (
    <span className="TodoCreateButton" 
      onClick={showPortal}
    > <CreateSVG/></span>

  );
}

export {TodoCreateButton};