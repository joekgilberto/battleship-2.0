import './Square.css';

export default function Square({owner, row, column, text}) {

  return (
    <div className={`Square ${owner==='grave-ally'||owner==='grave-enemy'?'grave':owner} ${String.fromCharCode(row + 65).toLowerCase()} ${String.fromCharCode(90-column).toLowerCase()}`} style={{animation: `shine-${owner==='grave-ally'||owner==='grave-enemy'?'grave':owner} 1s forwards ${column-(.9*column)+(owner==='ally'?.6:owner==='grave-enemy'?.7:0)}s`}} >
        {text?<p>{text}</p>:null}
    </div>
  );
}