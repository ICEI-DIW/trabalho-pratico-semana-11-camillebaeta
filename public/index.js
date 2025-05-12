document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const pontos = document.querySelectorAll('.ponto');
    let index = 0;
  
    function mostrarSlide(i) {
      slides.forEach((slide, idx) => {
        slide.classList.remove('ativo');
        pontos[idx].classList.remove('ativo');
      });
  
      slides[i].classList.add('ativo');
      pontos[i].classList.add('ativo');
    }
  
    pontos.forEach((ponto, i) => {
      ponto.addEventListener('click', () => {
        index = i;
        mostrarSlide(index);
      });
    });
  
  });
  