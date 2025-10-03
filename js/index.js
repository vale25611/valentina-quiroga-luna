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
const skillsList = skillsSection.querySelector("ul")

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill)
}


