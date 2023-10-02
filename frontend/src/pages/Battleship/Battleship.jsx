import './Battleship.css';

import Board from '../../components/Board/Board';

export default function Battleship() {

  return (
    <div className='Battleship'>
      <Board owner="enemy" />
      <Board owner="ally" />
    </div>
  );
}