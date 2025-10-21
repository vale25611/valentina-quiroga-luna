const body = document.querySelector("body");

//footer
const footer = document.createElement("footer");
footer.id = "copyright";
body.appendChild(footer);


// Get the current year
const today = new Date();
const thisYear = today.getFullYear();

// Create a <p> element
const copyright = document.createElement("p");
copyright.innerHTML =`© ${thisYear} Valentina Quiroga`;
footer.appendChild(copyright);

// Array of skills to display on the page
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React Native (Expo)",
  "Swift (iOS)",
  "Firebase",
  "Python",
  "C++",
  "Git",
  "GitHub",
  "Linux",
  "VS Code",
  "AWS (Cloud9)",
  "DynamoDB",
  "Gemini AI",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "English (Fluent)",
  "Spanish (Fluent)"
];


const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");


for(let i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}

const messageForm = document.forms["leave_message"];

// Add submit event listener
if (messageForm) {
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
   
    // Get user input values and remove whitespace
    const usersName = event.target.usersName.value.trim();
    const usersEmail = event.target.usersEmail.value.trim();
    const usersMessage = event.target.usersMessage.value.trim();

    console.log({ usersName, usersEmail, usersMessage });

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    
    // Create a new message item
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a>
      <span> — ${usersMessage}</span>
    `;

    // Add "remove" button
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "remove";

    // When clicked, remove from list
    removeButton.addEventListener("click", function () {
      const entry = removeButton.parentNode; 
      entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
  });
}

// -------------------- GitHub Projects -------------------- //
const GITHUB_USERNAME = "vale25611";

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {

    const repositories = data;
    console.log("repositories:", repositories);


    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");


    projectList.innerHTML = "";


    for (let i = 0; i < repositories.length; i++) {
      const repo = repositories[i];

      const project = document.createElement("li");

      const link = document.createElement("a");
      link.href = repo.html_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = repo.name;

      project.appendChild(link);
      projectList.appendChild(project);
    }
  })
  .catch((err) => {

    console.error(err);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    const errorItem = document.createElement("li");
    errorItem.textContent = "Sorry—couldn’t load repositories right now.";
    errorItem.style.color = "#C17C74";
    projectList.appendChild(errorItem);
  });
