import './Grid.css';

import Square from '../Square/Square';
import CoordinatesRow from '../CoordinatesRow/CoordinatesRow';

export default function Grid({ owner }) {

    const gridNums = ["one","two","three","four","five","six"]
    const gridLetters = ["a","b","c","d","e","f"]
    return (
        <div className='Grid'>
            {owner === 'enemy' ? <CoordinatesRow /> : null}
            <div className='grid-border'>
            <div className={`grid-squares ${owner}`}>
                <div className='row'>
                    {gridLetters.map((letter, i) => {
                        return (
                            <div key={i} className='column'>
                                {gridNums.map((num, j) => {
                                    return <Square key={j} owner={owner} row={letter} column={num} idx={j} />
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
            {owner === 'ally' ? <CoordinatesRow /> : null}
        </div>
    );
}