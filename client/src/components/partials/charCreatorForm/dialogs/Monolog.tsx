import React from 'react';

//Import interfaces
import { IMonolog } from '../../../../assets/interfaces/dialogsInterfaces';

const Monolog: React.FC<IMonolog> = ({ id, content }) => {
  return (
    <div className="dialog">
      <p> 
        <span className="t-paragraph5Light"> 
          Monolog ID: 
        </span> { id } 
      </p>
      <p> 
        <span className="t-paragraph5Light">
          Monolog content: 
        </span> { content } 
      </p>
    </div>
  )
}


export default Monolog;