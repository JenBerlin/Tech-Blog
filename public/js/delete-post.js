const onClickDelete = async (event) => {
  event.preventDefault;
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
