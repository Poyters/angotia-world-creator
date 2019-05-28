import React from 'react';
import { Link } from 'react-router-dom'


const ComeBackOption: React.FC = () => {

  return (
    <div role="button" className="option option--textOption">
      <Link to='/'>Come back</Link>
    </div>
  );
}


export default ComeBackOption;