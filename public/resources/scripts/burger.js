function toggle() {
  console.log("function toggle");
  let ham = document.querySelector(".ham");
  let menu = document.querySelector("#sidebarMenu");

  ham.classList.toggle("active");
  menu.classList.toggle("active");
}