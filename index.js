const javascript = document.getElementById("javascript");

window.addEventListener("load", () => {
  checkImport(javascript);
});

function checkImport(script) {
  const jsFormat = ".js";
  script.src.endsWith(jsFormat)
    ? alert("Hello, Master! :D")
    : alert("Import a script js to check the examples in console.");
}
