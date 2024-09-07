import gistImage from './codeImage/vite-gist.png'
import toggleImage from './codeImage/vite-toggle.png'

const blogData = [
  {
    id: '1',
    title: 'CREATED NPM PACKAGE FOR GITHUB GIST VIWE',
    image: gistImage,
    excerpt: 'This is a brief overview of the first blog post. Click to read more.',
    content: 'The Below code is a vite@latest project component , you can use this with create Toggle.jsx and import that code there , then you don"t need to apply dark mode anyware he can apply you need to just install tailwind css in our project ',
    gistId: '00120b53c86355f0b9b42e422a2d106d', // Use Gist ID here
    gistLink: 'https://gist.github.com/SagrSuri/0606d142d5573cf79f91126bc4ebabc0',
    youtubeLink: 'https://www.youtube.com/embed/qUHokTXF1M0?si=bKt4BEQDQCE9rnfS',
    url: '/blog/my-first-blog-post',
  },
  {
    id: '2',
    title: 'Toggle.jsx component for DarkMode',
    image: toggleImage,
    excerpt: 'This is a brief overview of the first blog post. Click to read more.',
    content: 'The Below code is a vite@latest project component , you can use this with create Toggle.jsx and import that code there , then you don"t need to apply dark mode anyware he can apply you need to just install tailwind css in our project ',
    gistId: '0606d142d5573cf79f91126bc4ebabc0', // Use Gist ID here
    gistLink: 'https://gist.github.com/SagrSuri/0606d142d5573cf79f91126bc4ebabc0',
    youtubeLink: 'https://www.youtube.com/embed/qUHokTXF1M0?si=bKt4BEQDQCE9rnfS',
    url: '/blog/my-first-blog-post',
  },
 
  // Add more blog objects as needed
];

export default blogData;
