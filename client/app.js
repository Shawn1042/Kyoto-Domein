// https://app.logomakr.com/7gFBWm

// Switch between domain name translations
(function() {
    const domainName = document.getElementById('domainSwitch');
    let isJapanese = true;

    function switchDomain() {
        if (isJapanese) {
            domainName.textContent = "Domein";
            domainName.style.paddingLeft = "5px";
        } else {
            domainName.textContent = "ドメイン";
        }
        isJapanese = !isJapanese;
    }

    setInterval(switchDomain, 5000);
})();

// Handle sharing functionality
document.getElementById("shareBtn").addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: 'Kyotoドメイン',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert("Sharing is not supported in this browser.");
    }
});

// Switch language based on selected option
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        title: {
            en: "Kyotoドメイン",
            ja: "京都ドメイン"
        },
        comingSoon: {
            en: "Kyotoドメイン is Coming Soon...",
            ja: "京都ドメインはもうすぐ登場..."
        }
    };

    function switchLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[key] && translations[key][lang]) {
                el.textContent = translations[key][lang];
            }
        });

        const boxElement = document.querySelector('.box');
        // Force reflow for the animation
        boxElement.classList.remove('textRevealAnimation');
        boxElement.offsetWidth; 
        boxElement.classList.add('textRevealAnimation');

        const h1Element = document.querySelector('.box h1');
        h1Element.style.animation = 'none';
        h1Element.offsetWidth; 
        h1Element.style.animation = '';
    }

    const links = document.querySelectorAll('.language-dropdown-content a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});
