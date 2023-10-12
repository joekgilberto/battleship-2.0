import './Square.css';

export default function Square({owner, row, column, idx, text}) {

  return (
    <div className={`Square ${owner==='grave-ally'||owner==='grave-enemy'?'grave':owner} ${row} ${column}`} style={{animation: `shine-${owner==='grave-ally'||owner==='grave-enemy'?'grave':owner} 1s forwards ${idx-(.9*idx)+(owner==='ally'?.6:owner==='grave-enemy'?.7:0)}s`}} >
        {text?<p>{text}</p>:null}
    </div>
  );
}