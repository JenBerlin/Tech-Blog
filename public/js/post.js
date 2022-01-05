const createFormHandler = async (event) => {
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
  }
  //   evtl. Error Fall noch einbauen.
};

const onClickDelete = async (event) => {
  event.preventDefault;
  console.log("Helloooooooo");
  const id = event.currentTarget.id;
  const options = {
    method: "DELETE",
    redirect: "follow",
  };
  const response = await fetch(`/api/post/${id}`, options);

  if (response.status !== 200) {
    console.info("Failed to delete post.");
  } else {
    window.location.replace("/dashboard");
  }
};

$(`[name="delete-post"]`).click(onClickDelete);

document
  .querySelector(".create-form")
  // Konfiguration des Buttons; der Button soll darauf hören, wenn ein submit kommt. Erst dann wird die Funktion "createFormHandler" ausgeführt.
  .addEventListener("submit", createFormHandler);
