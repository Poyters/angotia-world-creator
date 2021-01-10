import gql from 'graphql-tag';


export const CREATE_REQ_CHAR = gql`
  mutation CreateChar(
    $name: String
    $type: String
    $author: String
    $choosed: String
    $monologs: [InputRequestedMonolog]
    $dialogs: [InputRequestedDialog]
    $statistics: InputRequestedStatistics
    $field_diameter: Int
    $has_visible_level: Boolean
    $char_pic: String
    $_id: String
    $mob_range: String,
    $is_agressive_mob: Boolean
    $settings: InputRequestedSettings
  ) {
    createRequestedChar(char: {
      name: $name,
      type: $type,
      author: $author,
      choosed: $choosed,
      monologs: $monologs,
      dialogs: $dialogs,
      statistics: $statistics,
      field_diameter: $field_diameter
      has_visible_level: $has_visible_level,
      char_pic: $char_pic,
      _id: $_id,
      mob_range: $mob_range,
      is_agressive_mob: $is_agressive_mob,
      settings: $settings
    }) {
      id
    }
  }
`;
