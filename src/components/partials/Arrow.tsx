import React from 'react';


interface IArrow {
    additionalClass?: string
}

export const Arrow: React.FC<IArrow> = ({ additionalClass='' }) => {

    return (
        <div className={`arrow ${additionalClass}`}></div>
    );
};