import './Square.css';

export default function Square({owner, row, column, text}) {

  return (
    <div className={`Square ${owner} ${String.fromCharCode(row + 65).toLowerCase()} ${String.fromCharCode(90-column).toLowerCase()}`} style={{animation: `shine-${owner} 1s forwards ${column-(.9*column)+(owner==='ally'?.6:0)}s`}} >
        {text?<p>{text}</p>:null}
    </div>
  );
}