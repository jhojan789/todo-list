import { ReactComponent as CheckSVG } from "./assets/icons/check.svg";
import { ReactComponent as DeleteSVG } from "./assets/icons/delete.svg";


const todoIcons = {
  "check": <CheckSVG/>,
  "delete":<DeleteSVG/>
}


function TodoIcon({type,color}){
  return(
    <span 
      className={`Icon Icon- Icon-${type}`}
    >
      {todoIcons[type]}
    </span>

  );
}

export {TodoIcon};