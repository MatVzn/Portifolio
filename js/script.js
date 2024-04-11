document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.navItem')

  function navHoverHandler(event) {
    var targetNavItem = event.target
    navItems.forEach(function(item) {
      if (item === targetNavItem) {
        // Se o mouse está sobre este item, remove a classe navUnHover
        item.classList.remove('navUnHover')
      } else {
        // Se o mouse não está sobre este item, adiciona a classe navUnHover
        item.classList.add('navUnHover')
      }
    })
  }

  function navHoverResetHandler() {
    navItems.forEach(function(item) {
      // Remove a classe navUnHover para todos os itens
      item.classList.remove('navUnHover')
    })
  }

  // Adiciona ouvintes de evento aos itens de navegação
  navItems.forEach(function(item) {
    item.addEventListener('mouseover', navHoverHandler)
    item.addEventListener('mouseout', navHoverResetHandler)
  })
})