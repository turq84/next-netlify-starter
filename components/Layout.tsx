import React from 'react';
import styled from '@emotion/styled';
import Meta from './Meta';
import Nav from './Nav';
import HeaderTutorial from './HeaderTutorial';

type Props = {
  title: string;
  children: any;
  keywords: string;
  description: string;
};

const Layout = (props: Props) => {
  const { title, children, keywords, description } = props;

  return (
    <div>
      <Meta title={title} keywords={keywords} description={description} />
      <Nav />
      <HeaderTutorial />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;

const Content = styled.main`
  max-width: 1200px;
  margin: auto;
`;
