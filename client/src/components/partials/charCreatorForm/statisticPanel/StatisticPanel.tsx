import React, { Fragment, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

//Import components
import Arrow from '../../Arrow';

//Import contexts
import { ContentContext } from '../../../../Template';


const StaticticPanel: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// const dispatch = useDispatch();


	const statisticPanelStyles = {
		left: isOpen ? "0" : "-300px"
	};
	

	return (
		<ContentContext.Consumer>
			{() => (
				<Fragment>
					<div 
						className="g-sidePanelSwitch g-sidePanelSwitch--statisticPanel t-paragraph4Normal" 
						onClick={(): void => setIsOpen(true)}
					> 
						Open Statistic Panel
					</div>
					<aside 
						className="g-sidePanelWrapper g-sidePanelWrapper--left" 
						style={statisticPanelStyles}
					>
						<div className="g-sidePanel g-sidePanel--left">
							<nav className="g-sidePanel__bookmarks t-paragraph5Normal">
								<ul>
									{/* { generateBookmarks() } */}
								</ul>
							</nav>

							<div className="g-sidePanel__imagesContainer">
								<ul>
									{/* { generateImages() } */}
								</ul>
							</div>					

							<div 
								className="g-sidePanel__switch t-paragraph4Normal" 
								onClick={(): void => setIsOpen(false)}
							>
								<Arrow additionalClass="arrow--statisticPanel"/>
								<span>
									Close Statistic Panel
								</span>
							</div>
						</div>
					</aside>
				</Fragment>
			)}
		</ContentContext.Consumer>
	);
};


export default StaticticPanel;