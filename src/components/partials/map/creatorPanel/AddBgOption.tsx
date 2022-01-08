import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMapBg } from '../../../../store/actions/mapActions';
import { addNotification } from '../../../../scripts/utils/notifications';
import { sizeGuard } from '../../../../scripts/files/sizeGuard';
import { IStore } from '../../../../interfaces/store.interface';
import { useTranslation } from 'react-i18next';
import mapConfig from '../../../../assets/configs/map.config.json';


export const AddBgOption: React.FC = () => {
  const { t } = useTranslation(['notifications', 'files']);
  const mapPic = useSelector((state: IStore) => state.map.mapPic);
  const dispatch = useDispatch();

  const handleFileSelect = (event) => {
    const file = event.target.files[0]; 
    const reader = new FileReader();

    // Pic is too weight
    if (!sizeGuard(file, mapConfig?.maxPicsWeight?.background, t)) {
      return true;
    }

    reader.onload = (() => {
      return e => {
        const path = e?.target?.result;

        if (!path || typeof path !== 'string') {
          // TODO: Add log here
          return;
        }

        dispatch(setMapBg(path));
      };

    })();

    reader.readAsDataURL(file);
    addNotification(t('notifications:notes.background.add'));
  };

  const optionOnOff = mapPic === '' ? 'option--off' : 'option--on';

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
      > </label>
    </>
  );
};