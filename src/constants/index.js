export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
]

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id itaque fugit blanditiis illum reprehenderit adipisci cupiditate sed sint possimus debitis.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id itaque fugit blanditiis illum reprehenderit adipisci cupiditate sed sint possimus debitis.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id itaque fugit blanditiis illum reprehenderit adipisci cupiditate sed sint possimus debitis..',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id itaque fugit blanditiis illum reprehenderit adipisci cupiditate sed sint possimus debitis..',
  },
]

export const myProjects = [
  {
    title: 'Holidaze - accommodation booking site',
    desc: 'Holidaze is a newly launched accommodation booking site that allows users to book holidays at various venues. This project involves developing a modern front-end application for Holidaze using React and Tailwind CSS. The application includes both customer-facing and admin-facing functionalities, enabling users to book holidays and manage venues and bookings.',
    subdesc: 'Built with React, Tailwind CSS & JavaScript.',
    href: 'https://github.com/Arvydas-Mikalauskis/holidaze.git',
    texture: '/textures/project/holidaze.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/js1.png',
      },
    ],
  },
  {
    title: 'eCommerce Marketplace',
    desc: 'eCommerce store built using React, aimed at applying core React concepts. The application fetches product data from the Noroff Online Shop API. The store includes several pages with dynamic product displays, a cart system, and form validation for user interactions.',
    subdesc: 'Build using React, Tailwind CSS.',
    href: 'https://fastidious-cheesecake-23f050.netlify.app/',
    texture: '/textures/project/devFramework.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'GlobalBid - Online Auction',
    desc: 'This project is a front-end application for an auction website, built using Tailwind CSS and Vanilla JavaScript. It interacts with the Noroff Auction API to enable users to create, view, and bid on auction listings. The site is responsive and user-friendly, adhering to modern design principles.',
    subdesc: 'Build using JavaScript & Tailwind CSS',
    href: 'https://github.com/Arvydas-Mikalauskis/semester-project2',
    texture: '/textures/project/semesterProject.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/js1.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [6.5, 3, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [8, 3, 0]
      : [12, 3, 0],
    helloWorldPosition: isSmall
      ? [5, -10, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [6, -10, 0]
      : [14.5, -9, 0],
    jsLogoPosition: isSmall
      ? [-8, -11, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-14, -9, -10]
      : [-18, -13, -10],
  }
}

export const workExperiences = [
  {
    id: 1,
    name: 'Freelance Web Developer',
    pos: 'Freelance',
    duration: '2023 - Present',
    title:
      "Delivered custom websites for clients in diverse industries, including a makeup artist and a personal trainer brand, using React, JavaScript, and Tailwind CSS. Designed and developed responsive, user-friendly websites that showcased each client's services, portfolio, and client testimonials.Collaborated closely with clients to ensure designs met their brand vision while ensuring optimal performance and cross-device compatibility. ",
    icon: '/assets/freelance.svg',
    animation: 'salute',
  },

  {
    id: 2,
    name: 'Noroff School of Tehcnology and Digital Media',
    pos: 'Student',
    duration: '2022 - 2024',
    title:
      'Studied for two years to earn a Higher Professional Degree at Noroff School of Technology and Digital Media.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
]
