import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoPage from './pages/TodoPage';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [{
      path: "/",
      element: <ProtectedRoute><TodoPage/></ProtectedRoute>
    }]
  },
  {
    path: "login",
    element: <AuthPage/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
