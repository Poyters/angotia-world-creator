import gql from 'graphql-tag';


export const ALL_CHARS = gql`
  {
    allChars {
      id
      _id
      name
      field_diameter
      type
      choosed
      move_type
      has_visible_level
      char_pic
      monologs {
        _id,
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
      }
    }
  }
`;
