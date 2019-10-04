import React from 'react';


interface IArrow {
    additionalClass?: string
}

const Arrow: React.FC<IArrow> = ({ additionalClass='' }) => {

    return (
        <div className={`arrow ${additionalClass}`}></div>
    );
};


export default Arrow;