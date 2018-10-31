// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const pathname = window.location.pathname
  .split('/')
  [window.location.pathname.split('/').length - 1].replace('.html', '');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //Set Menu State
    showMenu = false;
  }
}

projects = [
  {
    projectName: 'Golf Tourney Scorecard',
    image: 'gts.png',
    website: 'https://estreff.github.io/GTSv2',
    github: 'https://github.com/Estreff/GTSv2',
    show: true
  },
  {
    projectName: 'Dev Connector',
    image: 'devconnector.jpg',
    website: 'https://dev-association.herokuapp.com',
    github: 'https://github.com/Estreff/devconnector',
    show: true
  },
  {
    projectName: 'chariTABLE Host',
    image: 'chariTABLE.jpg',
    website: 'https://charitablehost.herokuapp.com',
    github: 'https://github.com/Estreff/chariTABLE',
    show: true
  }
];

if (pathname === 'work') {
  projects.map(project => {
    console.log('Project Name:', project.projectName);
    if (project.show === true) {
      let item = '';
      item += `<div class="item" title="${project.projectName}">`;
      item += `<a href="${project.website}" target="_blank"><img src="./img/${
        project.image
      }" alt="Project 1" height="150"></a>`;
      item += `<a href="${
        project.website
      }" target="_blank" class="btn-light"><i class="fas fa-eye"></i> ${
        project.projectName
      }</a>`;
      item += `<a href="${
        project.github
      }" target="_blank" class="btn-dark"><i class="fab fa-github"></i> Github</a>`;
      item += `</div>`;

      $('.projects').append(item);
    }
  });
}
