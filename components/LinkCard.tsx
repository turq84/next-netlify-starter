import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

type Props = {
  link: any;
};

const LinkCard = ({ link }: Props) => {
  const archiveLink = async () => {
    link.archived = true;
    try {
      await fetch('/.netlify/functions/updateLink', {
        method: 'PUT',
        body: JSON.stringify(link),
      });
    } catch (error) {
      console.error('Error', error);
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    try {
      await fetch('/.netlify/functions/deleteLink', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <Container href="/link/[id]" as={`/link/${link._id}`}>
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

        <ButtonContainer>
          <Button onClick={archiveLink}>Archive</Button>
          <Button onClick={deleteLink}>Delete</Button>
        </ButtonContainer>
      </CardContainer>
    </Container>
  );
};

export default LinkCard;

const Container = styled(Link)`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 15px;
`;

const CardContainer = styled.div`
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 8px;
  transition: all 0.15s linear 0s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transition: all 0.15s linear 0s;
  }
`;

const LinkTitle = styled.h4`
  color: #5b708b;
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  background-color: #eee;
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
