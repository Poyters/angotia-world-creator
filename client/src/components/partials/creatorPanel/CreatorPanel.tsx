import React, { useContext } from 'react';
import { FullScreenOption } from '../options/FullScreenOption';
import { NetOption } from './NetOption';
import { SelectOption } from './SelectOption';
import { AddFileOption } from './AddFileOption';
import { ClearSelectedOption } from './ClearSelectedOption';
import { BlockOption } from './BlockOption';
import { LayersOption } from './LayersOption';
import { PassageOption } from './passage/PassageOption';
import { VertexWeightOption } from './vertexWeight/VertexWeightOption';
import { SaveJsonOption } from '../options/SaveJsonOption';
import { DeleteBgOption } from './DeleteBgOption';
import { AddFSImageOption } from './addFSImage/AddFSImageOption';
import { BoardNameOption } from './boardName/BoardNameOption';
import { VisibilityOption } from './visibility/VisibilityOption';
import { Menu } from './Menu';
import { ContentContext } from '../../../Template';


export const CreatorPanel: React.FC = () => {
  const { notifications } = useContext(ContentContext);
  
  return (
    <div className="optionsPanelWrapper">
      <nav className="optionsPanel">
        <header className="optionsPanel__title">
          <span> AMC </span>
        </header>
        <Menu />
        <ul className="optionsPanel__options">
          <li>
            <BoardNameOption />
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
            <ClearSelectedOption 
              note={notifications?.options?.clearSelected?.cleared}
            />
          </li>
          <li>
            <BlockOption
              selectNote={notifications?.options?.block?.select}
              changeNote={notifications?.options?.block?.change}
            />
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