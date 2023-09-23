import './Battleship.css';

import Boards from '../../components/Boards/Boards';
import Divider from '../../components/Divider/Divider';
import Graveyards from '../../components/Graveyards/Graveyards';

export default function Battleship() {

  return (
    <div className='Battleship'>
      <Boards />
      <Divider />
      <Graveyards />
    </div>
  );
}