import { gql } from "apollo-boost";


export const ADD_NPC = gql`
  mutation AddNpc($type: NpcInput) {
    createNpc(npc: $type) {
      id
    }
  }
`;
