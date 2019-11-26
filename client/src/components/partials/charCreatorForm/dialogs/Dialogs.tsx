import React from 'react';

//Import data
import { exampleDialogs } from './exampleDialogs';

//Import components
import Dialog from './Dialog';
import Monolog from './Monolog';


interface IDialogs {
  type: string
}

const Dialogs: React.FC<IDialogs> = ({ type }) => {
  return (
    <div className="dialogs">
      <nav className="dialogs__nav">
        <ul>
          <li className="t-paragraph8Light"> dialogs </li>
          <li className="t-paragraph5Normal">Add dialog</li>
        </ul>
      </nav>
      {
        type ==='dialogs' ? (
          exampleDialogs.map((dialog, index) => {
            return <Dialog 
              id={dialog.id}
              npc={dialog.npc}
              player={dialog.player}
              key={index}
            />
          })
        ) : null
      }
      {
        type ==='dialogs' ? (
          exampleDialogs.map((monolog, index) => {
            return <Monolog 
              id={monolog.id}
              content={monolog.content}
              key={index}
            />
          })
        ) : null
      }
    </div>
  )
}


export default Dialogs;