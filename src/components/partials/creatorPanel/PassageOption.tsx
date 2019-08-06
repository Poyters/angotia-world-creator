import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { markSquare } from '../../../assets/scripts/markSquare';

//Import actions
import { changeMapPassageMatrix } from '../../../redux/actions/mapActions';


const PassageOption: React.FC = () => {
    const passageMatrix = useSelector(state => state.map.passage.matrix);

    return (
        <div className="passageOption" onClick={() => markSquare(passageMatrix, 'mapPassageCanvas', changeMapPassageMatrix, 'Passage added', '#fff', '')}></div>
    )
}


export default PassageOption;