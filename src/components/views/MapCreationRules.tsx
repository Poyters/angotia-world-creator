import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CreditsFooter } from '../partials/CreditsFooter';
import { VersionMark } from '../partials/VersionMark';
import { ContentContext } from '../../Template';


export const MapCreationRules: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);

  return (
    <div className="textView">
      <article className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link 
              to={`/${lang}/${routes.creator}`}
              className="t-paragraph2Normal textView__content--comeBack"
            >
              Come back to Creator
            </Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">Map creation rules</h1>
        <div className="scrollWrapper">
          <section>
            Why we all need to follow the map creation rules? As users we do mistakes and program doesn't like them, especially other players if they would play on destroyed map. So, each map should be stict to some rules. It keeps all maps at the same format and guarantee reliability, correctness and protects from unplayable maps. Map that doesn't stick to below rules, cannot be exported to Angotia Admins (production mode).
          </section>
          <section>
            Creation rules:
            <ol>
              <li>Max MOBs quantity - at map should not be a huge amount of mobs due to potential lags. So you can add maximum 1 mob per 8 fields. It means that board 8x8 (contains 64 fields) can has max 8 mobs. </li>
              <li>Max NPCs quantity - map should has not contain too much NPC. Try to keep as much actions as you can in exists NPC or a small number of them. Maxium 1 NPC per 5 fields</li>
              <li>Max SEs quantity - maxium 1 NPC per 4 fieldss</li>
              <li>Max passages quantity - maxium 1 passage field per 4 fields</li>
              <li>Max block squares quantity - maxium 1 block square per 0.5 field. It means, that 8x8 map, can has maximum 128 blocked quares</li>
              <li>Map name - each map should has name. It need to be longer than 5 letters, without any special chars</li>
              <li>No empty maps - we don't need them! Map should has at least a few items</li>
            </ol>
          </section>
        </div>
      </article>
      <CreditsFooter />
      <VersionMark />
    </div>
  );
};