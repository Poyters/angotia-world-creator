import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../assets/interfaces/store';
import uuid from 'uuid/v4';


export const Notifications: React.FC = () => {
	const actionNotes = useSelector((state: IStore) => state.ui.actionNote);

	const generateNotesList = (): any => {
		if (!Array.isArray(actionNotes)) return [];
		
		const contentToRender = actionNotes?.map(note => {
			const specialClass = note.type === 'warning' ? 'notifications__note--warning' : '';

			return (
				<li 
					key={uuid()}
					className={`notifications__note ${specialClass}`}
				>
					{ note.text }
				</li>				
			);
		});

		return contentToRender;
	};

	return (
		<ul className="notifications">
			{ generateNotesList() }
		</ul>
	);
};