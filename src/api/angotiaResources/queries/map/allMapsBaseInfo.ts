import gql from "graphql-tag";

export const ALL_MAPS_BASE_INFO = gql`
  {
    allMaps {
      id
      _id
      map_name
    }
  }
`;
