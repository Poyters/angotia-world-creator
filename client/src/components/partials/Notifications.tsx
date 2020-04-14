import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import creatorConfig from '../../assets/configs/creatorConfig.json';
import { IStore } from '../../assets/interfaces/store';


export const Notifications: React.FC = () => {
	const actionNotes = useSelector((state: IStore) => state.ui.actionNote);

	useEffect(() => {
		console.log('UPDATE', actionNotes);
	}, [actionNotes]);

	const generateNotesList = (): any => {
		const contentToRender = actionNotes.map(note => {
			const xd = {
				color: note.type === 'warning' ? 'red' : 'blue'
			}
			return <li style={xd}> { note.text } </li>;
		});

		return contentToRender;
	};

	return (
		<div id="notifications" className="notifications">
			<ul>
				{
					generateNotesList()
				}
			</ul>
		</div>
	);
};