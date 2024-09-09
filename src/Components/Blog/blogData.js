import gistImage from './codeImage/vite-gist.png'
import toggleImage from './codeImage/vite-toggle.png'

const blogData = [
  {
    id: '1',
    title: 'CREATED NPM PACKAGE FOR GITHUB GIST VIWE',
    image: gistImage,
    excerpt: "Below the YouTube video. I've pro...",
    content: "Below the YouTube video, I've provided a detailed explanation on how to use the GitHub GistViewer npm package. Additionally, a comprehensive README file is included to guide you through the process. I've developed the vite-gist package, a powerful and flexible Gist viewer component for React applications. Simply install the package, import the vite-gist component, and follow the instructions provided here or in the npm package documentation to integrate it into your project. This package stands out due to its advanced features. I couldn't find any existing solution that met my needs, so I built this from scratch. With vite-gist, you're free to fully customize the appearance of the Gist viewer, including support for both light and dark modes. It also offers a font resizing option for an enhanced user experience. Whether you're looking for flexibility or ease of use, this package provides a comprehensive solution for embedding and customizing GitHub Gists in your React apps.",
    gistId: '00120b53c86355f0b9b42e422a2d106d', // Use Gist ID here
    gistLink: 'https://gist.github.com/SagrSuri/0606d142d5573cf79f91126bc4ebabc0',
    youtubeLink: 'https://www.youtube.com/embed/qUHokTXF1M0?si=bKt4BEQDQCE9rnfS',
    url: '/blog/my-first-blog-post',
  },
  {
    id: '2',
    title: 'dark Mode toggle component for React Projects',
    image: toggleImage,
    excerpt: 'This is a brief overview of the first blog post. Click to read more.',
    content: "I've developed an npm package for a Dark Mode toggle button, which you can easily integrate into your React projects. Below the YouTube video, you'll find a detailed walkthrough on how to use the package. Additionally, a complete README file is included with clear instructions for installation and usage. To get started, simply install the package, then refer to the README for step-by-step guidance. The package is also documented on the npm website, where you'll find all the essential details. A live demo is available—just click the link and experience it in action This package is designed for simplicity and flexibility, allowing seamless integration of Dark Mode functionality into your projects.",
    gistId: '78996f71db49dab4093e982b554551e7', // Use Gist ID here
    gistLink: 'https://gist.github.com/SagrSuri/0606d142d5573cf79f91126bc4ebabc0',
    youtubeLink: 'https://www.youtube.com/embed/qUHokTXF1M0?si=bKt4BEQDQCE9rnfS',
    url: '/blog/my-first-blog-post',
    projectLink: '/toggle',
  },
 
  // Add more blog objects as needed
];

export default blogData;
