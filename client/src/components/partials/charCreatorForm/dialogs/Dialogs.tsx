import React from 'react';

//Import data
import { exampleDialogs } from './exampleDialogs';

//Import components
import Dialog from './Dialog';


const Dialogs: React.FC = () => {
  console.log(exampleDialogs);
  return (
    <div className="dialogs">
      <nav className="dialogs__nav">
        <ul>
          <li className="t-paragraph8Light"> dialogs </li>
          <li className="t-paragraph5Normal">Add dialog</li>
        </ul>
      </nav>
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