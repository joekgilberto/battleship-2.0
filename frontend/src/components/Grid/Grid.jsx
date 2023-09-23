import './Grid.css';

import Square from '../Square/Square';
import CoordinatesRow from '../CoordinatesRow/CoordinatesRow';

export default function Grid({ label, owner }) {

    const gridSize = [0, 1, 2, 3, 4, 5]
    return (
        <div className='Grid'>
            {owner === 'enemy' ? <CoordinatesRow /> : null}
            <div className='row'>
                {gridSize.map((grid, i) => {
                    return (
                        <div className='column'>
                            {gridSize.map((grid, j) => {
                                return <Square key={`${i} ${j}`} owner={owner} row={i} column={j} />
                            })}
                        </div>
                    )
                })}
            </div>
            {owner === 'ally' ? <CoordinatesRow /> : null}
        </div>
    );
}