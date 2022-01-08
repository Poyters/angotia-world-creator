import gql from "graphql-tag";

export const UPDATE_REQ_CHAR = gql`
  mutation updateRequestedChar(
    $id: ID!
    $name: String
    $move_type: String
    $type: String
    $monologs: [InputRequestedMonolog]
    $dialogs: [InputRequestedDialog]
    $statistics: InputRequestedStatistics
    $field_diameter: Int
    $has_visible_level: Boolean
    $char_pic: String
    $mob_range: String
    $is_mob_aggressive: Boolean
    $settings: InputRequestedSettings
  ) {
    updateRequestedChar(
      id: $id
      char: {
        name: $name
        move_type: $move_type
        type: $type
        monologs: $monologs
        dialogs: $dialogs
        statistics: $statistics
        field_diameter: $field_diameter
        has_visible_level: $has_visible_level
        char_pic: $char_pic
        mob_range: $mob_range
        is_mob_aggressive: $is_mob_aggressive
        settings: $settings
      }
    ) {
      id
      name
      _id
    }
  }
`;
