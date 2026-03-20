import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SubjectPage } from './pages/SubjectPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Profile } from './pages/Profile';
import { AdminPanel } from './pages/AdminPanel';

const NotFound = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
    <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
      Go back home
    </a>
  </div>
);

const Root = () => {
  return <Layout><Home /></Layout>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root
  },
  {
    path: '/subject/:subjectId',
    element: <Layout><SubjectPage /></Layout>
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>
  },
  {
    path: '/signup',
    element: <Layout><Signup /></Layout>
  },
  {
    path: '/profile',
    element: <Layout><Profile /></Layout>
  },
  {
    path: '/admin',
    element: <Layout><AdminPanel /></Layout>
  },
  {
    path: '*',
    element: <Layout><NotFound /></Layout>
  }
]);
