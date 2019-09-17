import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';


let timer;
const Notifications: React.FC = () => {
	const actionNote = useSelector(state => state.ui.actionNote);
	const [note, setNote] = useState<string>(actionNote);
	const [opacityCSS, setOpacityCSS] = useState<number>(1);

	useEffect(() => {
		clearTimeout(timer);

		if (opacityCSS === 0 && note !== actionNote) {
			setNote(actionNote);
			setOpacityCSS(1);
		}

		timer = setTimeout(() => {
			setOpacityCSS(0);	
		}, creatorConfig.actionNoteDelay)
	});

	return (
		<div id="notifications" className="notifications" style={{opacity : opacityCSS}}>
			{ note }
		</div>
	)
}


export default Notifications;