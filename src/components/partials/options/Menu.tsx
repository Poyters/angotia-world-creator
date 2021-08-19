import React from 'react';
import { Link } from 'react-router-dom';
import { SaveJsonOption } from './SaveJsonOption';
import { Export } from '../export/Export';
import appConfig from '../../../assets/configs/app.config.json';
import { AppModules } from '../../../models/appModules.model';
import { IApp } from '../../../interfaces/app.inteface';
import { MapPreview } from '../map/MapPreview';
import routesConfig from '../../../assets/configs/routes.config.json';
import { useTranslation } from 'react-i18next';


export const Menu: React.FC<IApp> = ({ moduleType }) => {
	const { t } = useTranslation(['menu']);

	return (
		<nav className="menu">
			<header className="menu__label t-paragraph6Normal"> 
				{ t('menu:label') }
			</header>
			<ul className="menu__content t-paragraph2Light">
				<li className="extended">
					{ t('menu:save') }
					<nav className="submenu t-paragraph6Light">
						<ul>
							<li> 
								<SaveJsonOption
									moduleType={moduleType}
								/>
							</li>
							<li>
								<Export
									moduleType={moduleType}
								/>
							</li>
						</ul>
					</nav>
				</li>
				{
					moduleType === AppModules.map ? (
						<li> 
							<MapPreview />
						</li>
					) : null
				}
				<li>
					<Link to={`/${routesConfig.help}`}>
					{ t('menu:help') }
					</Link>	
				</li>
				<li> 
					<Link to={`/${routesConfig.license}`}>
					{ t('menu:license') }
					</Link>
				</li>
				<li> 
					<Link to={`/${routesConfig.features}`}>
						{ t('menu:save') }
					</Link>
				</li>
				{
					moduleType === AppModules.map ? (
						<li> 
							<Link to={`/${routesConfig.mapCreationRules }`}>
								{ t('menu:mapCreationRules') }
							</Link>
						</li>
					) : null
				}
				<li> { t('menu:resources') } </li>
				<li className="separator">
					<Link to={`/${routesConfig.home}`}>
						{ t('menu:back') }
					</Link>
				</li>
				<li> 
					<a href={appConfig.exitLink}>
						{ t('menu:exit') }
					</a>
				</li>
			</ul>
		</nav>
	);
};