// src/components/MetaTags/metaData.js
import sagarImage from '../../assets/sagarImage.jpg'; // Adjust path as necessary

const metaData = {
  home: {
    title: "Sagar Suri - Web Developer | Frontend & Backend Expertise | UI/UX Design Enthusiast",
    description: "Hello, I am Sagar Suri, an accomplished web developer with advanced expertise in both frontend and backend technologies. My website showcases a comprehensive portfolio, including detailed project information and my CV. With specialized skills in React.js, Node.js, and UI/UX design, I deliver high-performance, scalable web applications.",
    keywords: "Sagar Suri, sagarsuri, sagarsuri.in, web developer, UI/UX designer, full stack developer, React.js, Node.js, JavaScript, frontend development, backend development, web development expert, portfolio, professional CV, software engineer, technology enthusiast, scalable web applications, responsive design",
    favicon: sagarImage, // Path to your favicon
    openGraph: {
      title: "Sagar Suri - GitHub Profile",
      description: "Explore the GitHub profile of Sagar Suri, a web developer with a focus on modern web technologies and open-source contributions.",
      image: 'https://avatars.githubusercontent.com/u/152984322?v=4',
      url: "https://github.com/sagrsuri",
    },
    twitter: {
      title: "SAGAR SURI",
      description: "WEB-DEVELOPER | Front-End | Backend  | BLOGGER | 2024.",
      image: 'https://pbs.twimg.com/profile_images/1809288965381582848/5tgzFJT5_400x400.jpg',
    },
    social: {
      linkedin: "https://linkedin.com/in/sagrsuri",
      github: "https://github.com/sagrsuri",
      instagram: "https://instagram.com/sagarsuri.in",
      twitter: "https://twitter.com/sagarsuri_in",
      youtube: "https://youtube.com/@sagrsuri"
    }
  },
  // Add more pages or default metadata as needed
};

export default metaData;
