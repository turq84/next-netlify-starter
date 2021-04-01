export const linksFragment = `
  fragment linksFragment on Link {    
    _id
    name   
    url
    description
    archived
    userId
  }
`;

export const userFragment = `
  fragment userFragment on User {    
    _id
    email
    password
    passwordReset
    authenticated
    role
    notes
  }
`;
