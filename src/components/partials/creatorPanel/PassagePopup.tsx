import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import scripts
import { deepCopy, matrixToIds } from '../../../assets/scripts/matrix';
import { markSquare } from '../../../assets/scripts/markSquare';

//Import actions
import { changeMapPassageMatrix, changeMapPassageLocations } from '../../../redux/actions/mapActions';


interface IPassageOption {
    closePopup: Function
}


const PassageOption: React.FC<IPassageOption> = ({ closePopup }) => {
    const selectMatrix = deepCopy(useSelector(state => state.map.select.matrix));
    const passageMatrix = useSelector(state => state.map.passage.matrix);
    const passageLocations = deepCopy(useSelector(state => state.map.passage.locations));
    const dispatch = useDispatch();
    const xd = useSelector(state => state.map.passage.locations);

    const insertPassage = () => {
        const potentialLocations = matrixToIds(selectMatrix);
        potentialLocations.forEach(location => {
            if (!passageLocations.some(e => e.id === location.id)) {
                passageLocations.push(location);
              }
        })

        closePopup(false);
        console.log(passageLocations)
        dispatch(changeMapPassageLocations(passageLocations));
        markSquare(passageMatrix, 'mapPassageCanvas', changeMapPassageMatrix, 'Passage added', '#fff', '')
        console.log(xd)
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