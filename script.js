//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const languageMessage = document.getElementById('language-message');

    // Load saved language from session storage (if any)
    const savedLanguage = sessionStorage.getItem('preferredLanguage');
    
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        updateLanguageMessage(savedLanguage);
    }

    // Event listener to update the language preference
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        
        // Save selected language to session storage
        sessionStorage.setItem('preferredLanguage', selectedLanguage);
        
        // Update the message
        updateLanguageMessage(selectedLanguage);
    });

    function updateLanguageMessage(language) {
        let message;
        switch (language) {
            case 'en':
                message = "Your preferred language is English.";
                break;
            case 'es':
                message = "Su idioma preferido es el español.";
                break;
            case 'fr':
                message = "Votre langue préférée est le français.";
                break;
            case 'de':
                message = "Ihre bevorzugte Sprache ist Deutsch.";
                break;
            default:
                message = "Your preferred language is English.";
        }
        languageMessage.textContent = message;
    }
});
