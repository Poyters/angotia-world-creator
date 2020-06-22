import { gql } from "apollo-boost";

export const typeDefs = gql`
  input NpcInput {
    name: String
    type: String
    choosed: String
    monologs: [Monolog]
    statistics: Statistics!
    field_diameter: Int
    move_type: String
    has_visible_level: Boolean
    char_pic: String
    _id: String
  }

  type Npc {
    name: String
    type: String
    choosed: String
    monologs: [Monolog]
    statistics: Statistics
    field_diameter: Int
    move_type: String
    has_visible_level: Boolean
    char_pic: String
    _id: String
    id: String!
  }

  type Monolog {
    _id: String
    content: String
  }

  type Dialog {
    _id: String
    npc: String
    player: [Player]
  }

  type Player {
    _id: String
    dialog: String
    next: String
    action: String
    condition: String
  }

  type Statistics {
    level: Int
    health: Int
    attack: Int
    defence: Int
    strength: Int
    dexterity: Int
    inteligence: Int
    jink: Int
    speed: Int
  }

  type Settings {
    time_of_occurance: TimeOfOccurance
  }

  type TimeOfOccurance {
    min: Int
    max: Int
  }

  extend type Mutation {
    createNpc(npc: NpcInput): Npc
  }
`;