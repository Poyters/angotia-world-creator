import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import actions
import { setMapBg } from '../../../redux/actions/mapActions';

//Import scripts
import { setActionNote } from '../../../assets/scripts/notifications';


const AddFileOption: React.FC = () => {
  const mapPic = useSelector(state => state.map.mapPic);
  const dispatch = useDispatch();

  const handleFileSelect = (evt: any) => {
    const f = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return e => {
        const path: string = e.target.result;
        dispatch(setMapBg(path));
      };

    })();

    reader.readAsDataURL(f);
    setActionNote("Added background image");
  }

  const optionOnOff: string = mapPic === "" ? 'option--off' : 'option--on';

  return (
    <React.Fragment>
      <input className="option option--addFile" type="file" id="file" name="files[]" onChange={evt => handleFileSelect(evt)}/>
      <label className={optionOnOff} htmlFor="file" data-title="set background image"></label>
    </React.Fragment>
  );
}


export default AddFileOption;