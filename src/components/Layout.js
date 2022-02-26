import config from '../../config';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/grayscale.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Stephen George, Engineering Manager and Techie Extraordinaire \\_ø_/' },
                { name: 'keywords', content: 'Stephen George, Manager, Engineering Manager, Cyber Security, Software Engineer, Web Development' },
              ]}
            >
              <html lang="en" />
              <meta property="og:description" content={config.openGraph.description.line1 + " \n\n" + config.openGraph.description.line2} />
              <meta property="og:image" content={config.siteBaseURL + config.openGraph.featureImage.path} />
              <meta property="og:image:width" content={config.openGraph.featureImage.width} />
              <meta property="og:image:height" content={config.openGraph.featureImage.height} />
              <meta property="og:image:alt" content="Still image of the homepage" />
            </Helmet>
            <div className={'page-top'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
