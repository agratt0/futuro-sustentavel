// Menu hambúrguer no celular
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');

hamburger.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

// EFEITO INTERATIVO - Botão "Comprometa-se"
function compromisso() {
  const hero = document.querySelector('.hero');
  
  // Muda o fundo para um tom mais verde (efeito legal!)
  hero.style.backgroundImage = `linear-gradient(rgba(99,107,47,0.7), rgba(99,107,47,0.7)), url('https://picsum.photos/id/1015/1920/1080')`;
  
  // Mostra mensagem motivadora
  alert("🌍 PARABÉNS! Você agora faz parte do movimento pelo Futuro Sustentável!\n\nContinue plantando boas ações todos os dias.");
  
  // Depois de 3 segundos volta ao normal (para testar várias vezes)
  setTimeout(() => {
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://picsum.photos/id/1015/1920/1080')`;
  }, 3000);
}

// Animação suave ao rolar a página (bônus)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.secao').forEach(secao => {
    const topo = secao.getBoundingClientRect().top;
    if (topo < window.innerHeight * 0.8) {
      secao.style.opacity = '1';
      secao.style.transform = 'translateY(0)';
    }
  });
});