(function () {
  var button = document.querySelector(".menu-button");
  var menu = document.querySelector("#site-nav");

  function isMobileNav() {
    return window.matchMedia("(max-width: 860px)").matches;
  }

  function setMenuOpen(open) {
    if (!button || !menu) return;
    button.setAttribute("aria-expanded", String(open));
    button.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    if (!isMobileNav() || open) menu.removeAttribute("inert");
    else menu.setAttribute("inert", "");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  if (button && menu) {
    setMenuOpen(false);

    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
        button.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (!isMobileNav()) setMenuOpen(false);
      else if (button.getAttribute("aria-expanded") !== "true") menu.setAttribute("inert", "");
    });
  }

  var yearNav = document.querySelector(".year-nav");
  var yearLinks = document.querySelectorAll(".year-nav a");
  if (yearNav && yearLinks.length) {
    var header = document.querySelector(".site-header");
    var sections = [];
    yearLinks.forEach(function (link) {
      var id = link.getAttribute("href");
      if (!id || id.charAt(0) !== "#") return;
      var section = document.getElementById(id.slice(1));
      if (section) sections.push(section);
    });

    function markYear(id) {
      yearLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    function yearOffset() {
      var headerH = header ? Math.round(header.getBoundingClientRect().height) : 0;
      var navH = Math.round(yearNav.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-h", headerH + "px");
      document.documentElement.style.setProperty("--yearnav-h", navH + "px");
      return headerH + navH;
    }

    function updateActiveYear() {
      if (!sections.length) return;
      var offset = yearOffset();
      var active = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top - offset <= 1) active = sections[i];
      }
      markYear(active.id);
    }

    yearLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var id = link.getAttribute("href");
        if (id && id.charAt(0) === "#") markYear(id.slice(1));
      });
    });

    yearOffset();
    updateActiveYear();
    window.addEventListener("scroll", updateActiveYear, { passive: true });
    window.addEventListener("resize", updateActiveYear);
  }

  var dialog = document.getElementById("cite-dialog");
  if (!dialog) return;

  var bibTab = document.getElementById("cite-tab-bibtex");
  var risTab = document.getElementById("cite-tab-ris");
  var bibOut = document.getElementById("cite-out-bibtex");
  var risOut = document.getElementById("cite-out-ris");
  var copyButton = document.getElementById("cite-copy");
  var status = document.getElementById("cite-status");
  var activePre = bibOut;
  var closing = false;

  function showTab(which) {
    var useBib = which === "bibtex";
    bibTab.setAttribute("aria-selected", String(useBib));
    risTab.setAttribute("aria-selected", String(!useBib));
    bibOut.hidden = !useBib;
    risOut.hidden = useBib;
    activePre = useBib ? bibOut : risOut;
    if (status) status.textContent = "";
  }

  function openDialog() {
    closing = false;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    requestAnimationFrame(function () {
      dialog.classList.add("is-open");
    });
  }

  function closeDialog() {
    if (closing || !dialog.open) return;
    closing = true;
    dialog.classList.remove("is-open");
    window.setTimeout(function () {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
      closing = false;
    }, 180);
  }

  bibTab.addEventListener("click", function () { showTab("bibtex"); });
  risTab.addEventListener("click", function () { showTab("ris"); });

  document.querySelectorAll(".cite-open").forEach(function (opener) {
    opener.addEventListener("click", function () {
      var bibSource = opener.getAttribute("data-bibtex");
      var risSource = opener.getAttribute("data-ris");
      var bibNode = bibSource ? document.getElementById(bibSource) : null;
      var risNode = risSource ? document.getElementById(risSource) : null;

      bibOut.textContent = bibNode ? bibNode.textContent.trim() : "";
      risOut.textContent = risNode ? risNode.textContent.trim() : "";
      bibTab.hidden = !bibNode;
      risTab.hidden = !risNode;
      showTab(bibNode ? "bibtex" : "ris");
      openDialog();
    });
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeDialog();
  });

  dialog.querySelectorAll("form[method='dialog']").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      closeDialog();
    });
  });

  dialog.addEventListener("cancel", function (event) {
    event.preventDefault();
    closeDialog();
  });

  copyButton.addEventListener("click", function () {
    var text = activePre ? activePre.textContent : "";
    if (!text) return;

    var done = function () {
      if (status) status.textContent = "Copied";
      window.setTimeout(function () {
        if (status) status.textContent = "";
      }, 1600);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done);
      return;
    }

    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      done();
    } catch (error) {
      if (status) status.textContent = "Copy unavailable";
    }
    document.body.removeChild(area);
  });
})();
