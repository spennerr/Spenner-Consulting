/* ============================================================
   Spenner Consulting - Main Script
   - Mobile navigation toggle
   - Contact form validation & status handling
   - Dynamic footer year
   ============================================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    /* ---------- Mobile navigation toggle ---------- */
    var toggleBtn = document.querySelector(".nav-toggle");
    var navMenu = document.getElementById("navMenu");

    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener("click", function () {
        var isOpen = navMenu.classList.toggle("open");
        toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        toggleBtn.setAttribute("aria-label", isOpen ? "Stäng meny" : "Öppna meny");
      });

      // Close menu when a link is clicked (mobile)
      navMenu.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          navMenu.classList.remove("open");
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    /* ---------- Contact form ---------- */
    var form = document.getElementById("contactForm");
    if (form) {
      var statusEl = document.getElementById("formStatus");

      function setStatus(message, type) {
        statusEl.textContent = message;
        statusEl.className = "form-status show " + (type || "error");
        statusEl.setAttribute("data-type", type || "error");
      }

      function clearStatus() {
        statusEl.className = "form-status";
        statusEl.textContent = "";
      }

      function getField(id) {
        return document.getElementById(id);
      }

      function isValidEmail(value) {
        // Simple but effective email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearStatus();

        var name = getField("name");
        var email = getField("email");
        var message = getField("message");

        var valid = true;
        var firstInvalid = null;

        // Reset error styling
        [name, email, message].forEach(function (field) {
          if (field) field.style.borderColor = "";
        });

        // Name
        if (!name || name.value.trim() === "") {
          if (name) name.style.borderColor = "#d9534f";
          valid = false;
          firstInvalid = firstInvalid || name;
        }

        // Email
        if (!email || !isValidEmail(email.value.trim())) {
          if (email) email.style.borderColor = "#d9534f";
          valid = false;
          firstInvalid = firstInvalid || email;
        }

        // Message
        if (!message || message.value.trim() === "") {
          if (message) message.style.borderColor = "#d9534f";
          valid = false;
          firstInvalid = firstInvalid || message;
        }

        if (!valid) {
          setStatus("Var vänlig fyll i alla obligatoriska fält korrekt.", "error");
          if (firstInvalid) firstInvalid.focus();
          return;
        }

        // Gather data
        var data = {
          name: name.value.trim(),
          email: email.value.trim(),
          company: getField("company") ? getField("company").value.trim() : "",
          subject: getField("subject") ? getField("subject").value : "",
          message: message.value.trim()
        };

        /*
         * TODO: Anslut till din e-posttjänst eller backend här.
         * Just nu visas endast en bekräftelse i webbläsaren.
         *
         * Exempel med fetch till en backend:
         *   fetch("https://din-backend.se/api/contact", {
         *     method: "POST",
         *     headers: { "Content-Type": "application/json" },
         *     body: JSON.stringify(data)
         *   })
         *   .then(response => { if (!response.ok) throw new Error(); })
         *   .then(() => { form.reset(); setStatus("Tack! Ditt meddelande har skickats.", "success"); })
         *   .catch(() => setStatus("Något gick fel. Försök igen eller kontakta oss direkt.", "error"));
         *
         * Alternativt ett formulärtjänst-exempel (t.ex. Formspree):
         *   fetch("https://formspree.io/f/YOUR_FORM_ID", {
         *     method: "POST",
         *     headers: { "Content-Type": "application/json" },
         *     body: JSON.stringify(data)
         *   })
         */

        // Placeholder success handling
        form.reset();
        setStatus(
          "Tack " + data.name + "! Meddelandet har registrerats. Snart ansluts formuläret till e-post så att vi får dina meddelanden.",
          "success"
        );
      });
    }

  });
})();
