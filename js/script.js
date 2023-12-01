




var navItens = document.querySelectorAll('.NavItem')

navItens.forEach(function(navIten) {
  navIten.addEventListener('mouseenter', function() {
    navIten.classList.remove("NavSelect")
    navIten.classList.add("NavSelect")
  });
});