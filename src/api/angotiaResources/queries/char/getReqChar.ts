import gql from "graphql-tag";

export const GET_REQ_CHAR = gql`
  query RequestedChar($id: ID!) {
    getRequestedChar(id: $id) {
      id
      author
      _id
      name
      field_diameter
      move_type
      type
      has_visible_level
      char_pic
      mob_range
      is_mob_aggressive
      monologs {
        _id
        content
      }
      dialogs {
        _id
        npc
        player {
          _id
          dialog
          action
          condition
          next
        }
      }
      settings {
        time_of_occurance {
          min
          max
        }
        resp_time {
          min
          max
        }
      }
      statistics {
        strength
        speed
        level
        jink
        inteligence
        health
        dexterity
        defence
        attack
        attack_range
        attack_speed
      }
    }
  }
`;
