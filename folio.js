let socialMediaButtons = document.querySelectorAll('.social-media-button');
let socialMediaLinkHelpTexts = document.querySelectorAll(
  '.social-media-links-help-each'
);
let headerButtons = document.querySelectorAll('.button');
let projects = document.querySelectorAll('.projects');
let projectLaunchButton = document.querySelectorAll('.project-launch-button');

// Seems like unneccasary creation, nodeList could be traveersed as well.
let socialMediaButtonsArray = [];
let socialMediaLinksHelpTextsArray = [];
let projectsArray = [];

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
        aboutme.style.color = 'black'; // Reset border to remove highlight
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
