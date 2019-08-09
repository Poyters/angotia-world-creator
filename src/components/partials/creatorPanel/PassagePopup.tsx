import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { deepCopy, matrixToIds } from '../../../assets/scripts/matrix';
import { markSquare } from '../../../assets/scripts/markSquare';

//Import actions
import { changeMapPassageMatrix } from '../../../redux/actions/mapActions';


interface IPassageOption {
    closePopup: Function
}


const PassageOption: React.FC<IPassageOption> = ({ closePopup }) => {
    const selectMatrix = deepCopy(useSelector(state => state.map.select.matrix));
    const passageMatrix = useSelector(state => state.map.passage.matrix);

    const insertPassage = () => {
        console.log(selectMatrix)
        console.log(matrixToIds(selectMatrix));
        closePopup(false)

        markSquare(passageMatrix, 'mapPassageCanvas', changeMapPassageMatrix, 'Passage added', '#fff', '')
    }

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="passagePopup"> 
                <header className="passagePopup__header t-paragraph3Light"> Add passage </header>
                <label className="passagePopup__label t-paragraph6Light">Target map id </label>
                <input type='text'/>
                <label className="passagePopup__label t-paragraph6Light">Target map coordinations </label>
                <input type='text'/>

                <button type="submit" className="passagePopup__submit t-paragraphLight" onClick={() => insertPassage()}> submit </button>
            </div>
        </div>
    )
}


export default PassageOption;