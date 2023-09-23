import './Boards.css';

import Board from '../Board/Board';

export default function Boards() {

  return (
    <div className='Boards'>
      <Board owner="enemy" />
      <Board owner="ally" />
    </div>
  );
}