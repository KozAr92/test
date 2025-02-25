import './styles/App.css'
import {Background} from "./Background.tsx";
import {MainMenu} from "./main-menu/MainMenu.tsx";
import {useEffect, useState} from "react";
import { IntlProvider} from "react-intl";
import {PageContextProvider} from "./context/PageProvider.tsx";

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
  const [locale, setLocale] = useState('pl');
  const [messages, setMessages] = useState({});
    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    useEffect(() => {
        loadTranslation(locale).then((translations) => {
            setMessages(translations);
            setTranslationsLoaded(true);
        });
    }, [locale]);

    if (!translationsLoaded) {
        return <div>Loading</div>
    }

    return (
        <IntlProvider locale={locale} messages={messages}>
            <PageContextProvider translations={messages}>
            <Background>
                <MainMenu setLanguage={setLocale} />
            </Background>
            </PageContextProvider>
        </IntlProvider>
    );
}

//   console.log(locale)
//     console.log(messages)
//
//   useEffect(() => {
//     loadTranslation(locale).then((translations) => setMessages(translations));
//     setLocale("pl")
//   }, [locale]);
//
//   return (
//   <IntlProvider locale={locale} messages={messages}>
//     <Background>
//       <MainMenu />
//     </Background>
//   {/*//  <FormattedMessage id={"hello"} defaultMessage={"Default hello"}/>*/}
//   {/*//   <select value={locale} onChange={(e) => setLocale(e.target.value)}>*/}
//   {/*//     <option value="en">English</option>*/}
//   {/*//     <option value="pl">Polish</option>*/}
//   {/*//   </select>*/}
//    </IntlProvider>
//   )
// }

export default App
