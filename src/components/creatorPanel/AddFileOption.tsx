import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapBg } from '../../redux/actions/mapActions';


interface IAddFileOption {
  setMapBg: Function
}

const AddFileOption: React.SFC<IAddFileOption> = ({ setMapBg }) => {
  const handleFileSelect = evt => {
    const f = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (() => {
      return e => {
        const path = e.target.result;
        setMapBg(path)
      };

    })();

    reader.readAsDataURL(f);
  }

  return (
    <input type="file" id="files" name="files[]" onChange={evt => handleFileSelect(evt)}/>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    setMapBg: path => {dispatch(setMapBg(path))}
  }
}

export default connect(null, mapDispatchToProps)(AddFileOption);