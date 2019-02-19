import React from 'react';

//Import other components
import CreditsFooter from '../CreditsFooter';
import SectionHeader from '../SectionHeader';



const Home: React.SFC = () => {
  return (
    <div className="container">
        <SectionHeader 
          headerTxt="Angotia Map Creator"
        />
        <div role="presentation" className="wrapper">
          <ul className="controlPanel">
            <li>
              <a href="#" className="t-paragraph1Light controlPanel__createBoard">
               {/* tabindex="1" */}
                <span>
                  create new map
                </span>
                <div role="presentation" className="controlPanel__sizeBoard">
                  <input type="text" name="input" value="x-axis" id="xMapSize" />
                  <span className="t-paragraph3Normal">x</span>
                  <input type="text" name="input" value="y-axis" id="yMapSize" />
                  <button id="startMapCreation">start</button>
                </div>
                <span id="validationInfo" className="t-paragraph2Bold controlPanel__validationInfo"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="t-paragraph1Light">
                  edit existing map
                </span>
              </a>
            </li>
            <li>
              <a href="#" id="closeBtn">
                <span className="t-paragraphLight">
                  exit
                </span>
              </a>
            </li>
          </ul>
        </div>
        <CreditsFooter />
      </div>
  );
}

export default Home;