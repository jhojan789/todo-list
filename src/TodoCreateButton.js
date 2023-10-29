import './TodoCreateButton.css';



function TodoCreateButton(){
  

  return (
    <button className="TodoCreateButton" 
      onClick={(event)=>{
      
        console.log(event.target.tagName)
        console.log(event.target)
        
      }}
      
      
    ></button>

  );
}

export {TodoCreateButton};