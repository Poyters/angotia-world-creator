import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import uuid from 'uuid/v4';
import './assets/styles/index.scss';
import { Home } from './components/views/Home';
import { MapCreator } from './components/views/MapCreator';
import { CharCreator } from './components/views/CharCreator';
import { Help } from './components/views/Help';
import { License } from './components/views/License';
import { Features } from './components/views/Features';
import { NotFound } from './components/views/NotFound';
import { contents } from './assets/content/langs/index';
import { changeLang } from './store/actions/uiActions';
import appConfig from './assets/configs/app.config.json';
import { IRouteProps, IMatchParams } from './interfaces/routing.interface';
import { Icontent } from './interfaces/content.interface';
import { MapCreationRules } from './components/views/MapCreationRules';
import { Notifications } from './components/partials/Notifications';


export let ContentContext;

export const Template: React.FC<IRouteProps<IMatchParams>> = props => {
  let paramLang = props.match.params.lang;
  const dispatch = useDispatch();
  const availableLangs = appConfig.langs;
  let content: Icontent;

  switch(paramLang) {
    case 'en':
      content = contents.en;
    break;
    case 'pl':
      content = contents.pl;
    break;
    default:
      content = contents.en;
      paramLang = 'en';
    break;
  }

  dispatch(changeLang(paramLang));
  ContentContext = React.createContext(content);

  return (
    <ContentContext.Provider value={content}>
      <Notifications />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {
            availableLangs.map((avLang: string) => {
              return (
                <Route 
                  key={uuid()} 
                  path={`/${avLang}/${contents[avLang].routes.home}`} 
                  component={Home} 
                />
              );
            })
          }
          <Route path={`/${paramLang}/${content.routes.creator}`} component={MapCreator} />
          <Route path={`/${paramLang}/${content.routes.char}`} component={CharCreator} />
          <Route path={`/${paramLang}/${content.routes.help}`} component={Help} />
          <Route path={`/${paramLang}/${content.routes.license}`} component={License} />
          <Route path={`/${paramLang}/${content.routes.features}`} component={Features} />
          <Route path={`/${paramLang}/${content.routes.mapCreationRules}`} component={MapCreationRules} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </ContentContext.Provider>
  );
};