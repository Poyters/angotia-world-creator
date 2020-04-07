import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import uuid from 'uuid/v4';
import './assets/styles/index.scss';
import { Home } from './components/views/Home';
import { Creator } from './components/views/Creator';
import { CharCreator } from './components/views/CharCreator';
import { Help } from './components/views/Help';
import { License } from './components/views/License';
import { Features } from './components/views/Features';
import { NotFound } from './components/views/NotFound';
import { contents } from './assets/content/langs/index';
import { changeLang } from './redux/actions/uiActions';
import appConfig from './assets/configs/appConfig.json';
import { IRouteProps, IMatchParams } from './assets/interfaces/routing';
import { Icontent } from './assets/interfaces/content';


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
          <Route path={`/${paramLang}/${content.routes.creator}`} component={Creator} />
          <Route path={`/${paramLang}/${content.routes.char}`} component={CharCreator} />
          <Route path={`/${paramLang}/${content.routes.help}`} component={Help} />
          <Route path={`/${paramLang}/${content.routes.license}`} component={License} />
          <Route path={`/${paramLang}/${content.routes.features}`} component={Features} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </ContentContext.Provider>
  );
};