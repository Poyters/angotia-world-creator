import gql from "graphql-tag";

export const CREATE_REQ_CHAR = gql`
  mutation CreateChar(
    $name: String
    $move_type: String
    $author: String
    $type: String
    $monologs: [InputRequestedMonolog]
    $dialogs: [InputRequestedDialog]
    $statistics: InputRequestedStatistics
    $field_diameter: Int
    $has_visible_level: Boolean
    $char_pic: String
    $_id: String
    $mob_range: String
    $is_mob_aggressive: Boolean
    $settings: InputRequestedSettings
  ) {
    createRequestedChar(
      char: {
        name: $name
        move_type: $move_type
        author: $author
        type: $type
        monologs: $monologs
        dialogs: $dialogs
        statistics: $statistics
        field_diameter: $field_diameter
        has_visible_level: $has_visible_level
        char_pic: $char_pic
        _id: $_id
        mob_range: $mob_range
        is_mob_aggressive: $is_mob_aggressive
        settings: $settings
      }
    ) {
      id
    }
  }
`;
