function TodoCounter({completed,total}){
  return (
    <h1>You have completed {completed} out of {total} TODO tasks</h1>
  );
}

export {TodoCounter};