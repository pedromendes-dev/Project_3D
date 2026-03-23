// script.js para funcionalidades vanilla JS do portfólio

document.addEventListener('DOMContentLoaded', function () {
  // Scroll suave para projetos
  const projetosBtn = document.querySelector('a.btn-get-started');
  const projetosSection = document.getElementById('projetos');
  if (projetosBtn && projetosSection) {
    projetosBtn.addEventListener('click', function (e) {
      e.preventDefault();
      projetosSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scroll suave para SOBRE
  const sobreBtn = Array.from(document.querySelectorAll('nav a')).find(a => a.textContent.trim().toUpperCase() === 'SOBRE');
  if (sobreBtn) {
    sobreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll suave para HABILIDADES
  const habilidadesBtn = Array.from(document.querySelectorAll('nav a')).find(a => a.textContent.trim().toUpperCase() === 'HABILIDADES');
  if (habilidadesBtn) {
    habilidadesBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Procura por "Habilidades" na página
      const habilidadesSection = Array.from(document.querySelectorAll('h4')).find(h4 => h4.textContent.trim().toUpperCase() === 'HABILIDADES');
      if (habilidadesSection) {
        habilidadesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Scroll suave para CONTATO
  const contatoBtn = document.getElementById('header-contact-btn');
  if (contatoBtn) {
    contatoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Procura por "Entre em Contato" na página
      const contatoSection = Array.from(document.querySelectorAll('a.btn-signing-main')).find(a => a.textContent.includes('Contato'));
      if (contatoSection) {
        contatoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      // Mostra/oculta o box de contato
      const headerContactBox = document.getElementById('header-contact-box');
      if (headerContactBox) headerContactBox.classList.toggle('show');
    });
  }

  // Mostrar/ocultar contato do header
  const headerContactBtn = document.querySelector('a[href="#contato"]');
  const headerContactBox = document.getElementById('header-contact-box');
  if (headerContactBtn && headerContactBox) {
    headerContactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      headerContactBox.classList.toggle('show');
    });
  }

  // Mostrar/ocultar contato principal
  const mainContactBtn = document.querySelector('a.btn-signing-main');
  const mainContactBox = document.getElementById('main-contact-box');
  if (mainContactBtn && mainContactBox) {
    mainContactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      mainContactBox.classList.toggle('show');
    });
  }

  // Botões de contato
  document.querySelectorAll('[data-contact]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const type = btn.getAttribute('data-contact');
      if (type === 'email') {
        window.open('mailto:pedromendes211205@gmail.com', '_blank');
      } else if (type === 'whatsapp') {
        window.open('https://wa.me/5537999485868', '_blank');
      } else if (type === 'linkedin') {
        window.open('https://linkedin.com/in/pedro-elias-mendes-1380a1335', '_blank');
      } else if (type === 'github') {
        window.open('https://github.com/pedromendes-dev', '_blank');
      }
    });
  });

  // Scroll suave para currículo
  const curriculoBtn = document.querySelector('button.btn-signing');
  const curriculoSection = document.getElementById('curriculo');
  if (curriculoBtn && curriculoSection) {
    curriculoBtn.addEventListener('click', function (e) {
      e.preventDefault();
      curriculoSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
