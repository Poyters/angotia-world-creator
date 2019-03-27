import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapBg } from '../../redux/actions/mapActions';


interface IAddFileOption {
  setMapBg: Function,
  mapPic: string
}

const AddFileOption: React.SFC<IAddFileOption> = ({ setMapBg, mapPic }) => {
  const handleFileSelect = evt => {
    const f = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return e => {
        const path = e.target.result;
        setMapBg(path)
      };

    })();

    reader.readAsDataURL(f);
  }

  const optionOnOff = mapPic === "" ? 'option--off' : 'option--on';

  return (
    <React.Fragment>
      <input className="option option--addFile" type="file" id="file" name="files[]" onChange={evt => handleFileSelect(evt)}/>
      <label className={optionOnOff} htmlFor="file">bg</label>
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