let socialMediaButtons = document.querySelectorAll('.social-media-button');
let socialMediaLinkHelpTexts = document.querySelectorAll(
  '.social-media-links-help-each'
);
let headerButtons = document.querySelectorAll('.button');

// Seems like unneccasary creation, nodeList could be traveersed as well.
let socialMediaButtonsArray = [];
let socialMediaLinksHelpTextsArray = [];

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
      }, 1000); // Delay of 1 second
    } else if (e.target.innerText == 'PROJECTS') {
      //   console.log('projects was clicked');
      const projectsTrack = document.querySelector('.project-track');
      projectsTrack.style.border = '5px solid red';

      // Remove highlight after 1 second
      setTimeout(() => {
        projectsTrack.style.border = '5px solid yellow'; // Reste border to remove highlight
      }, 1000); // Delay of 1 second
    }
  });
});
