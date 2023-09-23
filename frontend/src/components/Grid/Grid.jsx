import './Grid.css';

import Square from '../Square/Square';
import CoordinatesRow from '../CoordinatesRow/CoordinatesRow';

export default function Grid({ owner }) {

    const gridSize = [0, 1, 2, 3, 4, 5]
    return (
        <div className='Grid'>
            {owner === 'enemy' ? <CoordinatesRow /> : null}
            <div className={`grid-squares ${owner}`}>
                <div className='row'>
                    {gridSize.map((grid, i) => {
                        return (
                            <div key={i} className='column'>
                                {gridSize.map((grid, j) => {
                                    return <Square key={j} owner={owner} row={i} column={j} />
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            {owner === 'ally' ? <CoordinatesRow /> : null}
        </div>
    );
}