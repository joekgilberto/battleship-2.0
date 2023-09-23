import './Board.css';

import Label from '../Label/Label';
import Grid from '../Grid/Grid';

export default function Board({label, owner}) {

  return (
    <div className='Board'>
        <Label name={label} />
        <Grid owner={owner} />
    </div>
  );
}