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
import { enContent } from './assets/content/langs/en/index';
import { plContent } from './assets/content/langs/pl/index';

//Import actions
import { changeLang } from './redux/actions/uiActions';


const Template: React.FC = ( props: any ) => {
  const paramLang = props.match.params.lang === undefined ? '' : props.match.params.lang;
  const dispatch = useDispatch();
  dispatch(changeLang(paramLang));
  let content: any;

  switch(paramLang) {
    case 'en':
      content = enContent;
    break;
    case 'pl':
      content = plContent;
    break;
    default:
      content = enContent;
    break;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`/${paramLang}/${content.routes.home}`} component={Home} />
        <Route path={`/${paramLang}/${content.routes.creator}`} component={Creator} />
        <Route path={`/${paramLang}/${content.routes.char}`} component={CharCreator} />
        <Route path={`/${paramLang}/${content.routes.help}`} component={Help} />
        <Route path={`/${paramLang}/${content.routes.license}`} component={License} />
        <Route path={`/${paramLang}/${content.routes.features}`} component={Features} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}


export default Template;