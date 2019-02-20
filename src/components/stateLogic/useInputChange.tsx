import React, { useState, useEffect } from 'react';

const useInputChange = (value, event:any={}) => {
    console.log(value)
    const [currValue, setCurrValue] = useState(value);

    useEffect(() => {
        console.log(value)
        const newValue = !event.target ? value : event.target.value;
        setCurrValue(newValue);
    })
    
    return currValue;
}

export default useInputChange;