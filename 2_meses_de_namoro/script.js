function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(coracao);
  
    setTimeout(() => coracao.remove(), 5000);
  }
  
  setInterval(criarCoracao, 400);
  
  const style = document.createElement('style');
  style.textContent = `
    .coracao {
      position: fixed;
      bottom: 0;
      color: #ff5c8d;
      font-size: 20px;
      animation: subir linear forwards;
    }
    @keyframes subir {
      to { transform: translateY(-100vh); opacity: 0; }
    }
  `;
  document.head.appendChild(style);