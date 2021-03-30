import React from 'react';
import styled from '@emotion/styled';
import LinkCard from '../components/LinkCard';
import Layout from '../components/Layout';
import fetchAPI from '../graphql/fetchAPI';
import { GET_LINKS } from '../graphql/linkQueries';

const Home = ({ data }) => {
  const title = 'Links Query';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'A Fauma DB example using Next JS.';

  const linkData = data.allLinks.data;

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <Container>
        <h1>List of Links</h1>
        Hash: {process.env.FAUNA_SECRET_KEY}
        <h3>Links</h3>
        {linkData &&
          linkData.map((link) => <LinkCard key={link._id} link={link} />)}
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
