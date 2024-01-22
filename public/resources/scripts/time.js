function displayTime() {
  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  // Format the time as day, HH:MM PM/AM
  const timeString = `${dayOfWeek}, ${hours12}:${minutes.toString().padStart(2, "0")} ${amOrPm}`;

  // Update the clock display
  document.getElementById("clock").textContent = timeString;

  // Call the function every second to keep the clock updated
  setTimeout(displayTime, 1000);
}

// Call the displayTime function to start the clock
displayTime();
