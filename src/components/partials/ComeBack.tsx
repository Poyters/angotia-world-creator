import React from 'react';
import { Link } from 'react-router-dom';
import { IComeBack } from '../../interfaces/button.interface';


export const ComeBack: React.FC<IComeBack> = ({ addedClass, url, description }) => {
  return (
    <Link 
      to={`/${url}`} 
      className={addedClass}
    >
      { description }
    </Link>
  );
};