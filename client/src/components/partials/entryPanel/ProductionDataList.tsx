import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARS } from '../../../api/queries/allChars';
import { loadCharData } from '../../../store/actions/charActions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalCharData } from '../../../assets/scripts/parsers/prepareInternalCharData';


export const ProductionDataList: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);
  const { loading, data } = useQuery(ALL_CHARS);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();

  if (loading) return <p> Loading... </p>;

  const loadData = (data) => {
    const internalData = prepareInternalCharData(data);
    dispatch(loadCharData(internalData));
    setRedirect(routes?.char);
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${lang}/${redirect}`}/>
        ) : null
      }
      <ul className="productionDataList">
        { 
          data?.allChars.map(char => {
            return (
              <li onClick={() => loadData(char)} key={uuid()}> 
                <span>Internal id:</span>{ char._id }
                <span>Name:</span>{ char.name }
                <span>Type:</span>{ char.choosed }
              </li>
            );
          })
        }
      </ul>
    </>
  );
};