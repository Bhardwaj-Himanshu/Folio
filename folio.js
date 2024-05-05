const projectTrack = document.querySelector('.project-track');
const projects = projectTrack.querySelectorAll('.project');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentProjectIndex = 0; // Track current project index

// Creating projectList outside will increase it's length indefinately upon clicks hence leading to undefined behaviour and array size
// let projectList = [];

function showProject(index) {
  // Brute-Force
  //   const projectList = []; // Create an empty project list

  //   for (let i = 0; i < projects.length; i++) {
  //     projectList.push(projects[i]); // Add projects to the list
  //   }

  //   for (let i = 0; i < projectList.length; i++) {
  //     projectList[i].style.display = i === index ? 'block' : 'none';
  //   }

  //Brute-Force-Optimised
  //   for (let i = 0; i < projects.length; i++) {
  //     projects[i].style.display = i === index ? 'block' : 'none';
  //   }

  //Optimal using forEach for NodeList
  projects.forEach((project, projectIndex) => [
    (project.style.display = projectIndex === index ? 'block' : 'none'),
  ]);
  //   currentProjectIndex = index;
}

// Set initial project display
showProject(currentProjectIndex);

prevBtn.addEventListener('click', () => {
  currentProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  showProject(currentProjectIndex);
});

nextBtn.addEventListener('click', () => {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  showProject(currentProjectIndex);
});
