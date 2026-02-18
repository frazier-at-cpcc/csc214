(function () {
  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatDefinitionTitles(root) {
    var titles = root.querySelectorAll(".doc .sidebarblock.definition > .content > .title");

    titles.forEach(function (title) {
      if (title.querySelector(".cpcc-def-term")) return;

      var text = (title.textContent || "").trim();
      var match = /^Definition\s*:\s*(.+)$/i.exec(text);
      if (!match) return;

      var term = match[1].trim();
      if (!term) return;

      title.innerHTML =
        '<span class="cpcc-def-label">Definition</span>' +
        '<span class="cpcc-def-term">' +
        escapeHtml(term) +
        "</span>";
    });
  }

  function init() {
    formatDefinitionTitles(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
