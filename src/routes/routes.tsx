import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';

const router = createBrowserRouter([
  { path: '', element: <HomePage /> },
  { path: 'signup', element: <SignUpPage /> },
  { path: 'signin', element: <SignInPage /> },
]);

export default router;
