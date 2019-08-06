import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { markSquare } from '../../../assets/scripts/markSquare';


const PassageOption: React.FC = () => {
    const passageMatrix = useSelector(state => state.map.passage.matrix);

    return (
        <div className="passageOption" onClick={() => markSquare(passageMatrix, 'mapPassageCanvas', 'Added passage', '#fff')}></div>
    )
}


export default PassageOption;