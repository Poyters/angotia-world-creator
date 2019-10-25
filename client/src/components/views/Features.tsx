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
        <h3>Creator</h3>
        <ul className="featuresList">
            <li>
                <ExportOption />
            </li>
            <li>
                <SaveOption />
            </li>
            <li>
                <LayersOption />
            </li>
            <li>
                <AddFileOption />
            </li>
            <li>
                <DeleteBgOption />
            </li>
            <li>
                <FullScreenOption />
            </li>
            {/* <li>
                <NetOption viewTypeQuantity={3} />
            </li> */}
            <li>
                <SelectOption selectTypeQuantity={3} />
            </li>
            <li>
                <ClearSelectedOption />
            </li>
            <li>
                <BlockOption />
            </li>
            <li>
                <div className="iconWrapper iconWrapper--normal"><PassageOption /></div> Passage - create passages to another locations where are selected fields/squares. Press CTRL button when you want to delete selected fields/squares. When you want to add new passages, you will see popu with:
                <ol>
                    <li>Map id - id of map when passage leads</li>
                    <li>Destination id - coordinations of destination map where player should appear</li>
                </ol>
            </li>
            <li>
                <div className="iconWrapper iconWrapper--normal"><VertexWeightOption /></div> set vertices weight (1-5) for selected fields/squares. Vertices determines how difficult is floor (subsoil). By default all vertices has weight equal to 0. The bigger value the harder floor. If you want to delete vertices, please select fields/squares, press CTRL button and then 
            </li>
        </ul>
         
      </section>
      <CreditsFooter />
      <VersionMark />
    </article>
  );
};

export default Features;