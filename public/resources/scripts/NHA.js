/* Removes the stupid popup on NHA schools chromebook*/
console.log("Loaded");
function waitForAndDeletePrivacyBanner() {
  const targetElement = document.getElementById("gg-privacy-banner");

  if (targetElement) {
    targetElement.remove();
    console.log("Privacy banner deleted.");
  } else {
    setTimeout(waitForAndDeletePrivacyBanner, 1000);
  }
}

waitForAndDeletePrivacyBanner();
