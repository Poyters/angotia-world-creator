import React from 'react';

//Import interfaces
import { IDialog } from '../../../../assets/interfaces/dialogsInterfaces';

const Dialog: React.FC<IDialog> = ({ id, npc, player}) => {
  return (
    <div>
      Dialog component works
      { id }
    </div>
  )
}


export default Dialog;