import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

//Import configs
import creatorConfig from '../assets/configs/creatorConfig.json';


interface INotifications {
	actionNote: string
}


let timer;
const Notifications: React.FC<INotifications> = ({ actionNote }) => {
	const [note, setNote] = useState<string>(actionNote);
	const [opacityCSS, setOpacityCSS] = useState<number>(1);


	useEffect(() => {
		clearTimeout(timer);

		if (opacityCSS === 0 && note !== actionNote) {
			setNote(actionNote);
			//setIsVisible(true);
			setOpacityCSS(1);
		}

		timer = setTimeout(() => {
			setOpacityCSS(0);
			//setIsVisible(false);	
		}, creatorConfig.actionNoteDelay)
	});

	return (
		<div className="notifications" style={{opacity : opacityCSS}}>
			{ note }
		</div>
	)
}


const mapStateToProps = state => {
    return {
      actionNote: state.ui.actionNote
    }
  }


export default connect(mapStateToProps)(Notifications);