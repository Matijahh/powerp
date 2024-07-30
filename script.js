function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollServices(value) {
  var firstRow = document.querySelector("#service1");
  var secondRow = document.querySelector("#service2");
  var thirdRow = document.querySelector("#service3");

  if (value == 0) {
    firstRow.classList.remove("blur");
    secondRow.classList.add("blur");
    thirdRow.classList.add("blur");
  } else if (value == 50) {
    firstRow.classList.add("blur");
    secondRow.classList.remove("blur");
    thirdRow.classList.add("blur");
  } else if (value == 100) {
    firstRow.classList.add("blur");
    secondRow.classList.add("blur");
    thirdRow.classList.remove("blur");
  }
}
