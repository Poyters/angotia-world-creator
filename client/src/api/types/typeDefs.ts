import { gql } from "apollo-boost";

export const typeDefs = gql`
  type Char {
    name: String
    type: String
    choosed: String
    monologs: [Monolog]
    dialogs: [Dialog]
    statistics: Statistics
    field_diameter: Int
    move_type: String
    has_visible_level: Boolean
    char_pic: String
    _id: String
    id: String!
    mob_range: String,
    is_agressive_mob: Boolean
    settings: Settings
  }

  type Monolog {
    _id: String
    content: String
  }

  type InputMonolog {
    _id: String
    content: String
  }

  type Dialog {
    _id: String
    npc: String
    player: [Player]
  }

  type InputDialog {
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
    attack_range: Int
    attack_speed: Int
  }

  input InputStatistics {
    level: Int
    health: Int
    attack: Int
    defence: Int
    strength: Int
    dexterity: Int
    inteligence: Int
    jink: Int
    speed: Int
    attack_range: Int
    attack_speed: Int
  }

  type Settings {
    time_of_occurance: TimeOfOccurance
    respTime: RespTime
  }

  type InputSettings {
    time_of_occurance: InputTimeOfOccurance
    respTime: InputRespTime
  }

  type TimeOfOccurance {
    min: Int
    max: Int
  }

  type InputTimeOfOccurance {
    min: Int
    max: Int
  }

  type RespTime {
    min: Int
    max: Int
  }

  type InputRespTime {
    min: Int
    max: Int
  }

  type Size {
    x: Int
    y: Int
  }
`;