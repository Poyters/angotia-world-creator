import gql from "graphql-tag";

export const GET_MAP = gql`
  query Map($id: ID!) {
    getMap(id: $id) {
      _id
      description
      min_entry_level
      map_name
      map_pic
      visibility_range
      size {
        x
        y
      }
      passage {
        locations {
          _id
          x
          xShift
          y
          yShift
          destination {
            map_target_cords
            map_target_id
          }
        }
      }
      building {
        items {
          value
          x
          xShift
          y
          yShift
        }
        pics {
          _id
          blob
        }
      }
      terrain {
        items {
          value
          x
          xShift
          y
          yShift
        }
        pics {
          _id
          blob
        }
      }
      vertex {
        weights {
          _id
          weight
          x
          xShift
          y
          yShift
        }
      }
      decoration {
        items {
          value
          x
          xShift
          y
          yShift
        }
        pics {
          _id
          blob
        }
      }
      npc {
        items {
          value
          x
          xShift
          y
          yShift
        }
        pics {
          _id
          blob
        }
      }
      se {
        items {
          value
          x
          xShift
          y
          yShift
        }
        pics {
          _id
          blob
        }
      }
      mob {
        items {
          value
          x
          xShift
          y
          yShift
        }
        pics {
          _id
          blob
        }
      }
      block_matrix {
        items {
          value
          x
          xShift
          y
          yShift
        }
        pics {
          _id
          blob
        }
      }
    }
  }
`;
