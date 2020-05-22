import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContentContext } from '../../../Template';
import { SaveJsonOption } from '../options/SaveJsonOption';


export const Menu: React.FC = () => {
	const { creator, lang, routes } = useContext(ContentContext);

	return (
		<nav className="menu">
			<header className="menu__label t-paragraph6Normal"> menu </header>
			<ul className="menu__content t-paragraph2Light">
				<li>
					{ creator?.panel?.options?.export?.content }
				</li>
				<li className="extended">
					save
				<nav className="submenu t-paragraph6Light">
					<ul>
						<li> 
							<SaveJsonOption
								text={'to json'}
							/>
						</li>
						<li> to ur account </li>
					</ul>
				</nav>
				</li>
				<li>
					<Link to={`/${lang}/${routes.help}`}>
						{creator?.panel?.buttons?.help}  
					</Link>	
				</li>
				<li> 
					<Link to={`/${lang}/${routes.license}`}>
						{creator?.panel?.buttons?.license}
					</Link>
				</li>
				<li> catalogs </li>
				<li className="separator">
					<Link to={`/${lang}/${routes.home}`}>
						back to menu
					</Link>
				</li>
				<li> 
					<Link to={`/${lang}/${routes.home}`}>
						{creator?.panel?.buttons?.back} 
					</Link>
				</li>
			</ul>
		</nav>
	);
};