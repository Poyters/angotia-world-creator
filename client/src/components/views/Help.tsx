import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CreditsFooter } from '../partials/CreditsFooter';
import { VersionMark } from '../partials/VersionMark';
import { NetOption } from '../partials/creatorPanel/NetOption';
import { AddFileOption } from '../partials/creatorPanel/AddFileOption';
import { BlockOption }from '../partials/creatorPanel/BlockOption';
import { ContentContext } from '../../Template';


export const Help: React.FC = () => {
  const { lang, routes, help } = useContext(ContentContext);

  return (
    <div className="textView">
      <article className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link 
              to={`/${lang}/${routes.creator}`}
              className="t-paragraph2Normal textView__content--comeBack"
            >
              { help?.comeBack }
            </Link>
          </div>
          <div className="g-sectionNav__elem g-sectionNav__elem--page t-paragraph6Normal">
            <Link to={`/${lang}/${routes.features}`}>
              { help?.goToFeatures }
            </Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">
          { help?.title }
        </h1>
        <div className="scrollWrapper">
          <section>
            { help.field } <div className="iconWrapper">
              <NetOption viewTypeQuantity={3} />
            </div> { help?.field1 }
          </section>

          <section>
            { help.selectBlock }
            <div className="iconWrapper iconWrapper--down">
              <BlockOption />
            </div>{ help?.selectBlock1 }
          </section>

          <section>
            { help?.bg }
            <div className="iconWrapper iconWrapper--down"> 
              <AddFileOption />
            </div>{ help?.bg1 }
          </section>

          <section>
            { help?.fs }
          </section>

          <section>
            { help?.import }
          </section>

          <section>
            { help?.vertex }
          </section>

          <section>
            { help?.end }
          </section>
        </div>
      </article>
      <CreditsFooter />
      <VersionMark />
    </div>
  );
};