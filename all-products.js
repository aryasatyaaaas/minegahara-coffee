var modal = document.querySelector(".modal-container2");
var button = document.querySelectorAll(".order-btn");
var btnClose = document.querySelector("span");
var modalImage = document.querySelector(".modal-img");
var modalCon = document.querySelector(".modal-container3");
var cartBtn = document.querySelector("#cart");
var modalClose = document.querySelector(".modal-span");
var modal3 = document.querySelector(".modal-3");
const input = document.getElementById("input");
var secondBtn = document.querySelector(".second-btn");
let counter = 0;
var coffeeName = "";
var imgCoffee = "";

//Order Modal
if (button) {
  button.forEach((element) => {
    element.addEventListener("click", function () {
      modal.style.visibility = "visible";
    });
  });
}
if (btnClose) {
  btnClose.addEventListener("click", function () {
    modal.style.visibility = "hidden";
  });
}
// Cart Modal
if (cartBtn) {
  cartBtn.addEventListener("click", function () {
    modalCon.style.visibility = "visible";
  });
}
if (modalClose) {
  modalClose.addEventListener("click", function () {
    modalCon.style.visibility = "hidden";
  });
}
// second button
if (secondBtn) {
  secondBtn.addEventListener("click", function () {
    if (input.value == 0) {
      alert("Please enter quantity");
      return;
    }
    var article = document.createElement("article");
    var div = document.createElement("div");
    div.className = "project-detail";
    var divImg = document.createElement("div");
    divImg.className = "project-img";
    var image = document.createElement("img");
    image.src = imgCoffee;
    divImg.appendChild(image);
    div.appendChild(divImg);

    var desc = document.createElement("div");
    desc.className = "project-description";
    var h3 = document.createElement("h3");
    h3.textContent = coffeeName;
    var p = document.createElement("p");
    p.textContent = "Quantity : " + input.value;
    desc.appendChild(h3);
    desc.appendChild(p);
    div.appendChild(desc);

    var deleteBtn = document.createElement("div");
    deleteBtn.className = "delete";
    var i = document.createElement("i");
    i.className = "fa-solid fa-trash fa-lg";
    i.style.color = "#ed0c0c";
    deleteBtn.appendChild(i);
    div.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      article.style.display = "none";
    });
    article.appendChild(div);
    modal3.appendChild(article);
    modal.style.visibility = "hidden";
  });
}

function openModal(linkUrl, namaCoffee) {
  // alert(linkUrl);
  modalImage.setAttribute("src", linkUrl);
  imgCoffee = linkUrl;
  counter = 0;
  input.value = 0;
  coffeeName = namaCoffee;
}

// increment and decrement

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");

const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
});
AOS.init();
