const body = document.querySelector("body");

//footer
const footer = document.createElement("footer");
footer.id = "copyright";
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML =`© ${thisYear} Valentina Quiroga`;
footer.appendChild(copyright);


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

if (messageForm) {
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value.trim();
    const usersEmail = event.target.usersEmail.value.trim();
    const usersMessage = event.target.usersMessage.value.trim();

    console.log({ usersName, usersEmail, usersMessage });

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");


    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a>
      <span> — ${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "remove";

    removeButton.addEventListener("click", function () {
      const entry = removeButton.parentNode; // the <li>
      entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
  });
}
