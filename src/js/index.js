(() => {
  const menuIcon = document.querySelector('#menu-icon')
  menuIcon.addEventListener('click', (e) => {
    e.preventDefault()
    const mainNav = document.querySelector('#main-nav')
    const menuIconLines = document.querySelectorAll('.menu-icon__line')
    mainNav.classList.toggle('is-active')
    menuIconLines.forEach(line => {
      line.classList.toggle('is-active')
    })
  })
})();