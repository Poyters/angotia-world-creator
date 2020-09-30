import gql from 'graphql-tag';


export const UPDATE_CHAR = gql`
  mutation updateChar(
    $id: ID!,
    $name: String
    $type: String
    $choosed: String
    $monologs: [InputMonolog]
    $dialogs: [InputDialog]
    $statistics: InputStatistics
    $field_diameter: Int
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
      has_visible_level: $has_visible_level,
      char_pic: $char_pic,
      mob_range: $mob_range,
      is_agressive_mob: $is_agressive_mob,
      settings: $settings
    }) {
      id,
      name,
      _id
    }
  }
`;
