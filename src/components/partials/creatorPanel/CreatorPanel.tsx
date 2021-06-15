import React from 'react';
import { FullScreenOption } from '../options/FullScreenOption';
import { NetOption } from './NetOption';
import { SelectOption } from './SelectOption';
import { AddBgOption } from './AddBgOption';
import { ClearSelectedOption } from './ClearSelectedOption';
import { BlockOption } from './BlockOption';
import { LayersOption } from './LayersOption';
import { PassageOption } from './passage/PassageOption';
import { VertexWeightOption } from './vertexWeight/VertexWeightOption';
import { DeleteBgOption } from './DeleteBgOption';
import { AddFSImageOption } from './addFSImage/AddFSImageOption';
import { VisibilityOption } from './visibility/VisibilityOption';
import { Menu } from '../options/Menu';
import { AppModules } from '../../../models/appModules.model';
import logo24x24 from '../../../assets/images/logo-24x24.png';


export const CreatorPanel: React.FC = () => {
  return (
    <div className="optionsPanelWrapper">
      <nav className="optionsPanel">
        <header className="optionsPanel__title">
          <img src={logo24x24} />
          <span> AWC </span>
        </header>
        <Menu moduleType={AppModules.map} />
        <ul className="optionsPanel__options">
          <li>
            <LayersOption />
          </li>
          <li>
            <AddBgOption />
          </li>
          <li>
            <DeleteBgOption />
          </li>
          <li>
            <FullScreenOption />
          </li>
          <li>
            <NetOption 
              viewTypeQuantity={3}
            />
          </li>
          <li>
            <SelectOption 
              selectTypeQuantity={3}
            />
          </li>
          <li>
            <ClearSelectedOption />
          </li>
          <li>
            <BlockOption  />
          </li>
          <li>
            <PassageOption />
          </li>
          <li>
            <VertexWeightOption />
          </li>
          <li>
            <AddFSImageOption />
          </li>
          <li>
            <VisibilityOption />
          </li>
        </ul>
      </nav>
    </div>
  );
};