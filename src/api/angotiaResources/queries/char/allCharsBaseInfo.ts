import gql from "graphql-tag";

export const ALL_CHARS_BASE_INFO = gql`
  {
    allChars {
      _id
      id
      name
      type
    }
  }
`;
