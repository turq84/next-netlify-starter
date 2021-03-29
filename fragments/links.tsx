import { graphql } from 'graphql';

export const linksFragment = `
  fragment linksFragment on Link {    
    name
    _id
    url
    description
    archived    
  }
`;
