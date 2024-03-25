var splash = document.querySelector(".splash2");
if (splash) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      splash.style.display = "none";
    }, 1000);
  });
}
var order = document.querySelector(".order-msg");
var loading = document.querySelector(".splash2");
var footer = document.querySelector(".footer-order");
if (order && loading && footer) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      order.style.display = "block";
      footer.style.display = "block";
      //   order.dataset.aos = "fade-down";
      loading.style.display = "none";
    }, 1800);
  });
}

AOS.init();
