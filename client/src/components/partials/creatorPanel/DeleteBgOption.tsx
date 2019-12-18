import React from 'react';
import { useDispatch } from 'react-redux';

//Import actions
import { setMapBg } from '../../../redux/actions/mapActions';

//Import scripts
import { setActionNote } from '../../../assets/scripts/notifications';

//Import contexts
import { ContentContext } from '../../../Template';


const DeleteBgOption: React.FC = () => {
  const dispatch = useDispatch();

  const deleteBg = (): void => {
    dispatch(setMapBg(''));
    setActionNote('Deleted background image');
  };

  return (
    <ContentContext.Consumer>
			{({ creator }) => (
        <div className="option option--deleteBg" onClick={(): void => deleteBg()}>
          <div 
            className="g-exitBtn" 
            data-tile={creator.panel.options.deleteBg.dataTitle}
          > </div>
        </div>
      )}
    </ContentContext.Consumer>
  );
};


export default DeleteBgOption;