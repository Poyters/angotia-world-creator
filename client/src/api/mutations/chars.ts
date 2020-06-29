import gql from 'graphql-tag';


export const CREATE_CHAR = gql`
  mutation CreateChar(
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
    $_id: String
    $attack_range: Int
    $attack_speed: Int
    $settings: InputSettings
  ) {
    createChar(char: {
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
      _id: $_id
      attack_range: $attack_range
      attack_speed: $attack_speed
      settings: $settings
    }) {
      id
    }
  }
`;
