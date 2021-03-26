import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const About = () => {
  const keywords = 'about page';
  const title = 'About';
  const description = 'This is the about page for my website.';

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <h1>About page</h1>
    </Layout>
  );
};

export default About;
