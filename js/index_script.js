document.querySelector(".slider").addEventListener("click", function () {
  document.querySelector(".list").classList.toggle("open-1");
  document.querySelector(".links_pop").classList.toggle("open");
});

let x = document.querySelectorAll(".link");
for (let i = 1; i < x.length; i++) {
  if (x[i].classList.value != "Active") {
    x[i].addEventListener("mouseenter", function () {
      x[i].classList.add("Active");
      x[0].classList.remove("Active");
    });
  }
}
for (let i = 1; i < x.length; i++) {
  x[i].addEventListener("mouseleave", function () {
    x[i].classList.remove("Active");
    x[0].classList.add("Active");
  });
}

let pictur = document.querySelector(".pictur");

pictur.addEventListener("mouseenter", function () {
  document
    .querySelector(".Home  .identification > div:nth-child(1)")
    .setAttribute(
      "style",
      `transform: translateY(300px);
  font-size: 10px;`
    );
  document
    .querySelector(".Home  .identification > div:nth-child(2)")
    .setAttribute("style", "transform: translateY(-40px);");
  document
    .querySelector(".Home  .identification > div:nth-child(3)")
    .setAttribute("style", "transform: translateY(-40px);");
});

pictur.addEventListener("mouseleave", function () {
  document
    .querySelector(".Home  .identification > div:nth-child(1)")
    .setAttribute("style", ``);
  document
    .querySelector(".Home  .identification > div:nth-child(2)")
    .setAttribute("style", "");
  document
    .querySelector(".Home  .identification > div:nth-child(3)")
    .setAttribute("style", "");
});
