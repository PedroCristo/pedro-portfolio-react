const workProjects = [
  {
    id: 0,
    projectName: "Restaurant Nortada",
    projectImg: "images/portfolio/work-projects/nortada.png",
    projectUrl: "https://restaurantenortada.com/",
    projectTechIcons: [
      { id: 1, iconClass: "fab fa-html5" },
      { id: 2, iconClass: "fab fa-css3-alt" },
      { id: 3, iconClass: "fab fa-js" },
    ],
  },
  {
    id: 1,
    projectName: "E-commerce Flask Template",
    projectImg: "images/portfolio/work-projects/ecomerce-flask-template.png",
    projectUrl: "https://ecommerce-flask-project.herokuapp.com/",
    projectTechIcons: [
      { id: 4, iconClass: "fab fa-html5" },
      { id: 5, iconClass: "fab fa-css3-alt" },
      { id: 6, iconClass: "fab fa-js" },
    ],
    projectTechImg: [
      { id: 7, imgSrc: "images/portfolio/logos/python-logo.png" },
      { id: 8, imgSrc: "images/portfolio/logos/flask-logo.png" },
    ],
  },
  {
    id: 2,
    projectName: "University Template",
    projectImg: "images/portfolio/work-projects/university-website-template-last.png",
    projectUrl: "https://university-website-tempalte.netlify.app/",
    projectTechIcons: [
      { id: 9, iconClass: "fab fa-html5" },
      { id: 10, iconClass: "fab fa-css3-alt" },
      { id: 11, iconClass: "fab fa-js" },
    ],
  },
  {
    id: 3,
    projectName: "Hair Studio Template",
    projectImg: "images/portfolio/work-projects/hair-studio-tempalte-last.png",
    projectUrl: "https://hair-studio-template.netlify.app/",
    projectTechIcons: [
      { id: 12, iconClass: "fab fa-html5" },
      { id: 13, iconClass: "fab fa-css3-alt" },
      { id: 14, iconClass: "fab fa-js" },
    ],
  },
  {
    id: 4,
    projectName: "Esquadria Website",
    projectImg: "images/portfolio/work-projects/esquadria_cover.png",
    projectUrl: "https://esquadria.netlify.app/",
    projectTechIcons: [
      { id: 15, iconClass: "fab fa-html5" },
      { id: 16, iconClass: "fab fa-css3-alt" },
      { id: 17, iconClass: "fab fa-js" },
      { id: 31, iconClass: "fab fa-react" },
    ],
  },
  {
    id: 5,
    projectName: "Personal Trainer Template",
    projectImg: "images/portfolio/work-projects/personal-trainer-template.png",
    projectUrl: "https://personal-trainer-template.netlify.app/",
    projectTechIcons: [
      { id: 18, iconClass: "fab fa-html5" },
      { id: 19, iconClass: "fab fa-css3-alt" },
      { id: 20, iconClass: "fab fa-js" },
      { id: 21, iconClass: "fab fa-bootstrap" },
    ],
  },
  {
    id: 6,
    projectName: "E-commerce Template",
    projectImg: "images/portfolio/work-projects/e-commerce-last.png",
    projectUrl: "https://e-commerce-template-2.netlify.app",
    projectTechIcons: [
      { id: 22, iconClass: "fab fa-html5" },
      { id: 23, iconClass: "fab fa-css3-alt" },
      { id: 24, iconClass: "fab fa-js" },
    ],
  },
  {
    id: 7,
    projectName: "Coffee Haven",
    projectImg: "images/portfolio/work-projects/coffee-haven-template.png",
    projectUrl: "https://coffe-shop-react-teamplate.netlify.app/",
    projectTechIcons: [
      { id: 28, iconClass: "fab fa-html5" },
      { id: 29, iconClass: "fab fa-css3-alt" },
      { id: 30, iconClass: "fab fa-js" },
      { id: 31, iconClass: "fab fa-react" },
    ],
    projectTechImg: [
      { id: 32, imgSrc: "images/portfolio/logos/google-sheets-logo.png" },
    ],
  },
  {
    id: 9,
    projectName: "My Portfolio",
    projectImg: "images/portfolio/work-projects/my-portfolio-image.jpg",
    projectUrl: "",
    projectTechIcons: [
      { id: 28, iconClass: "fab fa-html5" },
      { id: 29, iconClass: "fab fa-css3-alt" },
      { id: 30, iconClass: "fab fa-js" },
      { id: 31, iconClass: "fab fa-react" },
    ],
  },
];

const collegeProjects = [
  {
    id: 1,
    projectName: "Travel World",
    projectImg: "images/portfolio/college/travel-world.png",
    projectUrl: "https://pedrocristo.github.io/portfolio_project_1/index.html",
    projectRepoUrl: "https://github.com/PedroCristo/portfolio_project_1",
    projectTechIcons: [
      { id: 32, iconClass: "fab fa-html5" },
      { id: 33, iconClass: "fab fa-css3-alt" },
    ],
  },
  {
    id: 2,
    projectName: "Quiz Land",
    projectImg: "images/portfolio/college/quiz-land.png",
    projectUrl: "https://pedrocristo.github.io/portfolio_project_2/index.html",
    projectRepoUrl: "https://github.com/PedroCristo/portfolio_project_2",
    projectTechIcons: [
      { id: 34, iconClass: "fab fa-html5" },
      { id: 35, iconClass: "fab fa-css3-alt" },
      { id: 36, iconClass: "fab fa-js" },
    ],
  },
  {
    id: 3,
    projectName: "Hangman",
    projectImg: "images/portfolio/college/hangman.png",
    projectUrl: "https://portfolio-project-3.herokuapp.com/",
    projectRepoUrl: "https://github.com/PedroCristo/portfolio_project_3",
    projectTechIcons: [],
    projectTechImg: [
      { id: 37, imgSrc: "images/portfolio/logos/python-logo.png" },
    ],
  },
  {
    id: 4,
    projectName: "World of Flavors",
    projectImg: "images/portfolio/college/wold-of-flavors.png",
    projectUrl: "https://harvard-cs50w-proj-4-world-of-flavours-1.onrender.com/home_page/",
    projectRepoUrl: "https://github.com/PedroCristo/harvard_cs50w_proj_4_world_of_flavours",
    projectTechIcons: [
      { id: 38, iconClass: "fab fa-html5" },
      { id: 39, iconClass: "fab fa-css3-alt" },
      { id: 40, iconClass: "fab fa-js" },
    ],
    projectTechImg: [
      { id: 41, imgSrc: "images/portfolio/logos/python-logo.png" },
      { id: 42, imgSrc: "images/portfolio/logos/django-logo.png" },
    ],
  },
  {
    id: 5,
    projectName: "Watches & Clocks",
    projectImg: "images/portfolio/college/watches_clocks_ready.png",
    projectUrl: "https://watches-and-clocks-portfolio-5.herokuapp.com/",
    projectRepoUrl: "https://github.com/PedroCristo/portfolio_project_5",
    projectTechIcons: [
      { id: 43, iconClass: "fab fa-html5" },
      { id: 44, iconClass: "fab fa-css3-alt" },
      { id: 45, iconClass: "fab fa-js" },
    ],
    projectTechImg: [
      { id: 46, imgSrc: "images/portfolio/logos/python-logo.png" },
      { id: 47, imgSrc: "images/portfolio/logos/django-logo.png" },
    ],
  },
];

export { workProjects, collegeProjects };
