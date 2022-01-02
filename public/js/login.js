const loginFormHandler = async (event) => {
  event.preventDefault();

  // trim = leerzeichen vorne und hinten abschneiden
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Wenn alles okay, dann geht er direkt zum Dashboard
      document.location.replace("/dashboard");
      const dashboardNode = document.querySelector("#dashboard");
      console.log(dashboardNode);
      dashboardNode.classList.remove("disabled");
      const logoutNode = document.querySelector("#logout");
      logoutNode.classList.remove("disabled");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login-form")
  // Konfiguration des Buttons; der Button soll darauf hören, wenn ein submit kommt. Erst dann wird die Funktion "loginFormHandler" ausgeführt.
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
