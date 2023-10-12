import './Graveyard.css';

import Square from '../Square/Square';

export default function Graveyard({ owner }) {

  const gridNums = ['one','two']
  const gridLetters = ['a','b','c','d','e']


  return (
    <div className={`Graveyard ${owner}`}>
      <p>{owner}<br/>Grave</p>
      <div className='grave-border'>
      <div className='grave-squares'>
        {gridNums.map((num, i) => {
          return (
            <div key={i} className='column'>
              {gridLetters.map((letter, j) => {
                return <Square key={j} owner={`grave-${owner}`} row={letter} column={num} idx={j} />
              })}
            </div>
          )
        })}
      </div>
      </div>
    </div>
  );
}