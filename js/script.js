function menuModal() {
  var mobileModal = document.querySelector('.modalmobile')

  if (mobileModal.classList.contains("hidden")) {
    mobileModal.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
    
  } else {
    mobileModal.classList.add('hidden')
    document.body.style.overflow = 'visible'

  }
}

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

var topbutton = document.getElementById("topBtn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbutton.style.opacity = "1"
  } else {
    topbutton.style.opacity = "0"
  }
}

function fixElement() {
  var topbutton = document.getElementById("topBtn");
  var footer = document.querySelector('footer');
  var mobileModal = document.querySelector('.modalmobile')

  var topbuttonRect = topbutton.getBoundingClientRect();
  var footerRect = footer.getBoundingClientRect();

  if (topbuttonRect.bottom + 15 >= footerRect.top) {
    var newPosition = footerRect.top - topbuttonRect.height - 40;
    topbutton.style.top = newPosition + 'px';
  } else {
    topbutton.style.top = "90%";
  }
  
  if (window.innerWidth > 980) {
    mobileModal.classList.add('hidden')
    document.body.style.overflow = 'visible'
  }
  
}

window.addEventListener('scroll', fixElement);
window.addEventListener('resize', fixElement);