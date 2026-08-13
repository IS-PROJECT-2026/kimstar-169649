(function () {
  const pages = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "about.html", label: "About", id: "about" },
    { href: "services.html", label: "Services", id: "services" },
    { href: "projects.html", label: "Projects", id: "projects" },
    { href: "contact.html", label: "Contact", id: "contact" },
  ];

  function currentPageId() {
    const file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!file || file === "" || file === "/") return "home";
    const match = pages.find((page) => page.href === file);
    return match ? match.id : "home";
  }

  function renderHeader() {
    const host = document.getElementById("site-header");
    if (!host) return;

    const active = currentPageId();
    const links = pages
      .map(
        (page) =>
          `<li><a href="${page.href}" class="${page.id === active ? "active" : ""}" data-nav="${page.id}">${page.label}</a></li>`
      )
      .join("");

    host.innerHTML = `
      <header class="site-header" id="top-nav">
        <div class="container nav-bar">
          <a class="brand" href="index.html" aria-label="KIMSTAR home">
            <span class="brand-mark">KS</span>
            <span class="brand-text">KIMSTAR</span>
          </a>
          <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-links" id="primary-nav">${links}</ul>
        </div>
      </header>
    `;

    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("primary-nav");
    const header = document.getElementById("top-nav");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function renderFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;

    host.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <a class="brand" href="index.html">
              <span class="brand-mark">KS</span>
              <span class="brand-text">KIMSTAR</span>
            </a>
            <p style="margin-top: 0.9rem; max-width: 28rem;">
              Technology consulting and digital delivery for organisations that need clarity, craft, and measurable outcomes.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div class="footer-links" style="margin-top: 0.8rem;">
              <a href="about.html">About</a>
              <a href="services.html">Services</a>
              <a href="projects.html">Projects</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <div class="footer-links" style="margin-top: 0.8rem;">
              <a href="mailto:hello@kimstar.example">hello@kimstar.example</a>
              <span>Nairobi · Remote delivery</span>
              <span>Mon–Fri · 08:00–17:00 EAT</span>
            </div>
          </div>
        </div>
        <div class="container footer-bottom">
          <span>© ${new Date().getFullYear()} KIMSTAR. All rights reserved.</span>
          <span>Built as a static site for GitHub Pages.</span>
        </div>
      </footer>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
  });
})();
