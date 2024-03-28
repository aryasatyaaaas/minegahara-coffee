var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");

if (btnSubmit) {
  btnSubmit.addEventListener("click", () => {
    modal.classList.add("show");

    const next = documenr.querySelector(".next");
    next.setAttribute("value", "https://minegaharacoffee.netlify.app/");
  });
}
AOS.init();
