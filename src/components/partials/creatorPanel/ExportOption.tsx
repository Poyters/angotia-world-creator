import React from 'react';


export const ExportOption: React.FC = () => {
  return (
    <div 
      role="button" 
      className="option option--textOption option--smallerMargin" 
      data-title={'creator?.panel?.options?.export?.dataTitle'}
    >
      <span>
        { 'creator?.panel?.options?.export?.content' }
      </span>
    </div>
  );
};