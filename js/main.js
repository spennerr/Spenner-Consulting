(function () {
  "use strict";

  var translations = {
    "nav.hem":        { sv: "Hem",                 en: "Home" },
    "nav.tjanster":   { sv: "Tjänster",            en: "Services" },
    "nav.omGlenn":    { sv: "Om Glenn",            en: "About Glenn" },
    "nav.kontakt":    { sv: "Kontakt",             en: "Contact" },
    "nav.erfarenheter": { sv: "Erfarenheter",       en: "Experience" },
    "nav.boka":       { sv: "Boka Möte",           en: "Book a Meeting" },
    "a11y.skip":      { sv: "Hoppa till innehåll", en: "Skip to content" },
    "i18n.toggle":    { sv: "Byt språk till engelska", en: "Switch to Swedish" },
    "home.story":     { sv: "SPENNER Consulting finns för att skapa ordning i det som känns komplext och rörigt.", en: "SPENNER Consulting exists to create order in what feels complex and messy." },
    "hero.tjanster":  { sv: "Mina tjänster", en: "My Services" },
    "home.visionEyebrow": { sv: "Vision", en: "Vision" },
    "home.visionTitle": { sv: "Att göra det komplexa enkelt.", en: "Making the complex simple." },
    "home.visionLead":  { sv: "Att vara den mest betrodda partnern för organisationer som vill omsätta strategi till verklig förändring och där varje projekt drivs med tydlighet, riktning och resultat.", en: "I want to be the most trusted partner for organisations that want to turn strategy into real change, with clarity, direction and results. " },
    "home.visionSub":   { sv: "Vad det innebär i praktiken", en: "What this means in practice" },
    "home.visionB1":    { sv: "Strategier som blir verklighet, inte bara dokument", en: "Strategies that become reality, not just documents" },
    "home.visionB2":    { sv: "Varje projekt drivs med tydlig styrning och uppföljning", en: "Every project runs with clear governance and follow-up" },
    "home.visionB3":    { sv: "Bestående förändring som engagerar hela organisationen", en: "Lasting change that engages the whole organisation" },
    "home.missionEyebrow": { sv: "Mission", en: "Mission" },
    "home.missionTitle": { sv: "Jag hjälper organisationer att skapa klarhet i komplexa projekt.", en: "I help organisations create clarity in complex projects." },
    "home.missionLead":  { sv: "Levererar projektledning och managementkonsulting som förenar strategisk skärpa med praktiskt genomförande, så att mina kunder når sina mål snabbare, säkrare och med bestående effekt.", en: "Delivering project management and management consulting that combine strategic sharpness with practical execution, so my clients reach their goals faster, more safely and with lasting effect." },
    "home.missionSub":   { sv: "Så här arbetar jag", en: "This is how I work" },
    "home.missionB1":    { sv: "Konkreta leveranser och mätbara framsteg i varje fas", en: "Concrete deliverables and measurable progress in every phase" },
    "home.missionB2":    { sv: "Pragmatiska och genomförbara rekommendationer", en: "Pragmatic and actionable recommendations" },
    "home.missionB3":    { sv: "Nära samarbete med din organisation, inget lämnas åt slumpen", en: "Close collaboration with your organisation, nothing is left to chance" },
    "home.valuesKicker": { sv: "Vad jag står för", en: "What I stand for" },
    "home.valuesTitle":  { sv: "Värdegrund", en: "Values" },
    "home.valuesLead":   { sv: "Fem principer som vägleder varje uppdrag jag tar mig an.", en: "Five principles that guide every assignment I take on." },
    "home.val1": { sv: "Struktur", en: "Structure" },
    "home.val2": { sv: "Samarbete", en: "Collaboration" },
    "home.val3": { sv: "Personligt ledarskap", en: "Personal leadership" },
    "home.val4": { sv: "Resultat", en: "Results" },
    "home.val5": { sv: "Transparens", en: "Transparency" },
    "home.val1d": { sv: "Ordning som gör det komplexa greppbart.", en: "Order that makes the complex graspable." },
    "home.val2d": { sv: "Långsiktiga relationer bygger resultat.", en: "Long-term relationships build results." },
    "home.val3d": { sv: "Ägande och ansvar i varje steg.", en: "Ownership and accountability at every step." },
    "home.val4d": { sv: "Mätbara framsteg i varje fas.", en: "Measurable progress in every phase." },
    "home.val5d": { sv: "Ärlighet och tydlighet är grunden för förtroende.", en: "Honesty and clarity build trust." },
    "home.aboutTitle":   { sv: "Om Spenner Consulting", en: "About Spenner Consulting" },
    "home.aboutText1":   { sv: "SPENNER Consulting drivs av Glenn Spenner.", en: "SPENNER Consulting is driven by Glenn Spenner." },
    "home.aboutText2":   { sv: "Jag hjälper företag och ledare att skapa klarhet, fatta bättre beslut och nå hållbara resultat. Med strategisk rådgivning, affärsförståelse och ett pragmatiskt arbetssätt skapar jag verkligt värde på riktigt.", en: "I help companies and leaders create clarity, make better decisions and reach sustainable results. With strategic advice, business understanding and a pragmatic approach, I create real value for real." },
    "home.aboutSign":    { sv: "Glenn Spenner", en: "Glenn Spenner" },
    "srv.eyebrow":    { sv: "Tjänster", en: "Services" },
    "srv.lead":       { sv: "Fem sätt jag hjälper organisationer skapa ordning i det komplexa, oavsett om det gäller projekt, ledning eller nya affärsidéer.", en: "Five ways I help organisations create order in the complex, whether it concerns projects, management or new business ideas." },
    "svc.title":      { sv: "Tjänster", en: "Services" },
    "svc.c1t":        { sv: "Projektledning", en: "Project Management" },
    "svc.c1d":        { sv: "Ledning av projekt från start till mål, med tydlig styrning, planering och uppföljning.", en: "Management of projects from start to finish, with clear governance, planning and follow-up." },
    "svc.c2t":        { sv: "Management support", en: "Management Support" },
    "svc.c2d":        { sv: "Strategisk vägledning och rådgivning för ledningsgrupper i förändring och tillväxt.", en: "Strategic guidance and advice for management teams in change and growth." },
    "svc.c3t":        { sv: "Affärsutveckling", en: "Business Development" },
    "svc.c3d":        { sv: "Identifiering och genomförande av affärsmöjligheter för ökad kundnytta och konkurrenskraft.", en: "Identifying and executing business opportunities for greater customer value and competitiveness." },
    "svc.c4t":        { sv: "Process- & verksamhetsutveckling", en: "Process & Business Development" },
    "svc.c4d":        { sv: "Verksamhetsförändringar genom strukturerat processarbete, från nulägesanalys till implementering av hållbara arbetssätt.", en: "Business change through structured process work, from current-state analysis to implementing sustainable ways of working." },
    "svc.c5t":        { sv: "Kreativ partner & idéutveckling", en: "Creative Partner & Idea Development" },
    "svc.c5d":        { sv: "En kreativ partner för innovativa affärsidéer och koncept, jag hjälper dig se verksamheten från både utsidan och insidan.", en: "A creative partner for innovative business ideas and concepts, I help you see the business from both the outside and the inside." },
    "svc.ctaTitle":   { sv: "Redo att skapa ordning i det som känns komplext?", en: "Ready to create order in what feels complex?" },
    "svc.ctaLead":    { sv: "Boka en kostnadsfri inledande dialog, vi kartlägger dina behov och pratar igenom hur vi bäst tar nästa steg.", en: "Book a free initial conversation, we map out your needs and discuss the best next step." },
    "abt2.eyebrow":   { sv: "Om mig", en: "About me" },
    "abt2.title":     { sv: "Lär känna mig", en: "Get to know me" },
    "abt2.bioHeading": { sv: "Senior konsult med hjärta för förändring", en: "Senior consultant with a passion for change" },
    "abt2.lead1":     { sv: "Jag är en senior projektledare och managementkonsult med över 30 års erfarenhet av att driva projekt och förändringsarbete inom IT, energi och telekom.", en: "I am a senior project manager and management consultant with over 30 years of experience leading projects and transformation work in IT, energy and telecom." },
    "abt2.lead2":     { sv: "Min styrka är att omsätta strategier till konkreta resultat, genom tydlig styrning, nära samarbete och ett pragmatiskt arbetssätt. Oavsett om det handlar om stora portföljer, komplexa projekt eller strategisk rådgivning, strävar jag efter mätbara framsteg i varje fas.", en: "My strength is turning strategies into concrete results, through clear governance, close collaboration and a pragmatic approach. Whether it involves large portfolios, complex projects or strategic advisory, I strive for measurable progress in every phase." },
    "abt2.lead3":     { sv: "Nyfiken på hur jag kan bidra till just din organisation, som konsult eller anställd? Då ser jag fram emot att höra av dig.", en: "Curious about how I can contribute to your organisation, as a consultant or employee? I look forward to hearing from you." },
    "abt2.quality":   { sv: "Jag fokuserar på kvalitet och förutsättningar för att ha allt under kontroll. Jag är serviceinriktad och flexibel. Mina arbetsuppgifter är inriktade på:", en: "I focus on quality and on ensuring everything is under control. I am service-oriented and flexible. My assignments are oriented towards:" },
    "abt2.q1":        { sv: "Styrning och överblick", en: "Governance and overview" },
    "abt2.q2":        { sv: "Struktur och noggrannhet", en: "Structure and precision" },
    "abt2.q3":        { sv: "Kundperspektiv", en: "Customer perspective" },
    "abt2.btnContact": { sv: "Kontakta mig", en: "Contact me" },
    "abt2.btnCv":      { sv: "CV", en: "CV" },
    "exp.eyebrow":    { sv: "Erfarenheter", en: "Experience" },
    "exp.title":      { sv: "Erfarenheter", en: "Experience" },
    "exp.filterAll":  { sv: "Alla", en: "All" },
    "exp.filterAnst": { sv: "Anställningar", en: "Employments" },
    "exp.filterUppd": { sv: "Uppdrag", en: "Assignments" },
    "exp.filterEdu":  { sv: "Utbildningar", en: "Education" },
    "exp.ganttTitle": { sv: "Min yrkesbana, i ett Gantt-schema", en: "My career, in a Gantt chart" },
    "exp.listTitle":  { sv: "Min yrkesbana, samlad som lista", en: "My career, as a list" },
    "exp.viewGantt":  { sv: "Tidslinje", en: "Timeline" },
    "exp.viewList":   { sv: "Lista", en: "List" },
    "exp.legendAnst": { sv: "Anställning", en: "Employment" },
    "exp.legendUppd": { sv: "Uppdrag", en: "Assignment" },
    "exp.legendEdu":  { sv: "Utbildning & kompetens", en: "Education & skills" },
    "exp.axisYear":   { sv: "År", en: "Year" },
    "exp.today":      { sv: "i dag", en: "today" },
    "exp.badgeAnst":  { sv: "Anställning", en: "Employment" },
    "exp.badgeUppd":  { sv: "Uppdrag", en: "Assignment" },
    "exp.badgeEdu":   { sv: "Utbildning", en: "Education" },
    "exp.readMore":    { sv: "Läs mer", en: "Read more" },
    "exp.modalClose":  { sv: "Stäng", en: "Close" },
    "exp.modalRole":   { sv: "Roll", en: "Role" },
    "exp.modalPlace":  { sv: "Plats", en: "Location" },
    "exp.modalDesc":   { sv: "Beskrivning", en: "Description" },
    "exp.modalEdu":    { sv: "Utbildningar", en: "Education & training" },
    "exp.modalUppd":   { sv: "Uppdrag", en: "Assignments" },
    "ct.title":       { sv: "Kontakt & Boka Möte", en: "Contact & Book a Meeting" },
    "ct.eyebrow":     { sv: "Kontakt", en: "Contact" },
    "ct.subtitle":    { sv: "Redo för ditt första möte? Kontakta mig direkt eller fyll i formuläret.", en: "Ready for your first meeting? Reach out directly or use the form." },
    "ct.forTitle":    { sv: "Boka ditt första möte", en: "Book your first meeting" },
    "ct.forLead":     { sv: "Jag återkommer inom en vardag med förslag på tid.", en: "I will get back to you within one business day with a suggested time." },
    "ct.directTitle": { sv: "Vill du hellre ta direktkontakt?", en: "Would you rather contact me directly?" },
    "ct.directLead":  { sv: "Mejla mig direkt, så återkommer jag snarast.", en: "Email me directly and I will get back to you as soon as possible." },
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
    "ct.fail":        { sv: "Något gick fel. Försök igen, eller mejla mig direkt på consulting@spenner.com.", en: "Something went wrong. Please try again, or email me directly at consulting@spenner.com." },
    "ct.successPre":  { sv: "Tack ", en: "Thank you " },
    "ct.successMid":  { sv: "! Din bokningsförfrågan har skickats. Jag återkommer inom en vardag.", en: "! Your booking request has been sent. I will get back to you within one business day." },
    "ct.hours":       { sv: "Svarstid", en: "Response time" },
    "ct.hoursV":      { sv: "Inom en vardag", en: "Within one business day" },
    "ft.tagline":     { sv: "Projektledning som levererar effektiva, värderingsdrivna och mätbara resultat.", en: "Project management that delivers effective, values-driven and measurable results." },
    "ft.nav":         { sv: "Navigation", en: "Navigation" },
    "ft.services":    { sv: "Tjänster", en: "Services" },
    "ft.contact":     { sv: "Kontakt", en: "Contact" },
    "ft.top":         { sv: "Till toppen", en: "Back to top" },
    "ft.copyright":   { sv: "Spenner Consulting. Alla rättigheter förbehållna.", en: "Spenner Consulting. All rights reserved." }
  };

  function t(key, lang) {
    var entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.sv;
  }

  document.addEventListener("DOMContentLoaded", function () {

    
    var yearEls = document.querySelectorAll("[data-year]");
    var now = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = now; });

    
    var savedLang = localStorage.getItem("sc-lang") || "sv";
    var cvPdf = {
      sv: "Cv%20l%C3%A4nk/Curriculum%20Vitae%20Glenn%20Spenner%20Swe.pdf",
      en: "Cv%20l%C3%A4nk/Curriculum%20Vitae%20Glenn%20Spenner%20Eng.pdf"
    };
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
      document.querySelectorAll("[data-cv-link]").forEach(function (el) {
        el.setAttribute("href", cvPdf[lang] || cvPdf.en);
      });
      var btns = document.querySelectorAll("[data-lang-toggle]");
      btns.forEach(function (b) {
        b.textContent = lang === "sv" ? "EN" : "SV";
        b.setAttribute("aria-label", t("i18n.toggle", lang));
      });
      if (persist) localStorage.setItem("sc-lang", lang);
      if (typeof renderView === "function") renderView(lang);
    }
    var langBtn = document.querySelector("[data-lang-toggle]");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var next = document.documentElement.lang === "sv" ? "en" : "sv";
        setLang(next, true);
      });
    }
    
    var GANTT_START = 1980;
    var GANTT_END = 2027;

    var ganttRowsData = [
      { from: 2026.583333, to: null, type: "anst", display: { sv: "SPENNER Consulting", en: "SPENNER Consulting" }, place: { sv: "Malmö", en: "Malmö" }, role: { sv: "VD, managementkonsult, projektledare.", en: "CEO, Management Consultant, Project Manager." }, desc: { sv: "Hjälper företag och ledare att skapa klarhet, fatta bättre beslut och nå hållbara resultat.", en: "Helps companies and leaders gain clarity, make better decisions and reach sustainable results." } },
      { from: 2012, to: 2026, type: "anst", display: { sv: "Ørsted", en: "Ørsted" }, place: { sv: "Köpenhamn, London", en: "Copenhagen, London" }, role: { sv: "Senior projektgranskningschef, investeringsbedömningschef", en: "Senior Chief Project Review Manager, Investment Appraisal Manager" }, desc: { sv: "Ansvar för investeringsbedömningar (Investment Appraisals) och beslutsstöd till ledningen.", en: "Responsible for investment appraisals and decision support to the Executive team." }, sub: [
        { from: 2012, to: 2012, type: "edu", display: { sv: "Formel 1 (Projekt model)", en: "Formel 1 (project methodology)" } },
        { from: 2015, to: 2015, type: "edu", display: { sv: "PMI (Project Management Institute)", en: "PMI (Project Management Institute)" } } ] },
      { from: 2006, to: 2012, type: "anst", display: { sv: "Sony Mobile (SonyEricsson)", en: "Sony Mobile (SonyEricsson)" }, place: { sv: "Lund", en: "Lund" }, role: { sv: "Eftermarknadsportfölj ansvarig, Projektledare, Affärsrelationsansvarig (BRM)", en: "Customer Service Consumer Portfolio Manager, Head of Customer Service Planning, After Sales Planner, Project Manager, Business Relationship Manager (BRM)" }, desc: { sv: "Eftermarknads portfölj ansvarig för tjänster och produkter till mobila slutanvändare samt IT BRM med budget ansvar.", en: "Aftermarket portfolio manager responsible for services and products for mobile end users, as well as IT BRM with budget responsibility." }, sub: [
        { from: 2005, to: 2006, type: "uppd", display: { sv: "Senior Projektledare", en: "Senior Project Manager" } },
        { from: 2007, to: 2007, type: "edu", display: { sv: "Operator Corporate Simulation", en: "Operator Corporate Simulation" } },
        { from: 2008, to: 2008, type: "edu", display: { sv: "Leadership Live", en: "Leadership Live" } },
        { from: 2008, to: 2008, type: "edu", display: { sv: "GOAL, Telecom Corporate Simulation", en: "GOAL, Telecom Corporate Simulation" } } ] },
      { from: 2004, to: 2006, type: "anst", display: { sv: "Teleca Software Solutions AB", en: "Teleca Software Solutions AB" }, place: { sv: "Lund, Malmö", en: "Lund, Malmö" }, role: { sv: "Senior Projektledare", en: "Senior Project Manager" }, desc: { sv: "Ledde mjukvaruutvecklingsprojekt till kunder inom mobiltelefonindustrin.", en: "Led software development projects for clients in the mobile phone industry." } },
      { from: 2003, to: 2004, type: "uppd", display: { sv: "Home Entertainment", en: "Home Entertainment" }, place: { sv: "Malmö", en: "Malmö" }, role: { sv: "Senior Projektledare", en: "Project Manager" }, desc: { sv: "Projektleda framtagningen av system-specifikation för nytt affärssystem.", en: "Project manage the development of a system specification for a new business system." } },
      { from: 2002, to: 2004, type: "anst", display: { sv: "SPENNER Consulting", en: "SPENNER Consulting" }, place: { sv: "Malmö", en: "Malmö" }, role: { sv: "VD, managementkonsult, projektledare.", en: "CEO, Management Consultant, Project Manager." }, desc: { sv: "Hjälper företag och ledare att skapa klarhet, fatta bättre beslut och nå hållbara resultat.", en: "Helps companies and leaders gain clarity, make better decisions and reach sustainable results." } },
      { from: 2002, to: 2003, type: "uppd", display: { sv: "Deva Consulting Group", en: "Deva Consulting Group" }, place: { sv: "Malmö", en: "Malmö" }, role: { sv: "Verksamhetskonsult/förändringsledare/projektledare.", en: "Business consultant/change manager/project manager" }, desc: { sv: "Utföra Diagnoser (screening) och Business Case för kunder för att ge dem underlag för att besluta om vad som skapar nytta för verksamheten. Bolaget bestod av mig och två erfarna seniora medarbetare.", en: "Perform Diagnostics (screening) and Business Cases for clients to give them a basis for deciding what creates value for the business. The company consisted of me and two experienced senior employees." } },
      { from: 2002, to: 2002, type: "uppd", display: { sv: "QuickWise", en: "QuickWise" }, place: { sv: "Malmö, Stockholm, London, Nottingham", en: "Malmö, Stockholm, London, Nottingham" }, role: { sv: "Senior Projektledare", en: "Project Manager" }, desc: { sv: "Projektledare för införande av ny infrastruktur, e-posthantering samt CRM för bättre samverkan mellan QuickWise kontor i Malmö, Stockholm, London och Nottingham.", en: "Project manager for the implementation of new infrastructure, email management, and CRM for better collaboration between QuickWise offices in Malmö, Stockholm, London, and Nottingham." } },
      { from: 2001.666667, to: 2002.583333, type: "uppd", display: { sv: "ASPERITY", en: "ASPERITY" }, place: { sv: "Malmö", en: "Malmö" }, role: { sv: "Verksamhetskonsult/förändringsledare/projektledare.", en: "Business consultant/change manager/project manager" }, desc: { sv: "Skapa Öresundskrafts IT-strategi för koncernen, utifrån den IT-vision vi tog fram. Målet var att skapa medvetenhet kring IS/IT och få koncernen att använda IS/IT för att skapa kundnytta och bättre service för kunder, leverantörer och andra intressenter.", en: "Create Öresundskraft's IT strategy for the group, based on the IT vision we developed. The goal was to create awareness around IS/IT and get the group to use IS/IT to create customer value and better service for customers, suppliers and other stakeholders." } },
      { from: 2001.25, to: 2001.833333, type: "uppd", display: { sv: "Öresundskraft", en: "Öresundskraft" }, place: { sv: "Helsingborg", en: "Helsingborg" }, role: { sv: "Affärsområdeschef, Senior Projektledare", en: "Business Area Manager, Senior Project Manager" }, desc: { sv: "Metropolitan Area Network (MAN), definierade affärsbehov och strategiska planer för ett nytt affärsområde, lanserade initiativet med tvärfunktionella team och byggde upp organisatorisk förmåga för långsiktig tillväxt inom digital infrastruktur.", en: "Metropolitan Area Network (MAN), defined business needs and strategic plans for a new business area, launched the initiative with cross-functional teams and built organizational capability for long-term growth in digital infrastructure." } },
      { from: 2001, to: 2001, type: "edu", display: { sv: "Axapta Säljcertifieringskurs", en: "Axapta Sales Certification course" }, place: { sv: "Navision · Malmö", en: "Navision · Malmö" } },
      { from: 2000.25, to: 2000.666667, type: "uppd", display: { sv: "Ericsson Mobile", en: "Ericsson Mobile" }, place: { sv: "Lund", en: "Lund" }, role: { sv: "Senior Projektledare", en: "Project Manager" }, desc: { sv: "Förstudie för Ericssons nästa generation av webblösningar, ny infrastruktur med möjlighet att expandera sajten på ett mer flexibelt sätt.", en: "Feasibility study for Ericsson's next generation of web solutions, new infrastructure with the option to expand the site more flexibly." } },
      { from: 2000, to: 2002, type: "anst", display: { sv: "IconMedialab AB", en: "IconMedialab AB" }, place: { sv: "Malmö", en: "Malmö" }, role: { sv: "Business Management Consultant, Researcher, Project Manager", en: "Business Management Consultant, Researcher, Project Manager" }, desc: { sv: "Genomförde affärsprocessomstrukturering och forskningsprojekt. Implementerade innovativa digitala lösningar för kunder inom finans- och mediesektorn.", en: "Conducted business process reengineering and research projects. Implemented innovative digital solutions for clients in finance and media sectors." }, sub: [
        { from: 2000, to: 2000, type: "edu", display: { sv: "Matrix (IconMedialabs samlade metoder)", en: "Matrix (IconMedialab's collected methods)" } },
        { from: 2000, to: 2000, type: "edu", display: { sv: "Six Sigma (Projektledning)", en: "Six Sigma (project methodology)" } },
        { from: 2001, to: 2001, type: "edu", display: { sv: "Rational Unified Process (RUP)", en: "Rational Unified Process (RUP)" } } ] },
      { from: 2000, to: 2000, type: "edu", display: { sv: "PROPS (projektmetod)", en: "PROPS (project methodology)" }, place: { sv: "Ericsson Mobile · Lund", en: "Ericsson Mobile · Lund" } },
      { from: 1999.0, to: 2000.25, type: "uppd", display: { sv: "AssiDomän, Förenade Well", en: "AssiDomän, Förenade Well" }, place: { sv: "Eslöv", en: "Eslöv" }, role: { sv: "Projektledare", en: "Project Manager" }, desc: { sv: "Projektchef för implementering av ett nytt processorienterat affärssystem, ca 50 projektmedlemmar, sju delprojekt och tre orter under två år.", en: "Project manager for a new process-oriented ERP system, about 50 project members, seven subprojects, across three sites over two years." } },
      { from: 1999, to: 1999, type: "edu", display: { sv: "Oracle Databas", en: "Oracle Database" }, place: { sv: "Oracle · Malmö", en: "Oracle · Malmö" } },
      { from: 1998.166667, to: 1998.25, type: "uppd", display: { sv: "SAS", en: "SAS" }, place: { sv: "Köpenhamn", en: "Copenhagen" }, role: { sv: "Projektledare", en: "Project Manager" }, desc: { sv: "Projektgranskning av AMS (Airport management system).", en: "Project review of AMS (Airport management system)." } },
      { from: 1998, to: 1998, type: "edu", display: { sv: "Säljkurs", en: "Sales Training course" }, place: { sv: "Cultivator · Stockholm", en: "Cultivator · Stockholm" } },
      { from: 1997, to: 1998.166667, type: "uppd", display: { sv: "Swebank", en: "Swebank" }, place: { sv: "Stockholm", en: "Stockholm" }, role: { sv: "Projektledare", en: "Project Manager" }, desc: { sv: "Utveckla en intranätlösning för banken som precis hade slagits samman.", en: "Develop an intranet solution for the bank that had just merged." } },
      { from: 1997, to: 1998, type: "uppd", display: { sv: "SAS", en: "SAS" }, place: { sv: "Stockholm", en: "Stockholm" }, role: { sv: "Projektledare", en: "Project Manager" }, desc: { sv: "Lanserade en ny Eurobonus-produkt/-tjänst för frekventa resenärer och lojala kunder, samordnade marknadsföring, utbildade personal och samverkade med allianspartner.", en: "Launched a new Eurobonus product/service for frequent flyers and loyal customers, coordinated marketing, trained staff and collaborated with alliance partners." } },
      { from: 1997, to: 1997, type: "edu", display: { sv: "SPIN Säljkurs", en: "SPIN Sales Training course" }, place: { sv: "Huthwaite · Stockholm", en: "Huthwaite · Stockholm" } },
      { from: 1997, to: 1997, type: "edu", display: { sv: "PROPS (projektmetod)", en: "PROPS (project methodology)" }, place: { sv: "Ericsson Mobile · Stockholm", en: "Ericsson Mobile · Stockholm" } },
      { from: 1996, to: 1997, type: "uppd", display: { sv: "Ericsson Network Business (EBC)", en: "Ericsson Network Business (EBC)" }, place: { sv: "Stockholm", en: "Stockholm" }, role: { sv: "Projektledare", en: "Project Manager" }, desc: { sv: "Projektchef för utvecklingen av RAPS (Radio Planning System) för trådlösa DECT-nätverk i stadsområden, pilotkund var ett stort brittiskt telebolag.", en: "Project manager for RAPS (Radio Planning System) development for DECT wireless networks in urban areas, pilot customer was a major UK telco." } },
      { from: 1996, to: 1996, type: "edu", display: { sv: "PROPS (projektmetod)", en: "PROPS (project methodology)" }, place: { sv: "Ericsson Mobile · Stockholm", en: "Ericsson Mobile · Stockholm" } },
      { from: 1995, to: 2000, type: "anst", display: { sv: "TietoEnator AB", en: "TietoEnator AB" }, place: { sv: "Stockholm", en: "Stockholm" }, role: { sv: "Avdelningschef för SAP, utredare, projektledare", en: "Department Manager for SAP, Investigator, Project Manager" }, desc: { sv: "Projektledning med ett antal storföretag på meritlistan, Föreningssparbanken, Ericsson, Tele2, SAS m.fl. Ansvarade för partnerskapet med SAP och byggde upp enheten inom TietoEnator.", en: "Project management with a number of major corporations on the track record, Föreningssparbanken, Ericsson, Tele2, SAS, among others. Responsible for the SAP partnership and building up the unit within TietoEnator." }, sub: [
        { from: 1995, to: 1995, type: "edu", display: { sv: "PPS (Praktisk Projekt Styrning)", en: "PPS (Practical Project Management)" } },
        { from: 1997, to: 1997, type: "edu", display: { sv: "PVU (Processorienterad Verksamhetsutveckling)", en: "PVU (Process-Oriented Business Development)" } },
        { from: 1998, to: 1998, type: "edu", display: { sv: "Presentationsteknik", en: "Presentation Technique" } },
        { from: 1998, to: 1998, type: "edu", display: { sv: "Förhandlingsteknik", en: "Negotiation Technique" } },
        { from: 1998, to: 1998, type: "edu", display: { sv: "PLS (Praktisk Ledarskap)", en: "PLS (Practical Leadership)" } } ] },
      { from: 1995, to: 1995, type: "uppd", display: { sv: "Tele2", en: "Tele2" }, place: { sv: "Stockholm", en: "Stockholm" }, role: { sv: "Projektledare", en: "Project Manager" }, desc: { sv: "Produktkoordinator av CallingCard, vidareutvecklade faktureringssystemet, koordinerade verksamheten och avvecklade olönsamma kort.", en: "Product coordinator of CallingCard, developed the invoicing system, coordinated operations and discontinued unprofitable cards." } },
      { from: 1993, to: 1993, type: "edu", display: { sv: "SAP R/3 (SD, MM, FI/CO AM)", en: "SAP R/3 (SD, MM, FI/CO AM)" }, place: { sv: "SAP Sweden · Stockholm", en: "SAP Sweden · Stockholm" } },
      { from: 1992, to: 1995, type: "anst", display: { sv: "Lever AB", en: "Lever AB" }, place: { sv: "Stockholm", en: "Stockholm" }, role: { sv: "Nordisk ansvarig införandet av SAP, Projektledare", en: "Department Manager for SAP, Project Manager" }, desc: { sv: "Ledde implementeringar av SAP R/3 (SD, MM, FI/CO AM). Ledde initiativ för omstrukturering av affärsprocesser mellan avdelningar.", en: "Directed SAP R/3 implementations (SD, MM, FI/CO AM). Led business process reengineering initiatives across departments." }, sub: [
        { from: 1993, to: 1993, type: "edu", display: { sv: "Business Process Reengineering", en: "Business Process Reengineering" } },
        { from: 1994, to: 1994, type: "edu", display: { sv: "Ledarskapsutbildning", en: "Leadership training" } } ] },
      { from: 1989, to: 1993, type: "uppd", display: { sv: "TeleLarm AB", en: "TeleLarm AB" }, place: { sv: "Stockholm", en: "Stockholm" }, role: { sv: "Projektledare", en: "Project Manager" }, desc: { sv: "Vidareutvecklade system, främst de ekonomiska modulerna, och byggde upp drift- och utbildningsorganisationen för 21 IBM RT-maskiner över hela landet.", en: "Further developed systems, primarily the financial modules, and built up the operations and training organisation for 21 IBM RT machines nationwide." } },
      { from: 1988, to: 1992, type: "anst", display: { sv: "Commentor AB", en: "Commentor AB" }, place: { sv: "Lund", en: "Lund" }, role: { sv: "Projektledare, Nyckelkundsansvarig, Utbildare", en: "Project Manager, Key Account Manager, Trainer" }, desc: { sv: "Började som kundutbildare av det administrativa modulsystemet och avancerade snabbt till projektledare hos företagets största kund.", en: "Started as customer trainer for the administrative module system and quickly advanced to project manager at the company's largest client." } },
      { from: 1986, to: 1986, type: "anst", display: { sv: "Sandvik Information AB", en: "Sandvik Information AB" }, place: { sv: "Singapore", en: "Singapore" }, role: { sv: "Praktikant", en: "Trainee" }, desc: { sv: "Utlandspraktik i Singapore, dokumenterade de regionala (sydostasiatiska) förändringarna i det globala interna administrativa systemet.", en: "International internship in Singapore, documented the regional (Southeast Asian) changes in the global internal administrative system." } },
      { from: 1985, to: 1985, type: "edu", display: { sv: "IBM UNIX", en: "IBM UNIX" }, place: { sv: "IBM · Malmö", en: "IBM · Malmö" } },
      { from: 1985, to: 1985, type: "edu", display: { sv: "Assembler, PL/1", en: "Assembler, PL/1" }, place: { sv: "IBM · Malmö", en: "IBM · Malmö" } },
      { from: 1985, to: 1985, type: "anst", display: { sv: "Perstorp Administration AB", en: "Perstorp Administration AB" }, place: { sv: "Perstorp, Malmö", en: "Perstorp, Malmö" }, role: { sv: "Systemutvecklare, konverterare", en: "System Developer, Converter" }, desc: { sv: "Migrera Perstorps nuvarande lösning till IBMs nya Unix-miljö.", en: "Migrate Perstorp's current solution to IBM's new Unix environment." } },
      { from: 1982, to: 1988, type: "edu", display: { sv: "Lunds Universitet", en: "Lund University" }, place: { sv: "Lund", en: "Lund" }, desc: { sv: "Master i företagsekonomi och datavetenskap, med inriktning på strategi och konsultmetodik.", en: "Master of Economics & Computer Science, focus on strategy and consulting methodology." } }
    ];

    var ganttLongDesc = [
      { display: "SPENNER Consulting", from: 2026.583333, descL: { sv: "Som konsult tillhandahålla tjänster för kunder med fokus på Management konsult, Projektledning, Processutveckling.", en: "As a consultant, provide services to clients with a focus on management consulting, project management, process development." } },
      { display: "Ørsted", from: 2012, descL: { sv: "Ansvar för investeringsbedömningar (Investment Appraisals) och beslutsstöd till ledningen. Samtliga vindkraftsinstallationsinvesteringar (offshore) granskades av avdelningen. Sammanställde en rapport till ledningen med markering och status av investeringen, så som risker, leveranstid, säkerhet m.m. Till en början var jag ansvarig för att göra projektgranskning av samtliga installationsprojekt med ett team av interna specialister där vi kontrollerade att projekten uppfyllde de krav och kriterier för att få passera en beslutspunkt och fortsätta i nästa fas av projektet. Projektmodellen baseras på Project Management Institute (PMI) och jag deltog med att anpassa verksamhetens modell samt undervisa i vissa delar. Utförde även processförbättringsarbete och samarbeten med de olika avdelningarna utifrån ekonomiavdelningen.", en: "Responsible for investment appraisals and decision support for the Executive team. All wind power installation (offshore) investments were reviewed by the department. Compiled a report to the Executive team noting the status of the investment, such as risks, delivery time, safety, etc. Initially, I was responsible for conducting project reviews of all installation projects together with a team of internal specialists, where we verified that the projects met the requirements and criteria needed to pass a decision gate and proceed to the next phase of the project. The project model is based on the Project Management Institute (PMI), and I took part in adapting the organization's model as well as teaching certain parts of it. Also carried out process improvement work and collaborations with the various departments from the finance department's perspective." } },
      { display: "Sony Mobile (SonyEricsson)", from: 2006, descL: { sv: "Som en start Planerare för eftermarknad, sedan Chef för Kundtjänstplanering, till Consumer Portfolio Manager – roller som kretsade kring projektledning, planering och en bättre kundupplevelse efter försäljning. Ledde strategin för kundtjänstportföljen, med integrering av självbetjäningslösningar och efterförsäljningsplanering. Koordinerade global kundtjänstverksamhet, vilket förbättrade effektivitet och kundnöjdhet. Ledde tvärfunktionella team som levererade innovativa supportlösningar för konsumenter. Därefter Business Relationship Manager (BRM) med fullt ansvar för budgeten inom IT-avdelningen samt ansvar för Inköp, Kundtjänst och Logistik.", en: "As a start After Sales Planner, then Head of Customer Service Planning, to Consumer Portfolio Manager – roles that revolved around project management, planning, and a better customer experience after sales. Led customer service portfolio strategy, integrating self-service solutions and after-sales planning. Coordinated global customer service operations, enhancing efficiency and customer satisfaction. Managed cross-functional teams delivering innovative consumer support solutions. Subsequently Business Relationship Manager (BRM) with full responsibility for the budget within the IT department and responsibility for Purchasing, Customer Service, and Logistics." } },
      { display: "Teleca Software Solutions AB", from: 2004, descL: { sv: "Ledde mjukvaruutvecklingsprojekt med internationella team och levererade till kunder inom mobiltelefonindustrin. Lösningarna baserades på en bas av utvecklade moduler som Teleca ägde och anpassades och integrerades i mobiltelefonerna till olika kunder.", en: "Led software development projects with international teams and delivered to customers in the mobile phone industry. The solutions were based on a foundation of developed modules owned by Teleca, which were adapted and integrated into the mobile phones for various customers." } },
      { display: "Home Entertainment", from: 2003, descL: { sv: "Huvudprojektledare för framtagningen av systemspecifikation för införandet av nytt affärssystem. Detta som objektiv konsult mellan kunden och dess systemleverantör. Home Entertainment erbjuder cd och andra varor inom musik och film utifrån en prenumeration.", en: "Head project manager for the development of the system specification for the implementation of a new business system. This as an objective consultant between the customer and its system supplier. Home Entertainment offers CDs and other goods within music and film based on a subscription." } },
      { display: "SPENNER Consulting", from: 2002, descL: { sv: "Som konsultföretagare tillhandahålla tjänster för kunder med fokus på Management konsult, Projektledning, Processutveckling.", en: "As a consultant, provide services to clients with a focus on management consulting, project management, process development." } },
      { display: "Deva Consulting Group", from: 2002, descL: { sv: "Som underkonsult till dem har jag arbetat fram en metod som vi kallar för Diagnos. Metoden innebär att vi erbjuder kunder ett kort och intensivt intervjupaket (upp till 10 intervjupersoner inom eller utanför företaget) som leder till att ge svar på ett antal förslag som kan lösa situationen som kunden befinner sig i.", en: "As a subcontractor to them, I have developed a method we call Diagnosis. The method means that we offer clients a short and intensive package of interviews (up to 10 interviewees within or outside the company), which leads to providing answers in the form of a number of proposals that can resolve the situation the client finds themselves in." } },
      { display: "QuickWise", from: 2002, descL: { sv: "Projektledare för införande av ny infrastruktur, e-posthantering samt CRM för bättre samverkan mellan QuickWise kontor i Malmö, Stockholm, London och Nottingham.", en: "Project manager for the implementation of new infrastructure, email management, and CRM for better collaboration between QuickWise offices in Malmö, Stockholm, London, and Nottingham." } },
      { display: "ASPERITY", from: 2001.666667, descL: { sv: "Hjälpte Öresundskraft att skapa en IT-strategi för deras koncern. Därefter påbörjades de aktiviteter som behöver utföras för att deras IT-vision, som vi tog fram under hösten 2001, ska uppnås. Målet var att skapa ett medvetande runt IS/IT samt att få koncernen att använda IS/IT för att skapa kundnytta och ge bättre service för sina kunder och leverantörer samt övriga intressenter. Arbetet utfördes med hjälp av enkäter och intervjuer samt tillsammans med en arbetsgrupp som är tillsatt av delar av Öresundskrafts ledning samt processägare.", en: "Helped Öresundskraft create an IT strategy for their group. Following that, the activities that need to be performed for their IT vision, which we developed during the autumn of 2001, are being initiated. The goal was to create awareness around IS/IT and to get the group to use IS/IT to create customer value and provide better service for their customers and suppliers as well as other stakeholders. The work is carried out with the help of surveys and interviews as well as together with a working group appointed by parts of Öresundskraft's management and process owners." } },
      { display: "Öresundskraft", from: 2001.25, descL: { sv: "Etablera affärsmöjligheter för ett stadsnät, Metropolitan Area Network (MAN), i Helsingborg. Öresundskraft investerar i att bygga ett fiberoptiskt nät och behövde hjälp med projektledning samt att skapa affärsmöjligheter med sitt nät. Mycket inspirerande och utmanande projekt med helt nya förutsättningar på marknaden. Min uppgift var att stödja ledningen samt att skapa relationer med leverantörer, fastighetsägare samt slutkunder.", en: "Establish business opportunities for a Metropolitan Area Network (MAN) in Helsingborg. Öresundskraft is investing in building a fibre-optic network and needed help with project management as well as creating business opportunities with its network. A very inspiring and challenging project with entirely new market conditions. My task was to support management as well as to build relationships with suppliers, property owners, and end customers." } },
      { display: "Ericsson Mobile", from: 2000.25, descL: { sv: "Förstudie för Ericssons nästa generation av webblösningar. Projektet innebar att titta på de nya möjligheterna att skapa en ny infrastruktur, med möjlighet att expandera deras sajt på ett mer flexibelt sätt. Arbetet bestod av nära samarbete med övriga internetsatsningar inom Ericsson-koncernen som helhet. Projektet bestod av 10-15 personer.", en: "Project manager for a feasibility study for the next generation of internet solutions supporting employees, partners and customers. The project goal was to centralize all web applications and use SAP as a data store for all applications, as well as to implement a single sign-on system." } },
      { display: "IconMedialab AB", from: 2000, descL: { sv: "Managementkonsult med inriktning mot kunder vars mål varit att öka kundnyttan med hjälp av internet som en ny kanal mot marknaden. Affärs- och projektledning inom privata och offentliga verksamheter, t.ex. affärs- och projektledning för Öresundskraft.", en: "Management consultant focused on clients whose goal has been to increase customer value by means of the internet as a new channel to the market. Business and project management for private and public sector organizations, e.g. business and project management for Öresundskraft." } },
      { display: "AssiDomän, Förenade Well", from: 1999, descL: { sv: "Projektchef för implementering av ett nytt egenutvecklat och processorienterat affärssystem. Produkten bestod av ett antal standardsystem samt det egenutvecklade som skulle integreras för att utnyttja företagets processer till fullo. Projektet bestod av ca 20-25 personer i sex delprojekt: utveckling, drift, implementering, integration, konvertering och dokumentation, samt lika många från beställarsidan.", en: "Project manager for implementing a new in-house developed and process-oriented ERP system for the core business. The project involved nearly 50 project members within a period of 2 years. The system's objective was to support and optimize the business processes. The project was divided into seven subprojects – change management, development, migration, integration, documentation, implementation and maintenance." } },
      { display: "SAS", from: 1998.166667, descL: { sv: "Projektgranskning av AMS (Airport management system). Ett kort uppdrag för att hjälpa kunden med att få ett objektivt underlag för val av lösning/system innan val av inköp.", en: "Project review of AMS (Airport management system). A short assignment to help the client obtain an objective basis for choosing a solution/system before making a purchasing decision." } },
      { display: "Swebank", from: 1997, descL: { sv: "Startade med att arbeta fram en offert samt prototyp för ett nytt webbaserat kundstödssystem för bankkontoren i deras nya plattform GP2000. Under sommaren och hösten startade jag upp ett projekt för deras backoffice-funktioner för samma plattform. Målet var att införa ett nytt client/server-system. I oktober 1997 gick jag över som projektchef för deras intranätlösning vid namnet Kanal1. De huvudsakliga funktionerna var e-post, forum (diskussionsgrupper), ärendehantering samt sök- och dokumenthantering. Även den externa informationswebben ingick i affärsområdet. Projektet befann sig i ett skede för produktionssättning samt att förbereda version 2 av Kanal1. Det fanns under denna period ett enormt tryck på utveckling inom webbområdet, för att kunna sprida information i de båda fusionerande bankerna.", en: "Started by developing a quote and prototype for a new web-based customer support system for the bank branches in their new platform GP2000. During the summer and autumn, I started up a project for their back-office functions for the same platform. The goal was to introduce a new client/server system. In October 1997, I moved over as project manager for their intranet solution named Kanal1. The main functions were e-mail, forums (discussion groups), case management, and search/document management. The external information website was also included in the business area. The project was at a stage of going into production as well as preparing version 2 of Kanal1. During this period, there was enormous pressure on development within the web area, in order to be able to spread information in the two merging banks." } },
      { display: "SAS", from: 1997, descL: { sv: "Projektledare för lanseringen av en ny produkt/tjänst/koncept till de mest lojala kunderna och frequent flyers. Samordnade marknadsföringsprocesser, både externa och interna, och fick allt på plats före lanseringen samt samordnade med allianspartner-flygbolagen. Utbildade stewarder och markpersonal på samtliga flygplatser. Planerade och genomförde programtjänsterna för en ny nivå av Eurobonus-kort för frequent flyer- och lojala kundgruppen, både SAS- och Diners-kort (co-branded).", en: "Project manager for the launch of a new product/service/concept to the most loyal customers and frequent flyers. Coordinated marketing processes, both external and internal, and got everything in place before the launch, as well as coordinating with alliance partner airlines. Trained cabin crew and ground staff at all airports. Planned and implemented the program services for a new tier of Eurobonus card for the frequent flyer and loyal customer group, both SAS and Diners cards (co-branded)." } },
      { display: "Ericsson Network Business (EBC)", from: 1996, descL: { sv: "Inhyrd som projektchef för ett projekt som innebar ett nytt sätt att göra radioplanering. EBC utvecklar en mjukvara vid namnet RAPS (Radio Planning System) som är verktyget för denna typ av planering. Projektet handlade om ny hantering av nät för att hantera DECT inom städer och framförallt inom tätbebyggda områden, dvs all överföring sker med radioöverföring istället för med nedgrävda fasta förbindelser. Pilotkunden, ett stort telefonbolag i England, implementerade detta under 1997.", en: "Project management for development of RAPS (Radio Planning System). New handling of wireless network (DECT) within urbanized areas. Pilot customer was a big telecom company in the UK." } },
      { display: "TietoEnator AB", from: 1995, descL: { sv: "Projektledning och verksamhetsutveckling som huvudinriktning med ett antal storföretag inom näringslivet på meritlistan, Föreningssparbanken, Ericsson, Tele2, SAS m.fl. Varit ansvarig för partnerskap med SAP och byggt upp enheten inom TietoEnator. Ansvarade för TietoEnators satsning på SAP i Sverige, först i Stockholm och sedan i Malmö. Koordinering samt kontakter med kunder och partners för att skapa affärsmöjligheter. Ansvaret för satsningen innebar till en början att bli en partner till SAP, vilket vi blev i september 1998.", en: "Project management and business development as the main focus, with a number of major corporations from the business sector on the track record, Föreningssparbanken, Ericsson, Tele2, SAS, among others. Was responsible for the partnership with SAP and built up the unit within TietoEnator. Was responsible for TietoEnator's initiative in SAP in Sweden, first in Stockholm and then in Malmö. Coordination as well as contacts with customers and partners to create business opportunities. The responsibility for the initiative initially meant becoming a partner to SAP, which we became in September 1998." } },
      { display: "Tele2", from: 1995, descL: { sv: "Inhyrd som produktkoordinator av CallingCard (kopplad telefontjänst till kreditkort). Uppdraget innebar att vidareutveckla faktureringssystemet och koordinera verksamheten runt produkten samt berörd personal. Avveckling av olönsamma kort tillsammans med säljaren, efter att ha gjort en grundläggande intäkt/kostnadsanalys, lönsamhetsanalys samt sammanställning av statistik, för att kunna ge ett förslag till fortsatt strategi.", en: "Hired as a product coordinator of CallingCard (a telephone service linked to credit cards). The assignment involved further developing the invoicing system and coordinating operations around the product as well as the staff involved. Discontinuation of unprofitable cards together with the salesperson, after we had conducted a basic income/cost analysis and compiled statistics, in order to be able to present a proposal for a continued strategy." } },
      { display: "Lever AB", from: 1992, descL: { sv: "Huvudarbetsuppgiften att få ett fungerande OA som en förberedelse för implementering av flera specifika Lever Europe-system, videokonferens, Notes samt rapporteringssystem. Projektledning med analys och planering för implementering av SAP R3, där Lever Nordic (Sverige, Danmark, Finland) var först av 17 länder. Sex månader i Port Sunlight/Leeds, Storbritannien, i standardiseringsprojektarbete av SAP inom Lever Europe tillsammans med personal från Holland och Storbritannien.", en: "The main task was to get a functioning OA (Office Automation) up and running as preparation for the implementation of several specific Lever Europe systems, video conferencing, Notes, and reporting systems. Project management with analysis and planning for the implementation of SAP R3, where Lever Nordic (Sweden, Denmark, Finland) was the first of 17 countries. 6 months in Port Sunlight/Leeds, UK, in standardization project work on SAP within Lever Europe together with staff from Holland and the UK." } },
      { display: "TeleLarm AB", from: 1989, descL: { sv: "Uppdrag att vidareutveckla system, planering av testunderlag, då främst de ekonomiska modulerna (redovisning, reskontror, projektredovisning och MA-rutiner) samt att bygga upp en fungerande drift- och utbildningsorganisation. Maskinparken bestod av 21 IBM RT-maskiner placerade över hela landet och kommunicerade via Televerkets X25-nät DataPak, varav 2 st. i Stockholm på HK där alla fakturor, reskontrakonteringar samt lagerbeställningar replikerades.", en: "Assignment to further develop the system and to plan test documentation, primarily for the financial modules (accounting, accounts receivable/payable, project accounting, and MA routines), as well as to build up a functioning operations and training organization. The equipment fleet consisted of 21 IBM RT machines deployed across the entire country, communicating via Televerket's X.25 network DataPak, of which 2 were located in Stockholm at HQ, where all invoices, ledger postings, and stock orders were replicated." } },
      { display: "Commentor AB", from: 1988, descL: { sv: "Anställdes till en början som kundutbildare av det administrativa modulsystemet. Avancerade dock snabbt till en position som projektledare hos företagets största kund, med uppdrag att vidareutveckla system, planera testunderlag, då främst de ekonomiska modulerna (redovisning, reskontror, projektredovisning och MA-rutiner) samt att bygga upp en fungerande drift- och utbildningsorganisation.", en: "Was initially hired as a customer trainer for the administrative module system. However, quickly advanced to a position as project manager at the company's largest client, with the task of further developing systems and planning test documentation, primarily for the financial modules (accounting, subsidiary ledgers, project accounting and MA routines), as well as building up a functioning operations and training organization." } },
      { display: "Sandvik Information AB", from: 1986, descL: { sv: "Utlandspraktik i Singapore under 2 månader där arbetsuppgifterna bestod av att dokumentera de regionala (sydostasiatiska) förändringarna i det globala interna administrativa systemet. Utvecklade ett system för användarna att ställa frågor, en databas med Q&A skapades. Detta för att IT-chefen slutade och därmed säkra en överlämning till lokala personalen.", en: "International internship in Singapore for 2 months, where the tasks consisted of documenting the regional (Southeast Asian) changes in the global internal administrative system. Development of a system for users to ask their questions; a database of Q&A was created. This was due to the IT manager leaving, and thus ensuring a secure handover to the local staff." } },
      { display: "Perstorp Administration AB", from: 1985, descL: { sv: "Projektanställning (studieuppehåll i sju månader) som till en början innebar en konvertering från IBMs DOS/VSE till MVS/XA vid IBM Malmö Converting Center (MCC). Hjälpte också till med att implementera det nykonverterade systemet i Perstorp samt genomförandet av de uppställda testmomenten.", en: "Project employment (a seven-month break from studies) which initially involved a conversion from IBM DOS/VSE to MVS/XA at IBM Malmö Converting Centre (MCC). Also helped implement the newly converted system in Perstorp, as well as carrying out the scheduled test procedures." } },
      { display: "Lunds Universitet", from: 1982, descL: { sv: "Fick skapa en egen linje som inkluderade ADB 60 poäng samt företagsekonomi 60 poäng, med fördjupning i strategi och styrsystem samt konsultmetodik. Kompletterade även med 10 poäng matematik.", en: "Had to create my own program of study that included ADB (Automatic Data Processing) 60 credits as well as Business Administration 60 credits, with a specialization in strategy and management control systems as well as consulting methodology. Also supplemented this with 10 credits of mathematics." } }
    ];
    ganttLongDesc.forEach(function (p) {
      ganttRowsData.forEach(function (r) {
        if (r.display && r.display.sv === p.display && Math.round(r.from * 1000) === Math.round(p.from * 1000)) {
          r.descL = p.descL;
        }
      });
    });
    var eduCount = {};
    ganttRowsData.forEach(function (r) {
      if (r.type === "edu") {
        var k = Math.floor(r.from);
        eduCount[k] = (eduCount[k] || 0) + 1;
      }
    });

    function ganttSel(pair, lang) { return pair[lang] || pair.sv; }

    function ganttYearLabel(y) {
      var Y = Math.floor(y);
      var months = Math.round((y - Y) * 12);
      if (months <= 0) return String(Y);
      var m = months + 1;
      return Y + "-" + (m < 10 ? "0" + m : String(m));
    }

    function ganttPeriod(r, lang) {
      var from = ganttYearLabel(r.from);
      if (r.to === null) return from + ", " + t("exp.today", lang);
      if (Math.round(r.from) === Math.round(r.to)) return from;
      return from + " – " + ganttYearLabel(r.to);
    }

    var ganttType = {
      anst: { bar: "bg-gantt-anst", badge: "exp.badgeAnst", dot: "bg-gantt-anst" },
      uppd: { bar: "bg-gantt-uppd", badge: "exp.badgeUppd", dot: "bg-gantt-uppd" },
      edu:  { bar: "bg-gantt-edu", badge: "exp.badgeEdu", dot: "bg-gantt-edu" }
    };

    function renderGanttAxis() {
      var axis = document.getElementById("ganttAxis");
      if (!axis) return;
      var html = "";
      for (var y = GANTT_END - 1; y >= GANTT_START + 2; y--) {
        var top = y % 2 === 0 ? "top-0" : "top-[15px]";
        html += '<span class="absolute ' + top + ' -translate-x-1/2" style="left:' + ((1 - ganttFrac(y)) * 100).toFixed(2) + '%">' + y + '</span>';
      }
      axis.innerHTML = html;
    }

    var currentGanttFilter = "all";
    var currentView = "gantt";

    function renderGantt(lang) {
      var container = document.getElementById("ganttRows");
      if (!container) return;
      renderGanttAxis();
      var eduSeen = {};
      var html = "";
      ganttRowsData.forEach(function (r) {
        var showMain = currentGanttFilter === "all" || r.type === currentGanttFilter;
        var allSubs = r.sub || [];
        var subs = currentGanttFilter === "all" ? allSubs : allSubs.filter(function (s) { return s.type === currentGanttFilter; });
        if (!showMain && subs.length === 0) return;
        var type = ganttType[r.type];
        var display = ganttSel(r.display, lang);
        var span = { from: r.from, to: r.to };
        var period = ganttPeriod(span, lang);
        var isEdu = r.type === "edu";
        var leftPct, widthPct;
        if (showMain) {
          if (isEdu) {
            var key = Math.floor(r.from);
            var seen = eduSeen[key] || 0;
            var n = eduCount[key] || 1;
            var effTo = r.to === null ? GANTT_END : r.to;
            var rawSpan = effTo - r.from;
            if (rawSpan <= 0) rawSpan = 1;
            var seg = rawSpan / n;
            widthPct = Math.max(0.4, Math.min(100, seg / (GANTT_END - GANTT_START) * 100));
            leftPct = Math.min(100, (1 - ganttFrac(effTo - seen * seg)) * 100);
            eduSeen[key] = seen + 1;
          } else {
            var effTo = r.to === null ? GANTT_END : r.to;
            var spanYears = effTo - r.from;
            if (spanYears <= 0) spanYears = 1;
            leftPct = Math.min(100, (1 - ganttFrac(effTo)) * 100);
            widthPct = Math.max(0.4, Math.min(100 - leftPct, spanYears / (GANTT_END - GANTT_START) * 100));
          }
        }

        html += '<div class="mt-6 flex gap-6">';
        html += '<div class="w-64 shrink-0">';
        if (showMain) {
          html += '<p class="text-sm font-bold text-navy">' + ganttEsc(display) + '</p>';
          html += '<p class="mt-0.5 text-xs font-semibold text-accenttext">' + ganttEsc(period) + ' <span class="opacity-70">&middot;</span> ' + ganttEsc(t(type.badge, lang)) + '</p>';
          if (isEdu) {
            html += '<p class="mt-1 text-xs leading-snug text-slate">' + ganttEsc(ganttSel(r.place, lang)) + '</p>';
            if (r.desc) html += '<p class="mt-1 text-xs leading-snug text-slate/80">' + ganttEsc(ganttSel(r.desc, lang)) + '</p>';
          } else {
            html += '<p class="mt-1 text-xs leading-snug text-slate">' + ganttEsc(ganttSel(r.role, lang)) + '</p>';
            if (r.desc) html += '<p class="mt-1 text-xs leading-snug text-slate/80">' + ganttEsc(ganttSel(r.desc, lang)) + '</p>';
          }
        }
        if (subs.length) {
          html += '<div class="' + (showMain ? 'mt-2 border-t border-navy/10 pt-2' : '') + ' space-y-1">';
          subs.forEach(function (s) {
            var st = ganttType[s.type];
            var sPeriod = ganttPeriod(s, lang);
            html += '<p class="text-xs leading-snug text-slate">';
            html += '<span class="mr-1 inline-block h-2.5 w-2.5 rounded-[3px] align-[-1px] ' + st.dot + '"></span>';
            html += '<span class="font-semibold text-navy">' + ganttEsc(t(st.badge, lang)) + ' &middot; ' + ganttEsc(sPeriod) + '</span>';
            html += ' <span class="text-slate/90">&middot;</span> ' + ganttEsc(ganttSel(s.display, lang));
            html += '</p>';
          });
          html += '</div>';
        }
        html += '<button type="button" data-gantt-open="' + ganttRowsData.indexOf(r) + '" class="mt-3 inline-flex items-center gap-1.5 rounded-none border border-navy/20 bg-bg px-3 py-1.5 text-xs font-semibold text-navy transition hover:border-accent hover:bg-primary hover:text-white">';
        html += ganttEsc(t("exp.readMore", lang));
        html += '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
        html += '</button>';
        html += '</div>';
        var subGap = 16;
        var nSub = subs.length;
        var trackH, mainTop;
        if (showMain) {
          if (nSub) {
            trackH = 52 + nSub * subGap;
            mainTop = 6;
          } else {
            trackH = 44;
            mainTop = -1;
          }
        } else {
          trackH = 16 + nSub * subGap;
          mainTop = 4;
        }
        html += '<div class="gantt-track relative flex-1 border-b border-navy/10" style="height:' + trackH + 'px">';
        if (showMain) {
          html += '<div class="absolute h-10 rounded-md shadow-sm ring-1 ring-navy/20 ' + type.bar + (nSub ? '' : ' top-1/2 -translate-y-1/2') + '" style="' + (nSub ? 'top:' + mainTop + 'px;' : '') + 'left:' + leftPct.toFixed(2) + '%;width:' + widthPct.toFixed(2) + '%">';
          html += '</div>';
        }
        if (nSub) {
          var byYear = {};
          var seen = {};
          subs.forEach(function (s) {
            var yk = Math.floor(s.from);
            byYear[yk] = (byYear[yk] || 0) + 1;
          });
          subs.forEach(function (s, i) {
            var st = ganttType[s.type];
            var yk = Math.floor(s.from);
            var n = byYear[yk];
            var si = seen[yk] || 0;
            seen[yk] = si + 1;
            var sy = (s.to === null ? GANTT_END : s.to) - s.from;
            if (sy <= 0) sy = 1;
            var seg = sy / n;
            var sLeft = Math.min(100, (1 - ganttFrac((s.to === null ? GANTT_END : s.to) - si * seg)) * 100);
            var sW = Math.max(0.4, Math.min(100 - sLeft, seg / (GANTT_END - GANTT_START) * 100));
            var sTop = showMain ? mainTop + 44 + i * subGap : mainTop + i * subGap;
            html += '<div class="absolute h-3 rounded-sm ring-1 ring-navy/10 ' + st.bar + '" style="top:' + sTop + 'px;left:' + sLeft.toFixed(2) + '%;width:' + sW.toFixed(2) + '%">';
            html += '</div>';
          });
        }
        html += '</div></div>';
      });
      container.innerHTML = html;
    }

    function renderList(lang) {
      var container = document.getElementById("ganttList");
      if (!container) return;
      var html = "";
      ganttRowsData.forEach(function (r) {
        var showMain = currentGanttFilter === "all" || r.type === currentGanttFilter;
        var subs = (r.sub || []).filter(function (s) { return currentGanttFilter === "all" || s.type === currentGanttFilter; });
        if (!showMain && subs.length === 0) return;
        var type = ganttType[r.type];
        var display = ganttSel(r.display, lang);
        var period = ganttPeriod(r, lang);
        html += '<article class="border-b border-navy/10 py-7 last:border-b-0">';
        html += '<div class="flex flex-wrap items-center gap-2">';
        html += '<span class="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1 text-xs font-semibold shadow-sm"><span class="h-2.5 w-2.5 rounded-[3px] ' + type.dot + '"></span>' + ganttEsc(t(type.badge, lang)) + '</span>';
        html += '<span class="text-xs font-semibold text-accenttext">' + ganttEsc(period) + '</span>';
        html += '</div>';
        html += '<h3 class="mt-3 font-display text-2xl font-bold tracking-tight text-navy">' + ganttEsc(display) + '</h3>';
        if (r.role) html += '<p class="mt-1 text-sm font-semibold text-navy">' + ganttEsc(ganttSel(r.role, lang)) + '</p>';
        if (r.place) html += '<p class="mt-0.5 text-xs text-slate">' + ganttEsc(ganttSel(r.place, lang)) + '</p>';
        if (r.desc) html += '<p class="mt-3 text-sm leading-relaxed text-slate">' + ganttEsc(ganttSel(r.desc, lang)) + '</p>';
        if (r.descL) html += '<p class="mt-2 text-sm leading-relaxed text-navy/90">' + ganttEsc(ganttSel(r.descL, lang)) + '</p>';
        if (subs.length) {
          html += '<div class="mt-3 space-y-1.5">';
          subs.forEach(function (s) {
            var st = ganttType[s.type];
            var sPeriod = ganttPeriod(s, lang);
            html += '<p class="text-xs leading-snug text-slate">';
            html += '<span class="mr-1 inline-block h-2.5 w-2.5 rounded-[3px] align-[-1px] ' + st.dot + '"></span>';
            html += '<span class="font-semibold text-navy">' + ganttEsc(t(st.badge, lang)) + ' &middot; ' + ganttEsc(sPeriod) + '</span>';
            html += ' <span class="text-slate/90">&middot;</span> ' + ganttEsc(ganttSel(s.display, lang));
            html += '</p>';
          });
          html += '</div>';
        }
        html += '<button type="button" data-gantt-open="' + ganttRowsData.indexOf(r) + '" class="mt-3 inline-flex items-center gap-1.5 rounded-none border border-navy/20 bg-bg px-3 py-1.5 text-xs font-semibold text-navy transition hover:border-accent hover:bg-primary hover:text-white">';
        html += ganttEsc(t("exp.readMore", lang));
        html += '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
        html += '</button>';
        html += '</article>';
      });
      container.innerHTML = html;
    }

    function renderView(lang) {
      if (currentView === "list") { renderList(lang); } else { renderGantt(lang); }
    }

    function ganttFrac(y) { return (y - GANTT_START) / (GANTT_END - GANTT_START); }

    function ganttEsc(s) {
      return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    
    var ganttFilterBtns = document.querySelectorAll("[data-gantt-filter]");
    ganttFilterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentGanttFilter = btn.getAttribute("data-gantt-filter");
        ganttFilterBtns.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle("bg-accentlight", active);
          b.classList.toggle("border-accentlight", active);
          b.classList.toggle("bg-white", !active);
          b.classList.toggle("border-navy/25", !active);
          b.setAttribute("aria-pressed", active ? "true" : "false");
        });
        renderView(document.documentElement.lang);
      });
    });

    var viewBtns = document.querySelectorAll("[data-view-toggle]");
    var ganttPanel = document.getElementById("ganttPanel");
    var ganttList = document.getElementById("ganttList");
    var expTitle = document.getElementById("expTitle");
    viewBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentView = btn.getAttribute("data-view-toggle");
        viewBtns.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle("bg-accentlight", active);
          b.classList.toggle("border-accentlight", active);
          b.classList.toggle("bg-white", !active);
          b.classList.toggle("border-navy/25", !active);
          b.setAttribute("aria-pressed", active ? "true" : "false");
        });
        if (expTitle) {
          var key = currentView === "list" ? "exp.listTitle" : "exp.ganttTitle";
          expTitle.setAttribute("data-i18n", key);
          expTitle.textContent = t(key, document.documentElement.lang);
        }
        if (ganttPanel) ganttPanel.classList.toggle("hidden", currentView === "list");
        if (ganttList) ganttList.classList.toggle("hidden", currentView !== "list");
        renderView(document.documentElement.lang);
      });
    });

    
    var ganttModal = document.getElementById("ganttModal");
    var ganttModalTitle = document.getElementById("ganttModalTitle");
    var ganttModalMeta = document.getElementById("ganttModalMeta");
    var ganttModalPlace = document.getElementById("ganttModalPlace");
    var ganttModalBody = document.getElementById("ganttModalBody");

    function ganttModalHtml(r, lang) {
      var html = "";
      var meta = [];
      if (r.role) meta.push(ganttEsc(ganttSel(r.role, lang)));
      if (r.place) meta.push(ganttEsc(ganttSel(r.place, lang)));
      if (meta.length) {
        html += '<div class="flex flex-wrap gap-x-6 gap-y-1 border-b border-navy/10 pb-4">';
        meta.forEach(function (m) { html += '<span class="text-sm font-semibold text-accenttext">' + m + '</span>'; });
        html += '</div>';
      }
      var longDesc = r.descL ? ganttSel(r.descL, lang) : (r.desc ? ganttSel(r.desc, lang) : null);
      if (longDesc) {
        html += '<p class="mt-4 leading-relaxed text-navy">' + ganttEsc(longDesc) + '</p>';
      }
      var subs = r.sub || [];
      ["edu", "uppd"].forEach(function (bt) {
        var list = subs.filter(function (s) { return s.type === bt; });
        if (!list.length) return;
        var st = ganttType[bt];
        html += '<div class="mt-6 border-t border-navy/10 pt-5">';
        html += '<h3 class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy"><span class="h-2.5 w-2.5 rounded-[3px] ' + st.dot + '"></span>' + ganttEsc(t(bt === "edu" ? "exp.modalEdu" : "exp.modalUppd", lang)) + '</h3>';
        html += '<ul class="mt-4 space-y-3">';
        list.forEach(function (s) {
          html += '<li class="flex items-start gap-3">';
          html += '<span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-[3px] ' + st.dot + '"></span>';
          html += '<div>';
          html += '<p class="text-sm font-semibold text-navy">' + ganttEsc(ganttSel(s.display, lang)) + '</p>';
          var sMeta = [ganttEsc(ganttPeriod(s, lang))];
          if (s.place) sMeta.push(ganttEsc(ganttSel(s.place, lang)));
          html += '<p class="text-xs leading-snug text-slate">' + sMeta.join(" &middot; ") + '</p>';
          if (s.desc) html += '<p class="mt-1 text-sm leading-relaxed text-slate">' + ganttEsc(ganttSel(s.desc, lang)) + '</p>';
          html += '</div>';
          html += '</li>';
        });
        html += '</ul>';
        html += '</div>';
      });
      if (!subs.length && !longDesc) {
        html += '<p class="mt-4 text-sm leading-relaxed text-slate">' + ganttEsc(ganttSel(r.display, lang)) + ', ' + ganttEsc(ganttPeriod(r, lang)) + '</p>';
      }
      return html;
    }

    function openGanttModal(index) {
      if (!ganttModal) return;
      var r = ganttRowsData[index];
      if (!r) return;
      var lang = document.documentElement.lang;
      var type = ganttType[r.type];
      ganttModalMeta.textContent = ganttEsc(t(type.badge, lang)) + " \u00b7 " + ganttEsc(ganttPeriod(r, lang));
      ganttModalTitle.textContent = ganttEsc(ganttSel(r.display, lang));
      ganttModalPlace.textContent = r.place ? ganttEsc(ganttSel(r.place, lang)) : "";
      ganttModalBody.innerHTML = ganttModalHtml(r, lang);
      ganttModal.classList.remove("hidden");
      ganttModal.classList.add("flex");
      document.body.style.overflow = "hidden";
      var closeBtn = ganttModal.querySelector("[data-gantt-close]");
      if (closeBtn) closeBtn.focus();
    }

    function closeGanttModal() {
      if (!ganttModal) return;
      ganttModal.classList.add("hidden");
      ganttModal.classList.remove("flex");
      document.body.style.overflow = "";
    }

    document.addEventListener("click", function (e) {
      var openBtn = e.target.closest ? e.target.closest("[data-gantt-open]") : null;
      if (openBtn) { openGanttModal(parseInt(openBtn.getAttribute("data-gantt-open"), 10)); return; }
      if (e.target.closest("[data-gantt-close]")) closeGanttModal();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeGanttModal();
    });

    setLang(savedLang, false);

    
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

    
    var FORM_ENDPOINT = "https://formspree.io/f/mbgjbqbl";

    var form = document.getElementById("contactForm");
    if (form) {
      var statusEl = document.getElementById("formStatus");
      var sendBtn = form.querySelector("button[type=submit]");

      function setStatus(message, type) {
        statusEl.textContent = message;
        statusEl.className = "mt-4 text-sm font-medium " + (type === "success" ? "text-sage" : "text-ochre");
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

        var subjectSel = document.getElementById("subject");
        var subject = subjectSel && subjectSel.selectedIndex >= 0 ? subjectSel.options[subjectSel.selectedIndex].text : "";
        var data = {
          name: name.value.trim(),
          email: email.value.trim(),
          company: (document.getElementById("company") || {}).value ?
            document.getElementById("company").value.trim() : "",
          subject: subject,
          message: message.value.trim(),
          _subject: t("ct.forTitle", lang)
        };

        if (sendBtn) sendBtn.textContent = t("ct.sending", lang);

        fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }).then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          form.reset();
          setStatus(t("ct.successPre", lang) + data.name + t("ct.successMid", lang), "success");
        }).catch(function () {
          setStatus(t("ct.fail", lang), "error");
        }).finally(function () {
          if (sendBtn) sendBtn.textContent = t("ct.send", lang);
        });
      });
    }

  });
})();