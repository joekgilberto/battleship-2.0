import './Square.css';

export default function Square({owner, row, column, text}) {

  return (
    <div className={`Square ${owner} ${row} ${column}`}>
        {text?<p>{text}</p>:null}
    </div>
  );
}