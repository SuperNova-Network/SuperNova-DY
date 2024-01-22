// JavaScript code to close the popup and store flag in local storage
document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.querySelector(".popup-close");
    var popup = document.querySelector(".popup");
    var storageKey = "popupClosed";
  
    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
      localStorage.setItem(storageKey, "true");
    });
  
    var isPopupClosed = localStorage.getItem(storageKey);
    if (isPopupClosed === "true") {
      popup.style.display = "none";
    }
  });// JavaScript code to close the popup and store flag in local storage
  document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.querySelector(".popup-close");
    var popup = document.querySelector(".popup");
    var storageKey = "popupClosed";
  
    closeButton.addEventListener("click", function() {

      popup.style = "top: 134%;";
      


      localStorage.setItem(storageKey, "true");
    });
  
    var isPopupClosed = localStorage.getItem(storageKey);
    if (isPopupClosed === "true") {
      popup.style.display = "none";
    }
  });

  setTimeout(() => {
    var popup = document.getElementsByClassName("popup")[0];  
    popup.style.top = "50%";
  }, "2000");