const javascript = document.getElementById("javascript");

window.onload = checkImport(javascript);

async function checkImport (script)  {
    const jsFormat = "index.js";
      script.src.includes(jsFormat) ? alert("Hello, Master! :D") : alert("where is my import script?");
    }

