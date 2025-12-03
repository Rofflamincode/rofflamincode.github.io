document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. CONFIGURATION EMAILJS (CONTACT)
    // ============================================
    
    // Initialisation avec ta Clé Publique (Trouvée dans Account > API Keys)
    // EXEMPLE DE FORMAT : emailjs.init("user_Xyz123...");
    emailjs.init("_ELOxBbQG990eritA");

    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('btn-submit');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Empêche le rechargement standard de la page
            event.preventDefault(); 

            // Changement visuel du bouton
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Envoi en cours...';
            submitBtn.disabled = true; // Empêche le double-clic

            // Envoi des données à EmailJS
            // Remplace les ID ci-dessous par les tiens !
            emailjs.sendForm('service_mwynemk', 'template_we2fu6i', this)
                .then(() => {
                    // SUCCÈS
                    alert('✅ Message envoyé avec succès ! Je vous répondrai très vite.');
                    contactForm.reset(); // Vide les champs
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }, (error) => {
                    // ERREUR
                    console.error('Erreur EmailJS:', error);
                    alert('❌ Oups, une erreur est survenue. Merci de me contacter directement par mail.');
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // ============================================
    // 2. MENU MOBILE (BURGER)
    // ============================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Bascule l'affichage du menu
            navLinks.classList.toggle('active');
            // Animation du burger
            hamburger.classList.toggle('toggle');
        });
    }

    // Fermer le menu quand on clique sur un lien
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // ============================================
    // 3. ANIMATION AU SCROLL (REVEAL)
    // ============================================
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distance depuis le bas

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Écouteur d'événement scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Appel initial au chargement
    revealOnScroll();
});