import React from 'react';
import { withRouter } from 'react-router-dom';


const ComeBack: React.FC = (props: any) => {
  const history = props.history;

  return (
    <a
      className={props.class}
      onClick={() => history.push(`${props.url}`)}
    >
      {props.description}
    </a>
  );
};

export default withRouter(ComeBack);