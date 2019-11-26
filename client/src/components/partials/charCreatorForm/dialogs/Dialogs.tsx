import React from 'react';

//Import data
import { exampleDialogs } from './exampleDialogs';
import { exampleMonologs } from './exampleMonologs';

//Import components
import Dialog from './Dialog';
import Monolog from './Monolog';


interface IDialogs {
  type: string,
  addBtnText: string
}

const Dialogs: React.FC<IDialogs> = ({ type, addBtnText }) => {
  return (
    <div className="dialogs">
      <nav className="dialogs__nav">
        <ul>
          <li className="t-paragraph8Light"> { type } </li>
          <li className="t-paragraph5Normal">
            <span> { addBtnText } </span>
          </li>
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
        type ==='monologs' ? (
          exampleMonologs.map((monolog, index) => {
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