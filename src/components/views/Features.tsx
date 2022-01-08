import React from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import { CreditsFooter } from "poyters-components";
import { VersionMark } from "../partials/VersionMark";
import { FullScreenOption } from "../partials/options/FullScreenOption";
import { NetOption } from "../partials/map/creatorPanel/NetOption";
import { SelectOption } from "../partials/map/creatorPanel/SelectOption";
import { AddBgOption } from "../partials/map/creatorPanel/AddBgOption";
import { ClearSelectedOption } from "../partials/map/creatorPanel/ClearSelectedOption";
import { BlockOption } from "../partials/map/creatorPanel/BlockOption";
import { LayersOption } from "../partials/map/creatorPanel/LayersOption";
import { PassageOption } from "../partials/map/creatorPanel/passage/PassageOption";
import { VertexWeightOption } from "../partials/map/creatorPanel/vertexWeight/VertexWeightOption";
import { SaveJsonOption } from "../partials/options/SaveJsonOption";
import { DeleteBgOption } from "../partials/map/creatorPanel/DeleteBgOption";
import { AppModules } from "../../models/appModules.model";
import routesConfig from "../../assets/configs/routes.config.json";

export const Features: React.FC = () => {
  return (
    <article className="textView">
      <section className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link
              to={`/${routesConfig.mapCreator}`}
              className="t-paragraph2Normal textView__content--comeBack"
            >
              {"features?.comeBack"}
            </Link>
          </div>
          <div className="g-sectionNav__elem g-sectionNav__elem--page t-paragraph6Normal">
            <Link to={`/${routesConfig.help}`}>{"features?.toHelp"}</Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">{"features?.title"}</h1>
        <p>{"features?.description"}</p>
        <div className="scrollWrapper">
          <h3>{"features?.creatorPanel?.title"}</h3>
          <ul className="featuresList featuresList--withoutMarks">
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <SaveJsonOption moduleType={AppModules.map} />
              </div>
              {"features?.creatorPanel?.saveOption"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <LayersOption />
              </div>
              {"features?.creatorPanel?.layers"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <AddBgOption />
              </div>
              {"features?.creatorPanel?.bgImage"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <DeleteBgOption />
              </div>
              {"features?.creatorPanel?.deleteBg"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <FullScreenOption />
              </div>
              {"features?.creatorPanel?.fullScreen"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <NetOption viewTypeQuantity={3} />
              </div>
              {"features?.creatorPanel?.nets"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <SelectOption selectTypeQuantity={3} />
              </div>
              {"features?.creatorPanel?.selectTool"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <ClearSelectedOption />
              </div>
              {"features?.creatorPanel?.clearSelected"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <BlockOption />
              </div>
              {"features?.creatorPanel?.blockFields"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <PassageOption />
              </div>
              {"features?.creatorPanel?.passage"}
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal iconWrapper--margin">
                <VertexWeightOption />
              </div>
              {"features?.creatorPanel?.vertices"}
            </li>
          </ul>
          <h3> {"features?.creator?.title"} </h3>
          <ul className="featuresList">
            <li>{"features?.creator?.notification"}</li>
            <li>{"features?.creator?.logIn"}</li>
            <li>{"features?.creator?.bookmarks"}</li>
            <li>{"features?.creator?.imgsSource"}</li>
            <li>
              {"features?.creator?.bookmarkLayers"}
              <ol>
                {["features?.creator?.layersList"]?.map(layer => {
                  return <li key={uuid()}> {layer} </li>;
                })}
              </ol>
            </li>
          </ul>
        </div>
      </section>
      <CreditsFooter
        startedYear={2018}
        author="Poyters"
        absolute={true}
        url="https://poyters.pl"
      />
      <VersionMark />
    </article>
  );
};
