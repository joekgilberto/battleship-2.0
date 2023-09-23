import './CoordinatesRow.css';

import Square from '../Square/Square';

export default function CoordinatesRow({ label, owner }) {

    return (
        <div className='CoordinatesRow'>
            <Square text={'A'} />
            <Square text={'B'} />
            <Square text={'C'} />
            <Square text={'D'} />
            <Square text={'E'} />
            <Square text={'F'} />
        </div>
    );
}
