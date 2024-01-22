// Keep track of the popup state
let isPopupOpen = false;

document.addEventListener('keydown', function(event) {
  // Check if Alt and ; (semicolon) keys are pressed
  if (event.altKey && event.key === ';') {
    // Get the popup element
    const popup = document.getElementById('settingsPopup');

    if (isPopupOpen) {
      // Close the popup by setting the top to '134%'
      popup.style.top = '234%';
    } else {
      // Open the popup by setting the top to '50%'
      popup.style.top = '50%';
    }

    // Toggle the popup state
    isPopupOpen = !isPopupOpen;
  }
});

document.addEventListener('click', function(event) {
  console.log('clicked X')
  if (event.target.classList.contains('popup-close2')) {
 
    const popup = document.getElementById('settingsPopup');

    // Set the top to '134%' when 'popup-close2' is clicked
    popup.style.top = '234%';
    

    // Set the popup state to closed
    isPopupOpen = false;
  }
});
