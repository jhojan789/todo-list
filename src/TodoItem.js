import './TodoItem.css';

function TodoItem ({name , completed }){
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}></span>
      <p className={`TodoItem-name ${completed && 'TodoItem-name--completed'}`}>{name}</p>
      <span className="Icon Icon-delete"></span>
    </li>
  );
}

export {TodoItem};