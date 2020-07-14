import gql from 'graphql-tag';


export const CREATE_MAP = gql`
  mutation CreateMap(
    $description: String
    $min_entry_level: Int
    $map_name: String
    $map_pic: String
    $visibility_range: Int
    $size: Size
    $_id: String
    $passage: Passage
    $building: Building
    $decoration: Decoration
    $subsoil: Subsoil
    $npc: Npc
    $mob: Mob
    $block_matrix: $BlockMatrix
    $vertex: Vertex
  ) {
    createMap(Map: {
      description: $description,
      min_entry_level: $min_entry_level,
      map_name: $map_name,
      map_pic: $map_pic,
      visibility_range: $visibility_range,
      size: $size,
      _id: $_id,
      passage: $passage,
      building: $building,
      decoration: $decoration,
      subsoil: $subsoil,
      npc: $npc,
      mob: $mob,
      se: $se,
      block_matrix: $block_matrix,
      vertex: $vertex
    }) {
      id
    }
  }
`;
