import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import styles
import './assets/styles/index.scss';

//Import views
import Home from './components/views/Home';
import Creator from './components/views/Creator';
import CharCreator from './components/views/CharCreator';
import Help from './components/views/Help';
import License from './components/views/License';
import Features from './components/views/Features';
import NotFound from './components/views/NotFound';

//Import content
import { contents } from './assets/content/langs/index';

//Import actions
import { changeLang } from './redux/actions/uiActions';

//Import configs
import appConfig from './assets/configs/appConfig.json';


export let ContentContext;

export const Template: React.FC = ( props: any ) => {
  let paramLang = props.match.params.lang;
  const dispatch = useDispatch();
  const availableLangs = appConfig.langs;
  let content: any;

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
            availableLangs.map((avLang, index) => {
              return (
                <Route key={index} path={`/${avLang}/${contents[avLang].routes.home}`} component={Home} />
              )
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
}