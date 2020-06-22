import { gql } from "apollo-boost";


export const CREATE_NPC = gql`
  mutation CreateNpc($input: NpcInput) {
    createNpc(npc: $input) {
      id
    }
  }
`;
