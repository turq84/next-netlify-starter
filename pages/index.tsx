import React, { useEffect, useState } from 'react';
import LinkList from '../components/LinkList';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { server } from '../config';

const home = ({ links }) => {
  const title = 'Links Query';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'A Fauma DB example using Next JS.';

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <Container>
        <h1>List of Links</h1>
        <LinkList links={links} />
      </Container>
    </Layout>
  );
};

export default home;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/.netlify/functions/getLinks`);
  const links = await res.json();

  return {
    props: {
      links,
    },
  };
};

const Container = styled.div``;
