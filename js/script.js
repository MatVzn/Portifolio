function NavHover(event) {
  var navItem = event.target
  var navItems = document.querySelectorAll('.NavItem')
  navItems.forEach(function(item) {
    if (item === navItem) {
      // Se o mouse está sobre este item, remove a classe NavHover
      item.classList.remove('NavHover');
    } else {
      // Se o mouse não está sobre este item, adiciona a classe NavHover
      item.classList.add('NavHover')
    }
  })
}

function NavHoverReset() {
  var navItems = document.querySelectorAll('.NavItem')

  navItems.forEach(function(item) {
    // Remove a classe NavHover para todos os itens
    item.classList.remove('NavHover')
  })
}