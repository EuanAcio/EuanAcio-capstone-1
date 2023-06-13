const modal = document.getElementById("confirmation-modal");
const btn = document.getElementById("send-message-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

function openModal() {
  modal.style.display = "flex";
  setTimeout(function () {
    modal.querySelector(".modal-content").classList.add("active");
  }, 10);
}

function closeModal() {
  modal.querySelector(".modal-content").classList.remove("active");
  setTimeout(function () {
    modal.style.display = "none";
  }, 300);
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  openModal();
});

closeModalBtn.addEventListener("click", closeModal);

