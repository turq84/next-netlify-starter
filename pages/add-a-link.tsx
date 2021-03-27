import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import LinkForm from '../components/LinkForm';

const addLink = () => {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch('/.netlify/functions/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  const title = 'Add a link';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'Add a new link to the Fauma DB using Next JS.';

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <LinkForm refreshLinks={loadLinks} />
    </Layout>
  );
};

export default addLink;
