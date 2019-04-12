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


interface ICreatorPanel {
  changeMapSelectMatrix: Function,
  mapSize: {
    x: number,
    y: number
  }
}

const CreatorPanel: React.SFC<ICreatorPanel> = ({ changeMapSelectMatrix, mapSize }) => {
  
  useEffect(() => {
    const newMatrix = [...Array(mapSize.y)].map((field) => {
      return [...Array(mapSize.x)].map((square) => {
        return [
          [0, 0],
          [0, 0]
        ]
      })
    })

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


const mapStateToProps = state => {
  return {
    mapSize: state.map.size
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMapSelectMatrix: newMatrix => {dispatch(changeMapSelectMatrix(newMatrix))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorPanel);