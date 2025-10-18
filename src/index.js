function downloadProject(response) {
  new Typewriter("#project", {
    strings: response.data.choices[0].message.content,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateProject(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User instructions: Generate a complete project based on ${instructionsInput.value}. Your output should be in a word document format`;
  let context =
    "You are a professional academic researcher and you love to write complete project. Your mission is to generate a complete project using the user instructions. Place the word document as a link in a single line of text saying Download Your Project Here! in a <strong> element";
  let apiKey =
    "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"; // Never expose this in production!

  // Create a similar API URL (for reference)
  let apiURL = `https://api.openai.com/v1/chat/completions`;

  // Send the request with Axios (OpenAI acts as the proxy)
  axios
    .post(
      apiURL,
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: context },
          { role: "user", content: prompt },
        ],
        max_tokens: 200,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    .then(downloadProject);
}

let projectFormElement = document.querySelector("#project-generator-form");
projectFormElement.addEventListener("submit", generateProject);
