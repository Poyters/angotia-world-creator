import React, { useContext } from 'react';
import { ExportOption } from './ExportOption';
import { FullScreenOption } from '../options/FullScreenOption';
import { NetOption } from './NetOption';
import { SelectOption } from './SelectOption';
import { AddFileOption } from './AddFileOption';
import { ClearSelectedOption } from './ClearSelectedOption';
import { BlockOption } from './BlockOption';
import { LayersOption } from './LayersOption';
import { PassageOption } from './passage/PassageOption';
import { LinkButton } from '../LinkButton';
import { VertexWeightOption } from './vertexWeight/VertexWeightOption';
import { SaveOption } from '../options/SaveOption';
import { DeleteBgOption } from './DeleteBgOption';
import { AddFSImageOption } from './addFSImage/AddFSImageOption';
import { BoardNameOption } from './boardName/BoardNameOption';
import { VisibilityOption } from './visibility/VisibilityOption';
import { ContentContext } from '../../../Template';


export const CreatorPanel: React.FC = () => {
  const { creator, lang, routes, notifications } = useContext(ContentContext);
  
  return (
    <nav className="optionsPanel">
      <header className="optionsPanel__title">
        <span> AMC </span>
      </header>
      <ul className="optionsPanel__options">
        <li>
          <LinkButton 
            link={`/${lang}/${routes.home}`}
            buttonText={creator?.panel?.buttons?.back} 
          />
        </li>
        <li>
          <LinkButton 
            link={`/${lang}/${routes.help}`}
            buttonText={creator?.panel?.buttons?.help}  
          />
        </li>
        <li>
          <LinkButton 
            link={`/${lang}/${routes.license}`}
            buttonText={creator?.panel?.buttons?.license}  
          />
        </li>
        <li>
          <ExportOption />
        </li>
        <li>
          <SaveOption />
        </li>
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
            dataTitle={creator?.panel?.options?.net?.dataTitle}
          />
        </li>
        <li>
          <SelectOption 
            selectTypeQuantity={3}
            dataTitle={creator?.panel?.options?.select?.dataTitle}
          />
        </li>
        <li>
          <ClearSelectedOption 
            note={notifications?.options?.clearSelected?.cleared}
          />
        </li>
        <li>
          <BlockOption
            dataTitle={creator?.panel?.options?.block?.dataTitle}
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
  );
};