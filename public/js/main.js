document.addEventListener("DOMContentLoaded", () => {
  const createPostBtn = document.getElementById("createPostBtn");
  const formModal = document.getElementById("formModal");
  const closeModal = document.getElementById("closeModal");
  const blogForm = document.getElementById("blogForm");

  // Show the modal when the button is clicked
  createPostBtn.addEventListener("click", () => {
    formModal.style.display = "flex";
  });

  // Hide the modal when the close button is clicked
  closeModal.addEventListener("click", () => {
    formModal.style.display = "none";
  });

  // Hide the modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === formModal) {
      formModal.style.display = "none";
    }
  });

  blogForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  });
});
