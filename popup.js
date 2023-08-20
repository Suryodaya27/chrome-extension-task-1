document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false);
  
    function onclick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        document.getElementById("title").textContent = tabs[0].title;
      });
    }
  }, false);
  