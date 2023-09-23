import './Boards.css';

import Board from '../Board/Board';

export default function Boards() {

  return (
    <div className='Boards'>
      <Board label="ENEMY" owner="enemy" />
      <Board label="ALLY" owner="ally" />
    </div>
  );
}