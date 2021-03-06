import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import updateAPI from '../graphql/updateAPI';
import deleteAPI from '../graphql/deleteAPI';
import fetchAPI from '../graphql/fetchAPI';
import { UPDATE_LINK, DELETE_LINK, GET_ONE_LINK } from '../graphql/linkQueries';

type Props = {
  link: any;
};

const LinkCard = ({ link }: Props) => {
  const [isFavorited, setFavorited] = useState(false);
  const [isDeleted, setDeleted] = useState(false);

  const loadLikeData = async () => {
    const id = { id: link._id };
    const data = await fetchAPI(GET_ONE_LINK, id);
    const liked = data.findLinkByID.archived;

    setFavorited(liked);
  };

  useEffect(() => {
    loadLikeData();
  });

  const archiveLink = async () => {
    link.archived = !isFavorited;

    try {
      await updateAPI(UPDATE_LINK, link);
      loadLikeData();
    } catch (error) {
      console.error('Error', error);
    }
  };

  const deleteLink = async () => {
    try {
      const res = await deleteAPI(DELETE_LINK, link);

      // IF DELETED IN THE DATABASE, REMOVE THE LINK CARD FROM THE LIST
      if (res) {
        setDeleted(true);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <CardContainer deleted={isDeleted}>
      <LinkTitle>{link.name}</LinkTitle>
      <Section>
        <Label>Website</Label>
        <p>{link.url}</p>
      </Section>
      <Section>
        <Label>Description</Label>
        <p>{link.description}</p>
      </Section>
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

const CardContainer = styled.div<{ deleted?: boolean }>`
  padding: 15px 10px;
  border-radius: 8px;
  transition: all 0.15s linear 0s;
  width: 35rem;
  display: ${(props) => (props.deleted ? 'none' : 'block')};

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
