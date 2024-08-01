function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const nav = document.querySelector(".hamburger-nav");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  nav.classList.toggle("open");
}

function scrollServices(value) {
  var firstRowLeft = document.getElementById("left-service-1");
  var secondRowLeft = document.getElementById("left-service-2");
  var thirdRowLeft = document.getElementById("left-service-3");
  var firstRowRight = document.getElementById("right-service-1");
  var secondRowRight = document.getElementById("right-service-2");
  var thirdRowRight = document.getElementById("right-service-3");

  if (value == 0) {
    firstRowLeft.classList.remove("blur");
    firstRowRight.classList.remove("blur");
    secondRowLeft.classList.add("blur");
    secondRowRight.classList.add("blur");
    thirdRowLeft.classList.add("blur");
    thirdRowRight.classList.add("blur");
  } else if (value == 50) {
    firstRowLeft.classList.add("blur");
    firstRowRight.classList.add("blur");
    secondRowLeft.classList.remove("blur");
    secondRowRight.classList.remove("blur");
    thirdRowLeft.classList.add("blur");
    thirdRowRight.classList.add("blur");
  } else if (value == 100) {
    firstRowLeft.classList.add("blur");
    firstRowRight.classList.add("blur");
    secondRowLeft.classList.add("blur");
    secondRowRight.classList.add("blur");
    thirdRowLeft.classList.remove("blur");
    thirdRowRight.classList.remove("blur");
  }
}

var sliderArea = document.querySelector(".products-services-content");
sliderArea.addEventListener("wheel", function (e) {
  var slider = document.getElementById("slider");
  if (e.deltaY > 0) {
    slider.valueAsNumber += 50;
  } else {
    slider.value -= 50;
  }
  e.preventDefault();
  e.stopPropagation();

  var firstRowLeft = document.getElementById("left-service-1");
  var secondRowLeft = document.getElementById("left-service-2");
  var thirdRowLeft = document.getElementById("left-service-3");
  var firstRowRight = document.getElementById("right-service-1");
  var secondRowRight = document.getElementById("right-service-2");
  var thirdRowRight = document.getElementById("right-service-3");

  console.log("First Row", firstRowLeft);

  if (slider.value == 0) {
    firstRowLeft.classList.remove("blur");
    firstRowRight.classList.remove("blur");
    secondRowLeft.classList.add("blur");
    secondRowRight.classList.add("blur");
    thirdRowLeft.classList.add("blur");
    thirdRowRight.classList.add("blur");
  } else if (slider.value == 50) {
    firstRowLeft.classList.add("blur");
    firstRowRight.classList.add("blur");
    secondRowLeft.classList.remove("blur");
    secondRowRight.classList.remove("blur");
    thirdRowLeft.classList.add("blur");
    thirdRowRight.classList.add("blur");
  } else if (slider.value == 100) {
    firstRowLeft.classList.add("blur");
    firstRowRight.classList.add("blur");
    secondRowLeft.classList.add("blur");
    secondRowRight.classList.add("blur");
    thirdRowLeft.classList.remove("blur");
    thirdRowRight.classList.remove("blur");
  }
});
