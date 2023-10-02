import './Graveyard.css';

import Square from '../Square/Square';

export default function Graveyard({ owner }) {

  const gridWidth = [0, 1]
  const gridHeight = [0, 1, 2, 3, 4]


  return (
    <div className={`Graveyard ${owner}`}>
      <p>{owner}<br/>Grave</p>
      <div className='grave-border'>
      <div className='grave-squares'>
        {gridWidth.map((gridI, i) => {
          return (
            <div key={i} className='column'>
              {gridHeight.map((gridII, j) => {
                return <Square key={j} owner={`grave-${owner}`} row={i} column={j} />
              })}
            </div>
          )
        })}
      </div>
      </div>
    </div>
  );
}