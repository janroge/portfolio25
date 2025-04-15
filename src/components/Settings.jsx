import React from 'react';
import "./Settings.css"; // Importa los estilos actualizados

function Settings({ language, setLanguage, theme, setTheme, accentColor, setAccentColor }) {
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleAccentChange = (e) => {
    setAccentColor(e.target.value);
  };

  return (
    <div className="settings-panel">
      <button onClick={toggleLanguage}>
        {language === 'es' ? 'English' : 'Español'}
      </button>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <div className="accent-control">
        <label htmlFor="accentColor">Accent Color:</label>
        <input 
          type="color" 
          id="accentColor" 
          value={accentColor} 
          onChange={handleAccentChange} 
        />
      </div>
    </div>
  );
}

export default Settings;
