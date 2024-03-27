document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentUrl = tabs[0].url;
      var newUrl = "https://12ft.io/proxy?q=" + encodeURIComponent(currentUrl);
      chrome.tabs.create({ url: newUrl });
    });
  });
  
  