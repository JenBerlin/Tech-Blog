const createFormHandler = async (event) => {
  event.preventDefault();

  //   Eingabefelder habe ich so ausgelesen
  const title = document.getElementById("title").value;
  const post = document.getElementById("post").value;

  const response = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ title, post }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  }
  //   evtl. Error Fall noch einbauen.
};

document
  .querySelector(".create-form")
  // Konfiguration des Buttons; der Button soll darauf hören, wenn ein submit kommt. Erst dann wird die Funktion "createFormHandler" ausgeführt.
  .addEventListener("submit", createFormHandler);
