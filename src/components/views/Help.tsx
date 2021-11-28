import React from 'react';
import { Link } from 'react-router-dom';
import { CreditsFooter } from 'poyters-components';
import { VersionMark } from '../partials/VersionMark';
import { NetOption } from '../partials/map/creatorPanel/NetOption';
import { AddBgOption } from '../partials/map/creatorPanel/AddBgOption';
import { BlockOption }from '../partials/map/creatorPanel/BlockOption';
import routesConfig from '../../assets/configs/routes.config.json';


export const Help: React.FC = () => {
  return (
    <div className="textView">
      <article className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link 
              to={`/${routesConfig.mapCreator}`}
              className="t-paragraph2Normal textView__content--comeBack"
            >
              { 'help?.comeBack' }
            </Link>
          </div>
          <div className="g-sectionNav__elem g-sectionNav__elem--page t-paragraph6Normal">
            <Link to={`/${routesConfig.features}`}>
              { 'help?.goToFeatures' }
            </Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">
          { 'help?.title' }
        </h1>
        <div className="scrollWrapper">
          <section>
            { 'help.field' } <div className="iconWrapper">
              <NetOption viewTypeQuantity={3} />
            </div> { 'help?.field1' }
          </section>

          <section>
            { 'help.selectBlock' }
            <div className="iconWrapper iconWrapper--down">
              <BlockOption />
            </div>{ 'help?.selectBlock1' }
          </section>

          <section>
            { 'help?.bg' }
            <div className="iconWrapper iconWrapper--down"> 
              <AddBgOption />
            </div>{ 'help?.bg1' }
          </section>

          <section>
            { 'help?.fs' }
          </section>

          <section>
            { 'help?.import' }
          </section>

          <section>
            { 'help?.vertex' }
          </section>

          <section>
            { 'help?.end' }
          </section>
        </div>
      </article>
      <CreditsFooter startedYear={2018} author="Poyters" absolute={true} url="https://poyters.pl" />
      <VersionMark />
    </div>
  );
};