// import profile from '../../assets/sagar-image.jpg';
// import githubIcon from ''; // Make sure to add actual icons here
// import linkedinIcon from ''; 
import pdf from '../../assets/RESUME - SAGAR SURI - FULL STACK WEB DEVELOPER.pdf';

const profileData = {
  // Use a local or an external link for the profile image
  image: 'https://res.cloudinary.com/sagarsuri/image/upload/f_auto,q_auto/sagarsuri', // Update this to the correct path or URL
  name: 'SAGAR SURI',
  titles: [
    'Front End Developer',
    'Backend Developer',
    'Full Stack Web Developer'
  ],
  description: `I am a passionate and dedicated Full Stack Web Developer with a strong interest in both frontend design and backend development. After completing my graduation, I discovered my enthusiasm for web development and embarked on a journey to master the full stack. I pursued a comprehensive Full Stack Web Development course, where I built several projects that allowed me to apply my skills in real-world scenarios.

I have a natural curiosity for how websites function, which drives my continuous learning and improvement. I am highly proficient with my computer, spending much of my time coding, problem-solving, and exploring new technologies. I thrive in environments that challenge my creativity and technical abilities, and I am eager to contribute to innovative web solutions.`,
  buttons: [
    { text: 'Download CV', link: pdf },
    { text: 'Contact', link: 'https://wa.me/8806116794' }
  ],
  socialLinks: [
    { name: 'Github', link: 'https://linkedin.com/in/sagrsuri', icon: 'https://img.icons8.com/?size=256&id=MR3dZdlA53te&format=png' },
    { name: 'Linkedin', link: 'https://github.com/sagrsuri', icon: 'https://ouch-cdn2.icons8.com/W_FSxOuaSfBv7Ol6sCwJRD3-jYjicOpPgbE1p1Q7HJk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png' }
  ]
};

export default profileData;
