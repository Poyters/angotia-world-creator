import React from 'react';
import { Link } from 'react-router-dom';
import { SaveJsonOption } from './SaveJsonOption';
import { ExportToProd } from './exportToProd/ExportToProd';
import appConfig from '../../../assets/configs/app.config.json';
import { AppModules } from '../../../models/appModules.model';
import { IApp } from '../../../interfaces/app.inteface';
import { MapPreview } from './MapPreview';


export const Menu: React.FC<IApp> = ({ moduleType }) => {
	return (
		<nav className="menu">
			<header className="menu__label t-paragraph6Normal"> { 'menu?.label' } </header>
			<ul className="menu__content t-paragraph2Light">
				<li className="extended">
					{ 'menu?.save.label' }
					<nav className="submenu t-paragraph6Light">
						<ul>
							<li> 
								<SaveJsonOption
									text={ 'menu?.save.json' }
									moduleType={moduleType}
								/>
							</li>
							<li>
								<ExportToProd
									text={ 'menu?.save.prodDb' }
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
					<Link to={`/${'routes.help'}`}>
						{ 'menu?.help' }
					</Link>	
				</li>
				<li> 
					<Link to={`/${'routes.license'}`}>
						{ 'menu?.license' }
					</Link>
				</li>
				<li> 
					<Link to={`/${'routes.features'}`}>
						{ 'menu?.features' }
					</Link>
				</li>
				{
					moduleType === AppModules.map ? (
						<li> 
							<Link to={`/${'routes.mapCreationRules'}`}>
								{ 'menu?.mapCreationRules' }
							</Link>
						</li>
					) : null
				}
				<li> { 'menu?.catalogs' } </li>
				<li className="separator">
					<Link to={`/${'routes.home'}`}>
						{ 'menu?.backToMenu' }
					</Link>
				</li>
				<li> 
					<a href={appConfig.exitLink}>
						{ 'menu?.exit' }
					</a>
				</li>
			</ul>
		</nav>
	);
};