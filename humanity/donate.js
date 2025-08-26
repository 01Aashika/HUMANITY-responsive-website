document.addEventListener("DOMContentLoaded", function () {
  const donateBtns = [document.getElementById("donateBtn"), document.getElementById("donateBtnHero")];
  const modal = document.getElementById("donateModal");
  const closeModal = document.getElementById("closeModal");
  const donateForm = document.getElementById("donateForm");

  // Open modal on any donate button click
  donateBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    }
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submit
  donateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;

    alert(`Thank you, ${name}! Redirecting to payment for $${amount}.`);
    window.location.href = "https://www.paypal.com/donate"; // replace with Stripe/Razorpay
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Donate modal code (already there)...

  // Learn More modal
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const learnMoreModal = document.getElementById("learnMoreModal");
  const closeLearnMore = document.getElementById("closeLearnMore");

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      learnMoreModal.style.display = "flex";
    });
  }

  closeLearnMore.addEventListener("click", () => {
    learnMoreModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === learnMoreModal) {
      learnMoreModal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Donate Modal
  const donateBtns = [document.getElementById("donateBtn"), document.getElementById("donateBtnHero")];
  const modal = document.getElementById("donateModal");
  const closeModal = document.getElementById("closeModal");
  const donateForm = document.getElementById("donateForm");

  donateBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => modal.style.display = "flex");
    }
  });

  closeModal.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

  donateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    alert(`Thank you, ${name}! Redirecting to payment for $${amount}.`);
    window.location.href = "https://www.paypal.com/donate"; // replace with payment gateway
  });

  // Learn More smooth scroll
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      document.querySelector("#about").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Read More toggle
  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreContent = document.getElementById("moreContent");
  let expanded = false;
  readMoreBtn.addEventListener("click", () => {
    if (!expanded) {
      moreContent.style.display = "block";
      readMoreBtn.textContent = "- Read Less";
      expanded = true;
    } else {
      moreContent.style.display = "none";
      readMoreBtn.textContent = "+ Read More";
      expanded = false;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Contact Modal
  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const closeContact = document.getElementById("closeContact");

  contactBtn.addEventListener("click", () => contactModal.style.display = "flex");
  closeContact.addEventListener("click", () => contactModal.style.display = "none");
  window.addEventListener("click", (e) => { if (e.target === contactModal) contactModal.style.display = "none"; });

  // Volunteer Modal
  const volunteerBtn = document.getElementById("volunteerBtn");
  const volunteerModal = document.getElementById("volunteerModal");
  const closeVolunteer = document.getElementById("closeVolunteer");
  const volunteerForm = document.getElementById("volunteerForm");

  volunteerBtn.addEventListener("click", () => volunteerModal.style.display = "flex");
  closeVolunteer.addEventListener("click", () => volunteerModal.style.display = "none");
  window.addEventListener("click", (e) => { if (e.target === volunteerModal) volunteerModal.style.display = "none"; });

  volunteerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("🎉 Thank you for joining as a Volunteer! Our team will contact you soon.");
    volunteerModal.style.display = "none";
    volunteerForm.reset();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(section => {
    observer.observe(section);
  });
});


