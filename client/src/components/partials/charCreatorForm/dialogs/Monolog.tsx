import React from 'react';

//Import interfaces
import { IMonolog } from '../../../../assets/interfaces/dialogsInterfaces';

const Dialog: React.FC<IMonolog> = ({ id, content }) => {
  return (
    <div className="dialog">
      monolog content
    </div>
  )
}


export default Dialog;