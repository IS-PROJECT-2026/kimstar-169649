(function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(field, message) {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "-error");
    if (!input || !error) return;
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
    error.hidden = false;
    error.textContent = message;
  }

  function clearError(field) {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "-error");
    if (!input || !error) return;
    input.classList.remove("is-invalid");
    input.removeAttribute("aria-invalid");
    error.hidden = true;
    error.textContent = "";
  }

  function validate() {
    let valid = true;
    const name = (document.getElementById("name") && document.getElementById("name").value.trim()) || "";
    const email = (document.getElementById("email") && document.getElementById("email").value.trim()) || "";
    const subject = (document.getElementById("subject") && document.getElementById("subject").value.trim()) || "";
    const message = (document.getElementById("message") && document.getElementById("message").value.trim()) || "";

    ["name", "email", "subject", "message"].forEach(clearError);

    if (name.length < 2) {
      setError("name", "Please enter your name (at least 2 characters).");
      valid = false;
    }
    if (!emailPattern.test(email)) {
      setError("email", "Enter a valid email address.");
      valid = false;
    }
    if (subject.length < 3) {
      setError("subject", "Add a short subject (at least 3 characters).");
      valid = false;
    }
    if (message.length < 10) {
      setError("message", "Please include a message of at least 10 characters.");
      valid = false;
    }
    return valid;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const success = document.getElementById("form-success");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (success) success.hidden = true;
      if (!validate()) return;
      form.reset();
      ["name", "email", "subject", "message"].forEach(clearError);
      if (success) {
        success.hidden = false;
        success.focus();
      }
    });

    form.querySelectorAll("input, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        clearError(field.id);
      });
    });
  });
})();
