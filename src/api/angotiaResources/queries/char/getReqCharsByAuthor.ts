import gql from "graphql-tag";

export const GET__REQ_CHARS_BY_AUTHOR = gql`
  query RequestedChar($author_id: String!) {
    getRequestedCharsByAuthor(author_id: $author_id) {
      id
      _id
      name
      type
    }
  }
`;
