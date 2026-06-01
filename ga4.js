// ga4.js - Caricamento centralizzato di GA4 con Consent Mode
(function() {
    // ID GA4 - SOSTITUISCI CON IL TUO
    const GA4_ID = 'G-HXHWSSXVKH';
    
    // Carica gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    // Default consenso negato
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'denied'
    });
    
    gtag('config', GA4_ID);
    
    // Aggiorna consenso se l'utente ha già accettato in passato
    if (localStorage.getItem('cookie-consent') === 'accepted') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
        });
    }
    
    // Esponi una funzione globale per aggiornare il consenso quando l'utente clicca "Accetta"
    window.updateGA4Consent = function() {
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
        });
    };
})();