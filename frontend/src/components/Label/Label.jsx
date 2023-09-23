import './Label.css';

export default function Label({ name }) {

    const splitName = name.split('')

  return (
        <div className={`Label ${name.toLowerCase()}`}>
            {splitName.map((char,i)=>{
                return <p>{char}</p>
            })}
            <p> </p>
            <p>W</p>
            <p>A</p>
            <p>T</p>
            <p>E</p>
            <p>R</p>
            <p>S</p>
        </div>
    );
}