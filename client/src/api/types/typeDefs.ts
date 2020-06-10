import { gql } from "apollo-boost";

export const typeDefs = gql`
  input NpcInput {
    name: String!
    type: String!
    choosed: String!
    monologs: [Monolog]
    dialogs: [Dialog]
    statistics: Statistics!
    field_diameter: Int
    move_type: String
    has_visible_level: Boolean
    char_pic: String
    _id: String
  }

  extend type Npc {
    name: String!
    type: String!
    choosed: String!
    monologs: [Monolog]
    dialogs: [Dialog]
    statistics: Statistics!
    field_diameter: Int
    move_type: String
    has_visible_level: Boolean
    char_pic: String
    _id: String
    id: String!
  }

  extend type Monolog {
    _id: String!
    content: String!
  }

  extend type Dialog {
    _id: String!
    npc: String!
    player: [Player]
  }

  extend type Player {
    _id: String!
    dialog: String!
    next: String!
    action: String!
    condition: String!
  }

  extend type Statistics {
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

  extend type Settings {
    time_of_occurance: TimeOfOccurance
  }

  extend type TimeOfOccurance {
    min: Int
    max: Int
  }
`;