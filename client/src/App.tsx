import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import styles
import './assets/styles/index.scss';

//Import views
import Home from './components/views/Home';
import Creator from './components/views/Creator';
import CharCreator from './components/views/CharCreator';
import Help from './components/views/Help';
import NotFound from './components/views/NotFound';
import License from './components/views/License';
import Features from './components/views/Features';

//Import content
import { enContent } from './assets/content/langs/en/index';
import { plContent } from './assets/content/langs/pl/index';


const App: React.FC = () => {
  const lang: string = useSelector(state => state.ui.language);
  let content: any;

  switch(lang) {
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
        <Route path={`/${content.routes.home}`} component={Home} />
        <Route path={`/${content.routes.creator}`} component={Creator} />
        <Route path={`/${content.routes.char}`} component={CharCreator} />
        <Route path={`/${content.routes.help}`} component={Help} />
        <Route path={`/${content.routes.license}`} component={License} />
        <Route path={`/${content.routes.features}`} component={Features} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}


export default App;
