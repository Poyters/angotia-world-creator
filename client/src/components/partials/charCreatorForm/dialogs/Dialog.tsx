import React, { useState, useEffect } from 'react';

//Import interfaces
import { IDialog } from '../../../../assets/interfaces/dialogsInterfaces';


const Dialog: React.FC<IDialog> = ({ 
  id, 
  npc, 
  player, 
  validatorFunc=():void=>{},
  connectedDialogs,
  clearValidator=():void=>{}
}) => {
  const [isConnected, setIsConnected] = useState<boolean>(connectedDialogs.includes(id));

  useEffect(() => {
    console.log('isConnected', connectedDialogs.includes(id), id)
  });

  const dialogStyle = {
    borderColor: connectedDialogs.includes(id) ? '#27427c' : '#262d38'
  }

  return (
    <div 
      className="dialog" 
      onMouseEnter={():void => validatorFunc(id)}
      onMouseLeave={():void => clearValidator()}
      style={dialogStyle}
    >
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