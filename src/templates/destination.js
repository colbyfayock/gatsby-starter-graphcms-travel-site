import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { useDestination } from 'hooks';

import Layout from 'components/Layout';
import Container from 'components/Container';

const DestinationTemplate = ({ pageContext }) => {
  const { destination = {} } = useDestination({
    byId: pageContext?.id,
  });

  const { name, description } = destination;

  return (
    <Layout pageName="template-destination">
      <Helmet>
        <title>{ name }</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>{ name }</h1>

        { description && <p>{ description }</p> }
      </Container>
    </Layout>
  );
};

DestinationTemplate.propTypes = {
  pageContext: PropTypes.object,
};

export default DestinationTemplate;
