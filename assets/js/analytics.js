document.querySelectorAll(".project a").forEach(link => {
  link.addEventListener("click", () => {
    gtag("event", "project_click", { project: link.href });
  });
});