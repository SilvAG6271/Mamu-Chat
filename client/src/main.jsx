import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home";
import Chat from "./pages/Chat"
import ErrorPage from './pages/ErrorPage';
import './index.css'


const router = createBrowserRouter([ 
{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/chat",
    element: <Chat />
   }
  ]

},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
) 