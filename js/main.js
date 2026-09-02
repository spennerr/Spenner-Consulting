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

    /* ---------- Erfarenhet: gantt per organisation ---------- */
    var expRoot = document.getElementById("erfarenhet");
    if (expRoot) {
      var modal = document.getElementById("expModal");
      var modalTitle = document.getElementById("expModalTitle");
      var modalBody = document.getElementById("expModalBody");
      var modalClose = document.getElementById("expModalClose");
      var lastFocus = null;
      var rows = Array.prototype.slice.call(document.querySelectorAll(".gantt-rows .gantt-row"));

      // Sortera: nyaste erfarenhet överst (efter radens senaste slutår)
      var wrapper = document.querySelector(".gantt-rows");
      rows.sort(function (a, b) {
        return latestEnd(b) - latestEnd(a);
      });
      if (wrapper) rows.forEach(function (row) { wrapper.appendChild(row); });

      function latestEnd(row) {
        var ends = Array.prototype.map.call(row.querySelectorAll(".lane-bar"), function (bar) {
          return parseFloat(bar.getAttribute("data-end"), 10);
        });
        var m = ends.length ? Math.max.apply(null, ends) : 0;
        return isNaN(m) ? 0 : m;
      }

      var T0 = 1985;      // axelns startår
      var T1 = 2026;      // axelns slutår
      var span = T1 - T0; // 41 år

      // Positionera varje stapel längs tidsaxeln med procent
      function layoutBars() {
        rows.forEach(function (row) {
          Array.prototype.forEach.call(row.querySelectorAll(".lane-bar"), function (bar) {
            var s = parseFloat(bar.getAttribute("data-start"), 10);
            var e = parseFloat(bar.getAttribute("data-end"), 10);
            if (isNaN(s) || isNaN(e)) return;
            var left = ((s - T0) / span) * 100;
            var width = ((e - s) / span) * 100;
            width = Math.max(width, 1.4); // garanterar minsta klickbara bredd
            bar.style.left = left + "%";
            bar.style.width = width + "%";
          });
        });
      }
      layoutBars();

var typeLabels = {
        job: "Anställning",
        project: "Uppdrag",
        edu: "Utbildning"
      };
      var tip = document.getElementById("expTip");

      // Bygg ett kort för en händelse (anställning/uppdrag/utbildning)
      function renderItem(item) {
        var label = typeLabels[item.t] || item.t;
        var tag = '<span class="exp-lg-tag exp-tag-' + item.t + '">' + label + "</span>";
        return '<div class="exp-rc exp-rc-' + item.t + '">' +
          '<div class="exp-rc-head">' + tag +
          '<h4>' + (item.title || "") + "</h4>" +
          '<span class="exp-rc-meta">' + (item.meta || "") + "</span>" +
          "</div>" +
          '<p class="exp-rc-text">' + (item.text || "") + "</p>" +
          "</div>";
      }

      // Hämta händelsekortsk den klickade organisationen och fyll modalen
      function openDetail(source) {
        var exCell = source.classList.contains("ex-cell")
          ? source
          : source.closest(".gantt-row").querySelector(".ex-cell");
        if (!exCell) return;

        var org = exCell.getAttribute("data-org");
        var itemsRaw = exCell.getAttribute("data-items");
        var items;
        try { items = JSON.parse(itemsRaw); } catch (e) { items = []; }
        if (!items || !items.length) items = [{ t: "job", title: org, meta: exCell.getAttribute("data-per") || "", text: "Mer information om denna organisation och dess uppdrag." }];

        modalTitle.textContent = org;
        modalBody.innerHTML = items.map(renderItem).join("");

        lastFocus = source;
        modal.setAttribute("aria-hidden", "false");
        modal.hidden = false;
        document.body.classList.add("modal-open");
        modalClose.focus();
      }

      // Stäng modalen
      function closeModal() {
        if (modal.hidden) return;
        modal.hidden = true;
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        if (lastFocus) lastFocus.focus();
        lastFocus = null;
      }

      // Visa tooltip ovanför en stapel på hover/fokus
      function showTip(bar) {
        var row = bar.closest(".gantt-row");
        var exCell = row.querySelector(".ex-cell");
        var org = exCell.getAttribute("data-org");
        var title = bar.getAttribute("data-title") || "";
        var holder = bar.getAttribute("data-holder") || "";
        var s = bar.getAttribute("data-start");
        var e = bar.getAttribute("data-end");
        var period = s === e ? String(s) : s + "–" + e;

        tip.innerHTML = '<span class="exp-tip-title">' +
          (title ? "<b>" + escapeHtml(title) + "</b> · " : "") +
          escapeHtml(holder) +
          "</span><span class=\"exp-tip-sub\">" + escapeHtml(org) + " · " + escapeHtml(period) + "</span>";
        tip.hidden = false;

        var r = bar.getBoundingClientRect();
        var tw = tip.offsetWidth;
        var top = r.top - tip.offsetHeight - 8;
        if (top < 8) top = r.bottom + 8;
        var left = r.left + r.width / 2 - tw / 2;
        left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
        tip.style.left = left + "px";
        tip.style.top = top + "px";
      }

      function hideTip() {
        tip.hidden = true;
      }

      function escapeHtml(str) {
        return (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }

      // Klick på organisationscell – öppna modalen
      document.querySelectorAll(".ex-cell").forEach(function (cell) {
        cell.addEventListener("click", function () { openDetail(cell); });
      });

      // Klick på stapel – öppna modalen, hover/fokus visar tooltip
      rows.forEach(function (row) {
        Array.prototype.forEach.call(row.querySelectorAll(".lane-bar"), function (bar) {
          bar.addEventListener("click", function () { openDetail(bar); hideTip(); });
          bar.addEventListener("mouseover", function () { showTip(bar); });
          bar.addEventListener("mouseout", hideTip);
          bar.addEventListener("focus", function () { showTip(bar); });
          bar.addEventListener("blur", hideTip);
        });
      });

      if (modalClose) modalClose.addEventListener("click", closeModal);

      // Esc stänger modalen
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.hidden) closeModal();
      });

      // Klick utanför modalen stänger
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
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
