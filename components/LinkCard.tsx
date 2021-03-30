import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import updateAPI from '../graphql/updateAPI';
import deleteAPI from '../graphql/deleteAPI';
import { UPDATE_LINK, DELETE_LINK } from '../graphql/linkQueries';

type Props = {
  link: any;
};

const LinkCard = ({ link }: Props) => {
  const [isFavorited, setFavorited] = useState(link.archived);

  const archiveLink = async () => {
    setFavorited(!isFavorited);
    link.archived = !link.archived;

    try {
      await updateAPI(UPDATE_LINK, link);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    try {
      const data = JSON.stringify({ id });
      await deleteAPI(DELETE_LINK, data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <CardContainer>
      <LinkTitle>{link.name}</LinkTitle>
      <Section>
        <Label>Website</Label>
        <p>{link.url}</p>
      </Section>
      <Section>
        <Label>Description</Label>
        <p>{link.description}</p>
      </Section>
      <p>Archived? {link.archived ? 'TRUE' : 'FALSE'}</p>
      <Link href="/link/[id]" as={`/link/${link._id}`}>
        Read more
      </Link>
      <ButtonContainer>
        <Button onClick={archiveLink} active={isFavorited}>
          {isFavorited ? 'Favorited' : 'Favorite'}
        </Button>
        <Button onClick={deleteLink}>Delete</Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LinkCard;

const CardContainer = styled.div`
  padding: 15px 10px;
  border-radius: 8px;
  transition: all 0.15s linear 0s;
  width: 35rem;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transition: all 0.15s linear 0s;
  }

  a {
    color: #000;
    font-weight: 600;
    text-decoration: none;
  }
`;

const LinkTitle = styled.h4`
  color: #5b708b;
`;

const Button = styled.button<{ active?: boolean }>`
  border-radius: 8px;
  border: none;
  background-color: ${(props) =>
    props.active ? 'rgba(255, 51, 102, 0.2)' : '#eee'};
  color: ${(props) => (props.active ? 'rgba(255, 51, 102, 1)' : '#000')};
  padding: 10px 15px;
  margin-right: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s linear 0s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transition: all 0.15s linear 0s;
  }
`;

const Label = styled.p`
  color: rgb(94, 98, 103);
`;

const Section = styled.div`
  margin-bottom: 30px;
`;
const ButtonContainer = styled.div`
  border-top: 1px solid #eee;
  padding-top: 10px;
`;
