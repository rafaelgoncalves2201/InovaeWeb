// função de link, para ir ate a section
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
      });
      const toggle = document.getElementById('menu-toggle');
      const menu = document.getElementById('menu');

      toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      });
  });
});

// função de maquina de escrever na home - executada apenas uma vez
const el = document.getElementById("h1-inicio");
const textoOriginal = el.innerHTML;
let i = 0;
let isTag = false;
let txt = "";

function typeWriter() {
if (i < textoOriginal.length) {
  let char = textoOriginal.charAt(i);

  if (char === "<") isTag = true;
  if (char === ">") isTag = false;

  txt += char;
  el.innerHTML = txt;

  i++;
  setTimeout(typeWriter, isTag ? 0 : 50); // Não espera ao digitar tags
}
// Removido o else que reiniciava a animação
}

// Limpa o texto original e inicia a digitação apenas uma vez
el.innerHTML = "";
typeWriter();

// função de carrosel automatico para depoimentos
let index = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showSlide() {
slides.forEach(slide => slide.classList.remove('active'));
slides[index].classList.add('active');
index = (index + 1) % slides.length;
}

// Mostra o primeiro e inicia o loop
showSlide();
setInterval(showSlide, 5000); // muda a cada 5 segundos

// x para remover o pop-up do whatsapp
function fecharTexto() {
  const box = document.getElementById("whatsappTextBox");
  box.style.display = "none";
}

// Carrossel do portfólio
let indexPortfolio = 0;
const portfolioSlides = document.querySelectorAll('#portfolio .portifolionominal-slide');

function showPortfolioSlide() {
  portfolioSlides.forEach(slide => slide.classList.remove('active'));
  portfolioSlides[indexPortfolio].classList.add('active');
  indexPortfolio = (indexPortfolio + 1) % portfolioSlides.length;
}
showPortfolioSlide(); // Mostra o primeiro slide
setInterval(showPortfolioSlide, 4000);
