import gql from 'graphql-tag';


export const ALL_NPCS = gql`
  {
    allNpcs {
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
          next
        }
      }
      settings {
        time_of_occurance {
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

export const NPCS_PRESENTATION_LIST = gql`
  {
    allNpcs {
      id
      _id
      name
    }
  }
`;