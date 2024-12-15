document.addEventListener("DOMContentLoaded", () => {
  // Select necessary DOM elements
  const btn = document.querySelector(".btn"); // Button to open the modal
  const close = document.querySelector(".close"); // Button to close the modal
  const modal = document.querySelector(".modal"); // Modal overlay
  const modalContent = document.querySelector(".modalContent"); // Modal content container

  // Function to open the modal
  const openModal = () => {
    modal.style.display = "block";
  };

  // Function to close the modal with a slide-up animation
  const closeModal = () => {
    modalContent.classList.add("slideUp"); // Add slide-up animation class

    setTimeout(() => {
      modal.style.display = "none"; // Hide the modal after the animation
      modalContent.classList.remove("slideUp"); // Remove animation class
    }, 700); // Match the timeout with the animation duration
  };

  // Attach event listeners to modal-related elements
  const attachEventListeners = () => {
    btn?.addEventListener("click", openModal); // Open modal on button click
    close?.addEventListener("click", closeModal); // Close modal on close button click

    // Close modal when clicking outside the modal content
    modal?.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
  };

  // Initialize event listeners
  attachEventListeners();
});
