import { linksFragment } from '../fragments/links';

export const GET_LINKS = `
  query{
    allLinks{
      data {
        ...linksFragment
      }
    }
  }
  ${linksFragment}
`;

export const GET_ONE_LINK = `
  query($id: ID!){
    findLinkByID(id: $id){
      ...linksFragment
    }
  }
  ${linksFragment}
`;

export const CREATE_LINK = `
  mutation($name: String!, $url: String!, $description: String! ) {
    createLink( data: { name: $name, url: $url, description: $description, archived: false }) {
      ...linksFragment
    }
  }
  ${linksFragment}
`;

export const UPDATE_LINK = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!  ) {
    updateLink( id: $id, data: { name: $name, url: $url, description: $description, archived: $archived }) {
      ...linksFragment
    }
  }
  ${linksFragment}
`;

export const DELETE_LINK = `
  mutation($id: ID!) {
    deleteLink( id: $id) {
      _id
    }
  }
`;
