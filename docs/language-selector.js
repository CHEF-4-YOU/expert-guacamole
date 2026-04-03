/**
 * Language Selector with Flags
 * Selector de Idiomas con Banderas
 * Sélecteur de Langues avec Drapeaux
 */

class LanguageSelector {
  constructor(options = {}) {
    this.languages = {
      es: { name: 'Español', flag: '🇲🇽', code: 'es' },
      en: { name: 'English', flag: '🇬🇧', code: 'en' },
      fr: { name: 'Français', flag: '🇫🇷', code: 'fr' }
    };
    this.defaultLang = 'es';
    this.currentLang = this.getSupportedLanguage(
      localStorage.getItem('preferredLanguage')
    );
    this.init();
  }

  init() {
    // Crear contenedor si no existe
    if (!document.getElementById('lang-selector')) {
      this.createSelector();
    }
    this.attachEventListeners();
    this.applyLanguage(this.currentLang);
  }

  createSelector() {
    const selector = document.createElement('div');
    selector.id = 'lang-selector';
    selector.className = 'language-selector';
    
    let html = '<div class="lang-flags">';
    
    Object.entries(this.languages).forEach(([code, lang]) => {
      const isActive = code === this.currentLang ? 'active' : '';
      html += `
        <button 
          class="lang-flag ${isActive}" 
          data-lang="${code}"
          title="${lang.name}"
          aria-label="Cambiar a ${lang.name}"
        >
          <span class="flag-emoji">${lang.flag}</span>
          <span class="lang-code">${code.toUpperCase()}</span>
        </button>
      `;
    });
    
    html += '</div>';
    selector.innerHTML = html;
    
    // Insertar al inicio del body o header
    const header = document.querySelector('header') || document.querySelector('nav');
    if (header) {
      header.appendChild(selector);
    } else {
      document.body.insertBefore(selector, document.body.firstChild);
    }
  }

  attachEventListeners() {
    document.querySelectorAll('.lang-flag').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const langCode = btn.dataset.lang;
        this.switchLanguage(langCode);
      });
    });
  }

  switchLanguage(langCode) {
    const normalizedLangCode = this.getSupportedLanguage(langCode);
    if (normalizedLangCode === this.currentLang) return;

    // Actualizar estado visual
    document.querySelectorAll('.lang-flag').forEach(btn => {
      btn.classList.remove('active');
    });
    const selectedButton = document.querySelector(
      `[data-lang="${normalizedLangCode}"]`
    );
    if (selectedButton) {
      selectedButton.classList.add('active');
    }

    // Guardar preferencia
    localStorage.setItem('preferredLanguage', normalizedLangCode);
    this.currentLang = normalizedLangCode;

    // Aplicar traducción
    this.applyLanguage(normalizedLangCode);
  }

  applyLanguage(langCode) {
    // Opción 1: Google Translate API
    if (window.google && window.google.translate) {
      new google.translate.TranslateElement(
        { pageLanguage: 'es' },
        'google_translate_element'
      );
      
      const selectLang = document.querySelector('.goog-te-combo');
      if (selectLang) {
        selectLang.value = this.getGoogleTranslateLangCode(langCode);
        selectLang.dispatchEvent(new Event('change'));
      }
    } else {
      // Opción 2: Traducción manual con JSON
      this.loadTranslations(langCode);
    }

    // Actualizar atributo lang del documento
    document.documentElement.lang = langCode;
    document.documentElement.setAttribute('data-language', langCode);

    // Disparar evento personalizado
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: langCode } 
    }));
  }

  getGoogleTranslateLangCode(langCode) {
    const map = {
      es: 'es',
      en: 'en',
      fr: 'fr'
    };
    return map[langCode] || 'es';
  }

  getSupportedLanguage(langCode) {
    return this.languages[langCode] ? langCode : this.defaultLang;
  }

  loadTranslations(langCode) {
    // Para cargar traducciones JSON personalizadas
    // Puedes extender esto con un archivo de traducciones
    const translations = {
      es: {},
      en: {},
      fr: {}
    };

    if (translations[langCode]) {
      this.applyTranslations(translations[langCode]);
    }
  }

  applyTranslations(translationMap) {
    // Aplicar traducciones a elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translationMap[key]) {
        el.textContent = translationMap[key];
      }
    });
  }
}

// Inicializar cuando DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.languageSelector = new LanguageSelector();
});
