import gql from 'graphql-tag';


export const PRESENTATION_CHARS = gql`
  {
    allChars {
      _id
      name
      choosed
    }
  }
`;
