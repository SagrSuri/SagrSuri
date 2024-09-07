import sagarImage from '../../assets/sagarImage.jpg'; // Path to your favicon or main image
import certificateFavicon from './favicons/certificate.png'
import contactfavicon from './favicons/contact.png'
import skillsfavicon from './favicons/skills.png'
import projectfavicon from './favicons/project.png'
import blogfavicon from './favicons/blog.png'

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
      github: "https://github.com/sagarsuri",
      instagram: "https://instagram.com/sagarsuri.in",
      twitter: "https://twitter.com/sagarsuri_in",
      youtube: "https://youtube.com/@sagrsuri"
    }
  },
  profile: {
    title: "Profile - Sagar Suri",
    description: "Learn more about Sagar Suri, a web developer specializing in modern technologies like React and Node.js.",
    keywords: "Sagar Suri, web developer, profile, React.js, Node.js",
    favicon: sagarImage, // Use the same or different favicon
    openGraph: {
      title: "Sagar Suri - Profile",
      description: "Get insights into Sagar Suri’s professional journey and expertise.",
      image: sagarImage, // Replace with an image relevant to the profile page
      url: "https://sagarsuri.in/profile",
    },
    twitter: {
      title: "Sagar Suri - Profile",
      description: "Explore the professional profile of Sagar Suri.",
      image: sagarImage, // Replace with an image relevant to the profile page
    }
  },
  skills: {
    title: "Skills - Sagar Suri",
    description: "Discover the skills and technologies Sagar Suri specializes in, including frontend and backend development.",
    keywords: "Sagar Suri, skills, web development, frontend skills, backend skills, React.js, Node.js",
    favicon: skillsfavicon, // Use the same or different favicon
    openGraph: {
      title: "Sagar Suri - Skills",
      description: "Detailed overview of skills and technologies.",
      image: sagarImage, // Replace with an image relevant to the skills page
      url: "https://sagarsuri.in/skills",
    },
    twitter: {
      title: "Sagar Suri - Skills",
      description: "Explore the skills and technologies Sagar Suri offers.",
      image: sagarImage, // Replace with an image relevant to the skills page
    }
  },
  projects: {
    title: "Projects - Sagar Suri",
    description: "Explore the projects that Sagar Suri has worked on, showcasing frontend and backend expertise.",
    keywords: "Sagar Suri, projects, web development projects, React.js, Node.js",
    favicon: projectfavicon, // Use the same or different favicon
    openGraph: {
      title: "Sagar Suri - Projects",
      description: "Showcase of notable projects and contributions.",
      image: sagarImage, // Replace with an image relevant to the projects page
      url: "https://sagarsuri.in/projects",
    },
    twitter: {
      title: "Sagar Suri - Projects",
      description: "View the projects completed by Sagar Suri.",
      image: sagarImage, // Replace with an image relevant to the projects page
    }
  },
  certificates: {
    title: "Certificates - Sagar Suri",
    description: "View the certificates and qualifications earned by Sagar Suri.",
    keywords: "Sagar Suri, certificates, qualifications, web development certifications",
    favicon: certificateFavicon, // Use the same or different favicon
    openGraph: {
      title: "Sagar Suri - Certificates",
      description: "A list of certifications and qualifications.",
      image: sagarImage, // Replace with an image relevant to the certificates page
      url: "https://sagarsuri.in/certificates",
    },
    twitter: {
      title: "Sagar Suri - Certificates",
      description: "Explore the certifications achieved by Sagar Suri.",
      image: sagarImage, // Replace with an image relevant to the certificates page
    }
  },
  contact: {
    title: "Contact - Sagar Suri",
    description: "Get in touch with Sagar Suri for web development inquiries or opportunities.",
    keywords: "Sagar Suri, contact, web development, get in touch",
    favicon: contactfavicon, // Use the same or different favicon
    openGraph: {
      title: "Sagar Suri - Contact",
      description: "Reach out to Sagar Suri for any queries or projects.",
      image: sagarImage, // Replace with an image relevant to the contact page
      url: "https://sagarsuri.in/contact",
    },
    twitter: {
      title: "Sagar Suri - Contact",
      description: "Contact Sagar Suri for web development opportunities.",
      image: sagarImage, // Replace with an image relevant to the contact page
    }
  },
  blog: {
    title: "Blog | PROJECTS DETAILS | SAGAR SURI",
    description: "Get in touch with Sagar Suri for web development inquiries or opportunities.",
    keywords: "Blog,Sagar Suri, contact, web development, get in touch",
    favicon: blogfavicon, // Use the same or different favicon
    openGraph: {
      title: "Sagar Suri - Contact",
      description: "Reach out to Sagar Suri for any queries or projects.",
      image: sagarImage, // Replace with an image relevant to the contact page
      url: "https://sagarsuri.in/contact",
    },
    twitter: {
      title: "Sagar Suri - Contact",
      description: "Contact Sagar Suri for web development opportunities.",
      image: sagarImage, // Replace with an image relevant to the contact page
    }
  }
};

export default metaData;
