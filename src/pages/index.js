import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Hero from 'components/Hero';
import Snippet from 'components/Snippet';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Hero />

      <Container type="content" className="text-center home-start">
        <h2>Still Getting Started?</h2>
        <p>Run the following in your terminal!</p>
        <Snippet>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet</Snippet>
        <p className="note">Note: Gatsby CLI required globally for the above command</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
