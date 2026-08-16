(function () {
  // Branch B: emphasise acceleration language in portfolio data

  const projects = [
    {
      id: "onboarding",
      category: "fintech",
      title: "Customer onboarding acceleration",

      summary: "Guided application flows and automated checks reduced completion time for a regional lender.",
      outcome: "45% faster completion",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "citizen-portal",
      category: "public",
      title: "Citizen service portal",
      summary: "Unified fragmented service channels into one accessible portal with analytics for operations teams.",
      outcome: "1 front door for services",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "ops-console",
      category: "enterprise",
      title: "Operations console refresh",
      summary: "Rebuilt an internal console so support teams could triage incidents with clearer ownership.",
      outcome: "28% fewer handoffs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "claims",
      category: "health",
      title: "Claims intake workspace",
      summary: "Designed a claims workspace that reduced duplicate submissions and improved auditor visibility.",
      outcome: "Cleaner audit trail",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "payments",
      category: "fintech",
      title: "Payments dashboard",
      summary: "Delivered a real-time monitoring surface for settlement exceptions and partner reconciliations.",
      outcome: "Same-day exception review",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "intranet",
      category: "enterprise",
      title: "Knowledge intranet",
      summary: "Structured policies and playbooks into a searchable intranet with role-aware navigation.",
      outcome: "Faster employee self-serve",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const labels = {
    fintech: "Fintech",
    public: "Public sector",
    enterprise: "Enterprise",
    health: "Health",
  };

  function cardMarkup(project) {
    return `
      <article class="project-card is-filtering" data-category="${project.category}">
        <div class="project-card-media" style="background-image:url('${project.image}')"></div>
        <div class="project-card-body">
          <span class="tag">${labels[project.category] || project.category}</span>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <p class="project-outcome"><strong>${project.outcome}</strong></p>
        </div>
      </article>`;
  }

  function renderProjects(filter) {
    const grid = document.getElementById("projects-grid");
    const empty = document.getElementById("projects-empty");
    if (!grid) return;

    const visible = projects.filter((project) => filter === "all" || project.category === filter);
    grid.innerHTML = visible.map(cardMarkup).join("");
    requestAnimationFrame(() => {
      grid.querySelectorAll(".project-card").forEach((card) => card.classList.add("is-shown"));
    });
    if (empty) empty.hidden = visible.length > 0;
  }

  function initFilters() {
    const bar = document.getElementById("project-filters");
    renderProjects("all");
    if (!bar) return;

    bar.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");
      if (!button) return;
      bar.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProjects(button.dataset.filter || "all");
    });
  }

  document.addEventListener("DOMContentLoaded", initFilters);
})();


