// Aguardar o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
  // ======= Menu Mobile Toggle =======
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const navMenus = document.querySelectorAll('nav');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      // Toggle em todos os menus de navegação
      navMenus.forEach(nav => {
        nav.classList.toggle('show');
      });
      mobileMenuButton.classList.toggle('active');
    });
  }

  // ======= Navegação Suave =======
  // Selecionando TODOS os links com href="#inicio" em qualquer lugar do documento
  document.querySelectorAll('a[href="#inicio"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Rolagem suave para o topo da página
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Fecha o menu mobile após clicar
      if (window.innerWidth <= 768) {
        navMenus.forEach(nav => {
          nav.classList.remove('show');
        });
        if (mobileMenuButton) {
          mobileMenuButton.classList.remove('active');
        }
      }
    });
  });

  // Para todos os outros links de navegação (não "inicio")
  document.querySelectorAll('nav a:not([href="#inicio"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Fecha o menu mobile após clicar
          if (window.innerWidth <= 768) {
            navMenus.forEach(nav => {
              nav.classList.remove('show');
            });
            if (mobileMenuButton) {
              mobileMenuButton.classList.remove('active');
            }
          }
        }
      }
    });
  });

  // ======= Efeito Máquina de Escrever =======
  const titleElement = document.getElementById("h1-inicio");
  if (titleElement) {
    const originalText = titleElement.innerHTML;
    let index = 0;
    let isTag = false;
    let displayText = "";

    function typeWriter() {
      if (index < originalText.length) {
        let char = originalText.charAt(index);

        if (char === "<") isTag = true;
        if (char === ">") isTag = false;

        displayText += char;
        titleElement.innerHTML = displayText;

        index++;
        setTimeout(typeWriter, isTag ? 0 : 50); // Não espera ao digitar tags
      }
    }

    // Limpa o texto original e inicia a digitação apenas uma vez
    titleElement.innerHTML = "";
    typeWriter();
  }

  // ======= Carrossel de Depoimentos =======
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  if (testimonialSlides.length > 0) {
    let currentIndex = 0;

    function showSlide() {
      testimonialSlides.forEach(slide => slide.classList.remove('active'));
      testimonialSlides[currentIndex].classList.add('active');
      currentIndex = (currentIndex + 1) % testimonialSlides.length;
    }

    // Mostra o primeiro slide e inicia o loop
    showSlide();
    setInterval(showSlide, 5000); // muda a cada 5 segundos
  }
});