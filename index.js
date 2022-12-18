const javascript = document.getElementById("javascript");

window.onload = checkImport(javascript);

async function checkImport (script)  {
    const jsFormat = ".js";
      script.src.includes(jsFormat) ? alert('Hello, Master! :D') : alert('Import a script js to check the examples in "console.log"');
    }

