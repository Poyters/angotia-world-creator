
import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { saveFile } from '../../../assets/scripts/saveFile';

//Import contexts
import { ContentContext } from '../../../Template';


const SaveOption: React.FC = () => {
  const mapData = useSelector(state => state.map);
  const mapName = useSelector(state => state.ui.mapName);

  const saveMap = (): void => {
    saveFile(JSON.stringify(mapData), `${mapName}.json`, 'text/json');
  };

  return (
    <ContentContext.Consumer>
			{({ creator }) => (
        <div 
          role="button" 
          className="option option--textOption option--smallerMargin" 
          data-title={creator.panel.options.save.dataTitle}
          onClick={(): void => saveMap()}
        >
          <span> 
            {creator.panel.options.save.content}  
          </span>
        </div>
      )}
    </ContentContext.Consumer>
  );
};


export default SaveOption;