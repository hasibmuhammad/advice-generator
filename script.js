const adviceEl = document.getElementById("advice");
const adviceId = document.getElementById("advice-id");

window.addEventListener("load", () => {
  // Making a Fetch API call
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      // Data contains the advice information
      let advice = data.slip.advice;
      let id = data.slip.id;

      adviceEl.innerText = `"${advice}"`;
      adviceId.innerText = `Advice #${id}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
