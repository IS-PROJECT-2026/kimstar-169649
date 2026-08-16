(function () {
  function initFaq(rootSelector) {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    root.querySelectorAll(".faq-item").forEach((item) => {
      const trigger = item.querySelector(".faq-trigger");
      const panel = item.querySelector(".faq-panel");
      if (!trigger || !panel) return;

      trigger.addEventListener("click", () => {
        const willOpen = trigger.getAttribute("aria-expanded") !== "true";

        root.querySelectorAll(".faq-item").forEach((other) => {
          const otherTrigger = other.querySelector(".faq-trigger");
          const otherPanel = other.querySelector(".faq-panel");
          if (!otherTrigger || !otherPanel) return;
          other.classList.remove("is-open");
          otherTrigger.setAttribute("aria-expanded", "false");
          otherPanel.hidden = true;
        });

        if (willOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          panel.hidden = false;
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => initFaq("#faq-list"));
})();
