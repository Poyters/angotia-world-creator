import gql from 'graphql-tag';


export const UPDATE_REQ_MAP = gql`
  mutation updateRequestedMap(
    $id: ID!,
    $description: String
    $min_entry_level: Int
    $map_name: String
    $map_pic: String
    $visibility_range: Int
    $size: InputRequestedSize
    $passage: InputRequestedPassage
    $building: InputRequestedBuilding
    $decoration: InputRequestedDecoration
    $subsoil: InputRequestedSubsoil
    $se: InputRequestedSe
    $npc: InputRequestedNpc
    $mob: InputRequestedMob
    $block_matrix: InputRequestedBlock
    $vertex: InputRequestedVertex
  ) {
    updateRequestedMap(id: $id, map: {
      description: $description,
      min_entry_level: $min_entry_level,
      map_name: $map_name,
      map_pic: $map_pic,
      visibility_range: $visibility_range,
      size: $size,
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
      id,
      map_name,
      _id
    }
  }
`;
