document.addEventListener("DOMContentLoaded", () => {
  const createPostBtn = document.getElementById("createPostBtn");
  const formModal = document.getElementById("formModal");
  const closeModal = document.getElementById("closeModal");

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
});
