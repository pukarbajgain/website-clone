function toggleMenu(id, button) {
  const menu = document.getElementById(id);
  const allMenus = document.querySelectorAll(".nav-links");
  const allButtons = document.querySelectorAll(".nav-item button");

  allMenus.forEach((item) => {
    if (item.id !== id) item.style.display = "none";
  });
  allButtons.forEach((btn) => {
    if (btn !== button) btn.classList.remove("active");
  });


    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        button.classList.remove('active');
        sessionStorage.removeItem('active-nav-btn');
    } else {
        menu.style.display = 'flex';
        button.classList.add('active');
        sessionStorage.setItem('active-nav-btn', button.dataset.id)
    }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("appointmentForm").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});
function toggleForm() {
  const form = document.getElementById("appointmentForm");
  const overlay = document.getElementById("overlay");
  // const header = document.querySelector(".header");
  // const navbar = document.querySelector(".sidebar");
  // const footer = document.querySelector(".footer");

  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    overlay.style.display = "block";

   
    document.body.style.overflow = "hidden";
  } else {
    form.style.display = "none";
    overlay.style.display = "none";
    // if (overlay) overlay.style.display = 'none';
    // if (form) form.style.display = 'none';
    document.body.style.overflow = "auto";
  }
}
document.addEventListener('keydown', function(event) {
  const form = document.getElementById("appointmentForm");
  const overlay = document.getElementById("overlay");
  if (
    (event.key === "Escape" || event.key === "Esc") &&
    form.style.display === "block"
  ) {
    form.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
);
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

  if (!nameRegex.test(name)) {
    alert("Please enter a valid name. Only letters and spaces are allowed.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (7-14 digits, optional +).");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}




