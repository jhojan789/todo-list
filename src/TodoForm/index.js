import './TodoForm.css';

function TodoForm(){
  return(
    <form onSubmit={(event)=>{
      event.preventDefault();
    }}
      className="TodoForm "
    >
      <h2>Create a new TODO</h2>
      <textarea
        placeholder="Type a new TODO right here "
      ></textarea>
      <div className="TodoForm-btnContainer">
        <button className="TodoForm-button TodoForm-button--cancel"
         
        >Cancel</button>
        <button className="TodoForm-button TodoForm-button--add"
      
        >Add</button>
      </div>

    </form>
  )
}

export {TodoForm};