import React from 'react';

//Import data
import { exampleDialogs } from './exampleDialogs';

//Import components
import Dialog from './Dialog';


const Dialogs: React.FC = () => {
  console.log(exampleDialogs);
  return (
    <div className="dialogs">
      <div className="dialogs__header t-paragraph6Light">
        dialogs
      </div>
      {
        exampleDialogs.map((dialog, index) => {
          return <Dialog 
            id={dialog.id}
            npc={dialog.npc}
            player={dialog.player}
            key={index}
          />
        })
      }
    </div>
  )
}


export default Dialogs;