// Elementos de áudio
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');
const bgm = document.getElementById('bgm');

// Elementos de controle
const soundToggle = document.getElementById('sound-toggle');
const fullscreenToggle = document.getElementById('fullscreen-toggle');
const startButton = document.querySelector('.start-button');

// Estado do áudio
let soundEnabled = false;
let bgmPlaying = false;

// Função para criar fundo de chamas
function createFlameBackground() {
    // Criar container para o fundo de chamas
    const flameBackgroundContainer = document.createElement('div');
    flameBackgroundContainer.className = 'flame-background';
    document.body.appendChild(flameBackgroundContainer);
    
    // Criar container para efeito de cintilação
    const flameFlickerContainer = document.createElement('div');
    flameFlickerContainer.className = 'flame-flicker';
    document.body.appendChild(flameFlickerContainer);
}

// Adicionar estilo para animação de movimento horizontal
const style = document.createElement('style');
style.textContent = `
    @keyframes horizontalFloat {
        0% {
            transform: translateX(-20px) translateY(0) scale(0.8);
            opacity: 0.5;
        }
        100% {
            transform: translateX(20px) translateY(-10px) scale(1.2);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Dados de exemplo para projetos
const projects = [
    {
        title: 'Pixel Adventure',
        description: 'A retro platformer game built with JavaScript',
        technologies: ['JavaScript', 'Canvas', 'HTML5'],
        image: 'images/project1.png',
        link: '#'
    },
    {
        title: '8-Bit Portfolio',
        description: 'A pixel art portfolio website',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'images/project2.png',
        link: '#'
    },
    {
        title: 'Retro Calculator',
        description: 'A calculator with 8-bit styling',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'images/project3.png',
        link: '#'
    }
];

// Função para criar cards de projeto
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <h3 class="pixel-title">${project.title}</h3>
        <div class="project-image" style="background-image: url('${project.image}')"></div>
        <p class="pixel-text">${project.description}</p>
        <div class="technologies">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <a href="${project.link}" class="pixel-button">View Project</a>
    `;
    
    return card;
}

// Função para preencher a seção de projetos
function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectCard(project));
    });
}

// Função para alternar o som
function toggleSound() {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
    
    if (soundEnabled) {
        bgm.play();
        bgmPlaying = true;
    } else {
        bgm.pause();
        bgmPlaying = false;
    }
}

// Função para alternar o modo de tela cheia
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenToggle.textContent = '⛶';
    } else {
        document.exitFullscreen();
        fullscreenToggle.textContent = '⛶';
    }
}

// Função para adicionar efeito de glitch a elementos
function addGlitchEffect() {
    const titles = document.querySelectorAll('.pixel-title');
    
    titles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.classList.add('glitch');
        });
        
        title.addEventListener('mouseout', () => {
            title.classList.remove('glitch');
        });
    });
}

// Função para adicionar efeitos sonoros a botões
function addSoundEffects() {
    const buttons = document.querySelectorAll('.pixel-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            if (soundEnabled) {
                hoverSound.currentTime = 0;
                hoverSound.play();
            }
        });
        
        button.addEventListener('click', () => {
            if (soundEnabled) {
                clickSound.currentTime = 0;
                clickSound.play();
            }
        });
    });
}

// Função para iniciar a animação de digitação
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Função para iniciar a experiência
function startExperience() {
    const heroText = document.querySelector('.hero .pixel-text');
    typeWriter(heroText, 'Level 1: Welcome to my digital world');
    
    // Adicionar animação ao avatar
    const avatar = document.querySelector('.pixel-avatar');
    avatar.style.animation = 'pulse 2s infinite';
    
    // Iniciar BGM se o som estiver habilitado
    if (soundEnabled) {
        bgm.play();
        bgmPlaying = true;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    addGlitchEffect();
    addSoundEffects();
    
    soundToggle.addEventListener('click', toggleSound);
    fullscreenToggle.addEventListener('click', toggleFullscreen);
    startButton.addEventListener('click', startExperience);
    
    // Adicionar animação de digitação ao texto inicial
    const initialText = document.querySelector('.hero .pixel-text');
    typeWriter(initialText, 'Press START to begin your journey');

    // Rastro do cursor
    const cursorTrail = document.createElement('div');
    cursorTrail.id = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    const trail = [];
    const trailLength = 20;

    document.addEventListener('mousemove', function(e) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        cursorTrail.appendChild(dot);

        trail.push(dot);
        if (trail.length > trailLength) {
            trail[0].remove();
            trail.shift();
        }

        setTimeout(() => {
            dot.remove();
        }, 1000);
    });

    // Contador de visitantes
    const counter = document.querySelector('.counter');
    if (counter) {
        let visits = localStorage.getItem('visitorCount') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('visitorCount', visits);
        counter.textContent = `Visitors: ${visits.toString().padStart(6, '0')}`;
    }

    // Efeito de texto piscante
    const blinkElements = document.querySelectorAll('.blink');
    blinkElements.forEach(element => {
        element.style.animation = 'blink 1s infinite';
    });

    // Efeito de texto arco-íris
    const rainbowTexts = document.querySelectorAll('.rainbow-text');
    rainbowTexts.forEach(text => {
        text.style.animation = 'rainbow 5s linear infinite';
    });

    // Efeito de hover nos botões bevel
    const bevelButtons = document.querySelectorAll('.bevel-button');
    bevelButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.borderStyle = 'inset';
        });
        button.addEventListener('mouseout', function() {
            this.style.borderStyle = 'outset';
        });
    });

    // Efeito de hover nos links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });

    // Efeito de hover nas imagens
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.border = '2px solid #ff0000';
        });
        img.addEventListener('mouseout', function() {
            this.style.border = '';
        });
    });

    // Efeito de hover nos cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#e0e0e0';
        });
        card.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    // Efeito de hover nas barras de habilidades
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        bar.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#a0a0a0';
        });
        bar.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    // Efeito de hover no formulário
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.border = '2px solid #0000ff';
        });
        input.addEventListener('blur', function() {
            this.style.backgroundColor = '';
            this.style.border = '';
        });
    });

    // Efeito de hover na sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#0000ff';
            this.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textDecoration = '';
        });
    });

    // Efeito de hover no footer
    const footerLinks = document.querySelectorAll('.footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#0000ff';
            this.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textDecoration = '';
        });
    });

    // Efeito de hover nos títulos
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '2px 2px #0000ff';
        });
        title.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nos divisores
    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(divider => {
        divider.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
        });
        divider.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });

    // Efeito de hover no contador
    const counterElement = document.querySelector('.counter');
    if (counterElement) {
        counterElement.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#0000ff';
            this.style.color = '#ffffff';
        });
        counterElement.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
        });
    }

    // Efeito de hover na assinatura
    const signature = document.querySelector('.signature');
    if (signature) {
        signature.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.fontWeight = 'bold';
        });
        signature.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontWeight = '';
        });
    }

    // Efeito de hover nos prêmios
    const awards = document.querySelectorAll('.awards img');
    awards.forEach(award => {
        award.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.border = '2px solid #ff0000';
        });
        award.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.border = '';
        });
    });

    // Efeito de hover nas amostras de cor
    const colorSamples = document.querySelectorAll('.color-sample');
    colorSamples.forEach(sample => {
        sample.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.border = '2px solid #0000ff';
        });
        sample.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.border = '';
        });
    });

    // Efeito de hover nos destaques
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseover', function() {
            this.style.color = '#0000ff';
            this.style.fontSize = '1.2em';
        });
        highlight.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontSize = '';
        });
    });

    // Efeito de hover na lista de interesses
    const interests = document.querySelectorAll('.interests-list li');
    interests.forEach(interest => {
        interest.addEventListener('mouseover', function() {
            this.style.color = '#0000ff';
            this.style.marginLeft = '10px';
        });
        interest.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.marginLeft = '';
        });
    });

    // Efeito de hover na lista de links
    const linksList = document.querySelectorAll('.links-list li');
    linksList.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#0000ff';
            this.style.marginLeft = '10px';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.marginLeft = '';
        });
    });

    // Efeito de hover no texto de boas-vindas
    const welcomeText = document.querySelector('.welcome-text');
    if (welcomeText) {
        welcomeText.addEventListener('mouseover', function() {
            this.style.color = '#0000ff';
            this.style.fontSize = '1.2em';
        });
        welcomeText.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontSize = '';
        });
    }

    // Efeito de hover na imagem de perfil
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseover', function() {
            this.style.border = '2px solid #ff0000';
            this.style.transform = 'scale(1.1)';
        });
        profileImg.addEventListener('mouseout', function() {
            this.style.border = '';
            this.style.transform = '';
        });
    }
});

// Adicionar animação de pulso
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Efeitos Heavy Metal - Anos 2000
document.addEventListener('DOMContentLoaded', function() {
    // Rastro do cursor com chamas
    const cursorTrail = document.createElement('div');
    cursorTrail.id = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    const trail = [];
    const trailLength = 20;

    document.addEventListener('mousemove', function(e) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        cursorTrail.appendChild(dot);

        trail.push(dot);
        if (trail.length > trailLength) {
            trail[0].remove();
            trail.shift();
        }

        setTimeout(() => {
            dot.remove();
        }, 1000);
    });

    // Contador de visitantes com efeito de contagem regressiva
    const counter = document.querySelector('.counter');
    if (counter) {
        let visits = localStorage.getItem('visitorCount') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('visitorCount', visits);
        
        // Efeito de contagem regressiva
        let displayCount = 0;
        const targetCount = visits;
        const countInterval = setInterval(() => {
            if (displayCount < targetCount) {
                displayCount++;
                counter.textContent = `Visitors: ${displayCount.toString().padStart(6, '0')}`;
            } else {
                clearInterval(countInterval);
            }
        }, 50);
    }

    // Efeito de texto piscante
    const blinkElements = document.querySelectorAll('.blink');
    blinkElements.forEach(element => {
        element.style.animation = 'blink 1s infinite';
    });

    // Efeito de texto arco-íris
    const rainbowTexts = document.querySelectorAll('.rainbow-text');
    rainbowTexts.forEach(text => {
        text.style.animation = 'rainbow 5s linear infinite';
    });

    // Efeito de hover nos botões bevel
    const bevelButtons = document.querySelectorAll('.bevel-button');
    bevelButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.borderStyle = 'inset';
            this.style.backgroundColor = '#ff0000';
            this.style.color = '#ffffff';
            this.style.textShadow = '0 0 5px #ffffff';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        });
        button.addEventListener('mouseout', function() {
            this.style.borderStyle = 'outset';
            this.style.backgroundColor = '#000000';
            this.style.color = '#ffffff';
            this.style.textShadow = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nos links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nas imagens
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.border = '2px solid #ff0000';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        img.addEventListener('mouseout', function() {
            this.style.border = '';
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    });

    // Efeito de hover nos cards de notícias
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#333333';
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nas barras de habilidades
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        bar.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ff6600';
        });
        bar.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    // Efeito de hover no formulário
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.backgroundColor = '#333333';
            this.style.border = '2px solid #ff0000';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
        });
        input.addEventListener('blur', function() {
            this.style.backgroundColor = '';
            this.style.border = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover na sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ffffff';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover no footer
    const footerLinks = document.querySelectorAll('.footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nos títulos
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff0000, 0 0 20px #ff6600';
        });
        title.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nos divisores
    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(divider => {
        divider.addEventListener('mouseover', function() {
            this.style.filter = 'brightness(1.5)';
        });
        divider.addEventListener('mouseout', function() {
            this.style.filter = '';
        });
    });

    // Efeito de hover no contador
    const counterElement = document.querySelector('.counter');
    if (counterElement) {
        counterElement.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ff0000';
            this.style.color = '#ffffff';
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
        });
        counterElement.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
            this.style.boxShadow = '';
        });
    }

    // Efeito de hover na assinatura
    const signature = document.querySelector('.signature');
    if (signature) {
        signature.addEventListener('mouseover', function() {
            this.style.filter = 'brightness(1.5)';
        });
        signature.addEventListener('mouseout', function() {
            this.style.filter = '';
        });
    }

    // Efeito de hover nos prêmios
    const awards = document.querySelectorAll('.awards img');
    awards.forEach(award => {
        award.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.border = '2px solid #ff0000';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        });
        award.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.border = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nas amostras de cor
    const colorSamples = document.querySelectorAll('.color-sample');
    colorSamples.forEach(sample => {
        sample.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.border = '2px solid #ff0000';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        });
        sample.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.border = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nos destaques
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.fontSize = '1.2em';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        highlight.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontSize = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover na lista de interesses
    const interests = document.querySelectorAll('.interests-list li');
    interests.forEach(interest => {
        interest.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.marginLeft = '10px';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        interest.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.marginLeft = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover na lista de links
    const linksList = document.querySelectorAll('.links-list li');
    linksList.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.marginLeft = '10px';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.marginLeft = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover no texto de boas-vindas
    const welcomeText = document.querySelector('.welcome-text');
    if (welcomeText) {
        welcomeText.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.fontSize = '1.2em';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        welcomeText.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontSize = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover na imagem de perfil
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseover', function() {
            this.style.border = '2px solid #ff0000';
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
        });
        profileImg.addEventListener('mouseout', function() {
            this.style.border = '';
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    }

    // Efeito de hover nos itens da galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#333333';
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
            this.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    });

    // Efeito de hover nos itens de entrevista
    const interviewItems = document.querySelectorAll('.interview-item');
    interviewItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#333333';
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nos itens de review
    const reviewItems = document.querySelectorAll('.review-item');
    reviewItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#333333';
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nas linhas do fórum
    const forumRows = document.querySelectorAll('.forum-row');
    forumRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#333333';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover no login do fórum
    const forumLogin = document.querySelector('.forum-login');
    if (forumLogin) {
        forumLogin.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
        });
        forumLogin.addEventListener('mouseout', function() {
            this.style.boxShadow = '';
        });
    }

    // Efeito de hover nos títulos das notícias
    const newsTitles = document.querySelectorAll('.news-item h3');
    newsTitles.forEach(title => {
        title.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        title.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nas datas das notícias
    const newsDates = document.querySelectorAll('.news-date');
    newsDates.forEach(date => {
        date.addEventListener('mouseover', function() {
            this.style.color = '#ff6600';
        });
        date.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });

    // Efeito de hover nos títulos das entrevistas
    const interviewTitles = document.querySelectorAll('.interview-item h3');
    interviewTitles.forEach(title => {
        title.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        title.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nas datas das entrevistas
    const interviewDates = document.querySelectorAll('.interview-date');
    interviewDates.forEach(date => {
        date.addEventListener('mouseover', function() {
            this.style.color = '#ff6600';
        });
        date.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });

    // Efeito de hover nos títulos das reviews
    const reviewTitles = document.querySelectorAll('.review-item h3');
    reviewTitles.forEach(title => {
        title.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        title.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nas datas das reviews
    const reviewDates = document.querySelectorAll('.review-date');
    reviewDates.forEach(date => {
        date.addEventListener('mouseover', function() {
            this.style.color = '#ff6600';
        });
        date.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });

    // Efeito de hover nas estrelas de avaliação
    const ratingStars = document.querySelectorAll('.rating-stars');
    ratingStars.forEach(stars => {
        stars.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff6600';
        });
        stars.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nos labels de avaliação
    const ratingLabels = document.querySelectorAll('.rating-label');
    ratingLabels.forEach(label => {
        label.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 5px #ff6600';
        });
        label.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nos títulos da sidebar
    const sidebarTitles = document.querySelectorAll('.sidebar-title');
    sidebarTitles.forEach(title => {
        title.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        title.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nos itens da lista de bandas
    const bandItems = document.querySelectorAll('.top-bands li');
    bandItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 5px #ff0000';
            this.style.marginLeft = '10px';
        });
        item.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
            this.style.marginLeft = '';
        });
    });

    // Efeito de hover no banner
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
        });
        banner.addEventListener('mouseout', function() {
            this.style.boxShadow = '';
        });
    }

    // Efeito de hover no marquee
    const marquee = document.querySelector('.marquee');
    if (marquee) {
        marquee.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        marquee.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover no footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.3)';
        });
        footer.addEventListener('mouseout', function() {
            this.style.boxShadow = '';
        });
    }

    // Efeito de hover na data do footer
    const footerDate = document.querySelector('#footer-date');
    if (footerDate) {
        footerDate.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        footerDate.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover nos botões de login/registro
    const loginButtons = document.querySelectorAll('.login-form input[type="submit"], .login-form input[type="button"]');
    loginButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ff0000';
            this.style.color = '#ffffff';
            this.style.textShadow = '0 0 5px #ffffff';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
            this.style.textShadow = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nos cabeçalhos do fórum
    const forumHeaders = document.querySelectorAll('.forum-header th');
    forumHeaders.forEach(header => {
        header.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        header.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover nos links do fórum
    const forumLinks = document.querySelectorAll('.forum-row a');
    forumLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover no título do login
    const loginTitle = document.querySelector('.forum-login h3');
    if (loginTitle) {
        loginTitle.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 10px #ff0000';
        });
        loginTitle.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover nos inputs do login
    const loginInputs = document.querySelectorAll('.login-form input[type="text"], .login-form input[type="password"]');
    loginInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.backgroundColor = '#333333';
            this.style.border = '2px solid #ff0000';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
        });
        input.addEventListener('blur', function() {
            this.style.backgroundColor = '';
            this.style.border = '';
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nos labels do login
    const loginLabels = document.querySelectorAll('.login-form td:first-child');
    loginLabels.forEach(label => {
        label.addEventListener('mouseover', function() {
            this.style.color = '#ff6600';
            this.style.textShadow = '0 0 5px #ff0000';
        });
        label.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    });

    // Efeito de hover no título do fórum
    const forumTitle = document.querySelector('#forum .section-title');
    if (forumTitle) {
        forumTitle.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 15px #ff0000, 0 0 30px #ff6600';
        });
        forumTitle.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover no título da galeria
    const galleryTitle = document.querySelector('#gallery .section-title');
    if (galleryTitle) {
        galleryTitle.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 15px #ff0000, 0 0 30px #ff6600';
        });
        galleryTitle.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover no título das entrevistas
    const interviewsTitle = document.querySelector('#interviews .section-title');
    if (interviewsTitle) {
        interviewsTitle.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 15px #ff0000, 0 0 30px #ff6600';
        });
        interviewsTitle.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover no título das reviews
    const reviewsTitle = document.querySelector('#reviews .section-title');
    if (reviewsTitle) {
        reviewsTitle.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 15px #ff0000, 0 0 30px #ff6600';
        });
        reviewsTitle.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover no título das notícias
    const newsTitle = document.querySelector('#news .section-title');
    if (newsTitle) {
        newsTitle.addEventListener('mouseover', function() {
            this.style.color = '#ff0000';
            this.style.textShadow = '0 0 15px #ff0000, 0 0 30px #ff6600';
        });
        newsTitle.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textShadow = '';
        });
    }

    // Efeito de hover no título da página inicial
    const homeTitle = document.querySelector('#home .rainbow-text');
    if (homeTitle) {
        homeTitle.addEventListener('mouseover', function() {
            this.style.textShadow = '0 0 20px rgba(255, 0, 0, 0.8)';
        });
        homeTitle.addEventListener('mouseout', function() {
            this.style.textShadow = '';
        });
    }
});

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    createLavaCascade();
    
    // ... existing code ...
});

// Função para criar o efeito de cascata de lava
function createLavaCascade() {
    // Criar container para cascata de lava
    const lavaCascadeContainer = document.createElement('div');
    lavaCascadeContainer.className = 'lava-cascade';
    document.body.appendChild(lavaCascadeContainer);
    
    // Criar 5-8 fluxos de lava
    const streamCount = 5 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < streamCount; i++) {
        // Criar fluxo de lava
        const lavaStream = document.createElement('div');
        lavaStream.className = 'lava-stream';
        
        // Posição aleatória na horizontal
        const randomX = 10 + Math.random() * 80;
        lavaStream.style.left = `${randomX}%`;
        
        // Atraso aleatório na animação
        const randomDelay = Math.random() * 3;
        lavaStream.style.animationDelay = `${randomDelay}s`;
        
        // Duração aleatória
        const randomDuration = 2 + Math.random() * 2;
        lavaStream.style.animationDuration = `${randomDuration}s`;
        
        lavaCascadeContainer.appendChild(lavaStream);
        
        // Criar gotas de lava para cada fluxo
        createLavaDroplets(lavaStream, randomX);
    }
}

// Função para criar gotas de lava para um fluxo
function createLavaDroplets(stream, streamX) {
    // Criar 10-15 gotas por fluxo
    const dropletCount = 10 + Math.floor(Math.random() * 6);
    
    for (let i = 0; i < dropletCount; i++) {
        const droplet = document.createElement('div');
        droplet.className = 'lava-droplet';
        
        // Posição aleatória ao longo do fluxo
        const randomOffset = Math.random() * 80 - 40; // -40px a +40px
        droplet.style.left = `${randomOffset}px`;
        
        // Atraso aleatório na animação
        const randomDelay = Math.random() * 2;
        droplet.style.animationDelay = `${randomDelay}s`;
        
        // Duração aleatória
        const randomDuration = 1.5 + Math.random() * 1;
        droplet.style.animationDuration = `${randomDuration}s`;
        
        // Tamanho aleatório
        const randomSize = 6 + Math.random() * 6;
        droplet.style.width = `${randomSize}px`;
        droplet.style.height = `${randomSize}px`;
        
        // Adicionar evento para criar splash quando a gota "atingir o chão"
        droplet.addEventListener('animationend', function() {
            createLavaSplash(streamX + randomOffset, window.innerHeight - 20);
        });
        
        stream.appendChild(droplet);
    }
}

// Função para criar efeito de splash quando a gota atinge o chão
function createLavaSplash(x, y) {
    const splash = document.createElement('div');
    splash.className = 'lava-splash';
    
    // Posicionar o splash
    splash.style.left = `${x}px`;
    splash.style.top = `${y}px`;
    
    // Adicionar ao container de lava
    const lavaContainer = document.querySelector('.lava-cascade');
    lavaContainer.appendChild(splash);
    
    // Remover o splash após a animação
    splash.addEventListener('animationend', function() {
        splash.remove();
    });
} 