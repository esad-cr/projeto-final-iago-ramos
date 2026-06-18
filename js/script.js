const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click',() =>{
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','navMenu')

function copiarEmail() {
  navigator.clipboard.writeText('iagoramos911@gmail.com');
  const aviso = document.getElementById('copiado');
  const email = document.querySelector('.copiar-email');
  email.style.display = 'none';
  aviso.style.display = 'inline';
  setTimeout(() => {
    aviso.style.display = 'none';
    email.style.display = 'inline';
  }, 2000);
}

