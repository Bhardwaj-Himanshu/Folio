let socialMediaButtons = document.querySelectorAll('.social-media-button');
let socialMediaLinkHelpTexts = document.querySelectorAll(
  '.social-media-links-help-each'
);
let headerButtons = document.querySelectorAll('.button');
let projects = document.querySelectorAll('.projects');
let projectLaunchButton = document.querySelectorAll('.project-launch-button');
let themeToggler = document.getElementById('theme-toggler');
let stylesheet = document.getElementById('stylesheet');

// Seems like unneccasary creation, nodeList could be traversed as well.
let socialMediaButtonsArray = [];
let socialMediaLinksHelpTextsArray = [];
// let projectsArray = [];

for (let i = 0; i < socialMediaButtons.length; i++) {
  socialMediaButtonsArray.push(socialMediaButtons[i]);
  socialMediaLinksHelpTextsArray.push(socialMediaLinkHelpTexts[i]);
}

socialMediaButtonsArray.forEach((button, buttonIndex) => {
  button.addEventListener('mouseover', () => {
    switch (buttonIndex) {
      case 0:
        // console.log('0th link was hovered');
        socialMediaLinksHelpTextsArray[0].classList.add('active');
        socialMediaLinksHelpTextsArray[1].classList.remove('active');
        socialMediaLinksHelpTextsArray[2].classList.remove('active');
        break;
      case 1:
        // console.log('1st link was hovered');
        socialMediaLinksHelpTextsArray[0].classList.remove('active');
        socialMediaLinksHelpTextsArray[1].classList.add('active');
        socialMediaLinksHelpTextsArray[2].classList.remove('active');
        break;
      case 2:
        // console.log('2nd link was hovered');
        socialMediaLinksHelpTextsArray[0].classList.remove('active');
        socialMediaLinksHelpTextsArray[1].classList.remove('active');
        socialMediaLinksHelpTextsArray[2].classList.add('active');
      default:
        break;
    }
  });
  button.addEventListener('mouseout', () => {
    for (let i = 0; i < socialMediaLinksHelpTextsArray.length; i++) {
      socialMediaLinksHelpTextsArray[i].classList.remove('active');
    }
  });
});

headerButtons.forEach((button, buttonIndex) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerText == 'ABOUT ME') {
      //   console.log('about me was clicked');
      const aboutme = document.querySelector('.aboutme');
      aboutme.style.color = 'red';

      // Remove highlight after 1 second
      setTimeout(() => {
        aboutme.style.color = document.body.style.color; // Reset border to remove highlight
      }, 500); // Delay of 0.5 second
    } else if (e.target.innerText == 'PROJECTS') {
      //   console.log('projects was clicked');
      const projects = document.querySelectorAll('.projects');
      projects.forEach((project) => {
        project.style.border = '5px solid red';
      });
      // Remove highlight after 1 second
      setTimeout(() => {
        projects.forEach((project) => {
          project.style.border = '5px solid orange';
        }); // Reste border to remove highlight
      }, 500); // Delay of 0.5 second
    }
  });
});

projects.forEach((project, projectIndex) => {
  let isHovered = false; // Track hovered state

  project.addEventListener('mouseenter', () => {
    if (!isHovered) {
      // Check if not already hovered
      isHovered = true; // Set hovered state to true
      project.classList.add('project-hovered');
      switch (projectIndex) {
        case 0:
          project.innerHTML =
            '<span>1</span><span>All-In-One</span><a href="https://bhardwaj-himanshu.github.io/All-in-One/" target="_blank" class="project-launch-button">Launch</a>';
          break;
        case 1:
          project.innerHTML =
            '<span>2</span><span>Landing Page-1</span><a href="https://bhardwaj-himanshu.github.io/MojoClick/" target="_blank" class="project-launch-button">Launch</a>';
          break;
        case 2:
          project.innerHTML =
            '<span>3</span><span>Landing Page-2</span><a href="https://bhardwaj-himanshu.github.io/EasyBank/" target="_blank" class="project-launch-button">Launch</a>';
          break;
        default:
          break;
      }
    }
  });

  project.addEventListener('mouseleave', () => {
    project.classList.remove('project-hovered');
    if (isHovered) {
      // Check if already hovered
      isHovered = false; // Set hovered state to false
      if (projectIndex == 0) {
        project.textContent = '1';
      }
      if (projectIndex == 1) {
        project.textContent = '2';
      }
      if (projectIndex == 2) {
        project.textContent = '3';
      }
    }
  });
});

themeToggler.addEventListener('click', () => {
  if (themeToggler.classList.contains('active')) {
    themeToggler.classList.remove('active');
    themeToggler.innerHTML = `<svg id="theme-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>`;
    stylesheet.setAttribute('href', './folio-light.css');
  } else {
    themeToggler.classList.add('active');
    themeToggler.innerHTML = `<svg id="theme-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
    stylesheet.setAttribute('href', './folio-dark.css');
  }
});
