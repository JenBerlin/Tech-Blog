const createCommentHandler = async (event) => {
  event.preventDefault();

  //   Eingabefelder habe ich so ausgelesen
  const comment = document.getElementById("input-comment").value;
  const postId = document.getElementById("post-id").textContent;
  //   Values werden an den Server/API geschickt.
  //   Mit Fetch wird der Pfad bestimmt, der über api_routes aufgerufen wird; in diesem Fall /post.
  const response = await fetch("/api/comment", {
    method: "POST",
    // Pack die Values in den Body rein.
    body: JSON.stringify({ comment, postId }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/show-post-comment/" + postId);
  } else {
    console.log("New comment failed.", response);
  }
  //   evtl. Error Fall noch einbauen.
};

document
  .querySelector(".create-form")
  // Konfiguration des Buttons; der Button soll darauf hören, wenn ein submit kommt. Erst dann wird die Funktion "createFormHandler" ausgeführt.
  .addEventListener("submit", createCommentHandler);
