const createPostHandler = async (event) => {
  event.preventDefault();

  //   Eingabefelder habe ich so ausgelesen
  const title = document.getElementById("title").value;
  const post = document.getElementById("post").value;

  //   Values werden an den Server/API geschickt.
  //   Mit Fetch wird der Pfad bestimmt, der über api_routes aufgerufen wird; in diesem Fall /post.
  const response = await fetch("/api/post", {
    method: "POST",
    // Pack die Values in den Body rein.
    body: JSON.stringify({ title, post }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log("New post failed.", response);
  }
  //   evtl. Error Fall noch einbauen.
};

document
  .querySelector(".create-form")
  // Konfiguration des Buttons; der Button soll darauf hören, wenn ein submit kommt. Erst dann wird die Funktion "createFormHandler" ausgeführt.
  .addEventListener("submit", createPostHandler);
