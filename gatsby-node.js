const path = require( 'path' );
const parameterize = require( 'parameterize' );

const createRestaurantError = 'Could not create post pages';

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const destinationTemplate = path.resolve( `./src/templates/destination.js` );

  const { data, errors } = await graphql( `
    query {
      gcms {
        destinations {
          id
          name
        }
      }
    }
  ` );

  if ( errors ) throw errors;

  const { destinations } = data.gcms || {};

  if ( !Array.isArray( destinations )) {
    throw new Error( `${createRestaurantError}: Invalid destinations` );
  }

  destinations.forEach(({ id, name }) => {
    const slug = parameterize( name );
    createPage({
      path: `/destinations/${slug}/`,
      component: destinationTemplate,
      context: {
        id,
        slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if ( node.internal.type === `SitePage` ) {
    const slug = node.context && node.context.slug;

    if ( !slug ) return;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
