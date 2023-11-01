import './TodoCounter.css';


function TodoCounter({completed,total}){
  return (
    <h1 className="TodoCounter"> You have completed <strong className="TodoCounter-strong">{completed}</strong> out of <strong className="TodoCounter-strong">{total}</strong> TODO tasks</h1>
  );
}

export {TodoCounter};