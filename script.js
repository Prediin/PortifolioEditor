// Função para esconder/mostrar o HUD (Header)
function toggleHud() {
    const hud = document.getElementById('game-hud');
    hud.classList.toggle('hidden');
}

// Animação simples ao rolar a página (Intersection Observer)
// Isso faz com que as barras de XP carreguem quando aparecem na tela
document.addEventListener('DOMContentLoaded', () => {
    
    const xpBars = document.querySelectorAll('.xp-bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Pega a largura definida no atributo style e aplica uma animação
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.transition = 'width 1.5s ease-out';
                    entry.target.style.width = width;
                }, 100);
                
                // Para de observar após animar
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    xpBars.forEach(bar => {
        observer.observe(bar);
    });

    // Rolagem suave para links internos (caso o CSS scroll-behavior não seja suportado em todos navegadores antigos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Ajuste para o header fixo não cobrir o título
            const headerOffset = 100;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});