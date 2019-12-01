import React from 'react';
import { Link } from 'react-router-dom';

interface IComeBack {
  addedClass: string,
  url: string,
  description: string
}

const ComeBack: React.FC<IComeBack> = ({ addedClass, url, description }) => {
  return (
    <Link 
      to={`/${url}`} 
      className={addedClass}
    >
      { description }
    </Link>
  );
};

export default ComeBack;