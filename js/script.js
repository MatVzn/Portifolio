document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.NavItem')

  function navHoverHandler(event) {
    var targetNavItem = event.target
    navItems.forEach(function(item) {
      if (item === targetNavItem) {
        // Se o mouse está sobre este item, remove a classe NavHover
        item.classList.remove('NavHover')
      } else {
        // Se o mouse não está sobre este item, adiciona a classe NavHover
        item.classList.add('NavHover')
      }
    })
  }

  function navHoverResetHandler() {
    navItems.forEach(function(item) {
      // Remove a classe NavHover para todos os itens
      item.classList.remove('NavHover')
    })
  }

  // Adiciona ouvintes de evento aos itens de navegação
  navItems.forEach(function(item) {
    item.addEventListener('mouseover', navHoverHandler)
    item.addEventListener('mouseout', navHoverResetHandler)
  })
})