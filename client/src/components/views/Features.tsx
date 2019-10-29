import React from 'react';
import { Link } from 'react-router-dom';

//Import components
import CreditsFooter from '../partials/CreditsFooter';
import VersionMark from '../partials/VersionMark';
import ExportOption from '../partials/creatorPanel/ExportOption';
import FullScreenOption from '../partials/creatorPanel/FullScreenOption';
import NetOption from '../partials/creatorPanel/NetOption';
import SelectOption from '../partials/creatorPanel/SelectOption';
import AddFileOption from '../partials/creatorPanel/AddFileOption';
import ClearSelectedOption from '../partials/creatorPanel/ClearSelectedOption';
import BlockOption from '../partials/creatorPanel/BlockOption';
import LayersOption from '../partials/creatorPanel/LayersOption';
import PassageOption from '../partials/creatorPanel/passage/PassageOption';
import LinkButton from '../partials/creatorPanel/LinkButton';
import VertexWeightOption from '../partials/creatorPanel/vertexWeight/VertexWeightOption';
import SaveOption from '../partials/creatorPanel/SaveOption';
import DeleteBgOption from '../partials/creatorPanel/DeleteBgOption';


const Features: React.FC = () => {
  return (
    <article className="textView">
      <section className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link to='/creator' className="t-paragraph2Normal textView__content--comeBack">
              Come back to Creator
            </Link>
          </div>
          <div className="g-sectionNav__elem g-sectionNav__elem--page t-paragraph6Normal">
            <Link to='/help'>go to help</Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">Features</h1>
        <p>
          Below you can find precisly feature descriptions
        </p>
        <div className="featuresWrapper">
          <h3>Creator</h3>
          <ul className="featuresList">
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <ExportOption />
              </div>
              Export - export created board to AMC admins
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <SaveOption />
              </div>
              Save - save on your computer disc
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <LayersOption />
              </div>
              Layers - click to toggle layers (backgroundImage, vertices, mobs, ncpc, decorations, buildings, subsoils)
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <AddFileOption />
              </div>
              Background Image - set background image, for instance: hand-painted subsoil
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <DeleteBgOption />
              </div>
              Delete background Image - delete background image
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <FullScreenOption />
              </div>
              Full screen - turn on/off full screen mode
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <NetOption viewTypeQuantity={3} />
              </div>
              Nets - we have 4 type of nets: All nets - fields and square nets, Field nets - only fields nets, Square nets - only square nets, No nets - you see only your map; disable select option
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <SelectOption selectTypeQuantity={3} />
              </div>
              Select tool - provides a three ways to select fields/squares: 0 - select is disable, 1 - select squares, 2 - select fields, 3 - select by mouse rectangle draw
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <ClearSelectedOption />
              </div>
              Clear selected - clear selected fields/squares
            </li>
            <li>
              <div className="iconWrapper iconWrapper--normal">
                <BlockOption />
              </div>
              Block fields - disable selected fields/square. Press CTRL button when you want to
            </li>
            <li>
                <div className="iconWrapper iconWrapper--normal">
                  <PassageOption />
                </div> 
                Passage - create passages to another locations where are selected fields/squares. Press CTRL button when you want to delete selected fields/squares. When you want to add new passages, you will see popu with: Map id - id of map when passage leads and Destination id - coordinations of destination map where player should appear
            </li>
            <li>
                <div className="iconWrapper iconWrapper--normal">
                  <VertexWeightOption />
                </div> 
                set vertices weight (1-5) for selected fields/squares. Vertices determines how difficult is floor (subsoil). By default all vertices has weight equal to 0. The bigger value the harder floor. If you want to delete vertices, please select fields/squares, press CTRL button and then 
            </li>
          </ul>
        </div>  
      </section>
      <CreditsFooter />
      <VersionMark />
    </article>
  );
};

export default Features;