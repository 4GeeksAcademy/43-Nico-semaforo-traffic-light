import React, { useState } from 'react';

const Semacluz = () => {
  const [selectedluz, setSelectedluz] = useState(null);

  const boton = () => {
    if(selectedluz === 'red'){
      setSelectedluz('yellow')
    } else if(selectedluz === 'yellow'){
      setSelectedluz('green')
    } else if(selectedluz === 'green'){
      setSelectedluz('red')
    } else if(selectedluz === null){
      setSelectedluz('red')
    } 
  }
  const darclick = (luz) => {
    setSelectedluz(luz);
  };

  return (
    <div className="semaforo bg-black">
      <div
        className={`luz red ${selectedluz === 'red' ? 'selected box-shadow' : ''}`}
        onClick={() => darclick('red')}
      ></div>
      <div
        className={`luz yellow ${selectedluz === 'yellow' ? 'selected box-shadow' : ''}`}
        onClick={() => darclick('yellow')}
      ></div>
      <div
        className={`luz green ${selectedluz === 'green' ? 'selected box-shadow' : ''}`}
        onClick={() => darclick('green')}
      ></div>
      <div className='btn btn-primary' onClick={boton}>Cambiar color</div>
    </div>
  );
};

export default Semacluz;



