import { createContext, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import deMessages from './messages/de.json';
import enMessages from './messages/en.json';
import zhMessages from './messages/zh.json';

const messages: Record<string, Record<string, string>> = {
  de: deMessages,
  en: enMessages,
  zh: zhMessages,
};

export const SUPPORTED_LOCALES = ['en', 'de', 'zh'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

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

export const LanguageProvider: React.FC<{ locale: Locale; children: React.ReactNode }> = ({ locale, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    // Replace the leading /:lang segment, preserving the rest of the path
    const newPath = location.pathname.replace(/^\/[^/]+/, `/${newLocale}`);
    navigate(newPath + location.search + location.hash, { replace: true });
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
