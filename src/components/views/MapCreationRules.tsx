import React from "react";
import { Link } from "react-router-dom";
import { CreditsFooter } from "poyters-components";
import { VersionMark } from "../partials/VersionMark";
import routesConfig from "../../assets/configs/routes.config.json";

export const MapCreationRules: React.FC = () => {
  return (
    <div className="textView">
      <article className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link
              to={`/${routesConfig.mapCreator}`}
              className="t-paragraph2Normal textView__content--comeBack"
            >
              Come back to Creator
            </Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">Map creation rules</h1>
        <div className="scrollWrapper">
          <section>{"creator?.creationRules?.header"}</section>
          <section className="scrollWrapper__section scrollWrapper__section--wideList">
            <ol>
              <li>
                Max MOBs quantity - at map should not be a huge amount of mobs
                due to potential lags. So you can add maximum 1 mob per 8
                fields. It means that board 8x8 (contains 64 fields) can has max
                8 mobs.
              </li>
              <li>
                Max NPCs quantity - map should has not contain too much NPC. Try
                to keep as much actions as you can in exists NPC or a small
                number of them. Maxium 1 NPC per 5 fields
              </li>
              <li>Max SEs quantity - maxium 1 NPC per 4 fields</li>
              <li>
                Max passages quantity - maxium 1 passage field per 4 fields
              </li>
              <li>
                Max block squares quantity - maxium 1 block square per 0.5
                field. It means, that 8x8 map, can has maximum 128 blocked
                quares
              </li>
              <li>
                Map name - each map should has name. It need to be longer than 5
                letters, without any special chars
              </li>
              <li>
                No empty maps - we don't need them! Map should has at least a
                few items
              </li>
            </ol>
          </section>
        </div>
      </article>
      <CreditsFooter
        startedYear={2018}
        author="Poyters"
        absolute={true}
        url="https://poyters.pl"
      />
      <VersionMark />
    </div>
  );
};
