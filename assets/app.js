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

function toggleForm() {
  const form = document.getElementById("appointmentForm");
  const header = document.querySelector(".header");
  const navbar = document.querySelector(".sidebar");
  const footer = document.querySelector(".footer");

  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";

    header.classList.add("blur-header");
    navbar.classList.add("blur-sidebar");
    footer.classList.add("blur-footer");
    document.body.style.overflow = "hidden";
  } else {
    form.style.display = "none";
    header.classList.remove("blur-header");
    navbar.classList.remove("blur-sidebar");
    footer.classList.remove("blur-footer");
    document.body.style.overflow = "auto";
  }
}
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




