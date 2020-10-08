import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContentContext } from '../../../Template';
import { SaveJsonOption } from './SaveJsonOption';
import { ExportToAngotia } from './ExportToAngotia';
import appConfig from '../../../assets/configs/app.config.json';
import { AppModules } from '../../../models/appModules.model';
import { IApp } from '../../../interfaces/app.inteface';


interface IMenu {
	type?: string
}

export const Menu: React.FC<IApp> = ({ moduleType }) => {
	const { menu, lang, routes } = useContext(ContentContext);

	return (
		<nav className="menu">
			<header className="menu__label t-paragraph6Normal"> { menu?.label } </header>
			<ul className="menu__content t-paragraph2Light">
				<li className="extended">
					{ menu?.save.label }
				<nav className="submenu t-paragraph6Light">
					<ul>
						<li> 
							<SaveJsonOption
								text={ menu?.save.json }
								type={moduleType ? moduleType : ''}
							/>
						</li>
						<li> { menu?.save.db } </li>
						<li>
							<ExportToAngotia
								text={ menu?.save.prodDb }
								type={moduleType ? moduleType : ''}
							/>
						</li>
					</ul>
				</nav>
				</li>
				<li>
					<Link to={`/${lang}/${routes.help}`}>
						{ menu?.help }
					</Link>	
				</li>
				<li> 
					<Link to={`/${lang}/${routes.license}`}>
						{ menu?.license }
					</Link>
				</li>
				<li> 
					<Link to={`/${lang}/${routes.features}`}>
						{ menu?.features }
					</Link>
				</li>
				{
					moduleType === AppModules.map ? (
						<li> 
							<Link to={`/${lang}/${routes.mapCreationRules}`}>
								{ menu?.mapCreationRules }
							</Link>
						</li>
					) : null
				}
				<li> { menu?.catalogs } </li>
				<li className="separator">
					<Link to={`/${lang}/${routes.home}`}>
						{ menu?.backToMenu }
					</Link>
				</li>
				<li> 
					<a href={appConfig.exitLink}>
						{ menu?.exit }
					</a>
				</li>
			</ul>
		</nav>
	);
};