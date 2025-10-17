function generateProject(event) {
  event.preventDefault();

  new Typewriter("#project", {
    strings: "<p>Your project is ready! </p> <p>Download Here</p>",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let projectFormElement = document.querySelector("#project-generator-form");
projectFormElement.addEventListener("submit", generateProject);
