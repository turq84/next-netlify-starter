import React from 'react';
import styled from '@emotion/styled';
import LinkList from '../components/LinkList';
import Layout from '../components/Layout';
import fetchAPI from '../graphql/fetchAPI';
import { GET_LINKS } from '../graphql/linkQueries';

const Home = ({ data }) => {
  const title = 'Links Query';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'A Fauma DB example using Next JS.';

  const links = data.allLinks.data;

  // console.log('data: ', data);

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <Container>
        <h1>List of Links</h1>
        <LinkList links={links} />
      </Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await fetchAPI(GET_LINKS, null);

  return {
    props: {
      data,
    },
  };
};

const Container = styled.div``;
