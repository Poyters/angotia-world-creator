import React from 'react';
import { useDispatch } from 'react-redux';

//Import actions
import { setMapBg } from '../../../redux/actions/mapActions';

//Import scripts
import { setActionNote } from '../../../assets/scripts/notifications';


const DeleteBgOption: React.FC = () => {
  const dispatch = useDispatch();

  const deleteBg = (): void => {
    dispatch(setMapBg(''));
    setActionNote('Deleted background image');
  }

  return (
    <div className="option option--deleteBg" onClick={() => deleteBg()}>
        <div className="g-exitBtn"></div>
    </div>
  );
}


export default DeleteBgOption;