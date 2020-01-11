import React, { Fragment, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

//Import components
import Arrow from '../../Arrow';

//Import contexts
import { ContentContext } from '../../../../Template';


const StaticticPanel: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// const dispatch = useDispatch();


	const filesPanelStyles = {
		right: isOpen ? "0" : "-300px"
	};
	

	return (
		<ContentContext.Consumer>
			{({ filesPanel }) => (
				<Fragment>
					<div 
						className="filesPanelSwitch t-paragraph4Normal" 
						onClick={(): void => setIsOpen(true)}
					> 
						{ filesPanel.switch }
					</div>
					<aside className="filesPanelWrapper" style={filesPanelStyles}>
						<div className="filesPanel">
							<nav className="filesPanel__bookmarks t-paragraph5Normal">
								<ul>
									{/* { generateBookmarks() } */}
								</ul>
							</nav>

							<div className="filesPanel__imagesContainer">
								<ul>
									{/* { generateImages() } */}
								</ul>
							</div>					

							<div 
								className="filesPanel__switch t-paragraph4Normal" 
								onClick={(): void => setIsOpen(false)}
							>
								<span>
									{ filesPanel.close }
								</span>
								<Arrow additionalClass="arrow--filesPanel"/>
							</div>
						</div>
					</aside>
				</Fragment>
			)}
		</ContentContext.Consumer>
	);
};


export default StaticticPanel;