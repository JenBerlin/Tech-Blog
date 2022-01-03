const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-singup");
  const password = document.querySelector("#password-singup");

  if (username && password) {
    const response = await fetch("/api/user/singup", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
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
// There was a typo in the id.
  .querySelector("#singup-form")
  .addEventListener("submit", signupFormHandler);
