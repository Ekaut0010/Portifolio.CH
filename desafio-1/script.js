const icon = document.querySelectorAll("#icon");

icon.forEach((i) => {
  i.onclick = () => {
    i.classList.toggle("filled");
  };
});
