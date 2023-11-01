import './TodoIcon.css';
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

const todoIcons = {
  "check": (color)=><CheckSVG className="Icon-svg" fill={color} />,
  "delete":(color)=><DeleteSVG className="Icon-svg" fill={color}/>
}


function TodoIcon({type,color, onClick}){
  return(
    <span 
      className={`Icon Icon-container Icon-container-${type}`} 
      onClick={onClick}
    >
      {todoIcons[type](color)}
    </span>

  );
}

export {TodoIcon};