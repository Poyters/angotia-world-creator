import gql from 'graphql-tag';


export const GET__REQ_MAPS_BY_AUTHOR = gql`
  query RequestedMap($author_id: String!) {
    getRequestedMapsByAuthor(author_id: $author_id) {
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
      subsoil {
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