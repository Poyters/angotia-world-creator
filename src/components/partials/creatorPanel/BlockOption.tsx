import React from 'react';

//Import scripts
import { setBlockSquares } from '../../../assets/scripts/blockSquares';


const BlockOption = () => {

	return (
		<div role="button" className="option option--block" onClick={setBlockSquares}>
			<div className="g-exitBtn"></div>
		</div>
	)
}


export default BlockOption