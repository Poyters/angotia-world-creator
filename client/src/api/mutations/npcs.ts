import gql from 'graphql-tag';


export const CREATE_NPC = gql`
  mutation CreateNpc($input: NpcInput) {
    createNpc(npc: $input) {
      id
    }
  }
`;
