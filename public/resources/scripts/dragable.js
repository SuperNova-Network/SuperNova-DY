// Get the popup element
const popup = document.getElementById('popup');

// Variables to store the mouse position and the element's position
let mouseX = 0;
let mouseY = 0;
let popupLeft = 0;
let popupTop = 0;

// Flag to indicate if the element is being dragged
let isDragging = false;

// Function to handle mouse down event
const onMouseDown = (e) => {
  isDragging = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
  popupLeft = popup.offsetLeft;
  popupTop = popup.offsetTop;
  popup.style.cursor = 'move'; // Set cursor to 'move'
};

// Function to handle mouse move event
const onMouseMove = (e) => {
  if (!isDragging) return;

  const dx = e.clientX - mouseX;
  const dy = e.clientY - mouseY;

  // Calculate the new position of the element
  const newLeft = popupLeft + dx;
  const newTop = popupTop + dy;

  // Update the element's position
  popup.style.left = `${newLeft}px`;
  popup.style.top = `${newTop}px`;
};

// Function to handle mouse up event
const onMouseUp = () => {
  isDragging = false;
  popup.style.cursor = 'auto'; // Reset cursor to default
};

// Add event listeners for mouse events
popup.addEventListener('mousedown', onMouseDown);
window.addEventListener('mousemove', onMouseMove); // Use window instead of document
window.addEventListener('mouseup', onMouseUp); // Use window instead of document
