import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'src/pages/HomePage/HomePage';
import SignUpPage from 'src/pages/SignUpPage/SignUpPage';
import SignInPage from 'src/pages/SignInPage/SignInPage';

const router = createBrowserRouter([
  { path: '', element: <HomePage /> },
  { path: 'signup', element: <SignUpPage /> },
  { path: 'signin', element: <SignInPage /> },
]);

export default router;
