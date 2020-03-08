import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import contexts
import { ContentContext } from '../../../Template';

//Import actions
import { setMapBg } from '../../../redux/actions/mapActions';

//Import scripts
import { setActionNote } from '../../../assets/scripts/notifications';
import { sizeGuard } from '../../../assets/scripts/files/sizeGuard';

// Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';


const AddFileOption: React.FC = () => {
  const { creator } = useContext(ContentContext);
  const mapPic = useSelector(state => state.map.mapPic);
  const dispatch = useDispatch();

  const handleFileSelect = (evt: any) => {
    const file = evt.target.files[0]; 
    const reader = new FileReader();

    if (!sizeGuard(file, creatorConfig.maxPicsWeight.background)) { // Pic is too weight
      return true;
    }

    reader.onload = (():any => {
      return e => {
        const path: string = e.target.result;
        dispatch(setMapBg(path));
      };

    })();

    reader.readAsDataURL(file);
    setActionNote("Added background image");
  };

  const optionOnOff: string = mapPic === "" ? 'option--off' : 'option--on';

  return (
    <>
      <input 
        className="option option--addFile" 
        type="file" 
        id="file" 
        name="files[]" 
        onChange={evt => handleFileSelect(evt)}
      />
      <label 
        className={optionOnOff} 
        htmlFor="file" 
        data-title={creator.panel.options.addFile.dataTitle}
      > </label>
    </>
  );
};


export default AddFileOption;