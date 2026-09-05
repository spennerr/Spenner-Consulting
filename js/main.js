/* ============================================================
   Spenner Consulting – Main Script
   - Mobile navigation toggle + close on link click
   - Swedish / English translation (SV default, persisted)
   - Contact form validation & status handling
   - Dynamic footer year
   ============================================================ */
(function () {
  "use strict";

  var translations = {
    // Header
    "nav.hem":        { sv: "Hem",                 en: "Home" },
    "nav.tjanster":   { sv: "Tjänster",            en: "Services" },
    "nav.omGlenn":    { sv: "Om Glenn",            en: "About Glenn" },
    "nav.kontakt":    { sv: "Kontakt",             en: "Contact" },
    "nav.boka":       { sv: "Boka Möte",           en: "Book a Meeting" },
    "a11y.skip":      { sv: "Hoppa till innehåll", en: "Skip to content" },
    "i18n.toggle":    { sv: "Byt språk till engelska", en: "Switch to Swedish" },

    // Hero
    "hero.lede":      { sv: "Projekt som levereras i tid, inom budget och med mätbart resultat – oavsett bransch.", en: "Projects delivered on time, on budget and with measurable results – across every sector." },

    // Value proposition
    "value.eyebrow":  { sv: "Så arbetar jag", en: "How I work" },
    "value.title":    { sv: "Effektivt arbete, tydliga värderingar", en: "Effective work, clear values" },
    "value.lead":     { sv: "Jag kombinerar decennier som projektledare med en konsults öga – för att din organisation ska nå sina mål snabbare och säkrare.", en: "I combine decades as a project lead with a consultant's eye – so your organisation reaches its goals faster and more safely." },
    "value.v1t":      { sv: "Struktur", en: "Structure" },
    "value.v1v":      { sv: "Tydlig styrning, planering och uppföljning i varje fas.", en: "Clear governance, planning and follow-up in every phase." },
    "value.v2t":      { sv: "Engagemang", en: "Commitment" },
    "value.v2v":      { sv: "En partner som bryr sig om resultatet – inte bara om leveransen.", en: "A partner who cares about the outcome, not just the delivery." },
    "value.v3t":      { sv: "Ansvar", en: "Accountability" },
    "value.v3v":      { sv: "Långsiktigt ansvar för att förändringen består efter avslutat uppdrag.", en: "Long-term responsibility that the change lasts after the assignment ends." },

    // Services
    "srv.eyebrow":    { sv: "Tjänster", en: "Services" },
    "srv.title":      { sv: "Främst projektledning – och stöd runtomkring", en: "Project management first – and support around it" },
    "srv.lead":       { sv: "Företag anlitar mig när de behöver vägledning och extern hjälp med projekt, inom alla branscher.", en: "Companies hire me when they need guidance and external help with projects, across all sectors." },
    "srv.s1t":        { sv: "Projektledning", en: "Project Management" },
    "srv.s1d":        { sv: "Allt från strategi till leverans – jag driver ditt projekt från start till mål med tydlig styrning.", en: "From strategy to delivery – I drive your project from start to finish with clear governance." },
    "srv.s2t":        { sv: "Managementkonsulting", en: "Management Consulting" },
    "srv.s2d":        { sv: "Strategisk vägledning och rådgivning till ledningsgrupper i förändring och tillväxt.", en: "Strategic guidance and advice for leadership teams in change and growth." },
    "srv.s3t":        { sv: "Projekt- & portföljgranskning", en: "Project & Portfolio Review" },
    "srv.s3d":        { sv: "Oberoende bedömningar av investeringar och projekt, med beslutsstöd till ledningen.", en: "Independent assessment of investments and projects, with decision support for management." },
    "srv.s4t":        { sv: "Affärs- & verksamhetsutveckling", en: "Business & Operational Development" },
    "srv.s4d":        { sv: "Identifiering och genomförande av affärsmöjligheter för ökad kundnytta och konkurrenskraft.", en: "Identifying and realising opportunities for greater customer value and competitiveness." },
    "srv.s5t":        { sv: "IT-strategi & förändring", en: "IT Strategy & Change" },
    "srv.s5d":        { sv: "Strategisk rådgivning i IT-intensiva förändringsskeden, från vision till handlingsplan.", en: "Strategic advice in IT-intensive change, from vision to action plan." },
    "srv.cta":        { sv: "Boka ditt första möte med mig", en: "Book your first meeting with me" },

    // About teaser
    "abt.title":      { sv: "Decennier av projektledning", en: "Decades of project management" },
    "abt.link":       { sv: "Se hela min tidslinje", en: "See my full timeline" },

    // CTA band
    "cta.title":      { sv: "Redo att diskutera ditt projekt?", en: "Ready to discuss your project?" },
    "cta.sub":        { sv: "Boka ett kostnadsfritt första möte så lyssnar jag på din situation och föreslår nästa steg.", en: "Book a free first meeting and I will listen to your situation and suggest the next step." },
    "cta.btn":        { sv: "Boka ditt första möte med mig", en: "Book your first meeting with me" },

    // Services page
    "svc.title":      { sv: "Tjänster", en: "Services" },
    "svc.subtitle":   { sv: "Vägledning och extern hjälp med projekt – inom alla branscher.", en: "Guidance and external help with projects – across all sectors." },
    "svc.c1t":        { sv: "Projektledning", en: "Project Management" },
    "svc.c1d":        { sv: "Jag driver projekt från start till mål: tydlig styrning, planering, uppföljning och leverans i tid och inom budget.", en: "I drive projects from start to finish: clear governance, planning, follow-up and delivery on time and on budget." },
    "svc.c1b1":       { sv: "Planering & styrning", en: "Planning & governance" },
    "svc.c1b2":       { sv: "Budget- & tidsansvar", en: "Budget & schedule ownership" },
    "svc.c1b3":       { sv: "Kommunikation & stakeholders", en: "Communication & stakeholders" },
    "svc.c2t":        { sv: "Managementkonsulting", en: "Management Consulting" },
    "svc.c2d":        { sv: "Strategisk vägledning för ledningsgrupper – omsätter ambition till struktur och handling.", en: "Strategic guidance for leadership teams – turning ambition into structure and action." },
    "svc.c2b1":       { sv: "Strategi till handling", en: "Strategy to action" },
    "svc.c2b2":       { sv: "Beslutsstöd", en: "Decision support" },
    "svc.c2b3":       { sv: "Organisationsutveckling", en: "Organisation development" },
    "svc.c3t":        { sv: "Projekt- & portföljgranskning", en: "Project & Portfolio Review" },
    "svc.c3d":        { sv: "Oberoende granskning av investeringar, portföljer och projekt – med skarpt beslutsstöd till ledningen.", en: "Independent review of investments, portfolios and projects – with sharp decision support for management." },
    "svc.c3b1":       { sv: "Investment Appraisal", en: "Investment appraisal" },
    "svc.c3b2":       { sv: "Risk- & kvalitetsgranskning", en: "Risk & quality review" },
    "svc.c3b3":       { sv: "Oberoende till ledningen", en: "Independent of management" },
    "svc.c4t":        { sv: "Affärs- & verksamhetsutveckling", en: "Business & Operational Development" },
    "svc.c4d":        { sv: "Jag identifierar och genomför affärs- och verksamhetsmöjligheter som stärker kundnytta och konkurrenskraft.", en: "I identify and realise business and operational opportunities that strengthen customer value and competitiveness." },
    "svc.c4b1":       { sv: "Affärsmöjligheter", en: "Business opportunities" },
    "svc.c4b2":       { sv: "Processarbete", en: "Process work" },
    "svc.c4b3":       { sv: "Innovation & koncept", en: "Innovation & concepts" },
    "svc.c5t":        { sv: "IT-strategi & förändring", en: "IT Strategy & Change" },
    "svc.c5d":        { sv: "Strategisk rådgivning i IT-intensiva förändringsskeden – från vision och IT-plan till genomförande.", en: "Strategic advice in IT-intensive change – from vision and IT plan to implementation." },
    "svc.c5b1":       { sv: "IT-strategi & IT-plan", en: "IT strategy & plan" },
    "svc.c5b2":       { sv: "Teknik- & verksamhetsförankring", en: "Technology & business alignment" },
    "svc.c5b3":       { sv: "Förändringsledning", en: "Change leadership" },
    "svc.ctaTitle":   { sv: "Vilket projekt har du på gång?", en: "What project do you have coming up?" },
    "svc.ctaSub":     { sv: "Berätta om din situation – så föreslår jag hur jag kan hjälpa.", en: "Tell me about your situation – and I will suggest how I can help." },
    "svc.ctaBtn":     { sv: "Boka ditt första möte med mig", en: "Book your first meeting with me" },

    // About page
    "abt2.title":     { sv: "Om Glenn", en: "About Glenn" },
    "abt2.eyebrow":   { sv: "Om Glenn", en: "About Glenn" },
    "abt2.subtitle":  { sv: "Projektledare, konsult och värderingsdriven partner.", en: "Project lead, consultant and values-driven partner." },
    "abt2.h2":        { sv: "Vem jag är", en: "Who I am" },
    "abt2.b1":        { sv: "Jag är Glenn Spenner – konsult med över 40 års erfarenhet av projektledning.", en: "I am Glenn Spenner – a consultant with more than 40 years of project management experience." },
    "abt2.b2":        { sv: "Jag har byggt allt från affärssystem och IT-strategier till stora projekt inom förnybar energi. Hos Örsted och Dong Energy har jag under ett decennium granskat investeringar i miljardklassen och gett beslutsstöd till ledningen.", en: "I have built everything from ERP systems and IT strategies to large renewable-energy projects. At Ørsted and Dong Energy I spent a decade reviewing billion-scale investments and supporting management decisions." },
    "abt2.b3":        { sv: "Gemensamt för allt arbete: tydlig struktur, äkta engagemang och resultat som består. Det är vad du får när du bokar ett möte med mig.", en: "What all my work shares: clear structure, genuine commitment and results that last. That is what you get when you book a meeting with me." },
    "abt2.fact1k":    { sv: "40+", en: "40+" },
    "abt2.fact1v":    { sv: "Års erfarenhet", en: "Years of experience" },
    "abt2.fact2k":    { sv: "18+", en: "18+" },
    "abt2.fact2v":    { sv: "Kända uppdragsgivare", en: "Named clients" },
    "abt2.fact3k":    { sv: "4", en: "4" },
    "abt2.fact3v":    { sv: "Decennier i energisektorn", en: "Decades in energy" },
    "abt2.photo":     { sv: "Porträtt av Glenn Spenner", en: "Portrait of Glenn Spenner" },
    "tl.eyebrow":     { sv: "Erfarenhet", en: "Experience" },
    "tl.title":       { sv: "Min resa, som en lång tidslinje", en: "My journey, as one long timeline" },
    "tl.lead":        { sv: "Senaste åren högst upp. Varje period är en organisation jag engagerat mig i.", en: "Most recent years at the top. Each period is an organisation I have been involved with." },
    "tl.more":        { sv: "Vill du höra mer om ett specifikt uppdrag? Boka ett möte.", en: "Want to hear more about a specific assignment? Book a meeting." },
    "tl.cta":         { sv: "Boka ditt första möte med mig", en: "Book your first meeting with me" },
    "tl.o1":          { sv: "Chef för projekt- & portföljgranskning av investeringar i miljardklassen – beslutsstöd till ledningen i förnybar energi.", en: "Head of project & portfolio review for billion-scale investments – decision support to management in renewable energy." },
    "tl.o2":          { sv: "Från After Sales Planner till Consumer Portfolio Manager – planering och en bättre kundupplevelse efter försäljning.", en: "From After Sales Planner to Consumer Portfolio Manager – planning and a better post-sales customer experience." },
    "tl.o3":          { sv: "Management- & strategikonsult – ökade kundernas nytta med internet och drev IT-strategi för Öresundskraft.", en: "Management & strategy consultant – increased clients' value from the internet and led IT strategy for Øresundskraft." },
    "tl.o4":          { sv: "Projektledare & SAP-chef – uppdrag hos Föreningssparbanken, Ericsson, Tele2 och SAS.", en: "Project manager & SAP lead – assignments for Föreningssparbanken, Ericsson, Tele2 and SAS." },
    "tl.o5":          { sv: "Projektledning för SAP R/3 – Lever Nordic först av 17 länder, med tid i Storbritannien och utbildning hos Unilever Europe.", en: "Project leadership for SAP R/3 – Lever Nordic first of 17 countries, with time in the UK and training at Unilever Europe." },
    "tl.o6":          { sv: "IT- & affärsutvecklingskonsult – avancerade till projektledare hos företagets största kund.", en: "IT & business development consultant – progressed to project lead for the company's largest client." },
    "tl.o7":          { sv: "Projektchef för allt från radio-planering och Eurobonus till affärssystem och webbinfrastruktur.", en: "Project lead for everything from radio planning and Eurobonus to business systems and web infrastructure." },
    "tl.o8":          { sv: "Låg grunden i administration och systemkonvertering – mitt intresse för processer och system väcktes.", en: "Built the foundation in administration and system conversion – sparking my interest in processes and systems." },
    "tl.eduTitle":    { sv: "Utbildning & kompetens", en: "Education & skills" },
    "tl.edub1t":      { sv: "Lunds Universitet", en: "Lund University" },
    "tl.edub1d":      { sv: "ADB & Företagsekonomi (60+60 p) – strategi, styrsystem och konsultmetodik.", en: "Informatics & Business Administration – strategy, control systems and consulting method." },
    "tl.edub2t":      { sv: "SAP R/3", en: "SAP R/3" },
    "tl.edub2d":      { sv: "Modulerna SD, MM och FI/CO AM.", en: "The SD, MM and FI/CO AM modules." },
    "tl.edub3t":      { sv: "Ledarskap & metod", en: "Leadership & method" },
    "tl.edub3d":      { sv: "Unilever Europe BPR/ledarskap, PPS, PROPS, Six Sigma, Matrix, Örsted Project Model.", en: "Unilever Europe BPR/leadership, PPS, PROPS, Six Sigma, Matrix, Ørsted Project Model." },
    "tl.edub4t":      { sv: "Försäljning & kund", en: "Sales & client" },
    "tl.edub4d":      { sv: "Cultivator konsultativ försäljning samt SPIN-försäljning enligt Huthwaite.", en: "Cultivator consultative selling and Huthwaite SPIN selling." },

    // Contact / booking
    "ct.title":       { sv: "Kontakt & Boka Möte", en: "Contact & Book a Meeting" },
    "ct.eyebrow":     { sv: "Kontakt", en: "Contact" },
    "ct.subtitle":    { sv: "Redo för ditt första möte? Kontakta mig direkt eller fyll i formuläret.", en: "Ready for your first meeting? Reach out directly or use the form." },
    "ct.forTitle":    { sv: "Boka ditt första möte", en: "Book your first meeting" },
    "ct.forLead":     { sv: "Jag återkommer inom en vardag med förslag på tid.", en: "I will get back to you within one business day with a suggested time." },
    "ct.phone":       { sv: "Ring direkt", en: "Call directly" },
    "ct.email":       { sv: "Mejla", en: "Email" },
    "ct.address":     { sv: "Kontor", en: "Office" },
    "ct.addressV":    { sv: "Sånekullavägen 43, SE-217 74 Malmö", en: "Sånekullavägen 43, SE-217 74 Malmö" },
    "ct.name":        { sv: "Namn", en: "Name" },
    "ct.emailF":      { sv: "E-post", en: "Email" },
    "ct.company":     { sv: "Företag", en: "Company" },
    "ct.subject":     { sv: "Ärende", en: "Subject" },
    "ct.subjectPh":   { sv: "Vad rör mötet?", en: "What is the meeting about?" },
    "ct.subject1":    { sv: "Projektledning", en: "Project management" },
    "ct.subject2":    { sv: "Managementkonsulting", en: "Management consulting" },
    "ct.subject3":    { sv: "Portfölj- & projektgranskning", en: "Portfolio & project review" },
    "ct.subject4":    { sv: "Affärs- & verksamhetsutveckling", en: "Business & operational development" },
    "ct.subject5":    { sv: "IT-strategi & förändring", en: "IT strategy & change" },
    "ct.subject6":    { sv: "Övrigt", en: "Other" },
    "ct.message":     { sv: "Meddelande", en: "Message" },
    "ct.messagePh":   { sv: "Berätta kort om din situation och vad du vill uppnå.", en: "Briefly describe your situation and what you want to achieve." },
    "ct.req":         { sv: "Obligatoriska fält.", en: "Required fields." },
    "ct.send":        { sv: "Skicka bokningsförfrågan", en: "Send booking request" },
    "ct.sending":     { sv: "Skickar…", en: "Sending…" },
    "ct.err":         { sv: "Var vänlig fyll i alla obligatoriska fält korrekt.", en: "Please fill in all required fields correctly." },
    "ct.successPre":  { sv: "Tack ", en: "Thank you " },
    "ct.successMid":  { sv: "! Din bokningsförfrågan har skickats. Jag återkommer inom en vardag.", en: "! Your booking request has been sent. I will get back to you within one business day." },
    "ct.hours":       { sv: "Svarstid", en: "Response time" },
    "ct.hoursV":      { sv: "Inom en vardag", en: "Within one business day" },

    // Footer
    "ft.tagline":     { sv: "Projektledning som levererar effektiva, värderingsdrivna och mätbara resultat.", en: "Project management that delivers effective, values-driven and measurable results." },
    "ft.nav":         { sv: "Navigation", en: "Navigation" },
    "ft.contact":     { sv: "Kontakt", en: "Contact" },
    "ft.copyright":   { sv: "Spenner Consulting. Alla rättigheter förbehållna.", en: "Spenner Consulting. All rights reserved." }
  };

  function t(key, lang) {
    var entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.sv;
  }

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Footer year ---------- */
    var yearEls = document.querySelectorAll("[data-year]");
    var now = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = now; });

    /* ---------- Language / i18n ---------- */
    var savedLang = localStorage.getItem("sc-lang") || "sv";
    function setLang(lang, persist) {
      document.documentElement.lang = lang;
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var k = el.getAttribute("data-i18n");
        if (translations[k]) el.textContent = t(k, lang);
      });
      document.querySelectorAll("[data-placeholder-i18n]").forEach(function (el) {
        var k = el.getAttribute("data-placeholder-i18n");
        if (translations[k]) el.setAttribute("placeholder", t(k, lang));
      });
      var btns = document.querySelectorAll("[data-lang-toggle]");
      btns.forEach(function (b) {
        b.textContent = lang === "sv" ? "EN" : "SV";
        b.setAttribute("aria-label", t("i18n.toggle", lang));
      });
      if (persist) localStorage.setItem("sc-lang", lang);
    }
    var langBtn = document.querySelector("[data-lang-toggle]");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var next = document.documentElement.lang === "sv" ? "en" : "sv";
        setLang(next, true);
      });
    }
    setLang(savedLang, false);

    /* ---------- Mobile navigation ---------- */
    var toggleBtn = document.querySelector("[data-nav-toggle]");
    var navMenu = document.querySelector("[data-nav-menu]");
    if (toggleBtn && navMenu) {
      function closeNav() {
        navMenu.classList.add("hidden");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
      toggleBtn.addEventListener("click", function () {
        var open = navMenu.classList.toggle("hidden") === false;
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      navMenu.addEventListener("click", function (e) {
        if (e.target.closest("a")) closeNav();
      });
    }

    /* ---------- Contact / booking form ---------- */
    var form = document.getElementById("contactForm");
    if (form) {
      var statusEl = document.getElementById("formStatus");
      var sendBtn = form.querySelector("button[type=submit]");
      var sendOriginal = sendBtn ? sendBtn.textContent : "";

      function setStatus(message, type) {
        statusEl.textContent = message;
        statusEl.className = "mt-4 text-sm font-medium " + (type === "success" ? "text-teal-700" : "text-red-600");
      }
      function clearStatus() {
        if (statusEl) statusEl.textContent = "";
      }
      function isValidEmail(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      }
      function mark(el, invalid) {
        if (!el) return;
        el.classList.toggle("ring-2", invalid);
        el.classList.toggle("ring-red-400", invalid);
        el.classList.toggle("border-red-300", invalid);
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearStatus();

        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");
        var lang = document.documentElement.lang;
        var valid = true, firstInvalid = null;

        [name, email, message].forEach(function (f) { mark(f, false); });

        if (!name || name.value.trim() === "") { mark(name, true); valid = false; firstInvalid = firstInvalid || name; }
        if (!email || !isValidEmail(email.value.trim())) { mark(email, true); valid = false; firstInvalid = firstInvalid || email; }
        if (!message || message.value.trim() === "") { mark(message, true); valid = false; firstInvalid = firstInvalid || message; }

        if (!valid) { setStatus(t("ct.err", lang), "error"); if (firstInvalid) firstInvalid.focus(); return; }

        var data = {
          name: name.value.trim(),
          email: email.value.trim(),
          company: (document.getElementById("company") || {}).value ?
            document.getElementById("company").value.trim() : "",
          subject: (document.getElementById("subject") || {}).value || "",
          message: message.value.trim()
        };

        if (sendBtn) sendBtn.textContent = t("ct.sending", lang);

        // TODO: Anslut till en e-posttjänst (t.ex. Formspree) eller backend här.
        // Exempel: fetch("https://formspree.io/f/YOUR_ID", { method: "POST",
        //   headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })

        setTimeout(function () {
          form.reset();
          setStatus(t("ct.successPre", lang) + data.name + t("ct.successMid", lang), "success");
          if (sendBtn && sendOriginal) sendBtn.textContent = sendOriginal;
        }, 400);
      });
    }

  });
})();