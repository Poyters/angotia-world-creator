import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Import other components
import ExportOption from './ExportOption';
import ComeBackOption from './ComeBackOption';
import FullScreenOption from './FullScreenOption';
import NetOption from './NetOption';
import SelectOption from './SelectOption';
import AddFileOption from './AddFileOption';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';

//Import scripts 
import { generateEmptyMapMatrix } from '../../assets/scripts/map';


interface ICreatorPanel {
  changeMapSelectMatrix: Function
}


const CreatorPanel: React.SFC<ICreatorPanel> = ({ changeMapSelectMatrix }) => {
  
  useEffect(() => {
    const newMatrix = generateEmptyMapMatrix();

    changeMapSelectMatrix(newMatrix);
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
          <SelectOption selectTypeQuantity={2} />
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

export default connect(null, mapDispatchToProps)(CreatorPanel);