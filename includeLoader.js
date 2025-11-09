async function loadPart(targetId, filePath) {
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await res.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

// Load includes + highlight active nav
document.addEventListener("DOMContentLoaded", async () => {
  await loadPart("topbar", "includes/topbar.html");
  await loadPart("sidebar", "includes/sidebar.html");

  // Get current file name (e.g., home.html or post.html)
  const currentPage = window.location.pathname.split("/").pop();

  // Determine which sidebar link to highlight
  let activePage = currentPage;

  // Treat post.html as part of the "Connect" section
  if (activePage.startsWith("post")) {
    activePage = "home.html";
  }

  // Highlight correct sidebar link
  document.querySelectorAll(".side-nav a").forEach(link => {
    if (link.getAttribute("href") === activePage) {
      link.classList.add("active");
    }
  });
});