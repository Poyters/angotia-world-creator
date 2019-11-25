import React from 'react';

//Import interfaces
import { IDialog } from '../../../../assets/interfaces/dialogsInterfaces';

const Dialog: React.FC<IDialog> = ({ id, npc, player }) => {
  return (
    <div className="dialog">
      <p> 
        <span className="t-paragraph5Light"> 
          Dialog ID: 
        </span> { id } 
      </p>
      <p> 
        <span className="t-paragraph5Light">
          NPC dialog: 
        </span> { npc } 
      </p>
      { 
        player.map((dialogData, index) => {
          return <div className="dialog__playerDialog" key={index}>
            <p> 
              <span className="t-paragraph5Light"> 
                Player dialog ID: 
              </span> { dialogData.id } 
            </p>
            <p> 
              <span className="t-paragraph5Light"> 
                Player dialog: 
              </span> { dialogData.dialog } 
            </p>
            <p> 
              <span className="t-paragraph5Light"> 
                Next dialog: 
              </span> { dialogData.next } 
            </p>
          </div>
        })
      }
    </div>
  )
}


export default Dialog;