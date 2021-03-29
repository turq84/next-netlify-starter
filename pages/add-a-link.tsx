import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import LinkForm from '../components/LinkForm';

const AddLink = () => {
  const title = 'Add a link';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'Add a new link to the Fauma DB using Next JS.';

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <LinkForm />
    </Layout>
  );
};

export default AddLink;
