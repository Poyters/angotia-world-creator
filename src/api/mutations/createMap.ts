import gql from 'graphql-tag';


export const CREATE_MAP = gql`
  mutation CreateMap(
    $description: String
    $min_entry_level: Int
    $map_name: String
    $map_pic: String
    $visibility_range: Int
    $size: InputSize
    $_id: String
    $passage: InputPassage
    $building: InputBuilding
    $decoration: InputDecoration
    $subsoil: InputSubsoil
    $se: InputSe
    $npc: InputNpc
    $mob: InputMob
    $block_matrix: InputBlock
    $vertex: InputVertex
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
