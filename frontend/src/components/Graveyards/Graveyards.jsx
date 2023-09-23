import './Graveyards.css';

import Graveyard from '../Graveyard/Graveyard';

export default function Graveyards() {

  return (
    <div className='Graveyards'>
      <Graveyard label="ALLY" owner="ally" />
      <Graveyard label="ENEMY" owner="enemy" />
    </div>
  );
}