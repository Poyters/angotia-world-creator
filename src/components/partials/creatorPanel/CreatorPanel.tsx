import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Import other components
import ExportOption from './ExportOption';
import ComeBackOption from './ComeBackOption';
import FullScreenOption from './FullScreenOption';
import NetOption from './NetOption';
import SelectOption from './SelectOption';
import AddFileOption from './AddFileOption';
import ClearSelectedOption from './ClearSelectedOption';
import BlockOption from './BlockOption';

//Import actions
import { changeMapSelectMatrix } from '../../../redux/actions/mapActions';

//Import scripts 
import { generateEmptyMapMatrix } from '../../../assets/scripts/map';


const CreatorPanel: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect((): void => {
    const newMatrix = generateEmptyMapMatrix();

    dispatch(changeMapSelectMatrix(newMatrix));
  }, []);

  return (
    <nav className="creatorPanel">
      <header className="creatorPanel__title">
        <span> AMC </span>
      </header>
      <ul className="creatorPanel__options">
        <li>
          <ExportOption />
        </li>
        <li>
          <ComeBackOption />
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