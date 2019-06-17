import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


interface INotifications {
	actionNote: string
}


const Notifications: React.FC<INotifications> = ({ actionNote }) => {
	console.log(actionNote)
	const [note, setNote] = useState<string>(actionNote);
	const [isVisible, setIsVisible] = useState<boolean>(true);

	useEffect(() => {
		if (!isVisible && note !== actionNote) {
			setNote(actionNote);
			setIsVisible(true);
		}

		setTimeout(() => {
			setIsVisible(false);
		}, 2000)
	});

	return (
		<div className="notifications">
			{ isVisible ? note : null }
		</div>
	)
}


const mapStateToProps = state => {
    return {
      actionNote: state.ui.actionNote
    }
  }


export default connect(mapStateToProps)(Notifications);