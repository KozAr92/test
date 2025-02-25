import './App.css'
import {Home} from "./Home.tsx";
import {useEffect, useState} from "react";
import {FormattedMessage, IntlProvider} from "react-intl";

const loadTranslation = async (locale: string) => {
  try {
    const response = await fetch(`/translations/${locale}.json`);
    return await response.json();
  } catch (error) {
    console.error('Error loading translation:', error);
    return {};
  }
};

function App() {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    loadTranslation(locale).then((translations) => setMessages(translations));
  }, [locale]);

  return (
      <div>
  <IntlProvider locale={locale} messages={messages}>
   <FormattedMessage id={"hello"}/>
    <select value={locale} onChange={(e) => setLocale(e.target.value)}>
      <option value="en">English</option>
      <option value="pl">Polish</option>
    </select>
  </IntlProvider>
     <Home />
      </div>
  )
}

export default App
