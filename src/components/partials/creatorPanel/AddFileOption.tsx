import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMapBg } from '../../../store/actions/mapActions';
import { addNotification } from '../../../scripts/utils/notifications';
import { sizeGuard } from '../../../scripts/files/sizeGuard';
import mapConfig from '../../../assets/configs/map.config.json';
import { IStore } from '../../../interfaces/store.interface';


export const AddFileOption: React.FC = () => {
  const mapPic = useSelector((state: IStore) => state.map.mapPic);
  const dispatch = useDispatch();

  const handleFileSelect = (evt: any) => {
    const file = evt.target.files[0]; 
    const reader = new FileReader();

    // Pic is too weight
    if (!sizeGuard(file, mapConfig.maxPicsWeight.background)) {
      return true;
    }

    reader.onload = ((): any => {
      return e => {
        const path: string = e.target.result;
        dispatch(setMapBg(path));
      };

    })();

    reader.readAsDataURL(file);
    addNotification('notifications?.addBg');
  };

  const optionOnOff: string = mapPic === '' ? 'option--off' : 'option--on';

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
        data-title={'creator?.panel?.options?.addFile?.dataTitle'}
      > </label>
    </>
  );
};