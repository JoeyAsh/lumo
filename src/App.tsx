import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { LanguageProvider, SUPPORTED_LOCALES, type Locale } from './i18n/LanguageContext'

function RootRedirect() {
  const saved = localStorage.getItem('locale');
  const browserLang = navigator.language.split('-')[0];
  const preferred = saved ?? browserLang;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(preferred)
    ? (preferred as Locale)
    : 'en';
  return <Navigate to={`/${locale}`} replace />;
}

function LocalizedApp() {
  const { lang } = useParams<{ lang: string }>();

  if (!(SUPPORTED_LOCALES as readonly string[]).includes(lang!)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <LanguageProvider locale={lang as Locale}>
      <Layout>
        <Outlet />
      </Layout>
    </LanguageProvider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LocalizedApp />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
