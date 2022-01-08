import gql from "graphql-tag";

export const CREATE_REQ_MAP = gql`
  mutation CreateRequestedMap(
    $description: String
    $min_entry_level: Int
    $combined_layers_blob: String
    $author: String
    $map_name: String
    $map_pic: String
    $visibility_range: Int
    $size: InputRequestedSize
    $_id: String
    $passage: InputRequestedPassage
    $building: InputRequestedBuilding
    $decoration: InputRequestedDecoration
    $terrain: InputRequestedTerrain
    $se: InputRequestedSe
    $npc: InputRequestedNpc
    $mob: InputRequestedMob
    $block_matrix: InputRequestedBlock
    $vertex: InputRequestedVertex
  ) {
    createRequestedMap(
      Map: {
        description: $description
        min_entry_level: $min_entry_level
        author: $author
        map_name: $map_name
        map_pic: $map_pic
        visibility_range: $visibility_range
        size: $size
        _id: $_id
        passage: $passage
        building: $building
        decoration: $decoration
        terrain: $terrain
        npc: $npc
        mob: $mob
        se: $se
        block_matrix: $block_matrix
        vertex: $vertex
        combined_layers_blob: $combined_layers_blob
      }
    ) {
      id
    }
  }
`;
