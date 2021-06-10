import React from 'react';
import { useSelector } from 'react-redux';
import { LoadPicBtn } from '../LoadPicBtn';
import { setCharPic } from '../../../store/actions/charActions';
import { IStore } from '../../../interfaces/store.interface';


export const CharSprite = () => {
  const charPicPath: string = useSelector((state: IStore) => state.char.charPic);

  const charPicStyles = {
    backgroundImage: `url('${charPicPath}')`
  };

  return (
    <>
      <div 
        className="charSprite t-paragraph5Bold"
        style={charPicStyles}
      >
        {
          !charPicPath && (
            <div>
              Need to import a character sprite
            </div>
          ) 
        }
      </div>
      
      <LoadPicBtn 
        name={'char?.form?.importPicBtn'}
        clickEvent={setCharPic}
        note={'notifications?.char?.loadedGraphice'}
      />
    </>
  );
};