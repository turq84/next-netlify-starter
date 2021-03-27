import React from 'react';
import styled from '@emotion/styled';
import Layout from '../../../components/Layout';
import { server } from '../../../config';

const link = ({ link }) => {
  const title = 'Links Query';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'A Fauma DB example using Next JS.';

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <h1>This is a link template.</h1>
      {JSON.stringify(link)}
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

  const res = await fetch(`${server}/.netlify/functions/getOneLink`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const link = await res.json();

  return {
    props: {
      link,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/.netlify/functions/getLinks`);
  const links = await res.json();
  const ids = links.map((link) => link._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
