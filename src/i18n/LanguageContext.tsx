import { createContext, useState, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import deMessages from './messages/de.json';
import enMessages from './messages/en.json';
import zhMessages from './messages/zh.json';

const messages: Record<string, any> = {
  de: deMessages,
  en: enMessages,
  zh: zhMessages,
};

type Locale = 'de' | 'en' | 'zh';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    return (['de', 'en', 'zh'].includes(savedLocale) ? savedLocale : 'en') as Locale;
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider 
        locale={locale} 
        messages={messages[locale]} 
        defaultLocale="en"
        defaultRichTextElements={{
          br: () => <br />,
          BR: () => <br />,
          em: (chunks) => <em>{chunks}</em>,
          b: (chunks) => <b>{chunks}</b>,
          strong: (chunks) => <strong>{chunks}</strong>,
          i: (chunks) => <i>{chunks}</i>,
        }}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
