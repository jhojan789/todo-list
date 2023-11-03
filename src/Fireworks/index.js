// src/components/Confetti.js
import Confetti from 'react-confetti';
import {TodoContext} from '../TodoContext';
import {useContext} from 'react';



const Fireworks = ()=>{
  const { activeFire } = useContext(TodoContext);
  return (
    <div>
      { activeFire &&
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={100}
        />
      }
    </div>
    
  )


}





export default Fireworks;
