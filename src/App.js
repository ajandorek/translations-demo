import React from 'react';
import { useTranslation, Trans } from "react-i18next";

const API_URL = 'http://localhost:8888'

function App() {
  const [statusCode, setStatusCode] = React.useState('');
  const [name, setName] = React.useState('');
  const inputRef = React.useRef(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const fetchAPIContent = async () => {
    const response = await fetch(`${API_URL}/data`);
    const data = await response.json();
    setStatusCode(data.response.code);
  }

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage('en')}>🇺🇸</button>
        <button onClick={() => changeLanguage('de')}>🇩🇪</button>
        <button onClick={() => changeLanguage('es')}>🇪🇸</button>
      </div>
      <Trans i18nKey="description.part1">Hello World!!!</Trans>
      <div>{t('description.part2')}</div>
      <div>
        <input ref={inputRef} />
        <button onClick={() => setName(inputRef.current.value)}>Submit</button>
        <button onClick={() => setName('')}>Clear</button>
        {name && <div>{t("welcomeMessage", { name })}</div>}
      </div>
      <button onClick={fetchAPIContent}>Fetch Data</button>
      {statusCode && <div style={{ color: 'red' }}>{t(`error.${statusCode}`)}</div>}
    </div>
  );
}

export default App;
