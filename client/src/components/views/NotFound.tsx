import React from 'react';
import { withRouter } from 'react-router-dom';


const NotFound: React.FC = (props: any) => {
  const history = props.history;

  return (
    <div className="notFoundWrapper">
      <article className="notFound">
        <h1 className="notFound--error">404</h1>
        <h2 className="notFound--errorDesc t-paragraph1Bold">Page doesn't exists!</h2>
        <p className="notFound--errorNote t-paragraph3Light">Propably you typed wrong url</p>
        <a
          className="t-paragraph2Normal"
          onClick={() => history.push('/')}
        >
          Click here to come back to Angotia Map Creator
        </a>
      </article>
    </div>
  );
};

export default withRouter(NotFound);