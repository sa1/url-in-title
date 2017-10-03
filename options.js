const protocolPref = document.querySelector("#protocolEnabled");
const pathPref = document.querySelector("#pathEnabled");
const delimiterPref = document.querySelector("#delimiterStr");

function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    protocol: protocolPref.checked,
    path: pathPref.checked,
    delimiter: delimiterPref.value
  });
}

function restoreOptions() {

  function setPrefs(result) {
    protocolPref.checked = result.protocol || false;
    pathPref.checked = result.path || false;
    delimiterPref.value = result.delimiter || " - ";
  }

  var getting = browser.storage.local.get();
  getting.then(setPrefs, e => console.error(error));
}

document.addEventListener("DOMContentLoaded", restoreOptions);
protocolPref.addEventListener("change", saveOptions);
pathPref.addEventListener("change", saveOptions);
delimiterPref.addEventListener("change", saveOptions);
