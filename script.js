document.addEventListener("DOMContentLoaded", function() {
    const presentacion = document.getElementById("presentacion");
    const btnIniciar = document.getElementById("btnIniciar");
    const principal = document.getElementById("principal");
    const audioElement = document.getElementById("musica-fondo");
    const toggleAudioBtn = document.getElementById("toggleAudio");
    const corazonesContainer = document.querySelector('.corazones-container');
    let corazonesInterval;
  
    btnIniciar.addEventListener("click", function() {
      // Desaparece la pantalla de presentación con animación
      presentacion.classList.remove("presentacion-activa");
      presentacion.classList.add("presentacion-inactiva");
      setTimeout(() => {
        presentacion.style.display = "none";
        principal.classList.remove("oculto");
        createStars(); // Genera las estrellas en el fondo
        startHearts(); // Comienza la animación de corazones
        playAudio(); // Reproduce la música automáticamente
      }, 1000);
    });
  
    // Función para crear estrellas en el cielo
    function createStars() {
      const starContainer = document.querySelector('.cielo-estrellado');
      const numStars = 150; // Aumentamos el número de estrellas
      
      for(let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Tamaño aleatorio para las estrellas
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posición aleatoria
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Retraso aleatorio en la animación
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // Duración aleatoria de la animación
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        starContainer.appendChild(star);
      }
    }
  
    // Función para generar corazones flotantes
    function startHearts() {
      corazonesInterval = setInterval(createHeart, 300);
    }
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.innerHTML = '❤';
      heart.classList.add('corazon');
      
      // Posición inicial aleatoria en la parte inferior
      heart.style.left = Math.random() * 100 + '%';
      heart.style.bottom = '5%';
      
      // Tamaño aleatorio
      const size = Math.random() * 15 + 10;
      heart.style.fontSize = `${size}px`;
      
      // Color aleatorio (tonos de amarillo y dorado)
      const colors = ['#FFD54F', '#FFECB3', '#FFE082', '#FFC107', '#FFB300'];
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // Velocidad aleatoria
      const duration = Math.random() * 6 + 4;
      heart.style.animationDuration = `${duration}s`;
      
      corazonesContainer.appendChild(heart);
      
      // Eliminar el corazón después de la animación
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
  
    // Control de audio
    function playAudio() {
      audioElement.volume = 0.5; // Volumen al 50%
      audioElement.play().catch(e => {
        console.log("Reproducción automática bloqueada por el navegador. Click en botón para reproducir");
      });
    }
  
    toggleAudioBtn.addEventListener('click', function() {
      if (audioElement.paused) {
        audioElement.play();
        this.textContent = '🔊';
        this.classList.remove('muted');
      } else {
        audioElement.pause();
        this.textContent = '🔇';
        this.classList.add('muted');
      }
    });
  
    // Hacer que las flores reaccionen al click además del hover
    const flores = document.querySelectorAll('.flor-svg');
    flores.forEach(flor => {
      flor.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
        
        // Crear efecto de brillo
        const brillo = document.createElement('div');
        brillo.style.position = 'absolute';
        brillo.style.width = '100%';
        brillo.style.height = '100%';
        brillo.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)';
        brillo.style.borderRadius = '50%';
        brillo.style.top = '0';
        brillo.style.left = '0';
        brillo.style.opacity = '0';
        brillo.style.animation = 'fadeIn 0.3s ease forwards';
        
        this.appendChild(brillo);
        
        // Eliminar el brillo después de la animación
        setTimeout(() => {
          brillo.remove();
          this.style.transform = '';
        }, 500);
        
        // Crear más corazones al hacer click en una flor
        for (let i = 0; i < 5; i++) {
          setTimeout(createHeart, i * 100);
        }
      });
    });
  });
  