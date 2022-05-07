window.addEventListener('scroll', onScroll ) // evento q é uma função, para n dar erro no navegador

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(abput)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  // quais dados vou precisar?
  
  // o topo da seção
  const sectionTop = section.offsetTop
  // a altura da seção
  const sectionHeight = section.offsetHeight
  
  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopRreachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <=
  targetLine

  // limites da seção
  const sectionBoundaries = sectionTopRreachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll') // se rolar p baixo, adiciona a barra verde;
  } else {
    navigation.classList.remove('scroll') // se for 0 (ficar no topo da pagina), a barra verde volta;
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show') // se rolar p baixo, adiciona a barra verde;
  } else {
    backToTopButton.classList.remove('show') // se for 0 (ficar no topo da pagina), a barra verde volta;
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top', // de cima p baixo
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about, 
  #about header, 
  #about .content`) // ordem da aparição das coisas;
