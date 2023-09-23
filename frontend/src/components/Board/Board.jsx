import './Board.css';

import Label from '../Label/Label';
import Grid from '../Grid/Grid';

export default function Board({ owner }) {

  return (
    <div className={`${owner} Board`}>
      <Label name={owner} />
      <div className={`${owner} coordinates-column`}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>
      <Grid owner={owner} />
    </div>
  );
}