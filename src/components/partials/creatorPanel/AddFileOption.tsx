import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapBg } from '../../../redux/actions/mapActions';

//Import scripts
import { setActionNote } from '../../../assets/scripts/notifications';


interface IAddFileOption {
  setMapBg: Function,
  mapPic: string
}


const AddFileOption: React.FC<IAddFileOption> = ({ setMapBg, mapPic }) => {
  const handleFileSelect = (evt: any) => {
    const f = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return e => {
        const path: string = e.target.result;
        setMapBg(path);
      };

    })();

    reader.readAsDataURL(f);
    setActionNote("Added background image");
  }

  const optionOnOff: string = mapPic === "" ? 'option--off' : 'option--on';

  return (
    <React.Fragment>
      <input className="option option--addFile" type="file" id="file" name="files[]" onChange={evt => handleFileSelect(evt)}/>
      <label className={optionOnOff} htmlFor="file"></label>
    </React.Fragment>
  );
}


const mapStateToProps = state => {
  return {
    mapPic: state.map.mapPic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMapBg: path => {dispatch(setMapBg(path))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFileOption);