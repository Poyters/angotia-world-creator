import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Import other components
import ExportOption from './ExportOption';
import FullScreenOption from './FullScreenOption';
import NetOption from './NetOption';
import SelectOption from './SelectOption';
import AddFileOption from './AddFileOption';
import ClearSelectedOption from './ClearSelectedOption';
import BlockOption from './BlockOption';
import LayersOption from './LayersOption';
import PassageOption from './PassageOption';
import LinkButton from './LinkButton';

//Import actions
import { changeMapSelectMatrix, changeMapBlockMatrix, changeMapPassageMatrix} from '../../../redux/actions/mapActions';

//Import scripts 
import { generateEmptyMapMatrix } from '../../../assets/scripts/map';
import { deepCopy } from '../../../assets/scripts/matrix';


const CreatorPanel: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect((): void => { //Create necessary empty matrix at the beginning
    const newEmptyMatrix = generateEmptyMapMatrix();

    dispatch(changeMapSelectMatrix(deepCopy(newEmptyMatrix)));
    dispatch(changeMapBlockMatrix(deepCopy(newEmptyMatrix)));
    dispatch(changeMapPassageMatrix(deepCopy(newEmptyMatrix)));
  }, []);

  return (
    <nav className="creatorPanel">
      <header className="creatorPanel__title">
        <span> AMC </span>
      </header>
      <ul className="creatorPanel__options">
        <li>
          <LinkButton link='/' buttonText='come back' />
        </li>
        <li>
          <LinkButton link='/help' buttonText='help' />
        </li>
        <li>
          <ExportOption />
        </li>
        <li>
          <LayersOption />
        </li>
        <li>
          <AddFileOption />
        </li>
        <li>
          <FullScreenOption />
        </li>
        <li>
          <NetOption viewTypeQuantity={3} />
        </li>
        <li>
          <SelectOption selectTypeQuantity={3} />
        </li>
        <li>
          <ClearSelectedOption />
        </li>
        <li>
          <BlockOption />
        </li>
        <li>
          <PassageOption />
        </li>
      </ul>
    </nav>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    changeMapSelectMatrix: newMatrix => {dispatch(changeMapSelectMatrix(newMatrix))}
  }
}

export default CreatorPanel;