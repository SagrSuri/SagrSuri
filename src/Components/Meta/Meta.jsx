// src/components/MetaTags/Meta.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet';
import metaData from './metaData'; // Import the metadata from the new file

// eslint-disable-next-line react/prop-types
const Meta = ({ page = 'home' }) => {
  const { title, description, keywords, favicon, openGraph, twitter, social } = metaData[page] || {};

  return (
    <Helmet>
      {/* Website meta tags */}
      <title>{title || 'Default Title'}</title>
      <meta name="description" content={description || 'Default Description'} />
      <meta name="keywords" content={keywords || 'default, keywords'} />
      <link rel="icon" type="image/x-icon" href={favicon || '/favicon.ico'} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={openGraph?.title || title || 'Default Title'} />
      <meta property="og:description" content={openGraph?.description || description || 'Default Description'} />
      <meta property="og:image" content={openGraph?.image || '/default-image.png'} />
      <meta property="og:url" content={openGraph?.url || window.location.href} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:title" content={twitter?.title || title || 'Default Title'} />
      <meta name="twitter:description" content={twitter?.description || description || 'Default Description'} />
      <meta name="twitter:image" content={twitter?.image || '/default-image.png'} />
      
      {/* Social Media Links (for reference) */}
      {/* These are not standard meta tags but can be used in your site's header/footer if desired */}
      <meta name="social:linkedin" content={social?.linkedin || ''} />
      <meta name="social:github" content={social?.github || ''} />
      <meta name="social:instagram" content={social?.instagram || ''} />
      <meta name="social:twitter" content={social?.twitter || ''} />
      <meta name="social:youtube" content={social?.youtube || ''} />
    </Helmet>
  );
};

export default Meta;
