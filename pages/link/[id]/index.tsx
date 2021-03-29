import React from 'react';
import styled from '@emotion/styled';
import Layout from '../../../components/Layout';
import fetchAPI from '../../../graphql/fetchAPI';
import { GET_ONE_LINK, GET_LINKS } from '../../../graphql/linkQueries';

const link = ({ data }) => {
  const title = 'Links Query';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'A Fauma DB example using Next JS.';

  const link = data.findLinkByID;

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <h1>This is a link template.</h1>
      <h3>{link.name}</h3>
      <p>URL: {link.url}</p>
      <p>Description: {link.description}</p>
      <p>Favorited? {link.archived ? 'True' : 'False'}</p>
    </Layout>
  );
};

export default link;

export const getStaticProps = async ({ params: { id } }) => {
  const body = { id: id };
  const data = await fetchAPI(GET_ONE_LINK, body);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetchAPI(GET_LINKS, null);
  const links = data.allLinks.data;
  const ids = links.map((link) => link._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
