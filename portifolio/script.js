// Dark Mode Toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    projects.forEach(project => {
      project.style.display =
        filter === "all" || project.dataset.type === filter
          ? "block"
          : "none";
    });
  });
});