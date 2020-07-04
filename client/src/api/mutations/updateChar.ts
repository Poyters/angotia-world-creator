import gql from 'graphql-tag';


export const UPDATE_CHAR = gql`
  mutation UpdateChar(
    $id: ID!,
    $name: String
    $type: String
    $choosed: String
    $monologs: [InputMonolog]
    $dialogs: [InputDialog]
    $statistics: InputStatistics
    $field_diameter: Int
    $move_type: String
    $has_visible_level: Boolean
    $char_pic: String
    $mob_range: String,
    $is_agressive_mob: Boolean
    $settings: InputSettings
  ) {
    updateChar(id: $id, char: {
      name: $name,
      type: $type,
      choosed: $choosed,
      monologs: $monologs,
      dialogs: $dialogs,
      statistics: $statistics,
      field_diameter: $field_diameter
      move_type: $move_type,
      has_visible_level: $has_visible_level,
      char_pic: $char_pic,
      mob_range: $mob_range,
      is_agressive_mob: $is_agressive_mob,
      settings: $settings
    }) {
      id
    }
  }
`;
