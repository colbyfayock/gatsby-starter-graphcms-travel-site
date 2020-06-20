import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import { useDestinations } from 'hooks';

import Layout from 'components/Layout';
import Container from 'components/Container';

const DestinationTemplate = () => {
  const { destinations = [] } = useDestinations();

  return (
    <Layout pageName="template-destination">
      <Helmet>
        <title>Destinations</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Destinations</h1>
        <div className="destinations">
          <ul>
            { destinations &&
              destinations.map(( destination ) => {
                const { id, name, path, image } = destination;

                const imageStyles = {};

                if ( image?.url ) {
                  imageStyles.backgroundImage = `url(${image.url})`;
                }

                return (
                  <li key={id} className="destinations-card">
                    <Link to={path}>
                      <span className="destination-card-image" style={imageStyles}>
                        Image of { name }
                      </span>
                      <strong className="destination-card-title">{ name }</strong>
                    </Link>
                  </li>
                );
              }) }
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default DestinationTemplate;
