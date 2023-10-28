import gql from "graphql-tag";

export const GET__REQ_MAPS_BY_AUTHOR = gql`
  query RequestedMap($author_id: String!) {
    getRequestedMapsByAuthor(author_id: $author_id) {
      _id
      id
      map_name
    }
  }
`;
