import { graphql, useStaticQuery } from 'gatsby';
import parameterize from 'parameterize';

export default function useDestinations() {
  const { gcms = {} } = useStaticQuery( graphql`
    query {
      gcms {
        destinations {
          description
          id
          image {
            url
          }
          location {
            latitude
            longitude
          }
          name
        }
      }
    }
  ` );

  let { destinations } = gcms;

  destinations = destinations.map(( destination ) => {
    return {
      ...destination,
      path: `/destinations/${parameterize( destination?.name )}/`,
    };
  });

  return {
    destinations,
  };
}
