import './CoordinatesRow.css';

import Square from '../Square/Square';

export default function CoordinatesRow({ label, owner }) {

    return (
        <div className='CoordinatesRow'>
            <Square owner={'none'} text={'A'} />
            <Square owner={'none'} text={'B'} />
            <Square owner={'none'} text={'C'} />
            <Square owner={'none'} text={'D'} />
            <Square owner={'none'} text={'E'} />
            <Square owner={'none'} text={'F'} />
        </div>
    );
}
