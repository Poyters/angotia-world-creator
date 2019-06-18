import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapBg } from '../../redux/actions/mapActions';
import { setNotification } from '../../redux/actions/uiActions';


interface IAddFileOption {
  setMapBg: Function,
  mapPic: string,
  setNotification: Function
}

const AddFileOption: React.FC<IAddFileOption> = ({ setMapBg, mapPic, setNotification }) => {
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
    setNotification("Added background image");
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
    setMapBg: path => {dispatch(setMapBg(path))},
    setNotification: actionNote => {dispatch(setNotification(actionNote))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFileOption);