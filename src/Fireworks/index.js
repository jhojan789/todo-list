// src/components/Confetti.js
import React from 'react';
import Confetti from 'react-confetti';




const Fireworks = ({activeFire})=>{
  
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
