const liClick = document.querySelectorAll(".icons ul li");

liClick.forEach((el) => {
  el.addEventListener("click", () => {
    liClick.forEach((el)=> {
        el.classList.remove("active");
    })
    el.classList.add("active");
  });
});
