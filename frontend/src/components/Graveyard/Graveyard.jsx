import './Graveyard.css';

import Square from '../Square/Square';

export default function Graveyard({ owner }) {

  const gridWidth = [0, 1]
  const gridHeight = [0, 1, 2, 3, 4]


  return (
    <div className={`Graveyard ${owner}`}>
      <h3>{owner}<br/>Grave</h3>
      <div className='grave-squares'>
        {gridWidth.map((grid, i) => {
          return (
            <div key={i} className='column'>
              {gridHeight.map((grid, j) => {
                return <Square key={j} owner='grave' row={i} column={j} />
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}