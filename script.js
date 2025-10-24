// Birthday Surprise Website JavaScript

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Smooth scrolling and reveal animations
function startExperience() {
    // Hide the start button
    const startBtn = document.querySelector('.start-btn');
    startBtn.style.display = 'none';
    
    // Show sections with staggered animations
    setTimeout(() => {
        document.querySelector('.gallery').classList.add('show');
    }, 500);
    
    setTimeout(() => {
        document.querySelector('.video-section').classList.add('show');
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.birthday-message').classList.add('show');
    }, 1500);
    
    setTimeout(() => {
        document.querySelector('.teasing-section').classList.add('show');
    }, 2000);
    
    setTimeout(() => {
        document.querySelector('.interactive').classList.add('show');
    }, 2500);
    
    // Scroll to gallery
    document.querySelector('.gallery').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Love message functionality
function showLoveMessage() {
    const loveMessage = document.getElementById('loveMessage');
    const loveBtn = document.querySelector('.love-btn');
    
    if (loveMessage.classList.contains('show')) {
        loveMessage.classList.remove('show');
        loveBtn.textContent = 'Click for a Special Message 💕';
    } else {
        loveMessage.classList.add('show');
        loveBtn.textContent = 'Hide Message 💕';
        
        // Add some romantic effects
        createHeartRain();
    }
}

// Create floating hearts animation
function createHeartRain() {
    const hearts = ['💖', '💕', '💗', '💝', '💘', '💞'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-50px';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'heartFall 3s linear forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Add heart fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Photo gallery interactions
document.addEventListener('DOMContentLoaded', function() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a special effect when clicking photos
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Show a sweet message
            showPhotoMessage();
        });
    });
});

// Show sweet message when clicking photos
function showPhotoMessage() {
    const messages = [
        "You're so beautiful! 💕",
        "I love this memory with you! 💖",
        "You make everything better! ✨",
        "My heart skips a beat seeing you! 💗",
        "You're my favorite person! 💝"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a temporary message bubble
    const messageBubble = document.createElement('div');
    messageBubble.textContent = randomMessage;
    messageBubble.style.position = 'fixed';
    messageBubble.style.top = '50%';
    messageBubble.style.left = '50%';
    messageBubble.style.transform = 'translate(-50%, -50%)';
    messageBubble.style.background = 'rgba(214, 51, 132, 0.9)';
    messageBubble.style.color = 'white';
    messageBubble.style.padding = '15px 25px';
    messageBubble.style.borderRadius = '25px';
    messageBubble.style.fontSize = '1.2rem';
    messageBubble.style.fontWeight = '600';
    messageBubble.style.zIndex = '1001';
    messageBubble.style.animation = 'fadeInOut 2s ease-in-out';
    messageBubble.style.pointerEvents = 'none';
    
    document.body.appendChild(messageBubble);
    
    setTimeout(() => {
        messageBubble.remove();
    }, 2000);
}

// Add fade in/out animation for message bubble
const messageStyle = document.createElement('style');
messageStyle.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
    }
`;
document.head.appendChild(messageStyle);

// Add parallax effect to floating hearts
window.addEventListener('scroll', function() {
    const hearts = document.querySelectorAll('.heart');
    const scrolled = window.pageYOffset;
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        heart.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add birthday confetti effect
function createBirthdayConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Add confetti fall animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Initialize birthday confetti when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        createBirthdayConfetti();
    }, 1000);
});

// Add smooth scrolling for better user experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add keyboard shortcuts for special effects
document.addEventListener('keydown', function(e) {
    // Press 'L' for love hearts
    if (e.key.toLowerCase() === 'l') {
        createHeartRain();
    }
    
    // Press 'C' for confetti
    if (e.key.toLowerCase() === 'c') {
        createBirthdayConfetti();
    }
});

// Add a special birthday surprise message
function showBirthdaySurprise() {
    const surpriseMessages = [
        "🎂 Happy Birthday, my love! 🎂",
        "You're the best thing that ever happened to me! 💕",
        "Here's to another year of amazing memories! ✨",
        "I love you more than words can say! 💖",
        "You make every day special! 🌟"
    ];
    
    const randomSurprise = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    
    // Create a special birthday message
    const birthdayMessage = document.createElement('div');
    birthdayMessage.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 30px;
            border-radius: 20px;
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            z-index: 1002;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: birthdayPop 2s ease-in-out;
        ">
            ${randomSurprise}
        </div>
    `;
    
    document.body.appendChild(birthdayMessage);
    
    setTimeout(() => {
        birthdayMessage.remove();
    }, 2000);
}

// Add birthday pop animation
const birthdayStyle = document.createElement('style');
birthdayStyle.textContent = `
    @keyframes birthdayPop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
`;
document.head.appendChild(birthdayStyle);

// Show birthday surprise on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        showBirthdaySurprise();
    }, 2000);
});
