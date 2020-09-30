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
      has_visible_level
      char_pic
      mob_range
      is_agressive_mob
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
